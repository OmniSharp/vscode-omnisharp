/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as coreclrdebug from './coreclrDebug/activate';
import * as util from './common';
import * as vscode from 'vscode';

import { ActivationFailure } from './shared/loggingEvents';
import { CsharpChannelObserver } from './shared/observers/csharpChannelObserver';
import { CsharpLoggerObserver } from './shared/observers/csharpLoggerObserver';
import { EventStream } from './eventStream';
import { PlatformInformation } from './shared/platform';
import TelemetryReporter from '@vscode/extension-telemetry';
import { vscodeNetworkSettingsProvider } from './networkSettings';
import createOptionStream from './shared/observables/createOptionStream';
import { activateRazorExtension } from './razor/razor';
import { AbsolutePathPackage } from './packageManager/absolutePathPackage';
import { downloadAndInstallPackages } from './packageManager/downloadAndInstallPackages';
import IInstallDependencies from './packageManager/IInstallDependencies';
import { installRuntimeDependencies } from './installRuntimeDependencies';
import { isValidDownload } from './packageManager/isValidDownload';
import { getDotnetPackApi } from './dotnetPack';
import { RoslynLanguageServer } from './lsptoolshost/server/roslynLanguageServer';
import { MigrateOptions } from './shared/migrateOptions';
import { getBrokeredServiceContainer } from './lsptoolshost/serviceBroker/brokeredServicesHosting';
import { CSharpDevKitExports } from './csharpDevKitExports';
import Descriptors from './lsptoolshost/solutionSnapshot/descriptors';
import { GlobalBrokeredServiceContainer } from '@microsoft/servicehub-framework';
import { CSharpExtensionExports, OmnisharpExtensionExports } from './csharpExtensionExports';
import { csharpDevkitExtensionId, getCSharpDevKit } from './utils/getCSharpDevKit';
import { BlazorDebugConfigurationProvider } from './razor/src/blazorDebug/blazorDebugConfigurationProvider';
import { SolutionSnapshotProvider } from './lsptoolshost/solutionSnapshot/solutionSnapshotProvider';
import { commonOptions, languageServerOptions, omnisharpOptions, razorOptions } from './shared/options';
import { BuildResultDiagnostics } from './lsptoolshost/diagnostics/buildResultReporterService';
import { debugSessionTracker } from './coreclrDebug/provisionalDebugSessionTracker';
import { activateOmniSharpLanguageServer, ActivationResult } from './omnisharp/omnisharpLanguageServer';
import { ActionOption, showErrorMessage } from './shared/observers/utils/showMessage';
import { lt } from 'semver';
import { TelemetryEventNames } from './shared/telemetryEventNames';
import { RoslynLanguageServerEvents, ServerState } from './lsptoolshost/server/languageServerEvents';
import { activateRoslynLanguageServer } from './lsptoolshost/activate';
import { RoslynLanguageServerExport } from './lsptoolshost/extensions/roslynLanguageServerExportChannel';
import { getComponentFolder } from './lsptoolshost/extensions/builtInComponents';

