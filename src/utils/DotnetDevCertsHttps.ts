/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { join } from "path";
import { execChildProcess } from "../common";
import { CoreClrDebugUtil } from "../coreclr-debug/util";

// Will return true if `dotnet dev-certs https --check` succesfully finds a development certificate. 
export async function hasDotnetDevCertsHttps(dotNetCliPaths: string[]): Promise<Boolean> {

    let dotnetExecutablePath = getDotNetExecutablePath(dotNetCliPaths);

    try {
        await execChildProcess(`${dotnetExecutablePath ?? 'dotnet'} dev-certs https --check`, process.cwd(), process.env);
        return true;
    }
    catch (err) { // execChildProcess will throw if the process returns anything but 0
        return false;
    }
}

// Will run `dotnet dev-certs https --trust` to prompt the user to create self signed certificates. Retruns true if sucessfull.
export async function createSelfSignedCert(dotNetCliPaths: string[]): Promise<Boolean> {
    
    let dotnetExecutablePath = getDotNetExecutablePath(dotNetCliPaths);

    try {
        await execChildProcess(`${dotnetExecutablePath ?? 'dotnet'} dev-certs https --trust`, process.cwd(), process.env);
        return true; 
    }
    catch (err) { // execChildProcess will throw if the process returns anything but 0
        return false;
    }
}

function getDotNetExecutablePath(dotNetCliPaths: string[]): string | undefined{
    let dotnetExeName = `dotnet${CoreClrDebugUtil.getPlatformExeExtension()}`;
    let dotnetExecutablePath: string | undefined;

    for (const dotnetPath of dotNetCliPaths) {
        let dotnetFullPath = join(dotnetPath, dotnetExeName);
        if (CoreClrDebugUtil.existsSync(dotnetFullPath)) {
            dotnetExecutablePath = dotnetFullPath;
            break;
        }
    }
    return dotnetExecutablePath;
}