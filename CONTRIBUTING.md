## Table of Contents

- [Setting Up Local Development Environment](#setting-up-local-development-environment)
  - [Prerequisites for Development](#prerequisites-for-development)
  - [Building, Running, and Testing the Repository](#building-running-and-testing-the-repository)
  - [Setting Up Local Language Servers](#setting-up-local-language-servers)
    - [Roslyn](#roslyn)
    - [Razor](#razor)
  - [Debugging Local Language Servers](#debugging-local-language-servers)
  - [Configuring Local Language Servers](#configuring-local-language-servers)
    - [Finding the `settings.json` file for your workspace](#finding-the-settingsjson-file-for-your-workspace)
    - [Configuring Roslyn Language Server](#configuring-roslyn-language-server)
    - [Configuring Razor Language Server](#configuring-razor-language-server)
- [Creating VSIX Packages for the Extension](#creating-vsix-packages-for-the-extension)
- [Updating the `Roslyn` Language Server Version](#updating-the-roslyn-language-server-version)

## Setting Up Local Development Environment

Setting up your local development environment for the vscode-csharp repository involves several steps. This guide will walk you through the process.

### Prerequisites for Development

Before you start, make sure you have the following software installed on your machine:

* Node.js v20 ([v20.17.0 LTS](https://nodejs.org/en/blog/release/v20.17.0)).
  * Note - Building with higher major versions of Node.js is not advised - it may work but we do not test it.
* Npm (The version shipped with node is fine)
* .NET 8.0 SDK (dotnet should be on your path)

Once you have these installed, you can navigate to the cloned vscode-csharp repository to proceed with building, running, and testing the repository.

### Building, Running, and Testing the Repository

Follow these steps to build, run, and test the repository:

#### Building

1. Run `npm install -g vsts-npm-auth`, then run `vsts-npm-auth -config .npmrc` - This command will configure your credentials for the next command.
   a.  If you have already authenticated before, but the token expired, you may need to run `vsts-npm-auth -config .npmrc -f` instead.
2. Run `npm i` - This command installs the project dependencies.
3. Run `npm i -g gulp` - This command installs Gulp globally.
4. Run `gulp installDependencies` - This command downloads the various dependencies as specified by the version in the [package.json](package.json) file.
5. Run `code .` - This command opens the project in Visual Studio Code.

#### Running

After completing the build steps:

1. Run `npm run watch` (Optional) - This command watches for code changes.
2. Press <kbd>Ctrl+Shift+D</kbd> to open the Run view in VS Code and ensure `Launch Extension` is selected.
3. Start debugging by pressing <kbd>F5</kbd>.

#### Testing

To run all unit tests, execute `npm run test:unit`.
To run all integration tests execute `npm run test:integration`

To debug unit tests locally, press <kbd>F5</kbd> in VS Code with the "Launch Tests" debug configuration selected.

To debug integration tests
1.  Import the `csharp-test-profile.code-profile` in VSCode to setup a clean profile in which to run integration tests.  This must be imported at least once to use the launch configurations (ensure the extensions are updated in the profile).
2.  Open any integration test file and <kbd>F5</kbd> launch with the correct launch configuration selected.
    - For integration tests inside `test/lsptoolshost`, use either `Launch Current File slnWithCsproj Integration Tests` or `[DevKit] Launch Current File slnWithCsproj Integration Tests` (to run tests using C# + C# Dev Kit)
    - For integration tests inside `test/razor`, use `[Razor] Run Current File Integration Test`
    - For integration tests inside `test/omnisharp`, use one of the `Omnisharp:` current file profiles

These will allow you to actually debug the test, but the 'Razor integration tests' configuration does not.

### Setting Up Local Language Servers

This section shows how to set up local Razor or Roslyn language servers for debugging with the VSCode C# extension.

#### Roslyn

1. Clone the [Roslyn repository](https://github.com/dotnet/roslyn). This repository contains the Roslyn server implementation.
2. Follow the build instructions provided in the repository.

The server DLL is typically at `$roslynRepoRoot/artifacts/bin/Microsoft.CodeAnalysis.LanguageServer/Debug/net9.0/Microsoft.CodeAnalysis.LanguageServer.dll`, but this may vary based on the built configuration.

#### Razor

1. Clone the [Razor repository](https://github.com/dotnet/razor). This repository contains the Razor server implementation.
2. Follow the build instructions provided in the repository.

The server DLL is typically at `$razorRepoRoot/artifacts/bin/rzls/Debug/net8.0`.

### Debugging Local Language Servers

Before running the language servers, familiarize yourself with the steps in the [Configuring Local Language Servers](#configuring-local-language-servers) section to configure either the Roslyn or Razor language servers for debugging .

**Note**: You would only need to configure this for the workspace you wish to debug, NOT for the repo root of vscode-csharp repo.

Follow these steps to enable debugging:

1. Press `Ctrl+Shift+D` and then `F5` to launch the extension. This will open a new VS Code instance for `vscode-csharp` repo.
2. In the new VS Code instance, open the project or solution you want to debug.
3. Follow instructions in [Configuring Local Language Servers](#configuring-local-language-servers) to find and configure the workspace settings for the language server you want to debug.
4. Ensure the language server is fully built in Debug mode.
5. Meanwhile in a Visual Studio instance open the `.sln` solution file for the language server you want to debug. Keep this instance open for use in a later step.
6. Back on VS Code, press `Ctrl+Shift+P` and select `Reload Window`. This ensures the changes made in step 3 are applied.
7. After reloading, a window will pop up prompting you to select or open a Visual Studio instance. Now, select the instance you opened in step 5.
8. The language server will now trigger a breakpoint on `Debugger.Launch()` when it starts.

### Configuring Local Language Servers

This section provides instructions on how to debug locally built Roslyn and Razor language servers. You can do this by either directly editing the `settings.json` file of your workspace or through the VSCode settings interface.

#### Finding the `settings.json` file for your workspace
- Open the Command Palette with `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS)
- Type "Preferences: Open Workspace Settings"
- Select the option that appears.
- In the Workspace Settings tab, in the upper right corner, you'll see an icon that looks like a document with an arrow, which is the "Open Settings (JSON)" button.
- Click on this button to open the `settings.json` file.

#### Configuring Roslyn Language Server

In your workspace `settings.json` file, add the following lines:

```json
"dotnet.server.waitForDebugger": true,
"dotnet.server.path": "<roslynRepoRoot>/artifacts/bin/Microsoft.CodeAnalysis.LanguageServer/Debug/net9.0/Microsoft.CodeAnalysis.LanguageServer.dll"
```

Replace <roslynRepoRoot> with the actual path to your Roslyn repository.

Or, in VSCode settings (`Ctrl+,`):

1. Search for `dotnet server`.
2. Set `dotnet.server.path` to the path of your Roslyn DLL.
3. Enable `dotnet.server.waitForDebugger`.

#### Configuring Razor Language Server

In your workspace settings.json file, add the following lines:

```json
"razor.languageServer.debug": true,
"razor.languageServer.directory": "<razorRepoRoot>/artifacts/bin/rzls/Debug/net8.0",
"razor.server.trace": "Debug"
```

Replace `$razorRepoRoot` with your actual values.

Or, in VSCode settings (`Ctrl+,`):

1. Search for `Razor`.
2. Set `razor.languageServer.directory` to the path of your Razor DLL.
3. Enable `razor.languageServer.debug`.
4. Set `razor.server.trace` to `Debug`. This gives you more detailed log messages in the output window.

### Updating NPM packages
We use the .NET eng AzDo artifacts feed https://dnceng.pkgs.visualstudio.com/public/_packaging/dotnet-public-npm/npm/registry/ with upstreams to the public npm registry.
Auth is required in order to pull new packages from the upstream.  This can be done by running `vsts-npm-auth -config .npmrc`.
If you need to renew authorization, you can force it via `vsts-npm-auth -config .npmrc -F`

## Creating VSIX Packages for the Extension

To package this extension, we need to create VSIX Packages. The VSIX packages can be created using the gulp command `gulp vsix:release:package`. This will create all the platform specific VSIXs that you can then install manually in VSCode.

## Updating the `Roslyn` Language Server Version

In order to pull in new packages from upstreams into the msft_consumption feed we use for restoring, you will need to be a member of the 'CSharp VS Code Extension contributors' group in the [Azure Devops instance](https://dev.azure.com/azure-public/vside/_settings/teams).  

To update the version of the roslyn server used by the extension do the following:
1.  Find the the Roslyn signed build you want from [here](https://dnceng.visualstudio.com/internal/_build?definitionId=327&_a=summary).  Typically the latest successful build of main is fine.
2.  In the official build stage, look for the `Publish Assets` step.  In there you will see it publishing the `Microsoft.CodeAnalysis.LanguageServer.neutral` package with some version, e.g. `4.6.0-3.23158.4`.  Take note of that version number.
3.  In the [package.json](package.json) inside the `defaults` section update the `roslyn` key to point to the version number you found above in step 2.
4.  Ensure that version of the package is in the proper feeds by running `gulp updateRoslynVersion`. Note: you may need to install the [Azure Artifacts NuGet Credential Provider](https://github.com/microsoft/artifacts-credprovider#installation-on-windows) to run interactive authentication.
5.  Build and test the change. If everything looks good, submit a PR.
