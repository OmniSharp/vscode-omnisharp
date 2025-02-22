/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as protocol from '../protocol';
import { CancellationToken } from '../../vscodeAdapter';
import { configure } from '../launcher';
import { LaunchTarget } from '../../shared/launchTarget';
import { EventEmitter } from 'events';
import { setTimeout } from 'timers';
import * as ObservableEvents from '../omnisharpLoggingEvents';
import { EventStream } from '../../eventStream';
import CompositeDisposable from '../../compositeDisposable';
import Disposable from '../../disposable';
import { ExtensionContext, CancellationTokenSource, OutputChannel, Location, CodeLens, Uri } from 'vscode';
import { LanguageMiddlewareFeature } from '../languageMiddlewareFeature';
import { Events, OmniSharpServer } from '../server';
import { IEngine } from './IEngine';
import { PlatformInformation } from '../../shared/platform';
import { IHostExecutableResolver } from '../../shared/constants/IHostExecutableResolver';
import { Command } from 'vscode-languageserver-protocol';
import { DynamicFeature, LanguageClientOptions, StaticFeature } from 'vscode-languageclient';
import { RequestType, Trace } from 'vscode-jsonrpc';
import { LanguageClient, ServerOptions } from 'vscode-languageclient/node';
import { SelectionRangeFeature } from 'vscode-languageclient/selectionRange';
import { ColorProviderFeature } from 'vscode-languageclient/colorProvider';
import { WorkspaceFoldersFeature } from 'vscode-languageclient/workspaceFolder';
import { DeclarationFeature } from 'vscode-languageclient/declaration';
import { DocumentLinkFeature } from 'vscode-languageclient/documentLink';
import { InlineValueFeature } from 'vscode-languageclient/inlineValue';
import { DiagnosticFeature } from 'vscode-languageclient/diagnostic';
import { NotebookDocumentSyncFeature } from 'vscode-languageclient/notebook';
import { TypeHierarchyFeature } from 'vscode-languageclient/typeHierarchy';
import { CallHierarchyFeature } from 'vscode-languageclient/callHierarchy';
import { Advisor } from '../features/diagnosticsProvider';
import dotnetTest from '../features/dotnetTest';

export class LspEngine implements IEngine {
    client: LanguageClient | undefined;
    constructor(
        private eventBus: EventEmitter,
        private eventStream: EventStream,
        private context: ExtensionContext,
        private outputChannel: OutputChannel,
        private disposables: CompositeDisposable,
        private languageMiddlewareFeature: LanguageMiddlewareFeature,
        private platformInfo: PlatformInformation,
        private monoResolver: IHostExecutableResolver,
        private dotnetResolver: IHostExecutableResolver
    ) {}

    private _initializeTask: Promise<void> | undefined;

