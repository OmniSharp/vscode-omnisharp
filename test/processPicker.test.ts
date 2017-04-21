import { should } from 'chai';
import { RemoteAttachPicker } from '../src/features/processPicker';

suite("Remote Process Picker: Validate quoting arguments.", () => {
    suiteSetup(() => should());
    test("Argument with no spaces", () => {
        let nonQuotedArg = RemoteAttachPicker.quoteArg("C:\\Users\\nospace\\program.exe");

        nonQuotedArg.should.deep.equal("C:\\Users\\nospace\\program.exe");
    });

    test("Argument with spaces", () => {
        let nonQuotedArg = RemoteAttachPicker.quoteArg("C:\\Users\\s p a c e\\program.exe");

        nonQuotedArg.should.deep.equal("\"C:\\Users\\s p a c e\\program.exe\"");
    });

    test("Argument with spaces with no quotes", () => {
        let nonQuotedArg = RemoteAttachPicker.quoteArg("C:\\Users\\s p a c e\\program.exe", false);

        nonQuotedArg.should.deep.equal("C:\\Users\\s p a c e\\program.exe");
    });

    test("WSL with array arguments and quote args", () => {
        let pipeTransport = GetWindowsWSLLaunchJSONWithArrayArgs();

        let pipeCmd = RemoteAttachPicker.createPipeCmdFromArray(pipeTransport.pipeProgram, pipeTransport.pipeArgs, true);

        pipeCmd.should.deep.equal("C:\\System32\\bash.exe -c \"" + RemoteAttachPicker.scriptShellCmd + "\"");
    });

    test("WSL with array arguments and no quote args", () => {
        let pipeTransport = GetWindowsWSLLaunchJSONWithArrayArgs();

        let pipeCmd = RemoteAttachPicker.createPipeCmdFromArray(pipeTransport.pipeProgram, pipeTransport.pipeArgs, false);

        pipeCmd.should.deep.equal("C:\\System32\\bash.exe -c " + RemoteAttachPicker.scriptShellCmd);
    });

    test("WSL with array arguments + debugger command and quote args", () => {
        let pipeTransport = GetWindowsWSLLaunchJSONWithArrayArgsAndDebuggerCommand();

        let pipeCmd = RemoteAttachPicker.createPipeCmdFromArray(pipeTransport.pipeProgram, pipeTransport.pipeArgs, true);

        pipeCmd.should.deep.equal("C:\\System32\\bash.exe -c \"" + RemoteAttachPicker.scriptShellCmd + "\" -- ignored");
    });

    test("WSL with array arguments + debugger command and no quote args", () => {
        let pipeTransport = GetWindowsWSLLaunchJSONWithArrayArgsAndDebuggerCommand();

        let pipeCmd = RemoteAttachPicker.createPipeCmdFromArray(pipeTransport.pipeProgram, pipeTransport.pipeArgs, false);

        pipeCmd.should.deep.equal("C:\\System32\\bash.exe -c " + RemoteAttachPicker.scriptShellCmd + " -- ignored");
    });

    test("WSL with string arguments and quote args", () => {
        let pipeTransport = GetWindowsWSLLaunchJSONWithStringArgs();

        let pipeCmd = RemoteAttachPicker.createPipeCmdFromString(pipeTransport.pipeProgram, pipeTransport.pipeArgs, true);

        pipeCmd.should.deep.equal("C:\\System32\\bash.exe -c \"" + RemoteAttachPicker.scriptShellCmd + "\"");
    });

    test("WSL with string arguments and no quote args", () => {
        let pipeTransport = GetWindowsWSLLaunchJSONWithStringArgs();

        let pipeCmd = RemoteAttachPicker.createPipeCmdFromString(pipeTransport.pipeProgram, pipeTransport.pipeArgs, false);

        pipeCmd.should.deep.equal("C:\\System32\\bash.exe -c " + RemoteAttachPicker.scriptShellCmd);
    });

    test("WSL with string arguments + debugger command and quote args", () => {
        let pipeTransport = GetWindowsWSLLaunchJSONWithStringArgsAndDebuggerCommand();

        let pipeCmd = RemoteAttachPicker.createPipeCmdFromString(pipeTransport.pipeProgram, pipeTransport.pipeArgs, true);

        pipeCmd.should.deep.equal("C:\\System32\\bash.exe -c " + RemoteAttachPicker.scriptShellCmd + " -- ignored");
    });

    test("WSL with string arguments + debugger command and no quote args", () => {
        let pipeTransport = GetWindowsWSLLaunchJSONWithStringArgsAndDebuggerCommand();

        let pipeCmd = RemoteAttachPicker.createPipeCmdFromString(pipeTransport.pipeProgram, pipeTransport.pipeArgs, false);

        pipeCmd.should.deep.equal("C:\\System32\\bash.exe -c " + RemoteAttachPicker.scriptShellCmd + " -- ignored");
    });

    test("Windows Docker with string args, debuggerCommand", () => {
        let pipeTransport = GetWindowsDockerLaunchJSONWithStringArgsAndDebuggerCommand();

        // quoteArgs flag should be ignored
        let pipeCmd = RemoteAttachPicker.createPipeCmdFromString(pipeTransport.pipeProgram, pipeTransport.pipeArgs, true);

        pipeCmd.should.deep.equal("C:\\System32\\bash.exe -c docker -i exec 1234567 " + RemoteAttachPicker.scriptShellCmd);
    });

    test("Windows Docker with array args", () => {
        let pipeTransport = GetWindowsDockerLaunchJSONWithArrayArgs();

        let pipeCmd = RemoteAttachPicker.createPipeCmdFromArray(pipeTransport.pipeProgram, pipeTransport.pipeArgs, false);

        pipeCmd.should.deep.equal("C:\\System32\\bash.exe -c docker -i exec 1234567 " + RemoteAttachPicker.scriptShellCmd);

    });

    test("OS Specific Configurations", () => {
        let launch = GetOSSpecificJSON();

        let pipeTransport = RemoteAttachPicker.getPipeTransportOptions(launch, "win32");

        pipeTransport.pipeProgram.should.deep.equal("Windows pipeProgram");
        pipeTransport.pipeArgs.should.deep.equal("windows");

        pipeTransport = RemoteAttachPicker.getPipeTransportOptions(launch, "darwin");

        pipeTransport.pipeProgram.should.deep.equal("OSX pipeProgram");
        pipeTransport.pipeArgs.should.deep.equal(["osx"]);

        pipeTransport = RemoteAttachPicker.getPipeTransportOptions(launch, "linux");

        pipeTransport.pipeProgram.should.deep.equal("Linux pipeProgram");
        // Linux pipeTransport does not have args defined, should use the one defined in pipeTransport.
        pipeTransport.pipeArgs.should.deep.equal([]);

    });
});

