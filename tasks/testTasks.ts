/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as gulp from 'gulp';
import * as path from 'path';
import { codeExtensionPath, rootPath } from './projectPaths';
import * as jest from 'jest';
import { Config } from '@jest/types';
import { jestOmniSharpUnitTestProjectName } from '../test/omnisharp/omnisharpUnitTests/jest.config';
import { jestUnitTestProjectName } from '../test/lsptoolshost/unitTests/jest.config';
import { razorTestProjectName } from '../test/razor/razorTests/jest.config';
import { jestArtifactTestsProjectName } from '../test/lsptoolshost/artifactTests/jest.config';
import {
    getJUnitFileName,
    integrationTestProjects,
    runDevKitIntegrationTests,
    runIntegrationTest,
    runJestIntegrationTest,
} from './testHelpers';

const razorIntegrationTestProjects = ['RazorApp'];

createUnitTestSubTasks();
createIntegrationTestSubTasks();
createOmniSharpTestSubTasks();

gulp.task('test:artifacts', async () => {
    await runJestTest(jestArtifactTestsProjectName);
});

// Overall test command that runs everything except O# tests.
gulp.task('test', gulp.series('test:unit', 'test:integration'));

// OmniSharp tests are run separately in CI, so we have separate tasks for these.
// TODO: Enable lsp integration tests once tests for unimplemented features are disabled.
gulp.task('omnisharptest', gulp.series('omnisharptest:unit', 'omnisharptest:integration:stdio'));

function createUnitTestSubTasks() {
    gulp.task('test:unit:csharp', async () => {
        await runJestTest(jestUnitTestProjectName);
    });

    gulp.task('test:unit:razor', async () => {
        await runJestTest(razorTestProjectName);
    });

    gulp.task('test:unit', gulp.series('test:unit:csharp', 'test:unit:razor'));
}

function createIntegrationTestSubTasks() {
    for (const projectName of integrationTestProjects) {
        gulp.task(`test:integration:csharp:${projectName}`, async () =>
            runIntegrationTest(projectName, path.join('lsptoolshost', 'integrationTests'), `[C#][${projectName}]`)
        );

        gulp.task(`test:integration:devkit:${projectName}`, async () =>
            runDevKitIntegrationTests(
                projectName,
                path.join('lsptoolshost', 'integrationTests'),
                `[DevKit][${projectName}]`
            )
        );
    }

    gulp.task(
        'test:integration:csharp',
        gulp.series(integrationTestProjects.map((projectName) => `test:integration:csharp:${projectName}`))
    );

    gulp.task(
        'test:integration:devkit',
        gulp.series(integrationTestProjects.map((projectName) => `test:integration:devkit:${projectName}`))
    );

    for (const projectName of razorIntegrationTestProjects) {
        gulp.task(`test:integration:razor:${projectName}`, async () =>
            runIntegrationTest(
                projectName,
                path.join('razor', 'razorIntegrationTests'),
                `Razor Test Integration ${projectName}`
            )
        );
    }

    gulp.task(
        'test:integration:razor',
        gulp.series(razorIntegrationTestProjects.map((projectName) => `test:integration:razor:${projectName}`))
    );

    gulp.task(
        'test:integration',
        gulp.series('test:integration:csharp', 'test:integration:devkit', 'test:integration:razor')
    );
}

function createOmniSharpTestSubTasks() {
    gulp.task('omnisharptest:unit', async () => {
        await runJestTest(jestOmniSharpUnitTestProjectName);
    });

    const omnisharpIntegrationTestProjects = [
        'singleCsproj',
        'slnWithCsproj',
        'slnFilterWithCsproj',
        'BasicRazorApp2_1',
    ];

    for (const projectName of omnisharpIntegrationTestProjects) {
        gulp.task(`omnisharptest:integration:${projectName}:stdio`, async () =>
            runOmnisharpJestIntegrationTest(projectName, 'stdio', `[O#][${projectName}][STDIO]`)
        );
        gulp.task(`omnisharptest:integration:${projectName}:lsp`, async () =>
            runOmnisharpJestIntegrationTest(projectName, 'lsp', `[O#][${projectName}][LSP]`)
        );
        gulp.task(
            `omnisharptest:integration:${projectName}`,
            gulp.series(
                `omnisharptest:integration:${projectName}:stdio`,
                `omnisharptest:integration:${projectName}:lsp`
            )
        );
    }

    gulp.task(
        'omnisharptest:integration',
        gulp.series(omnisharpIntegrationTestProjects.map((projectName) => `omnisharptest:integration:${projectName}`))
    );
    gulp.task(
        'omnisharptest:integration:stdio',
        gulp.series(
            omnisharpIntegrationTestProjects.map((projectName) => `omnisharptest:integration:${projectName}:stdio`)
        )
    );
    gulp.task(
        'omnisharptest:integration:lsp',
        gulp.series(
            omnisharpIntegrationTestProjects.map((projectName) => `omnisharptest:integration:${projectName}:lsp`)
        )
    );
}

async function runOmnisharpJestIntegrationTest(testAssetName: string, engine: 'stdio' | 'lsp', suiteName: string) {
    const workspaceFile = `omnisharp${engine === 'lsp' ? '_lsp' : ''}_${testAssetName}.code-workspace`;
    const testFolder = path.join('test', 'omnisharp', 'omnisharpIntegrationTests');

    const env = {
        OSVC_SUITE: testAssetName,
        CODE_EXTENSIONS_PATH: codeExtensionPath,
        CODE_WORKSPACE_ROOT: rootPath,
        OMNISHARP_ENGINE: engine,
        OMNISHARP_LOCATION: process.env.OMNISHARP_LOCATION,
        CODE_DISABLE_EXTENSIONS: 'true',
    };

    await runJestIntegrationTest(testAssetName, testFolder, workspaceFile, suiteName, env);
}

async function runJestTest(project: string) {
    process.env.JEST_JUNIT_OUTPUT_NAME = getJUnitFileName(project);
    process.env.JEST_SUITE_NAME = project;
    const configPath = path.join(rootPath, 'jest.config.ts');
    const { results } = await jest.runCLI(
        {
            config: configPath,
            selectProjects: [project],
            verbose: true,
        } as Config.Argv,
        [project]
    );

    if (!results.success) {
        throw new Error('Tests failed.');
    }
}