    public async start(cwd: string, args: string[], launchTarget: LaunchTarget, launchPath: string): Promise<void> {
        const configuration = await configure(
            cwd,
            ['-lsp', '--encoding', 'ascii'].concat(args),
            launchPath,
            this.platformInfo,
            this.monoResolver,
            this.dotnetResolver
        );
        const serverOptions: ServerOptions = {
            run: {
                command: configuration.path,
                args: configuration.args,
                options: {
                    cwd: configuration.cwd,
                    env: configuration.env,
                },
            },
            debug: {
                command: configuration.path,
                args: configuration.args, //.concat('-d'),
                options: {
                    cwd,
                    env: configuration.env,
                },
            },
        };

        const languageMiddlewareFeature = this.languageMiddlewareFeature;

        const clientOptions: LanguageClientOptions = {
            // errorHandler: {
            //     error(error, message, count) {
            //         return ErrorAction.Continue;
            //     },
            //     closed() {
            //         return CloseAction.Restart;
            //     }
            // },
            diagnosticCollectionName: 'csharp',
            progressOnInitialization: true,
            outputChannel: this.outputChannel,
            synchronize: {
                configurationSection: 'csharp',
            },
            middleware: {
                async provideDefinition(document, position, token, next) {
                    const result = await next(document, position, token);
                    if (!result) {
                        return result;
                    }

                    // Needs Metadata document support
                    return languageMiddlewareFeature.remap(
                        'remapLocations',
                        !Array.isArray(result) ? [result] : result,
                        token
                    );
                },
                async provideTypeDefinition(document, position, token, next) {
                    const result = await next(document, position, token);
                    if (!result) {
                        return result;
                    }

                    // Needs Metadata document support
                    return languageMiddlewareFeature.remap(
                        'remapLocations',
                        !Array.isArray(result) ? [result] : result,
                        token
                    );
                },
                async provideReferences(document, position, options, token, next) {
                    const result = await next(document, position, options, token);
                    return languageMiddlewareFeature.remap('remapLocations', result, token);
                },
                async provideImplementation(document, position, token, next) {
                    const result = await next(document, position, token);
                    if (!result) {
                        return result;
                    }

                    // Needs Metadata document support
                    return languageMiddlewareFeature.remap(
                        'remapLocations',
                        !Array.isArray(result) ? [result] : result,
                        token
                    );
                },
                async provideRenameEdits(document, position, newName, token, next) {
                    const result = await next(document, position, newName, token);
                    if (!result) {
                        return result;
                    }

                    return languageMiddlewareFeature.remap('remapWorkspaceEdit', result, token);
                },
                async provideCodeLenses(document, token, next) {
                    const result = await next(document, token);
                    if (!result) {
                        return result;
                    }

                    // Covert CodeLens results to locations for mapping.
                    const locations = result.map((r) => new Location(document.uri, r.range));
                    const mappedLocations = await languageMiddlewareFeature.remap('remapLocations', locations, token);
                    // Only keep results with mapped locations within the current document.
                    return result.filter((r, i) => mappedLocations[i].uri === document.uri);
                },
                async resolveCodeLens(codeLens, token, next) {
                    const result = await next(codeLens, token);
                    if (!result || result.command === undefined) {
                        return result;
                    }

                    // The command returned from O# isn't valid for VS Code.
                    // Fix up the result by using the VS Code find reference command.
                    // The codeLens data contains the uri for the current document.
                    // The result.range contains the span for the identifier.
                    return new CodeLens(
                        result.range,
                        Command.create(
                            result.command.title,
                            'editor.action.findReferences',
                            Uri.parse((<any>codeLens).data),
                            result.range.start
                        )
                    );
                },
                async provideFoldingRanges(document, context, token, next) {
                    const result = await next(document, context, token);
                    return result;
                },
                async provideHover(document, position, token, next) {
                    const result = await next(document, position, token);
                    return result;
                },
                async provideSignatureHelp(document, position, context, token, next) {
                    const result = await next(document, position, context, token);
                    return result;
                },
                async provideCompletionItem(document, position, context, token, next) {
                    const result = await next(document, position, context, token);
                    return result;
                },
                async provideWorkspaceSymbols(query, token, next) {
                    const result = await next(query, token);
                    // May need source generator support.
                    return result;
                },
                async provideDocumentSymbols(document, token, next) {
                    const result = await next(document, token);
                    return result;
                },
                async provideCodeActions(document, range, context, token, next) {
                    const result = await next(document, range, context, token);
                    return result;
                },
                async provideDocumentFormattingEdits(document, options, token, next) {
                    const result = await next(document, options, token);
                    return result;
                },
                async provideDocumentRangeFormattingEdits(document, range, options, token, next) {
                    const result = await next(document, range, options, token);
                    return result;
                },
                async provideOnTypeFormattingEdits(document, position, ch, options, token, next) {
                    const result = await next(document, position, ch, options, token);
                    return result;
                },
                async provideDocumentSemanticTokens(document, token, next) {
                    const result = await next(document, token);
                    return result;
                },
                async provideDocumentRangeSemanticTokens(document, range, token, next) {
                    const result = await next(document, range, token);
                    return result;
                },
                async provideDocumentHighlights(document, position, token, next) {
                    const result = await next(document, position, token);
                    return result;
                },
                async provideInlayHints(document, range, token, next) {
                    const result = await next(document, range, token);
                    return result;
                },
            },
        };

        const client = new LanguageClient('Omnisharp Server', serverOptions, clientOptions);
        await client.setTrace(Trace.Verbose);

        // The goal here is to disable all the features and light them up over time.
        const features: (StaticFeature | DynamicFeature<any>)[] = (client as any)._features;

        function disableFeature(ctor: { new (...args: any[]): StaticFeature | DynamicFeature<any> }): void {
            const index = features.findIndex((z) => z instanceof ctor);
            if (index > -1) {
                features.splice(index, 1);
            }
        }

        disableFeature(CallHierarchyFeature); // Not implemented in O#
        //disableFeature(CodeActionFeature);
        //disableFeature(CodeLensFeature); // Only supports Reference codelens at this time. Does not support Run/Debug Test codelens.
        disableFeature(ColorProviderFeature); // Not implemented in O#
        //disableFeature(CompletionItemFeature);
        disableFeature(DeclarationFeature); // Not implemented in O#
        //disableFeature(DefinitionFeature); // Needs metadata document/source generated document support
        disableFeature(DiagnosticFeature);
        //disableFeature(DocumentFormattingFeature);
        //disableFeature(DocumentRangeFormattingFeature);
        //disableFeature(DocumentOnTypeFormattingFeature); // This feature does not seem to be triggering
        //disableFeature(DocumentHighlightFeature);
        disableFeature(DocumentLinkFeature); // Not implemented in O#
        //disableFeature(DocumentSymbolFeature);
        //disableFeature(FoldingRangeFeature);
        //disableFeature(HoverFeature); // This feature does not always seem to be working. Wonder if requests are coming in too early.
        //disableFeature(ImplementationFeature); // Needs metadata document/source generated document support
        //disableFeature(InlayHintsFeature); // The csharp-language-server-protocol library needs to update with 3.17 changes
        disableFeature(InlineValueFeature); // Not implemented in O#
        disableFeature(NotebookDocumentSyncFeature); // Not implemented in O#
        //disableFeature(ReferencesFeature); // Needs metadata document/source generated document support
        //disableFeature(RenameFeature);
        disableFeature(SelectionRangeFeature); // Not implemented in O#
        //disableFeature(SemanticTokensFeature); // This feature does not always seem to be working. Wonder if requests are coming in too early.
        //disableFeature(SignatureHelpFeature);
        //disableFeature(TypeDefinitionFeature); // Needs metadata document/source generated document support
        disableFeature(TypeHierarchyFeature); // Not implemented in O#
        disableFeature(WorkspaceFoldersFeature); // Not implemented in O#
        //disableFeature(WorkspaceSymbolFeature);

        const interopFeature = this.createInteropFeature(client);
        client.registerFeature(interopFeature);

        this.client = client;

        this.disposables.add(client);
        this.context.subscriptions.push(client);
        this.eventStream.post(
            new ObservableEvents.OmnisharpLaunch(
                configuration.hostVersion ?? '',
                configuration.hostPath,
                configuration.hostKind === 'Mono .NET Framework',
                configuration.hostPath ?? configuration.path,
                -1
            )
        );
        return this.client.start();
    }