export async function activate(
    context: vscode.ExtensionContext
): Promise<CSharpExtensionExports | OmnisharpExtensionExports | null> {
    // Start measuring the activation time
    const startActivation = process.hrtime();

    const csharpChannel = vscode.window.createOutputChannel('C#', { log: true });
    csharpChannel.trace('Activating C# Extension');

    await MigrateOptions(vscode);
    const optionStream = createOptionStream(vscode);

    const eventStream = new EventStream();

    util.setExtensionPath(context.extension.extensionPath);

    let platformInfo: PlatformInformation;
    try {
        platformInfo = await PlatformInformation.GetCurrent();
    } catch (error) {
        eventStream.post(new ActivationFailure());
        throw error;
    }

    const aiKey = context.extension.packageJSON.contributes.debuggers[0].aiKey;
    const reporter = new TelemetryReporter(aiKey);
    // ensure it gets properly disposed. Upon disposal the events will be flushed.
    context.subscriptions.push(reporter);

    const csharpchannelObserver = new CsharpChannelObserver(csharpChannel);
    const csharpLogObserver = new CsharpLoggerObserver(csharpChannel);
    eventStream.subscribe(csharpchannelObserver.post);
    eventStream.subscribe(csharpLogObserver.post);

    const requiredPackageIds: string[] = ['Debugger'];

    requiredPackageIds.push('Razor');

    const csharpDevkitExtension = getCSharpDevKit();
    const useOmnisharpServer = !csharpDevkitExtension && commonOptions.useOmnisharpServer;
    if (useOmnisharpServer) {
        requiredPackageIds.push('OmniSharp');
    }

    const dotnetRuntimeExtensionId = 'ms-dotnettools.vscode-dotnet-runtime';
    const requiredDotnetRuntimeExtensionVersion = '2.2.3';

    const dotnetRuntimeExtension = vscode.extensions.getExtension(dotnetRuntimeExtensionId);
    const dotnetRuntimeExtensionVersion = dotnetRuntimeExtension?.packageJSON.version;
    if (lt(dotnetRuntimeExtensionVersion, requiredDotnetRuntimeExtensionVersion)) {
        const button = vscode.l10n.t('Update and reload');
        const prompt = vscode.l10n.t(
            'The {0} extension requires at least {1} of the .NET Install Tool ({2}) extension. Please update to continue',
            context.extension.packageJSON.displayName,
            requiredDotnetRuntimeExtensionVersion,
            dotnetRuntimeExtensionId
        );
        const selection = await vscode.window.showErrorMessage(prompt, button);
        if (selection === button) {
            await vscode.commands.executeCommand('workbench.extensions.installExtension', dotnetRuntimeExtensionId);
            await vscode.commands.executeCommand('workbench.action.reloadWindow');
        } else {
            throw new Error(
                vscode.l10n.t(
                    'Version {0} of the .NET Install Tool ({1}) was not found, {2} will not activate.',
                    requiredDotnetRuntimeExtensionVersion,
                    dotnetRuntimeExtensionId,
                    context.extension.packageJSON.displayName
                )
            );
        }
    }

    // If the dotnet bundle is installed, this will ensure the dotnet CLI is on the path.
    await initializeDotnetPath();

    const networkSettingsProvider = vscodeNetworkSettingsProvider(vscode);
    const useFramework = useOmnisharpServer && omnisharpOptions.useModernNet !== true;
    const installDependencies: IInstallDependencies = async (dependencies: AbsolutePathPackage[]) =>
        downloadAndInstallPackages(dependencies, networkSettingsProvider, eventStream, isValidDownload);

    const runtimeDependenciesExist = await ensureRuntimeDependencies(
        context.extension,
        eventStream,
        platformInfo,
        installDependencies,
        useFramework,
        requiredPackageIds
    );

    let omnisharpLangServicePromise: Promise<ActivationResult> | undefined = undefined;
    let omnisharpRazorPromise: Promise<void> | undefined = undefined;
    const roslynLanguageServerEvents = new RoslynLanguageServerEvents();
    context.subscriptions.push(roslynLanguageServerEvents);
    let roslynLanguageServerStartedPromise: Promise<RoslynLanguageServer> | undefined = undefined;
    let razorLanguageServerStartedPromise: Promise<void> | undefined = undefined;
    let projectInitializationCompletePromise: Promise<void> | undefined = undefined;

    if (!useOmnisharpServer) {
        // Activate Razor. Needs to be activated before Roslyn so commands are registered in the correct order.
        // Otherwise, if Roslyn starts up first, they could execute commands that don't yet exist on Razor's end.
        //
        // Flow:
        // Razor starts up and registers dynamic file info commands ->
        // Roslyn starts up and registers Razor-specific didOpen/didClose/didChange commands and sends request to Razor
        //     for dynamic file info once project system is ready ->
        // Razor sends didOpen commands to Roslyn for generated docs and responds to request with dynamic file info
        razorLanguageServerStartedPromise = activateRazorExtension(
            context,
            context.extension.extensionPath,
            eventStream,
            reporter,
            csharpDevkitExtension,
            platformInfo,
            /* useOmnisharpServer */ false
        );

        // Setup a listener for project initialization complete before we start the server.
        projectInitializationCompletePromise = new Promise((resolve, _) => {
            roslynLanguageServerEvents.onServerStateChange(async (e) => {
                if (e.state === ServerState.ProjectInitializationComplete) {
                    resolve();
                }
            });
        });

        // Start the server, but do not await the completion to avoid blocking activation.
        roslynLanguageServerStartedPromise = activateRoslynLanguageServer(
            context,
            platformInfo,
            optionStream,
            csharpChannel,
            reporter,
            roslynLanguageServerEvents
        );
    } else {
        // activate language services
        const dotnetTestChannel = vscode.window.createOutputChannel(vscode.l10n.t('.NET Test Log'));
        const dotnetChannel = vscode.window.createOutputChannel(vscode.l10n.t('.NET NuGet Restore'));
        omnisharpLangServicePromise = activateOmniSharpLanguageServer(
            context,
            platformInfo,
            optionStream,
            networkSettingsProvider,
            eventStream,
            csharpChannel,
            dotnetTestChannel,
            dotnetChannel,
            reporter
        );

        if (!razorOptions.razorDevMode) {
            omnisharpRazorPromise = activateRazorExtension(
                context,
                context.extension.extensionPath,
                eventStream,
                reporter,
                undefined,
                platformInfo,
                /* useOmnisharpServer */ true
            );
        }
    }

    if (!isSupportedPlatform(platformInfo)) {
        // Check to see if VS Code is running remotely
        if (context.extension.extensionKind === vscode.ExtensionKind.Workspace) {
            const setupButton: ActionOption = {
                title: vscode.l10n.t('How to setup Remote Debugging'),
                action: async () => {
                    const remoteDebugInfoURL =
                        'https://github.com/dotnet/vscode-csharp/wiki/Remote-Debugging-On-Linux-Arm';
                    await vscode.env.openExternal(vscode.Uri.parse(remoteDebugInfoURL));
                },
            };
            const errorMessage = vscode.l10n.t(
                `The C# extension for Visual Studio Code is incompatible on {0} {1} with the VS Code Remote Extensions. To see avaliable workarounds, click on '{2}'.`,
                platformInfo.platform,
                platformInfo.architecture,
                setupButton.title
            );
            showErrorMessage(vscode, errorMessage, setupButton);
        } else {
            const errorMessage = vscode.l10n.t(
                'The C# extension for Visual Studio Code is incompatible on {0} {1}.',
                platformInfo.platform,
                platformInfo.architecture
            );
            showErrorMessage(vscode, errorMessage);
        }

        // Unsupported platform
        return null;
    }

    let coreClrDebugPromise = Promise.resolve();
    if (runtimeDependenciesExist) {
        // activate coreclr-debug
        coreClrDebugPromise = coreclrdebug.activate(
            context.extension,
            context,
            platformInfo,
            eventStream,
            csharpChannel,
            roslynLanguageServerStartedPromise ?? omnisharpLangServicePromise
        );
    }

    let exports: CSharpExtensionExports | OmnisharpExtensionExports;

    if (!useOmnisharpServer) {
        debugSessionTracker.initializeDebugSessionHandlers(context);

        tryGetCSharpDevKitExtensionExports(csharpLogObserver);

        // If we got here, the server should definitely have been created.
        util.isNotNull(roslynLanguageServerStartedPromise);
        util.isNotNull(projectInitializationCompletePromise);

        const languageServerExport = new RoslynLanguageServerExport(roslynLanguageServerStartedPromise);
        exports = {
            initializationFinished: async () => {
                await coreClrDebugPromise;
                await razorLanguageServerStartedPromise;
                await roslynLanguageServerStartedPromise;
                await projectInitializationCompletePromise;
            },
            profferBrokeredServices: (container) =>
                profferBrokeredServices(context, container, roslynLanguageServerStartedPromise!),
            logDirectory: context.logUri.fsPath,
            determineBrowserType: BlazorDebugConfigurationProvider.determineBrowserType,
            experimental: {
                sendServerRequest: async (t, p, ct) => await languageServerExport.sendRequest(t, p, ct),
                languageServerEvents: roslynLanguageServerEvents,
            },
            getComponentFolder: (componentName) => {
                return getComponentFolder(componentName, languageServerOptions);
            },
        };
    } else {
        exports = {
            initializationFinished: async () => {
                const langService = await omnisharpLangServicePromise;
                await langService!.server.waitForInitialize();
                await coreClrDebugPromise;

                if (omnisharpRazorPromise) {
                    await omnisharpRazorPromise;
                }
            },
            getAdvisor: async () => {
                const langService = await omnisharpLangServicePromise;
                return langService!.advisor;
            },
            getTestManager: async () => {
                const langService = await omnisharpLangServicePromise;
                return langService!.testManager;
            },
            eventStream,
            logDirectory: context.logUri.fsPath,
        };
    }

    const timeTaken = process.hrtime(startActivation);
    const timeTakenStr = (timeTaken[0] * 1000 + timeTaken[1] / 1000000).toFixed(3);
    csharpChannel.trace('C# Extension activated in ' + timeTakenStr + 'ms.');
    const activationProperties: { [key: string]: string } = {
        serverKind: useOmnisharpServer ? 'OmniSharp' : 'Roslyn',
        timeTaken: timeTakenStr,
    };
    reporter.sendTelemetryEvent(TelemetryEventNames.CSharpActivated, activationProperties);

    return exports;
}

