/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from 'vscode';
import { CSharpProjectedDocument } from '../csharp/csharpProjectedDocument';
import { HtmlProjectedDocument } from '../html/htmlProjectedDocument';
import { RazorLanguage } from '../razorLanguage';
import { RazorLanguageServerClient } from '../razorLanguageServerClient';
import { RazorLogger } from '../razorLogger';
import { TelemetryReporter } from '../telemetryReporter';
import { UpdateBufferRequest } from '../rpc/updateBufferRequest';
import { getUriPath } from '../uriPaths';
import { IRazorDocument } from './IRazorDocument';
import { IRazorDocumentChangeEvent } from './IRazorDocumentChangeEvent';
import { IRazorDocumentManager } from './IRazorDocumentManager';
import { RazorDocumentChangeKind } from './razorDocumentChangeKind';
import { createDocument } from './razorDocumentFactory';
import { razorInitializeCommand } from '../../../lsptoolshost/razor/razorCommands';
import { PlatformInformation } from '../../../shared/platform';
import { v4 as uuidv4 } from 'uuid';

export class RazorDocumentManager implements IRazorDocumentManager {
    public roslynActivated = false;

    private readonly razorDocuments: { [hostDocumentPath: string]: IRazorDocument } = {};
    private readonly openRazorDocuments = new Set<string>();
    private readonly onChangeEmitter = new vscode.EventEmitter<IRazorDocumentChangeEvent>();
    private readonly onRazorInitializedEmitter = new vscode.EventEmitter<void>();

    public razorDocumentGenerationInitialized = false;

    constructor(
        private readonly serverClient: RazorLanguageServerClient,
        private readonly logger: RazorLogger,
        private readonly telemetryReporter: TelemetryReporter,
        private readonly platformInfo: PlatformInformation
    ) {}

    public get onChange() {
        return this.onChangeEmitter.event;
    }

    public get onRazorInitialized() {
        return this.onRazorInitializedEmitter.event;
    }

    public get documents() {
        return Object.values(this.razorDocuments);
    }

    public async getDocument(uri: vscode.Uri): Promise<IRazorDocument> {
        const document = this._getDocument(uri);
        return document;
    }

    public async getActiveDocument(): Promise<IRazorDocument | null> {
        if (!vscode.window.activeTextEditor) {
            return null;
        }

        if (vscode.window.activeTextEditor.document.languageId !== RazorLanguage.id) {
            return null;
        }

        const activeDocument = await this.getDocument(vscode.window.activeTextEditor.document.uri);
        return activeDocument;
    }

    // Returns true if a textDocument/didOpen notification has been sent
    // to the C# workspace for a given document and if the document is
    // currently open.
    public isRazorDocumentOpenInCSharpWorkspace(razorUri: vscode.Uri) {
        const path = getUriPath(razorUri);
        return this.openRazorDocuments.has(path);
    }

    // Indicates that a given document has been opened in the C# workspace.
    public didOpenRazorCSharpDocument(razorUri: vscode.Uri) {
        const path = getUriPath(razorUri);
        this.openRazorDocuments.add(path);
    }

    // Indicates that a given document has been closed in the C# workspace.
    public didCloseRazorCSharpDocument(razorUri: vscode.Uri) {
        const path = getUriPath(razorUri);
        this.openRazorDocuments.delete(path);
    }

    public async initialize() {
        // Track current documents
        const documentUris = await vscode.workspace.findFiles(RazorLanguage.globbingPattern);

        for (const uri of documentUris) {
            this.addDocument(uri);
        }

        for (const textDocument of vscode.workspace.textDocuments) {
            if (textDocument.languageId !== RazorLanguage.id) {
                continue;
            }

            if (textDocument.isClosed) {
                continue;
            }

            await this.openDocument(textDocument.uri);
        }
    }

