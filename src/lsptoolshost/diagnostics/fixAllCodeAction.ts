/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from 'vscode';
import * as RoslynProtocol from '../server/roslynProtocol';
import { LSPAny } from 'vscode-languageserver-protocol';
import { RoslynLanguageServer } from '../server/roslynLanguageServer';
import { URIConverter, createConverter } from 'vscode-languageclient/protocolConverter';
import { UriConverter } from '../utils/uriConverter';

export function registerCodeActionFixAllCommands(
    context: vscode.ExtensionContext,
    languageServer: RoslynLanguageServer,
    outputChannel: vscode.LogOutputChannel
) {
    context.subscriptions.push(
        vscode.commands.registerCommand(
            'roslyn.client.fixAllCodeAction',
            async (request): Promise<void> => registerFixAllResolveCodeAction(languageServer, request, outputChannel)
        )
    );
}

export async function getFixAllResponse(
    data: RoslynProtocol.CodeActionResolveData,
    languageServer: RoslynLanguageServer,
    outputChannel: vscode.LogOutputChannel
) {
    if (!data.FixAllFlavors) {
        throw new Error(`FixAllFlavors is missing from data ${JSON.stringify(data)}`);
    }

    const result = await vscode.window.showQuickPick(data.FixAllFlavors, {
        placeHolder: vscode.l10n.t('Pick a fix all scope'),
    });

    await vscode.window.withProgress(
        {
            location: vscode.ProgressLocation.Notification,
            title: vscode.l10n.t('Fix All Code Action'),
            cancellable: true,
        },
        async (_, token) => {
            if (result) {
                const fixAllCodeAction: RoslynProtocol.RoslynFixAllCodeAction = {
                    title: data.UniqueIdentifier,
                    data: data,
                    scope: result,
                };

                const response = await languageServer.sendRequest(
                    RoslynProtocol.CodeActionFixAllResolveRequest.type,
                    fixAllCodeAction,
                    token
                );

                if (response.edit) {
                    const uriConverter: URIConverter = (value: string): vscode.Uri => UriConverter.deserialize(value);
                    const protocolConverter = createConverter(uriConverter, true, true, true);
                    const fixAllEdit = await protocolConverter.asWorkspaceEdit(response.edit);
                    if (!(await vscode.workspace.applyEdit(fixAllEdit))) {
                        const componentName = '[roslyn.client.fixAllCodeAction]';
                        const errorMessage = 'Failed to make a fix all edit for completion.';
                        outputChannel.show();
                        outputChannel.error(`${componentName} ${errorMessage}`);
                        throw new Error('Tried to insert multiple code action edits, but an error occurred.');
                    }
                }
            }
        }
    );
}

async function registerFixAllResolveCodeAction(
    languageServer: RoslynLanguageServer,
    codeActionData: RoslynProtocol.CodeActionResolveData,
    outputChannel: vscode.LogOutputChannel
) {
    if (codeActionData) {
        const data = <LSPAny>codeActionData;
        await getFixAllResponse(data, languageServer, outputChannel);
    }
}
