/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {
    languages as Languages,
    workspace as Workspace,
    DocumentSelector as VDocumentSelector,
    TextDocument,
} from 'vscode';

import { DynamicFeature, FeatureState, LanguageClient, RegistrationData, ensure } from 'vscode-languageclient/node';

import {
    ClientCapabilities,
    DocumentSelector,
    InitializeParams,
    ProtocolRequestType,
    RegistrationType,
    ServerCapabilities,
} from 'vscode-languageserver-protocol';

import * as RoslynProtocol from '../server/roslynProtocol';
import { v4 as uuidv4 } from 'uuid';

export class OnAutoInsertFeature implements DynamicFeature<RoslynProtocol.OnAutoInsertRegistrationOptions> {
    private readonly _client: LanguageClient;
    private readonly _registrations: Map<string, RegistrationData<RoslynProtocol.OnAutoInsertRegistrationOptions>>;

    constructor(client: LanguageClient) {
        this._client = client;
        this._registrations = new Map();
        this.registrationType = new ProtocolRequestType<
            RoslynProtocol.OnAutoInsertParams,
            RoslynProtocol.OnAutoInsertResponseItem | null,
            never,
            void,
            RoslynProtocol.OnAutoInsertRegistrationOptions
        >(RoslynProtocol.OnAutoInsertRequest.method);
    }
    fillInitializeParams?: ((params: InitializeParams) => void) | undefined;
    preInitialize?:
        | ((capabilities: ServerCapabilities<any>, documentSelector: DocumentSelector | undefined) => void)
        | undefined;
    registrationType: RegistrationType<RoslynProtocol.OnAutoInsertRegistrationOptions>;
    register(data: RegistrationData<RoslynProtocol.OnAutoInsertRegistrationOptions>): void {
        if (!data.registerOptions.documentSelector) {
            return;
        }
        this._registrations.set(data.id, data);
    }
    unregister(id: string): void {
        const registration = this._registrations.get(id);
        if (registration !== undefined) {
            this._registrations.delete(id);
        }
    }
    clear(): void {
        this._registrations.clear();
    }

    public getState(): FeatureState {
        const selectors = this.getDocumentSelectors();

        let count = 0;
        for (const selector of selectors) {
            count++;
            for (const document of Workspace.textDocuments) {
                if (Languages.match(selector, document) > 0) {
                    return { kind: 'document', id: this.registrationType.method, registrations: true, matches: true };
                }
            }
        }
        const registrations = count > 0;
        return { kind: 'document', id: this.registrationType.method, registrations, matches: false };
    }

    public fillClientCapabilities(capabilities: ClientCapabilities): void {
        const textDocumentCapabilities: any = ensure(capabilities, 'textDocument')!;
        if (textDocumentCapabilities['_vs_onAutoInsert'] === undefined) {
            textDocumentCapabilities['_vs_onAutoInsert'] = {} as any;
        }
        const onAutoInsertCapability = textDocumentCapabilities['_vs_onAutoInsert'];
        onAutoInsertCapability.dynamicRegistration = true;
    }

    public initialize(_capabilities: ServerCapabilities, documentSelector: DocumentSelector): void {
        const capabilities: any = _capabilities;
        const options = this.getRegistrationOptions(documentSelector, capabilities._vs_onAutoInsertProvider);
        if (!options) {
            return;
        }
        this.register({
            id: uuidv4(),
            registerOptions: options,
        });
    }

    public getOptions(textDocument: TextDocument): RoslynProtocol.OnAutoInsertOptions | undefined {
        for (const registration of this._registrations.values()) {
            const selector = registration.registerOptions.documentSelector;
            if (
                selector !== null &&
                Languages.match(this._client.protocol2CodeConverter.asDocumentSelector(selector), textDocument) > 0
            ) {
                return registration.registerOptions;
            }
        }
        return undefined;
    }

    private *getDocumentSelectors(): IterableIterator<VDocumentSelector> {
        for (const registration of this._registrations.values()) {
            const selector = registration.registerOptions.documentSelector;
            if (selector === null) {
                continue;
            }
            yield this._client.protocol2CodeConverter.asDocumentSelector(selector);
        }
    }

    private getRegistrationOptions(
        documentSelector: DocumentSelector | undefined,
        capability: undefined | RoslynProtocol.OnAutoInsertOptions
    ): (RoslynProtocol.OnAutoInsertRegistrationOptions & { documentSelector: DocumentSelector }) | undefined {
        if (!documentSelector || !capability) {
            return undefined;
        }
        return Object.assign({}, capability, { documentSelector }) as RoslynProtocol.OnAutoInsertRegistrationOptions & {
            documentSelector: DocumentSelector;
        };
    }
}