    public register() {
        // Track future documents
        const watcher = vscode.workspace.createFileSystemWatcher(RazorLanguage.globbingPattern);
        const didCreateRegistration = watcher.onDidCreate(async (uri: vscode.Uri) => this.addDocument(uri));
        const didOpenRegistration = vscode.workspace.onDidOpenTextDocument(async (document) => {
            if (document.languageId !== RazorLanguage.id) {
                return;
            }

            await this.openDocument(document.uri);
        });
        const didCloseRegistration = vscode.workspace.onDidCloseTextDocument((document) => {
            if (document.languageId !== RazorLanguage.id) {
                return;
            }

            this.closeDocument(document.uri);
        });
        this.serverClient.onNotification('razor/updateCSharpBuffer', async (updateBufferRequest) =>
            this.updateCSharpBuffer(updateBufferRequest)
        );

        this.serverClient.onNotification('razor/updateHtmlBuffer', async (updateBufferRequest) =>
            this.updateHtmlBuffer(updateBufferRequest)
        );

        return vscode.Disposable.from(watcher, didCreateRegistration, didOpenRegistration, didCloseRegistration);
    }

    private _getDocument(uri: vscode.Uri): IRazorDocument {
        const path = getUriPath(uri);
        let document = this.findDocument(path);

        // This might happen in the case that a file is opened outside the workspace
        if (!document) {
            this.logger.logMessage(
                `File '${path}' didn't exist in the Razor document list. This is likely because it's from outside the workspace.`
            );
            document = this.addDocument(uri);
        }

        return document!;
    }

    private async openDocument(uri: vscode.Uri) {
        await this.ensureRazorInitialized();

        const document = this._getDocument(uri);

        this.notifyDocumentChange(document, RazorDocumentChangeKind.opened);
    }

    public async ensureRazorInitialized() {
        // Kick off the generation of all Razor documents so that components are
        // discovered correctly. We need to do this even if a Razor file isn't
        // open yet to handle the scenario where the user opens a C# file before
        // a Razor file.
        if (this.roslynActivated && !this.razorDocumentGenerationInitialized) {
            this.razorDocumentGenerationInitialized = true;
            const pipeName = uuidv4();

            await vscode.commands.executeCommand(razorInitializeCommand, pipeName);
            await this.serverClient.connectNamedPipe(pipeName);

            this.onRazorInitializedEmitter.fire();
        }
    }

    private closeDocument(uri: vscode.Uri) {
        const document = this._getDocument(uri);

        // Documents that are files should be removed if they are outside the workspace folder
        if (uri.scheme === 'file') {
            // Files outside of the workspace will return undefined from getWorkspaceFolder
            const workspaceFolder = vscode.workspace.getWorkspaceFolder(uri);
            if (!workspaceFolder) {
                this.removeDocument(uri);
            }
        }

        this.notifyDocumentChange(document, RazorDocumentChangeKind.closed);
    }

    private addDocument(uri: vscode.Uri): IRazorDocument {
        const path = getUriPath(uri);
        let document = this.findDocument(path);
        if (document) {
            this.logger.logMessage(`Skipping document creation for '${path}' because it already exists.`);
            return document;
        }

        document = createDocument(uri);
        this.razorDocuments[document.path] = document;

        this.notifyDocumentChange(document, RazorDocumentChangeKind.added);

        return document;
    }

    private removeDocument(uri: vscode.Uri) {
        const document = this._getDocument(uri);
        delete this.razorDocuments[document.path];

        this.notifyDocumentChange(document, RazorDocumentChangeKind.removed);
    }

    private findDocument(path: string) {
        // This method ultimately gets called from VS Code, using file system paths, or from DevKit, which
        // can use paths as specified in the sln file. When these don't agree, on case-insensitive operating
        // systems, we have to be careful to match things up correctly.

        if (this.platformInfo.isLinux()) {
            return this.razorDocuments[path];
        }

        return Object.values(this.razorDocuments).find(
            (document) => document.path.localeCompare(path, undefined, { sensitivity: 'base' }) === 0
        );
    }