function GetWindowsWSLLaunchJSONWithArrayArgs() {
    return {
        pipeCwd: "${workspaceRoot}",
        pipeProgram: "C:\\System32\\bash.exe",
        pipeArgs: ["-c"]
    }
}

function GetWindowsWSLLaunchJSONWithArrayArgsAndDebuggerCommand() {
    return {
        pipeCwd: "${workspaceRoot}",
        pipeProgram: "C:\\System32\\bash.exe",
        pipeArgs: ["-c", "${debuggerCommand}", "--", "ignored"]
    }
}

function GetWindowsWSLLaunchJSONWithStringArgs() {
    return {
        pipeCwd: "${workspaceRoot}",
        pipeProgram: "C:\\System32\\bash.exe",
        pipeArgs: "-c"
    }
}

function GetWindowsWSLLaunchJSONWithStringArgsAndDebuggerCommand() {
    return {
        pipeCwd: "${workspaceRoot}",
        pipeProgram: "C:\\System32\\bash.exe",
        pipeArgs: "-c ${debuggerCommand} -- ignored"
    }
}

function GetWindowsDockerLaunchJSONWithArrayArgs() {
    return {
        pipeCwd: "${workspaceRoot}",
        pipeProgram: "C:\\System32\\bash.exe",
        pipeArgs: ["-c", "docker", "-i", "exec", "1234567"]
    }
};

function GetWindowsDockerLaunchJSONWithStringArgsAndDebuggerCommand() {
    return {
        pipeCwd: "${workspaceRoot}",
        pipeProgram: "C:\\System32\\bash.exe",
        pipeArgs: "-c docker -i exec 1234567 ${debuggerCommand}"
    }
}

function GetOSSpecificJSON() {
    return {
        pipeCwd: "${workspaceRoot}",
        pipeProgram: "pipeProgram",
        pipeArgs: [],
        windows: {
            pipeProgram: "Windows pipeProgram",
            pipeArgs: "windows"
        },
        osx: {
            pipeProgram: "OSX pipeProgram",
            pipeArgs: ["osx"]
        },
        linux: {
            pipeProgram: "Linux pipeProgram",
        }
    }
}