/**
 * This method will try to get the CSharpDevKitExports through a thenable promise,
 * awaiting `activate` will cause this extension's activation to hang.
 */
function tryGetCSharpDevKitExtensionExports(csharpLogObserver: CsharpLoggerObserver): void {
    const ext = getCSharpDevKit();
    ext?.activate().then(
        async (exports: CSharpDevKitExports) => {
            if (exports && exports.serviceBroker) {
                // When proffering this IServiceBroker into our own container,
                // we list the monikers of the brokered services we expect to find there.
                // This list must be a subset of the monikers previously registered with our own container
                // as defined in the getBrokeredServiceContainer function.
                getBrokeredServiceContainer().profferServiceBroker(exports.serviceBroker, [
                    Descriptors.dotnetDebugConfigurationService.moniker,
                ]);

                // Notify the vsdbg configuration provider that C# dev kit has been loaded.
                exports.serverProcessLoaded(async () => {
                    await debugSessionTracker.onCsDevKitInitialized(await exports.getBrokeredServiceServerPipeName());
                });

                await vscode.commands.executeCommand('setContext', 'dotnet.debug.serviceBrokerAvailable', true);
            } else {
                csharpLogObserver.logger.appendLine(
                    `[ERROR] '${csharpDevkitExtensionId}' activated but did not return expected Exports.`
                );
            }
        },
        () => {
            csharpLogObserver.logger.appendLine(`[ERROR] Failed to activate '${csharpDevkitExtensionId}'`);
        }
    );
}

