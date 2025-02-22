/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from 'vscode';
import { CodeAction, CodeActionResolveRequest, LSPAny } from 'vscode-languageserver-protocol';
import { RoslynLanguageServer } from '../server/roslynLanguageServer';
import { URIConverter, createConverter } from 'vscode-languageclient/protocolConverter';
import { UriConverter } from '../utils/uriConverter';
import { getFixAllResponse } from './fixAllCodeAction';

export function registerNestedCodeActionCommands(
    context: vscode.ExtensionContext,
    languageServer: RoslynLanguageServer,
    outputChannel: vscode.LogOutputChannel
) {
    context.subscriptions.push(
        vscode.commands.registerCommand(
            'roslyn.client.nestedCodeAction',
            async (request): Promise<void> => registerNestedResolveCodeAction(languageServer, request, outputChannel)
        )
    );
}

async function registerNestedResolveCodeAction(
    languageServer: RoslynLanguageServer,
    codeActionData: any,
    outputChannel: vscode.LogOutputChannel
): Promise<void> {
    if (codeActionData) {
        const data = <LSPAny>codeActionData;
        const actions = data.NestedCodeActions;

        if (actions.length > 0) {
            const codeActionTitles = getCodeActionTitles(actions);
            const selectedValue = await vscode.window.showQuickPick(codeActionTitles, {
                placeHolder: vscode.l10n.t(data.UniqueIdentifier),
                ignoreFocusOut: true,
            });
            if (selectedValue) {
                const selectedAction = selectedValue.codeAction;
                if (!selectedAction) {
                    return;
                }

                if (selectedAction.data.FixAllFlavors) {
                    await getFixAllResponse(selectedAction.data, languageServer, outputChannel);
                    return;
                }

                await vscode.window.withProgress(
                    {
                        location: vscode.ProgressLocation.Notification,
                        title: vscode.l10n.t('Nested Code Action'),
                        cancellable: true,
                    },
                    async (_, token) => {
                        const nestedCodeActionResolve: CodeAction = {
                            title: selectedAction.title,
                            data: selectedAction.data,
                        };

                        const response = await languageServer.sendRequest(
                            CodeActionResolveRequest.type,
                            nestedCodeActionResolve,
                            token
                        );

                        if (!response.edit) {
                            outputChannel.show();
                            outputChannel.error(`Failed to make an edit for completion.`);
                            throw new Error('Tried to retrieve a code action edit, but an error occurred.');
                        }

                        const uriConverter: URIConverter = (value: string): vscode.Uri =>
                            UriConverter.deserialize(value);
                        const protocolConverter = createConverter(uriConverter, true, true, true);
                        const fixAllEdit = await protocolConverter.asWorkspaceEdit(response.edit);
                        if (!(await vscode.workspace.applyEdit(fixAllEdit))) {
                            const componentName = '[roslyn.client.nestedCodeAction]';
                            const errorMessage = 'Failed to make am edit for completion.';
                            outputChannel.show();
                            outputChannel.error(`${componentName} ${errorMessage}`);
                            throw new Error('Tried to insert code action edit, but an error occurred.');
                        }
                    }
                );
            }
        }
    }
}

function getCodeActionTitles(nestedActions: any): any[] {
    return nestedActions.map((nestedAction: { data: { CodeActionPath: any; FixAllFlavors: any } }) => {
        const codeActionPath = nestedAction.data.CodeActionPath;
        const fixAllFlavors = nestedAction.data.FixAllFlavors;
        // If there's only one string, return it directly
        if (codeActionPath.length === 1) {
            return codeActionPath;
        }

        // Concatenate multiple strings with " ->"
        const concatenatedString = codeActionPath.slice(1).join(' -> ');
        const fixAllString = vscode.l10n.t('Fix All: ');
        return {
            label: fixAllFlavors ? `${fixAllString}${concatenatedString}` : concatenatedString,
            codeAction: nestedAction,
        };
    });
}