    async registerProviders(
        _server: OmniSharpServer,
        _languageMiddlewareFeature: LanguageMiddlewareFeature,
        _eventStream: EventStream,
        _advisor: Advisor,
        _testManager: dotnetTest
    ): Promise<Disposable> {
        // Register providers for functionality implemented outside of the O# LSP.
        return new CompositeDisposable();
    }

    async stop(): Promise<void> {
        return this.client?.stop();
    }

    async waitForInitialize(): Promise<void> {
        if (this.client === undefined) {
            throw new Error('LSP Client not started.');
        }

        if (this._initializeTask === undefined) {
            this._initializeTask = waitForReady(this.client);
        }

        return this._initializeTask;

        async function waitForReady(client: LanguageClient) {
            const statusRequest = new RequestType<object, boolean, void>('o#/checkreadystatus');
            while (!(await client.sendRequest(statusRequest, {}))) {
                await new Promise((r) => setTimeout(r, 100));
            }
        }
    }

    dispose(): void {
        this.disposables.dispose();
    }

    async makeRequest<TResponse>(command: string, data?: any, token?: CancellationToken): Promise<TResponse> {
        if (data?.Buffer) {
            delete data.Buffer;
        }

        if (this.client === undefined) {
            throw new Error('Request made before client was started.');
        }

        await this.waitForInitialize();

        let tries = 0;
        let error: any;

        while (tries < 5) {
            try {
                // TOOD: Add trim?
                const response = await this.client.sendRequest<TResponse>(
                    `o#/${command}`.replace(/\/\//g, '/').toLowerCase(),
                    data || {},
                    token ?? new CancellationTokenSource().token
                );

                return response;
            } catch (e) {
                /*if (tries < 5 && error?.code === -32800) { // Request Cancelled
                    tries++;
                }
                else
                */
                if (tries < 5 && error?.code === -32801) {
                    // Content modified
                    tries++;
                } else {
                    error = e;
                }
            }
        }

        console.error(error);
        throw error;
    }

    public addListener<T = object>(event: string, listener: (e: T) => void): Disposable {
        const eventName = `o#/${event}`.replace(/\/\//g, '/').toLowerCase();
        this.eventBus.addListener(eventName, listener);

        return new Disposable(() => this.eventBus.removeListener(eventName, listener));
    }

    private createInteropFeature = (client: LanguageClient): StaticFeature => {
        return {
            getState() {
                return {
                    kind: 'workspace',
                    id: 'omnisharpProtocolInteropFeature',
                    registrations: true,
                };
            },
            clear() {
                /* empty */
            },
            fillClientCapabilities(_) {
                /* empty */
            },
            initialize: (_capabilities, _documentSelector) => {
                client.onNotification('o#/log', (packet: protocol.WireProtocol.EventPacket) => {
                    const entry = <{ LogLevel: string; Name: string; Message: string }>packet.Body;
                    this.eventStream.post(
                        new ObservableEvents.OmnisharpEventPacketReceived(entry.LogLevel, entry.Name, entry.Message)
                    );
                });

                for (const event of Object.values(Events)) {
                    if (typeof event !== 'string') {
                        continue;
                    }

                    const eventName = `o#/${event}`.replace(/\/\//g, '/').toLowerCase();

                    client.onNotification(eventName, (eventBody: any) => {
                        this.eventBus.emit(event, eventBody);
                    });
                }
            },
        };
    };
}
