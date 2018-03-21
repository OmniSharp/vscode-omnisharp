/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from '../vscodeAdapter';

export class Status {

    selector: vscode.DocumentSelector;
    text: string;
    command: string;
    color: string;

    constructor(selector: vscode.DocumentSelector) {
        this.selector = selector;
    }
}