function profferBrokeredServices(
    context: vscode.ExtensionContext,
    serviceContainer: GlobalBrokeredServiceContainer,
    languageServerPromise: Promise<RoslynLanguageServer>
) {
    context.subscriptions.push(
        serviceContainer.profferServiceFactory(
            Descriptors.solutionSnapshotProviderRegistration,
            (_mk, _op, _sb) => new SolutionSnapshotProvider(languageServerPromise)
        ),
        serviceContainer.profferServiceFactory(
            Descriptors.csharpExtensionBuildResultService,
            (_mk, _op, _sb) => new BuildResultDiagnostics(languageServerPromise)
        )
    );
}

function isSupportedPlatform(platform: PlatformInformation): boolean {
    if (platform.isWindows()) {
        return platform.architecture === 'x86_64' || platform.architecture === 'arm64';
    }

    if (platform.isMacOS()) {
        return true;
    }

    if (platform.isLinux()) {
        return (
            platform.architecture === 'x86_64' ||
            platform.architecture === 'x86' ||
            platform.architecture === 'i686' ||
            platform.architecture === 'arm64'
        );
    }

    return false;
}

async function ensureRuntimeDependencies(
    extension: vscode.Extension<CSharpExtensionExports>,
    eventStream: EventStream,
    platformInfo: PlatformInformation,
    installDependencies: IInstallDependencies,
    useFramework: boolean,
    requiredPackageIds: string[]
): Promise<boolean> {
    return installRuntimeDependencies(
        extension.packageJSON,
        extension.extensionPath,
        installDependencies,
        eventStream,
        platformInfo,
        useFramework,
        requiredPackageIds
    );
}

async function initializeDotnetPath(): Promise<void> {
    const dotnetPackApi = await getDotnetPackApi();
    if (dotnetPackApi !== undefined) {
        await dotnetPackApi.getDotnetPath();
    }
}
