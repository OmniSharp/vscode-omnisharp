/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import AbstractSupport from './abstractProvider';
import * as serverUtils from '../omnisharp/utils';
import { GetSummaryText } from './documentation';
import { createRequest } from '../omnisharp/typeConvertion';
import { SignatureHelpProvider, SignatureHelp, SignatureInformation, ParameterInformation, CancellationToken, TextDocument, Position } from 'vscode';
import { MarkdownString } from 'vscode';
import { SignatureHelpParameter, SignatureHelpItem } from '../omnisharp/protocol';

export default class OmniSharpSignatureHelpProvider extends AbstractSupport implements SignatureHelpProvider {

    public provideSignatureHelp(document: TextDocument, position: Position, token: CancellationToken): Promise<SignatureHelp> {

        let req = createRequest(document, position);

        return serverUtils.signatureHelp(this._server, req, token).then(res => {

            if (!res) {
                return undefined;
            }

            let ret = new SignatureHelp();
            ret.activeSignature = res.ActiveSignature;
            ret.activeParameter = res.ActiveParameter;

            for (let signature of res.Signatures) {

                let signatureInfo = new SignatureInformation(signature.Label, this.GetSignatureDocumentation(signature));
                ret.signatures.push(signatureInfo);

                for (let parameter of signature.Parameters) {
                    let paramDocumentation = this.GetParameterDocumentation(parameter);

                    let parameterInfo = new ParameterInformation(
                        parameter.Label,
                        this.GetParameterDocumentation(parameter));

                    signatureInfo.parameters.push(parameterInfo);
                }
            }

            return ret;
        });
    }

    private GetParameterDocumentation(parameter: SignatureHelpParameter) {
        let summary = GetSummaryText(parameter.StructuredDocumentation);
        if (summary != null) {
            let name = "**" + parameter.Name + "**" + ": ";
            summary = name + summary;
            return new MarkdownString(summary);
        }
        return null;
    }

    private GetSignatureDocumentation(signature: SignatureHelpItem) {
        let summary = GetSummaryText(signature.StructuredDocumentation);
        let signatureDocumentation = null;
        if (summary != null) {
            signatureDocumentation = new MarkdownString(summary);
        }

        return signatureDocumentation;
    }
}