    private async updateCSharpBuffer(updateBufferRequest: UpdateBufferRequest) {
        if (this.logger.verboseEnabled) {
            this.logger.logVerbose(
                `Updating the C# document for Razor file '${updateBufferRequest.hostDocumentFilePath}' ` +
                    `(${updateBufferRequest.hostDocumentVersion})`
            );
        }

        const hostDocumentUri = vscode.Uri.file(updateBufferRequest.hostDocumentFilePath);
        const document = this._getDocument(hostDocumentUri);
        const projectedDocument = document.csharpDocument;

        if (
            updateBufferRequest.previousWasEmpty ||
            !projectedDocument.hostDocumentSyncVersion ||
            projectedDocument.hostDocumentSyncVersion <= updateBufferRequest.hostDocumentVersion
        ) {
            // We allow re-setting of the updated content from the same doc sync version in the case
            // of project or file import changes.
            const csharpProjectedDocument = projectedDocument as CSharpProjectedDocument;

            // If the language server is telling us that the previous document was empty, then we should clear
            // ours out. Hopefully ours would have been empty too, but there are cases where things get out of
            // sync
            if (updateBufferRequest.previousWasEmpty && projectedDocument.length !== 0) {
                this.telemetryReporter.reportBuffersOutOfSync();
                csharpProjectedDocument.clear();
            }

            csharpProjectedDocument.update(
                document.isOpen,
                updateBufferRequest.changes,
                updateBufferRequest.hostDocumentVersion,
                updateBufferRequest.checksum,
                updateBufferRequest.checksumAlgorithm,
                updateBufferRequest.encodingCodePage
            );

            this.notifyDocumentChange(document, RazorDocumentChangeKind.csharpChanged);
        } else {
            this.logger.logWarning(
                'Failed to update the C# document buffer. This is unexpected and may result in incorrect C# interactions.'
            );
        }
    }

    private async updateHtmlBuffer(updateBufferRequest: UpdateBufferRequest) {
        if (this.logger.verboseEnabled) {
            this.logger.logVerbose(
                `Updating the HTML document for Razor file '${updateBufferRequest.hostDocumentFilePath}' ` +
                    `(${updateBufferRequest.hostDocumentVersion})`
            );
        }

        const hostDocumentUri = vscode.Uri.file(updateBufferRequest.hostDocumentFilePath);
        const document = this._getDocument(hostDocumentUri);
        const projectedDocument = document.htmlDocument;

        if (
            updateBufferRequest.previousWasEmpty ||
            !projectedDocument.hostDocumentSyncVersion ||
            projectedDocument.hostDocumentSyncVersion <= updateBufferRequest.hostDocumentVersion
        ) {
            // We allow re-setting of the updated content from the same doc sync version in the case
            // of project or file import changes.

            // Make sure the document is open, because updating will cause a didChange event to fire.
            await vscode.workspace.openTextDocument(document.htmlDocument.uri);

            const htmlProjectedDocument = projectedDocument as HtmlProjectedDocument;

            // If the language server is telling us that the previous document was empty, then we should clear
            // ours out. Hopefully ours would have been empty too, but there are cases where things get out of
            // sync
            if (updateBufferRequest.previousWasEmpty && projectedDocument.length !== 0) {
                this.telemetryReporter.reportBuffersOutOfSync();
                htmlProjectedDocument.clear();
            }

            htmlProjectedDocument.update(updateBufferRequest.changes, updateBufferRequest.hostDocumentVersion);

            this.notifyDocumentChange(document, RazorDocumentChangeKind.htmlChanged);
        } else {
            this.logger.logWarning(
                'Failed to update the HTML document buffer. This is unexpected and may result in incorrect HTML interactions.'
            );
        }
    }

    private notifyDocumentChange(document: IRazorDocument, kind: RazorDocumentChangeKind) {
        if (this.logger.verboseEnabled) {
            this.logger.logVerbose(
                `Notifying document '${getUriPath(document.uri)}' changed '${RazorDocumentChangeKind[kind]}'`
            );
        }

        const args: IRazorDocumentChangeEvent = {
            document,
            kind,
        };

        this.onChangeEmitter.fire(args);
    }
}
