module.exports = {
    env: {
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
    plugins: [
        "@typescript-eslint",
        "unicorn",
        "header",
        "prettier"
    ],
    root: true,
    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-require-imports": "off",
        // Allow unused vars if prefixed by _
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { 
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_",
                "caughtErrorsIgnorePattern": "^_"
            }
        ],
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "prefer-promise-reject-errors": "error",
        "curly": "error",
        "prettier/prettier": [ "error", { "endOfLine": "auto" } ],
        "unicorn/filename-case": [
            "error",
            {
                "case": "camelCase",
                "ignore": [
                    "I[A-Z].*\\.ts$",
                    "vscode-tasks\\.d\\.ts"
                ]
            }
        ],
        "header/header": [ 2, "block", [
            "---------------------------------------------------------------------------------------------",
            " *  Copyright (c) Microsoft Corporation. All rights reserved.",
            " *  Licensed under the MIT License. See License.txt in the project root for license information.",
            " *--------------------------------------------------------------------------------------------"
        ]]
    },
    ignorePatterns: [
        "out/",
        "dist/",
        "wallaby.js",
        ".eslintrc.js",
        "esbuild.js",
        "**/*.d.ts"
    ],
};
