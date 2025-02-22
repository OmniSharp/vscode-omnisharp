## Known Issues

- Diagnostics related feature requests and improvements [#5951](https://github.com/dotnet/vscode-csharp/issues/5951)
- Debug from .csproj and .sln [#5876](https://github.com/dotnet/vscode-csharp/issues/5876)

# 2.68.x

# 2.67.x
* Bump xamlTools to 17.14.35821.62 (PR: [#8001](https://github.com/dotnet/vscode-csharp/pull/8001))
* Update Roslyn to 4.14.0-2.25120.5 (PR: [#7984](https://github.com/dotnet/vscode-csharp/pull/7984))
  * Switch TextDocumentState.GetTextVersionAsync to ValueTask to reduce allocations. (PR: [#77213](https://github.com/dotnet/roslyn/pull/77213))
  * Add an option to ignore aliases when moving using directives outside a namespace (PR: [#77291](https://github.com/dotnet/roslyn/pull/77291))
  * Fill some gaps in the LSP (PR: [#77289](https://github.com/dotnet/roslyn/pull/77289))
  * Ensure diagnostics refresh when source generators run in balanced mode (PR: [#77271](https://github.com/dotnet/roslyn/pull/77271))
  * Fix override completion when attribute below (PR: [#77242](https://github.com/dotnet/roslyn/pull/77242))
  * Fix crash in 'introduce variable' when converting an object creation expression to an implicit object creation expression (PR: [#77279](https://github.com/dotnet/roslyn/pull/77279))
  * Fix Quick Info nullability display for backing fields (PR: [#77240](https://github.com/dotnet/roslyn/pull/77240))
  * Properly pass progress object along in fix all provider (PR: [#77243](https://github.com/dotnet/roslyn/pull/77243))
  * Remove need to use semantics in the 'move type' code refactoring provider. (PR: [#77244](https://github.com/dotnet/roslyn/pull/77244))
  * Do not offer primary constructor parameters when offering to generate Equals/GetHashCode (PR: [#77235](https://github.com/dotnet/roslyn/pull/77235))
  * Rename feature to 'Add or remove accessibility modifiers' (PR: [#77234](https://github.com/dotnet/roslyn/pull/77234))
  * Have distinct messages for adding vs. removing accessibility modifiers (PR: [#77188](https://github.com/dotnet/roslyn/pull/77188))
  * Update 'use interpolated string' refactoring to support fix all (PR: [#77209](https://github.com/dotnet/roslyn/pull/77209))
  * Reduce allocations in SymbolCompletionItem.GetSupportedPlatforms (PR: [#77168](https://github.com/dotnet/roslyn/pull/77168))
  * Classify string fields with embedded languages if we can see their values passed to a StringSyntax api (PR: [#77199](https://github.com/dotnet/roslyn/pull/77199))
  * Add analyzer redirecting API (PR: [#74820](https://github.com/dotnet/roslyn/pull/74820))
  * Fix race during shutdown of the BuildHost server (PR: [#77151](https://github.com/dotnet/roslyn/pull/77151))
  * Fix workspace command execution (PR: [#77152](https://github.com/dotnet/roslyn/pull/77152))
  * Add Microsoft.CodeAnalysis.Contracts source package (PR: [#76997](https://github.com/dotnet/roslyn/pull/76997))
  * Detect data section string literal hash collisions (PR: [#77061](https://github.com/dotnet/roslyn/pull/77061))
  * Return LSP diagnostics with their reported severity. (PR: [#77145](https://github.com/dotnet/roslyn/pull/77145))
  * Fix syntax generation of explict checked operator from symbol (PR: [#77102](https://github.com/dotnet/roslyn/pull/77102))
  * Add new workspace event that gives handlers the opportunity to be processed immediately (PR: [#76932](https://github.com/dotnet/roslyn/pull/76932))
  * Optimize DiagnosticService on NetCore (PR: [#77126](https://github.com/dotnet/roslyn/pull/77126))
  * Simplify caching api between CodeAnalysisService and DiagnosticAnalysisService (PR: [#77094](https://github.com/dotnet/roslyn/pull/77094))
* Manage information diagnostic severity on the client-side (PR: [#7984](https://github.com/dotnet/vscode-csharp/pull/7984))
* Update Razor to 9.0.0-preview.25121.2 (PR: [#8010](https://github.com/dotnet/vscode-csharp/pull/8010))
  * Fix formatting of multi-line expressions in Html attributes (#11528) (PR: [#11528](https://github.com/dotnet/razor/pull/11528))
  * Stop attribute name parsing at transition (#11520) (PR: [#11520](https://github.com/dotnet/razor/pull/11520))
  * Use different completion trigger character set for VSCode (#11446) (PR: [#11446](https://github.com/dotnet/razor/pull/11446))
  * Update Telemetry package (#11468) (PR: [#11468](https://github.com/dotnet/razor/pull/11468))
  * Don't hold onto Roslyn projects longer than necessary (#11458) (PR: [#11458](https://github.com/dotnet/razor/pull/11458))
  * Fix formatting of escaped at signs (#11462) (PR: [#11462](https://github.com/dotnet/razor/pull/11462))
  * Code action to offer to wrap Html attributes (#11422) (PR: [#11422](https://github.com/dotnet/razor/pull/11422))
  * Make sure we go through GetAbsolutePosition to handle LSP edge cases (#11441) (PR: [#11441](https://github.com/dotnet/razor/pull/11441))
  * Make log levels match LogLevel.cs (#11436) (PR: [#11436](https://github.com/dotnet/razor/pull/11436))
  * Fix on type formatting line delta calculations (#11435) (PR: [#11435](https://github.com/dotnet/razor/pull/11435))
  * Clean up and rationalize imports in the compiler (#11409) (PR: [#11409](https://github.com/dotnet/razor/pull/11409))
  * Fix typo in setting description (#11423) (PR: [#11423](https://github.com/dotnet/razor/pull/11423))
* Bump xamlTools to 17.14.35813.246 (PR: [#7993](https://github.com/dotnet/vscode-csharp/pull/7993))
* Update the debugger to 2.66.0 (PR: [#7988](https://github.com/dotnet/vscode-csharp/pull/7988))
* Fix the regular expression to read RID value. (PR: [#7994](https://github.com/dotnet/vscode-csharp/pull/7994))

# 2.65.x
* Update Roslyn LSP to run on .NET 9 (PR: [#7946](https://github.com/dotnet/vscode-csharp/pull/7946))
* Update Roslyn to 4.14.0-2.25106.12 (PR: [#7969](https://github.com/dotnet/vscode-csharp/pull/7969))
  * Maintain whitespace when converting to switch expression (PR: [#77083](https://github.com/dotnet/roslyn/pull/77083))
  * Fix extra whitespace insertion for completion text edits (PR: [#77071](https://github.com/dotnet/roslyn/pull/77071))
  * Realize less of the syntax tree during AbstractSemanticModelReuseLanguageService.GetPreviousBodyNode (PR: [#77032](https://github.com/dotnet/roslyn/pull/77032))
  * Fix issue loading project with relative path globs (PR: [#76961](https://github.com/dotnet/roslyn/pull/76961))
  * Fix: Ensure DOTNET_ROOT is reset user defined value during test execution (PR: [#76819](https://github.com/dotnet/roslyn/pull/76819))
  * Update Roslyn LSP server to target .NET 9 (PR: [#76938](https://github.com/dotnet/roslyn/pull/76938))
  * Update ICSharpCode.Decompiler to 8.2.0.7535 (PR: [#71837](https://github.com/dotnet/roslyn/pull/71837))
  * Reduce CPU costs under AnalyzerExecutor.ExecuteSyntaxNodeActions (PR: [#76894](https://github.com/dotnet/roslyn/pull/76894))
* Add code snippets for C# expression-bodied properties (PR: [#5683](https://github.com/dotnet/vscode-csharp/pull/5683))
* Sync whitespace options even when detectIndentation is on (PR: [#7965](https://github.com/dotnet/vscode-csharp/pull/7965))
* Bump Razor (PR: [#7940](https://github.com/dotnet/vscode-csharp/pull/7940))
* Bump xamltools to 17.14.35807.11(PR: [#7976]( https://github.com/dotnet/vscode-csharp/pull/7976))

# 2.64.x
* Bump xamlTools to 17.14.35730.156 (PR: [#7932](https://github.com/dotnet/vscode-csharp/pull/7941))

# 2.63.x
* Bump xamlTools to 17.14.35723.260 (PR: [#7932](https://github.com/dotnet/vscode-csharp/pull/7941))
  * CSS Hot Reload for MAUI Blazor Hybrid is now in preview. It's enabled when C# Hot Reload is enabled.
* Update Roslyn to 4.14.0-1.25074.7 (PR: [#7942](https://github.com/dotnet/vscode-csharp/pull/7942))
  * Enable extract refactorings in LSP (PR: [#76718](https://github.com/dotnet/roslyn/pull/76718))
  * Speed up 'fix all' for 'use auto prop' by running in parallel (PR: [#76905](https://github.com/dotnet/roslyn/pull/76905))
  * Add support for converting an auto-prop to a field-backed property. (PR: [#76900](https://github.com/dotnet/roslyn/pull/76900))
  * Fix throw in generator comparer (PR: [#76769](https://github.com/dotnet/roslyn/pull/76769))
  * Do not offer the containing type when offering completion in teh base-list (PR: [#76891](https://github.com/dotnet/roslyn/pull/76891))
  * Improve handling bad metadata in EE (PR: [#76878](https://github.com/dotnet/roslyn/pull/76878))
  * Record completion of "Simple lambda parameters with modifiers" feature (PR: [#76884](https://github.com/dotnet/roslyn/pull/76884))
  * Reduce work in ConversionsBase.AddUserDefinedConversionsToExplicitCandidateSet (PR: [#76835](https://github.com/dotnet/roslyn/pull/76835))
  * Update formatOnType handler to support formatting on NewLine (PR: [#76876](https://github.com/dotnet/roslyn/pull/76876))
  * Fix new document formatting (PR: [#76736](https://github.com/dotnet/roslyn/pull/76736))
  * Initial work to collapse comments at the end of a block (PR: [#76865](https://github.com/dotnet/roslyn/pull/76865))
  * Remove explicit recursion in the json detection analyzer (#76764) (PR: [#76764](https://github.com/dotnet/roslyn/pull/76764))
  * Consider silly cyclic assignment in scoped variance (#76261) (PR: [#76261](https://github.com/dotnet/roslyn/pull/76261))
  * Fix ordering of 'params' vs 'scoped' in metadata as source (#76745) (PR: [#76745](https://github.com/dotnet/roslyn/pull/76745))
  * Change partial keyword recommender to better handle partial member syntax (#76744) (PR: [#76744](https://github.com/dotnet/roslyn/pull/76744))
  * Ensure unconverted elements are converted when on LHS (#76675) (PR: [#76675](https://github.com/dotnet/roslyn/pull/76675))
  * Proffer CssVisualDiagnosticsService brokered service from C# DevKit to C# Extension (#76737) (PR: [#76737](https://github.com/dotnet/roslyn/pull/76737))
  * Disable extract class/interface to a new file when unsupported by the workspace. (#76717) (PR: [#76717](https://github.com/dotnet/roslyn/pull/76717))
  * Fix issue parsing regex category (#76735) (PR: [#76735](https://github.com/dotnet/roslyn/pull/76735))
  * Properly simplify pattern when converting to pattern matching (#76734) (PR: [#76734](https://github.com/dotnet/roslyn/pull/76734))
  * Do not lift type parameters in extract method declared within the selected region (#76724) (PR: [#76724](https://github.com/dotnet/roslyn/pull/76724))
  * Always use .OriginalDefinition uniformly in the unread-members analyzer (#76698) (PR: [#76698](https://github.com/dotnet/roslyn/pull/76698))
  * Adding checks for mutable structs. (#76711) (PR: [#76711](https://github.com/dotnet/roslyn/pull/76711))
  * Add option for choosing stdio as the LSP communication channel (#76437) (PR: [#76437](https://github.com/dotnet/roslyn/pull/76437))
  * Support organizing imports as part of LSP document formatting  (PR: [#76806](https://github.com/dotnet/roslyn/pull/76806))
  * Improve collapsing of members followed by pp directives (PR: [#76837](https://github.com/dotnet/roslyn/pull/76837))
  * Load razor assembly directly: (PR: [#76808](https://github.com/dotnet/roslyn/pull/76808))
  * Special case inlining a collection expr into a spreaded element (PR: [#76823](https://github.com/dotnet/roslyn/pull/76823))
  * Do not offer to simplify interpolations when using formattable strings (PR: [#76830](https://github.com/dotnet/roslyn/pull/76830))
  * Add support for outlining switch expressions (PR: [#76827](https://github.com/dotnet/roslyn/pull/76827))
  * Do no offer to make fields readonly if they are a struct and are written to through an indexer (PR: [#76825](https://github.com/dotnet/roslyn/pull/76825))
  * Do not offer to inline a decl into a switch arm when it is referenced outside of it. (PR: [#76822](https://github.com/dotnet/roslyn/pull/76822))
  * Fix gen-method generating into top level. (PR: [#76821](https://github.com/dotnet/roslyn/pull/76821))
  * Fix 'invert if' refactor to properly enclose #region/#endregion blocks (PR: [#74145](https://github.com/dotnet/roslyn/pull/74145))
  * Do not offer use-conditional when it would cause name collisions (PR: [#76807](https://github.com/dotnet/roslyn/pull/76807))
  * Remove unnecessary cast in one conditional expression branch, based on the other branch and outer conversion. (PR: [#76798](https://github.com/dotnet/roslyn/pull/76798))
  * Convert a return value to return type even if it has errors (PR: [#76699](https://github.com/dotnet/roslyn/pull/76699))
  * Add EmbeddedAttribute API for source generators (PR: [#76583](https://github.com/dotnet/roslyn/pull/76583))
  * Fix formatting when doing a 'fix all' with 'use auto prop' (PR: [#76791](https://github.com/dotnet/roslyn/pull/76791))
  * Initialize naming style preferences when language is added to workspace (PR: [#76795](https://github.com/dotnet/roslyn/pull/76795))
  * Support target type completion tags in object creation contexts (PR: [#76786](https://github.com/dotnet/roslyn/pull/76786))
  * Fix 'use conditional expression' where it was causing a null-ref warning. (PR: [#76792](https://github.com/dotnet/roslyn/pull/76792))
  * Keep comments on an 'else' keyword when converting to conditional expressions. (PR: [#76789](https://github.com/dotnet/roslyn/pull/76789))
  * VB: Don't capture conditional access receiver into a temp local during lowering. (PR: [#76712](https://github.com/dotnet/roslyn/pull/76712))
  * Update regex parsing to latest .Net core parsing (and diagnostic messages). (PR: [#76269](https://github.com/dotnet/roslyn/pull/76269))
  * Forbid pointer types as instance fields in records (PR: [#76588](https://github.com/dotnet/roslyn/pull/76588))
  * Field-backed properties: report diagnostic for variable named field declared in accessor (PR: [#76671](https://github.com/dotnet/roslyn/pull/76671))
  * Update 'use nameof instead of typeof' to support generic types (PR: [#76780](https://github.com/dotnet/roslyn/pull/76780))
  * Add feature to convert from an explicitly typed lambda to an implicitly typed one. (PR: [#76770](https://github.com/dotnet/roslyn/pull/76770))
  * Support modifiers with simple lambda parameters. (PR: [#75400](https://github.com/dotnet/roslyn/pull/75400))
* Update Razor to 9.0.0-preview.25073.1 (PR: [#7940](https://github.com/dotnet/vscode-csharp/pull/7940))
  * Wire up the UseRoslynTokenizer feature properly (#11386) (PR: [#11386](https://github.com/dotnet/razor/pull/11386))
  * New Razor document formatting engine (#11364) (PR: [#11364](https://github.com/dotnet/razor/pull/11364))
  * Fix a couple of exceptions encountered when formatting documents with preprocessor directives (#11373) (PR: [#11373](https://github.com/dotnet/razor/pull/11373))
  * Allow RazorProjectEngine.Process to be cancelled (#11334) (PR: [#11334](https://github.com/dotnet/razor/pull/11334))
  * Further refactoring of Razor tooling project system (#11320) (PR: [#11320](https://github.com/dotnet/razor/pull/11320))
  * Don't create overlapping changes when doing additional formatting (#11413) (PR: [#11413](https://github.com/dotnet/razor/pull/11413))
  * Synchronize razor compiler assembly loading (#11394) (PR: [#11394](https://github.com/dotnet/razor/pull/11394))
  * Allow generate method to handle delegates (#11402) (PR: [#11402](https://github.com/dotnet/razor/pull/11402))
  * Fix bad completion commit in vs code (#11398) (PR: [#11398](https://github.com/dotnet/razor/pull/11398))
  * SourceTexts for Everyone! (#11404) (PR: [#11404](https://github.com/dotnet/razor/pull/11404))
  * Handful of performance fixes (#11399) (PR: [#11399](https://github.com/dotnet/razor/pull/11399))
  * Use the overload that takes an immutable array in serailization (#11393) (PR: [#11393](https://github.com/dotnet/razor/pull/11393))

# 2.62.x
* Update Roslyn to 4.14.0-1.25060.2 (PR: [#7916](https://github.com/dotnet/vscode-csharp/pull/7916))
  * Support Extracting method with complex flow control cosntructs in them. (PR: [#76686](https://github.com/dotnet/roslyn/pull/76686))
  * Classify the langword attribute value in DocComments (PR: [#76678](https://github.com/dotnet/roslyn/pull/76678))
  * Fix FAR/rename with method type parameters (PR: [#76652](https://github.com/dotnet/roslyn/pull/76652))
  * Fix assembly load when file path contains URI reserved chars (PR: [#76617](https://github.com/dotnet/roslyn/pull/76617))
  * Reduce allocations during checksum creation. (PR: [#76524](https://github.com/dotnet/roslyn/pull/76524))
* Bump xamlTools to 17.13.35709.178 (PR: [#7914](https://github.com/dotnet/vscode-csharp/pull/7914))


# 2.61.x
* Update Razor to 9.0.0-preview.25052.3 (PR: [#7904](https://github.com/dotnet/vscode-csharp/pull/7904))
  * Offer generate handler for `@bind-XX:after` and `:set` (#11350) (PR: [#11350](https://github.com/dotnet/razor/pull/11350))
  * Support "Generate Event Handler" on event callbacks (ie `ValueChanged` and friends) (#11347) (PR: [#11347](https://github.com/dotnet/razor/pull/11347))
  * Fix completion at end of document (#11343) (PR: [#11343](https://github.com/dotnet/razor/pull/11343))
  * Fix completion in an empty document (#11344) (PR: [#11344](https://github.com/dotnet/razor/pull/11344))
  * Only show element hover information when hovering over an element in a `.razor` file (#11336) (PR: [#11336](https://github.com/dotnet/razor/pull/11336))
  * Don't format collection expressions, because Roslyn doesn't either (#11326) (PR: [#11326](https://github.com/dotnet/razor/pull/11326))
  * Update telemetry to 17.13.28 (#11315) (PR: [#11315](https://github.com/dotnet/razor/pull/11315))
  * Filter out CSS002 when it appears in an "@@" (#11313) (PR: [#11313](https://github.com/dotnet/razor/pull/11313))
  * Improve Find All Refs results (#11279) (PR: [#11279](https://github.com/dotnet/razor/pull/11279))
* Update Roslyn to 4.13.0-3.25051.1 (PR: [#7895](https://github.com/dotnet/vscode-csharp/pull/7895))
  * Prefix 'unmerged changes' with 'TODO' (PR: [#62319](https://github.com/dotnet/roslyn/pull/62319))
  * Fix crash when classifying embedded test classifications (PR: [#76576](https://github.com/dotnet/roslyn/pull/76576))
  * Ensure 'remove unnecessary using' shows up before 'convert to program-main style program' (PR: [#76543](https://github.com/dotnet/roslyn/pull/76543))
  * Fixup OmniSharp fallback AnalyzerConfigOption updater (PR: [#76542](https://github.com/dotnet/roslyn/pull/76542))
  * Expose NotificationService to OmniSharp (PR: [#76541](https://github.com/dotnet/roslyn/pull/76541))
  * Do not offer inline hints for parameters that already named (PR: [#76532](https://github.com/dotnet/roslyn/pull/76532))
  * Have inline hints display aliases if appropriate (PR: [#76530](https://github.com/dotnet/roslyn/pull/76530))
  * Allow OmniSharp to provide ImplementType Options (PR: [#75312](https://github.com/dotnet/roslyn/pull/75312))
  * Update telemetry to 17.13.28 (PR: [#76480](https://github.com/dotnet/roslyn/pull/76480))
  * feat(lsp): add --pipe parameter (PR: [#76351](https://github.com/dotnet/roslyn/pull/76351))
  * Slightly reduce allocations in SymbolCompletionItem.AddSymbolInfo (PR: [#76418](https://github.com/dotnet/roslyn/pull/76418))
  * Small reduction in allocations in DateAndTimeLanguageDetector (PR: [#76393](https://github.com/dotnet/roslyn/pull/76393))
  * Cache the compilation states in compilation order to avoid recalculation (PR: [#76380](https://github.com/dotnet/roslyn/pull/76380))
  * Razor synchronize loader (PR: [#76357](https://github.com/dotnet/roslyn/pull/76357))
  * Reduce allocations from doing repeated adds into an ImmutableDictionary in SolutionCompilationState.ComputeFrozenSnapshot (PR: [#76361](https://github.com/dotnet/roslyn/pull/76361))
  * Reduce allocations in WithUsingNamespacesAndTypesBinder.GetForwardedToAssemblyInUsingNamespaces (PR: [#76370](https://github.com/dotnet/roslyn/pull/76370))
  * Remove an enumerator allocation in SymbolCompletionItem.CreateWorker (PR: [#76375](https://github.com/dotnet/roslyn/pull/76375))
  * Reduce allocations in ProjectState's ctor (PR: [#76369](https://github.com/dotnet/roslyn/pull/76369))
  * Reduce allocations in CompletionItem.GetEntireDisplayText (PR: [#76373](https://github.com/dotnet/roslyn/pull/76373))
  * Reduce allocations in AbstractSymbolCompletionProvider.UnionSymbols (PR: [#76368](https://github.com/dotnet/roslyn/pull/76368))
  * Reduce allocations in AbstractRecommendationServiceBasedCompletionProvider.GetSymbolsAsync (PR: [#76365](https://github.com/dotnet/roslyn/pull/76365))
  * Cache the MEF composition in the Roslyn LSP. (PR: [#76276](https://github.com/dotnet/roslyn/pull/76276))
* Fix Razor Report An Issue (PR: [#7894](https://github.com/dotnet/vscode-csharp/pull/7894))
* Hot Reload = Fuse On (PR: [#7873](https://github.com/dotnet/vscode-csharp/pull/7873))
* Update Debugger Package Download Endpoints to AzureFrontDoor URL (PR: [#7879](https://github.com/dotnet/vscode-csharp/pull/7879))
* Update OmniSharp to 1.39.12 (PR: [#7445](https://github.com/dotnet/vscode-csharp/pull/7445))
    * Update .NET SDKs (PR: [omnisharp-roslyn/#2621](https://github.com/OmniSharp/omnisharp-roslyn/pull/2621))
    * Update Roslyn to 4.12.0-1.24358.3 (PR: [omnisharp-roslyn/#2619](https://github.com/OmniSharp/omnisharp-roslyn/pull/2619))
    * Fix code fix construction (PR: [omnisharp-roslyn/#2620](https://github.com/OmniSharp/omnisharp-roslyn/pull/2620))
    * Remove NuGet.Packaging.Core, as it's an assembly that only contains forwarders  (PR: [omnisharp-roslyn/#2610](https://github.com/OmniSharp/omnisharp-roslyn/pull/2610))
    * Fix inlay hints lambdas parameter type null reference exception (PR: [omnisharp-roslyn/#2604](https://github.com/OmniSharp/omnisharp-roslyn/pull/2604))
    * Update SDKs and Roslyn (PR: [omnisharp-roslyn/#2603](https://github.com/OmniSharp/omnisharp-roslyn/pull/2603))
    * Pass project path when performing a restore (PR: [omnisharp-roslyn/#2593](https://github.com/OmniSharp/omnisharp-roslyn/pull/2593))
* Bump xamltools to 17.13.35703.12 (PR: [#7893](https://github.com/dotnet/vscode-csharp/pull/7893))
* Don't try to send dynamicInfoChanged if the server isn't running (PR: [#7875](https://github.com/dotnet/vscode-csharp/pull/7875))

# 2.60.x
* Improve performance of razor/blazor component discovery (PR: [#7826](https://github.com/dotnet/vscode-csharp/pull/7826))
* Update Razor to 9.0.0-preview.24605.1 (PR: [#7826](https://github.com/dotnet/vscode-csharp/pull/7826))
  * New Code Action! Add a code action to promote a using directive (#11241) (PR: [#11241](https://github.com/dotnet/razor/pull/11241))
  * Add more information to dynamic file publish (#11267) (PR: [#11267](https://github.com/dotnet/razor/pull/11267))
  * Remove C#s using snippet from completion (#11272) (PR: [#11272](https://github.com/dotnet/razor/pull/11272))
  * Fix extract component whitespace handling (#11262) (PR: [#11262](https://github.com/dotnet/razor/pull/11262))
  * Handle aliased usings in RazorEditHelper (#11208) (PR: [#11208](https://github.com/dotnet/razor/pull/11208))
* Update Debugger Packages and move macOS requirement to macOS 13 (PR: [#7854](https://github.com/dotnet/vscode-csharp/pull/7854))
* Fix spelling of successfully (PR: [#7853](https://github.com/dotnet/vscode-csharp/pull/7853))
* Update Roslyn to 4.13.0-3.24605.12 (PR: [#7826](https://github.com/dotnet/vscode-csharp/pull/7826))
  * Fix go-to-def on an abstract explicit impl of an interface method (PR: [#76238](https://github.com/dotnet/roslyn/pull/76238))
  * Fix parameter completion item icon (PR: [#76292](https://github.com/dotnet/roslyn/pull/76292))
  * Enable LSP go to definition on string literals (PR: [#76291](https://github.com/dotnet/roslyn/pull/76291))
  * Use named pipes to connect to the BuildHost process. (PR: [#76259](https://github.com/dotnet/roslyn/pull/76259))
  * Improve Razor DynamicFile Provider (PR: [#76050](https://github.com/dotnet/roslyn/pull/76050))
  * Add option to disable LSP-based auto insert (PR: [#75224](https://github.com/dotnet/roslyn/pull/75224))
  * Report errors processing messages in the build host (PR: [#76252](https://github.com/dotnet/roslyn/pull/76252))
  * Update FAR and Go to Def to work on indexers (PR: [#76220](https://github.com/dotnet/roslyn/pull/76220))
  * Fix NFW thrown when refreshing source generated files (PR: [#76240](https://github.com/dotnet/roslyn/pull/76240))
  * Update find-refs to find references to Dispose in a using-statement (PR: [#76221](https://github.com/dotnet/roslyn/pull/76221))
  * Add support for 'find refs' finding references to 'dynamic' (PR: [#76118](https://github.com/dotnet/roslyn/pull/76118))
  * Support implementing protected members in implement interface (PR: [#76178](https://github.com/dotnet/roslyn/pull/76178))
  * Do not treat Task.Run methods as 'apparent' for 'use var' (PR: [#76229](https://github.com/dotnet/roslyn/pull/76229))
  * Support introduce variable at the top level (PR: [#76218](https://github.com/dotnet/roslyn/pull/76218))
  * Fix switch indentation for list patterns (PR: [#75953](https://github.com/dotnet/roslyn/pull/75953))
  * Keep member bodies when converting DIM property to method (PR: [#76186](https://github.com/dotnet/roslyn/pull/76186))
  * Have go-to-def flip between partial definition and implementation (PR: [#76187](https://github.com/dotnet/roslyn/pull/76187))
  * Disable 'use coalesce expression' when statements cross a PP boundary (PR: [#76173](https://github.com/dotnet/roslyn/pull/76173))
  * Support name completion on generic types (PR: [#76170](https://github.com/dotnet/roslyn/pull/76170))
  * Improve extract-local-function in the presence of pp directives (PR: [#76169](https://github.com/dotnet/roslyn/pull/76169))
  * Fix issue trying to generate fields/properties from a top level program (PR: [#76161](https://github.com/dotnet/roslyn/pull/76161))
  * Update 'introduce using' to support expression statements (PR: [#76147](https://github.com/dotnet/roslyn/pull/76147))
  * Use implicit initializer if present to generate type properties (PR: [#76162](https://github.com/dotnet/roslyn/pull/76162))
  * Fix issue with explicit interface completion and static interface members (PR: [#76150](https://github.com/dotnet/roslyn/pull/76150))
  * When converting to raw strings, do not change \r\n sequences if not explicitly requested by the user (PR: [#76120](https://github.com/dotnet/roslyn/pull/76120))
  * Exclude starting symbol when going to implementations if we find implementations (PR: [#76125](https://github.com/dotnet/roslyn/pull/76125))
* Add option to disable auto insertion of documentation comments (PR: [#7381](https://github.com/dotnet/vscode-csharp/pull/7381))
* Bump xamltools to 17.13.35606.23 (PR: [#7856](https://github.com/dotnet/vscode-csharp/pull/7856))
* Restore WASM debug hook (#7843) (PR: [#7844](https://github.com/dotnet/vscode-csharp/pull/7844))

# 2.59.14
* Update Roslyn to 4.13.0-3.24577.4 (PR: [#7833](https://github.com/dotnet/vscode-csharp/pull/7833))
  * Fix issue where suppressors could not correctly suppress built in analyzers (PR: [#75684](https://github.com/dotnet/roslyn/pull/75684))
  * Implement find all references to preprocessing symbols (PR: [#66425](https://github.com/dotnet/roslyn/pull/66425))
  * Postpone respecting the code-style analysis config rule until NET10 (PR: [#75978](https://github.com/dotnet/roslyn/pull/75978))
* Delete `dotnet.dotnetPath` setting and support automatic migration to replacements (PR: [#7825](https://github.com/dotnet/vscode-csharp/pull/7825))
  * Existing `dotnet.dotnetPath` values will be migrated to the .NET Install Tool extension's `dotnetAcquisitionExtension.existingDotnetPath` setting.  See [this page](https://github.com/dotnet/vscode-dotnet-runtime/blob/main/vscode-dotnet-runtime-extension/README.md#i-already-have-a-net-runtime-or-sdk-installed-and-i-want-to-use-it) for more details on configuring the .NET Install Tool.
  * The OmniSharp version of `dotnet.dotnetPath` has been migrated to `omnisharp.dotnetPath`
* Bump xamltools to 17.13.35527.19 (PR: [#7831](https://github.com/dotnet/vscode-csharp/pull/7831))

# 2.58.20
* Update Razor to 9.0.0-preview.24569.4 (PR: [#7805](https://github.com/dotnet/vscode-csharp/pull/7805))
  * Allow logging level to be changed in rzls (#11228) (PR: [#11228](https://github.com/dotnet/razor/pull/11228))
  * [Fuse] bind-Value:attribute support (#11214) (PR: [#11214](https://github.com/dotnet/razor/pull/11214))
  * Handle skipped trivia in the C# tokenizer (#11207) (PR: [#11207](https://github.com/dotnet/razor/pull/11207))
* Add support for refreshing opened source generated files (PR: [#7791](https://github.com/dotnet/vscode-csharp/pull/7791))
* Update Roslyn to 4.13.0-2.24569.1 (PR: [#7791](https://github.com/dotnet/vscode-csharp/pull/7791))
  * Support unbound generic types in 'nameof' operator. (PR: [#75368](https://github.com/dotnet/roslyn/pull/75368))
  * Include list of processes that lock file in `can't write file` error message (PR: [#75946](https://github.com/dotnet/roslyn/pull/75946))
  * Add server side support for refreshing source generated files (PR: [#75939](https://github.com/dotnet/roslyn/pull/75939))

# 2.57.28
* Update Razor to 9.0.0-preview.24565.1 (PR: [#7793])(https://github.com/dotnet/vscode-csharp/pull/7793)
  * Fine tuning of what types of project update affect what state (#11213) (PR: [#11213](https://github.com/dotnet/razor/pull/11213))
  * Fix request duration logging (#11198) (PR: [#11198](https://github.com/dotnet/razor/pull/11198))
  * Update ProjectWorkspaceState and HostProject at the same time (#11191) (PR: [#11191](https://github.com/dotnet/razor/pull/11191))
* Update Roslyn to 4.13.0-2.24565.3 (PR: [#7792](https://github.com/dotnet/vscode-csharp/pull/7792))
  * Add support for go to type definition (PR: [#75819](https://github.com/dotnet/roslyn/pull/75819))
  * Reduce formatting allocations when scrolling (PR: [#75912](https://github.com/dotnet/roslyn/pull/75912))
  * Improve go-to-impl with error conditions (PR: [#75913](https://github.com/dotnet/roslyn/pull/75913))
  * Update 'use simple using statement' to support global statements (PR: [#75921](https://github.com/dotnet/roslyn/pull/75921))
  * Fix case where we were erroneously offering to convert a dictionary to use a collection expression. (PR: [#75897](https://github.com/dotnet/roslyn/pull/75897))
  * Recover better when a user uses commas in a for-statement instead of semicolons (PR: [#75632](https://github.com/dotnet/roslyn/pull/75632))
  * Do not run 'remove unnecessary imports' on generated code (PR: [#74762](https://github.com/dotnet/roslyn/pull/74762))
  * improve goto-def on an invalid override (PR: [#75901](https://github.com/dotnet/roslyn/pull/75901))
  * Fix formatting of simplify-linq-expression (PR: [#75860](https://github.com/dotnet/roslyn/pull/75860))
  * Add new line before 'where' constraints in Quick Info (PR: [#60545](https://github.com/dotnet/roslyn/pull/60545))
* Increase default server start timeout to 2minutes (PR: [#7788](https://github.com/dotnet/vscode-csharp/pull/7788))
* Update Razor to 9.0.0-preview.24561.3 (PR: [#7748](https://github.com/dotnet/vscode-csharp/pull/7748))
  * Add feature flag to turn on the new Roslyn tokenizer (PR: [#11185](https://github.com/dotnet/razor/pull/11185))
* Fix Razor preview panel button colors to have more visible contrast ratio (PR: [#7766](https://github.com/dotnet/vscode-csharp/pull/7766))
* Bump xamltools to 17.13.35513.19 (PR: [#7777](https://github.com/dotnet/vscode-csharp/pull/7777))

# 2.56.31
* Update Roslyn to 4.13.0-2.24561.3 (PR: [#7765](https://github.com/dotnet/vscode-csharp/pull/7765))
  * Update Razor to fix serialization issue loading projects (PR: [#75794](https://github.com/dotnet/roslyn/pull/75794))
* Update Razor to 9.0.0-preview.24557.11 (PR: [#7756](https://github.com/dotnet/vscode-csharp/pull/7756))
  * Fix FUSE hook up in VS Code (#11175) (PR: [#11175](https://github.com/dotnet/razor/pull/11175))
  * Update VSTelemetryAPI version (#11181) (PR: [#11181](https://github.com/dotnet/razor/pull/11181))
  * Improvements for Assumed.Unreachable(...) (#11155) (PR: [#11155](https://github.com/dotnet/razor/pull/11155))
  * Better logging for named pipe (#11144) (PR: [#11144](https://github.com/dotnet/razor/pull/11144))
  * Fix code actions (and code actions integration tests) (#11141) (PR: [#11141](https://github.com/dotnet/razor/pull/11141))
  * Fix some things for extract component (#11137) (PR: [#11137](https://github.com/dotnet/razor/pull/11137))
  * More CodeAction moves in preparation for cohosting (#11135) (PR: [#11135](https://github.com/dotnet/razor/pull/11135))
* Update Roslyn to 4.13.0-2.24557.5 (PR: [#7752](https://github.com/dotnet/vscode-csharp/pull/7752))
  * Fix telemetry property value (PR: [#75813](https://github.com/dotnet/roslyn/pull/75813))
  * Classify 'await' as a control keyword (PR: [#75782](https://github.com/dotnet/roslyn/pull/75782))
  * Allow renaming with overload resolution when only one overload exists(PR: [#75752](https://github.com/dotnet/roslyn/pull/75752))
  * Fix issue loading completion providers from `<Analyyzer>` project items (PR: [#75721](https://github.com/dotnet/roslyn/pull/75721))
  * Expose code actions to Razor cohosting (PR: [#75711](https://github.com/dotnet/roslyn/pull/75711))
  * Do not include source generated documents in related document results (PR: [#75718](https://github.com/dotnet/roslyn/pull/75718))
  * Fix issue where inlay hints could not be resolved if multiple editors opened side by side (PR: [#75709](https://github.com/dotnet/roslyn/pull/75709))
  * Reduce allocations in ProjectSystemProjectFactory.ConvertMetadataReferencesToProjectReferences_NoLock (PR: [#75646](https://github.com/dotnet/roslyn/pull/75646))
  * Reduce memory and CPU costs due to SegmentedList usage (PR: [#75661](https://github.com/dotnet/roslyn/pull/75661))
* Bump xamltools to 17.13.35506.24 (PR: [#7740](https://github.com/dotnet/vscode-csharp/pull/7740))
* Bump xamltools to 17.13.35507.225 (PR: [#7755](https://github.com/dotnet/vscode-csharp/pull/7755))
  * XAML IntelliseSense completions for Image.Source

# 2.55.29
* Update Razor to 9.0.0-preview.24557.10 (PR: [#7757](https://github.com/dotnet/vscode-csharp/pull/7757))
  * Update VSTelemetryAPI version (#11181) (PR: [#11181](https://github.com/dotnet/razor/pull/11181))
* Update Roslyn to 4.13.0-2.24557.6 (PR: [#7751](https://github.com/dotnet/vscode-csharp/pull/7751))
  * Fix issue telemetry reporting incorrect property value (PR: [#75817](https://github.com/dotnet/roslyn/pull/75817))
* Update Roslyn to 4.13.0-2.24531.3 (PR: [#7722](https://github.com/dotnet/vscode-csharp/pull/7722))
  * Proffer project system query service (PR: [#75682](https://github.com/dotnet/roslyn/pull/75682))
  * Ensure discards are initially soft selected in VSCode (PR: [#75655](https://github.com/dotnet/roslyn/pull/75655))
  * Reduce allocations in VirtualCharService.CreateVirtualCharSequence (PR: [#75654](https://github.com/dotnet/roslyn/pull/75654))
  * Reduce allocations in TextDocumentStates.AddRange (PR: [#75640](https://github.com/dotnet/roslyn/pull/75640))
* Update Razor to 9.0.0-preview.24531.4 (PR: [#7723](https://github.com/dotnet/vscode-csharp/pull/7723))
  * Fix aggregate telemetry reliability (PR: [#11134](https://github.com/dotnet/razor/pull/11134))
  * [FUSE] Fix OnAutoInsert and override completion and possible others (PR: [#11122](https://github.com/dotnet/razor/pull/11122))
* Update Roslyn to 4.13.0-2.24529.3 (PR: [#7705](https://github.com/dotnet/vscode-csharp/pull/7705))
* Update Razor to 9.0.0-preview.24528.3 (PR: [#7705](https://github.com/dotnet/vscode-csharp/pull/7705))
  * Update project configuration from Roslyn info (#11092) (PR: [#11092](https://github.com/dotnet/razor/pull/11092))
  * Reduce the amount of telemetry emitted (#11094) (PR: [#11094](https://github.com/dotnet/razor/pull/11094))
  * Remove tooling MvcShims (#11088) (PR: [#11088](https://github.com/dotnet/razor/pull/11088))
* Switch to new log output window API and remove `dotnet.server.trace` (PR: [#7688](https://github.com/dotnet/vscode-csharp/pull/7688))
* Update Roslyn to 4.13.0-1.24528.3 (PR: [#7688](https://github.com/dotnet/vscode-csharp/pull/7688))
  * Fix crash when 'add await' analyzers binding expressions (PR: [#75644](https://github.com/dotnet/roslyn/pull/75644))
  * Shorten names shown in 'pull member up' (PR: [#75643](https://github.com/dotnet/roslyn/pull/75643))
  * Fix inaccessible constructors shown in sighelp (PR: [#75642](https://github.com/dotnet/roslyn/pull/75642))
  * Allow the client to update the server logging level dynamically (PR: [#75615](https://github.com/dotnet/roslyn/pull/75615))
* Bumped xamlTools to 17.13.35431.11 (PR: [#7719](https://github.com/dotnet/vscode-csharp/pull/7719))
  * XAML validation improvements
      * Validating  properties of Setters, Triggers, Conditions.
      * Validating text values like `<Color> Red </Color>`
      * Warnings for obsolete values like LayoutOptions.CenterAndExpand
      * XAML IntelliseSense completions for ResourceDictionary.Source
      * XAML IntelliseSense completions for name properties like Setter.TargetName

# 2.54.20
* Update debugger packages to v2.54.0 (PR: [#7691](https://github.com/dotnet/vscode-csharp/pull/7691))
* Only show misc files warning toast after delay. (PR: [#7689](https://github.com/dotnet/vscode-csharp/pull/7689))
* Update Roslyn to 4.13.0-1.24525.2 (PR: [#7694](https://github.com/dotnet/vscode-csharp/pull/7694))
  * Fix error message spelling (PR: [#75601](https://github.com/dotnet/roslyn/pull/75601))
  * Improve diagnostic performance by re-using results if diagnostic data is the same (PR: [#75587](https://github.com/dotnet/roslyn/pull/75587))
  * Improve performance in checksum computation (PR: [#75479](https://github.com/dotnet/roslyn/pull/75479))
* Bumped xamlTools to 17.13.35422.31 (PR: [#7685](https://github.com/dotnet/vscode-csharp/pull/7685))
* Update Razor to 9.0.0-preview.24524.4 (PR: [#7692](https://github.com/dotnet/vscode-csharp/pull/7692))
  * Roslyn Tokenizer (#11086) (PR: [#11086](https://github.com/dotnet/razor/pull/11086))
    * **Experimental feature**
  * Add flush method and make it implementation detail on how that happens (#11087) (PR: [#11087](https://github.com/dotnet/razor/pull/11087))
  * Do not extract component into code block (#11069) (PR: [#11069](https://github.com/dotnet/razor/pull/11069))
    * **New code action to handle extracting razor code into a new razor component**
  * Handle EditorRequired *Changed/*Expression parameters (#11043) (PR: [#11043](https://github.com/dotnet/razor/pull/11043))
  * Avoid ambiguous `object` reference in generic component recovery (#11053) (PR: [#11053](https://github.com/dotnet/razor/pull/11053))
  * Move culture info check (#11057) (PR: [#11057](https://github.com/dotnet/razor/pull/11057))
  * Report a better error for void components (#11041) (PR: [#11041](https://github.com/dotnet/razor/pull/11041))
  * Ensure model directives are mapped at runtime (#11007) (PR: [#11007](https://github.com/dotnet/razor/pull/11007))
  * Including @using for Out-of-Scope Razor Component References (#10651) (PR: [#10651](https://github.com/dotnet/razor/pull/10651))
* Make checkDevCert a modal dialogue (PR: [#7704](https://github.com/dotnet/vscode-csharp/pull/7704))

# 2.53.17
* Update Roslyn to 4.13.0-1.24518.1 (PR: [#7670](https://github.com/dotnet/vscode-csharp/pull/7670))
  * Fix issue where server sometimes crashed when saving new C# file for the first time (PR: [#75509](https://github.com/dotnet/roslyn/pull/75509))
  * Report LSP loading telemetry (PR: [#75402](https://github.com/dotnet/roslyn/pull/75402))
* Bumped xamlTools to 17.13.35414.86 (PR: [#7664](https://github.com/dotnet/vscode-csharp/pull/7664))
* Escape code block in changelog (PR: [#7665](https://github.com/dotnet/vscode-csharp/pull/7665))
* Lookup Razor file context using its document uri. (PR: [#7663](https://github.com/dotnet/vscode-csharp/pull/7663))
* Update razor to 9.0.0-preview.24516.1 (PR: [#7667](https://github.com/dotnet/vscode-csharp/pull/7667))
    * Add CLaSP Request Tracking (PR: [#11015](https://github.com/dotnet/razor/pull/11015))
    * Fix potentially ambiguous System.Object in _Imports.razor (PR: [#10999](https://github.com/dotnet/razor/pull/10999))
    * Fix nullability to match specification (PR: [#11003](https://github.com/dotnet/razor/pull/11003))
    * Recognize `_Imports.razor` in the source generator (PR: [#10992](https://github.com/dotnet/razor/pull/10992))
    * Fix @inherits mapping for fuse (PR: [#10985](https://github.com/dotnet/razor/pull/10985))
    * Fix project publish (or: Various project system fixes) (PR: [#10983](https://github.com/dotnet/razor/pull/10983))
    * Emit and map empty csharp tokens (PR: [#10969](https://github.com/dotnet/razor/pull/10969))
    * Fix Generate Event Handler code action (PR: [#10967](https://github.com/dotnet/razor/pull/10967))
    * Add IProjectSnapshot.ContainsDocument to test document paths cheaply (PR: [#10975](https://github.com/dotnet/razor/pull/10975))
    * Refresh diagnostics on project changes (PR: [#10964](https://github.com/dotnet/razor/pull/10964))
    * Don't throw if we get an old/bad Inlay Hint request (PR: [#10968](https://github.com/dotnet/razor/pull/10968))
    * Fix on type formatting (PR: [#10949](https://github.com/dotnet/razor/pull/10949))

# 2.52.24
* Add  miscellaneous file open notifications  (PR: [#7652](https://github.com/dotnet/vscode-csharp/pull/7652))
* Require at least version 8.0.10 of the .net runtime (PR: [#7651](https://github.com/dotnet/vscode-csharp/pull/7651))
* Warn when the active file is not part of the open workspace (PR: [#7628](https://github.com/dotnet/vscode-csharp/pull/7628))
* Update debugger to 2.52.0 (PR: [#7648](https://github.com/dotnet/vscode-csharp/pull/7648))
* Ensure Razor is initialized when project loaded outside of the workspace (PR: [#7645](https://github.com/dotnet/vscode-csharp/pull/7645))
* Update Roslyn to 4.13.0-1.24511.1 (PR: [#7628](https://github.com/dotnet/vscode-csharp/pull/7628))
  * Add a WorkspaceKind property to ProjectContext. (PR: [#75384](https://github.com/dotnet/roslyn/pull/75384))
  * Convert more lambda rude edits to runtime rude edits (PR: [#75285](https://github.com/dotnet/roslyn/pull/75285))
* Bumped xamlTools to 17.12.35403.211 (PR: [#7629](https://github.com/dotnet/vscode-csharp/pull/7629))

# 2.51.17
* Update Roslyn to 4.13.0-1.24503.11 (PR: [#7618](https://github.com/dotnet/vscode-csharp/pull/7618))
  * LSP hover responses escape backticks within inline code (PR: [#75364](https://github.com/dotnet/roslyn/pull/75364))
  * Localize build host message output (PR: [#74910](https://github.com/dotnet/roslyn/pull/74910))
  * Log and report NFW when we fail to apply project system update (PR: [#75362](https://github.com/dotnet/roslyn/pull/75362))
  * Reduce allocations and UI thread CPU costs in WithDoNotCreateCreationPolicy (PR: [#75358](https://github.com/dotnet/roslyn/pull/75358))
  * Enable support for an LSP client to open source generated files (PR: [#75180](https://github.com/dotnet/roslyn/pull/75180))
  * Improve error reporting when reading bad metadata during EnC (PR: [#75304](https://github.com/dotnet/roslyn/pull/75304))
* Suppress recoverable errors from razor LSP (PR: [#7624](https://github.com/dotnet/vscode-csharp/pull/7624))
  * NOTE: this can be re-enabled by setting `razor.languageServer.suppressLspErrorToasts = false`
* Update Roslyn to 4.13.0-1.24501.3 (PR: [#7618](https://github.com/dotnet/vscode-csharp/pull/7618))
  * Fix issue loading analyzers when using EnforceCodeStyleInBuild (PR: [#75250](https://github.com/dotnet/roslyn/pull/75250))
* Update Razor to 9.0.0-preview.24480.1 (PR: [#7618](https://github.com/dotnet/vscode-csharp/pull/7618))
  * Fuse fix usings (PR: [#10925](https://github.com/dotnet/razor/pull/10925))
  * Fuse incorrect page directives (PR: [#10907](https://github.com/dotnet/razor/pull/10907))
  * Calculate SuppressAddComponentParameter in tooling (PR: [#10763](https://github.com/dotnet/razor/pull/10763))
  * Fix some `AssumeNotNull` assumptions (PR: [#10901](https://github.com/dotnet/razor/pull/10901))
  * Fixing HTML attribute commit (PR: [#10897](https://github.com/dotnet/razor/pull/10897))
  * Fix `FormattingContext` disposal (PR: [#10887](https://github.com/dotnet/razor/pull/10887))
  * Fix #10891 - Formatting does not respect indentation within Razor comment blocks (PR: [#10893](https://github.com/dotnet/razor/pull/10893))

# 2.50.25
* Update Roslyn to 4.13.0-1.24477.2 (PR: [#<>](https://github.com/dotnet/vscode-csharp/pull/<>))
  * Use MSBuild globs to determine which file changes are relevant (PR: [#75139](https://github.com/dotnet/roslyn/pull/75139))
  * Allow `<code>` in DocComments to render as a block in Hover response (PR: [#75215](https://github.com/dotnet/roslyn/pull/75215))
  * Ignore irrelevant exceptions when reporting LSP server NFW (PR: [#75150](https://github.com/dotnet/roslyn/pull/75150))
* Bumped xamltools to 17.12.35326.17 (PR: [#7610](https://github.com/dotnet/vscode-csharp/pull/7610))
* Do not remove documents if they are not files (PR: [#7607](https://github.com/dotnet/vscode-csharp/pull/7607))
* Support copilot registerRelatedFilesProvider API (PR: [#7605](https://github.com/dotnet/vscode-csharp/pull/7605))
* Update Debugger packages to v2.50.0 (PR: [#7597](https://github.com/dotnet/vscode-csharp/pull/7597))

# 2.49.25
* Update Razor to 9.0.0-preview.24467.1
  * Fix LF line-ending auto format bug (PR: [#10802](https://github.com/dotnet/razor/pull/10802))
* Bumped xamltools to 17.12.35319.159 (PR: [#7583](https://github.com/dotnet/vscode-csharp/pull/7583))
* Bump xamlTools to 17.12.35318.29 (PR: [#7577](https://github.com/dotnet/vscode-csharp/pull/7577))
* Register Copilot `relatedFilesProvider` for C# (PR: [#7578](https://github.com/dotnet/vscode-csharp/pull/7578))
* Update Roslyn to 4.12.0-3.24470.4 (PR: [#7589](https://github.com/dotnet/vscode-csharp/pull/7589))
  * Remove ResultId from RelatedDocumentsHandler (PR: [#75176](https://github.com/dotnet/roslyn/pull/75176))
  * Do not attempt to report EnC diagnostics for non-host workspaces (PR: [#75138](https://github.com/dotnet/roslyn/pull/75138))
  * Allow Razor to get diagnostics for cohosting (PR: [#75102](https://github.com/dotnet/roslyn/pull/75102))
Í
# 2.48.31
* Add signing support to VSIX (PR: [#7490](https://github.com/dotnet/vscode-csharp/pull/7490))
* Update Debugger to v2.47.0 (PR: [#7547](https://github.com/dotnet/vscode-csharp/pull/7547))
  * Adds in support for .NET 9 Break for Async User-Unhandled
* Do not inject 'debugConsoleVerbosity' for 'coreclr' (PR: [#7546](https://github.com/dotnet/vscode-csharp/pull/7546))
* Do not auto surround `<`, `[` and `(` in XAML. (PR: [#7540](https://github.com/dotnet/vscode-csharp/pull/7540))
* Fix resolve fix all code action (PR: [#7536](https://github.com/dotnet/vscode-csharp/pull/7536))
* Update Roslyn to 4.12.0-3.24463.6 (PR: [#7564](https://github.com/dotnet/vscode-csharp/pull/7564))
  * Fix order modifiers code action not showing up in vscode (PR: [#75092](https://github.com/dotnet/roslyn/pull/75092))
  * Log unit test output (PR: [#75084](https://github.com/dotnet/roslyn/pull/75084))
  * Fix issue where closing sourcelink document threw if not opened (PR: [#75046](https://github.com/dotnet/roslyn/pull/75046))
  * Expose sourcelink option to VSCode (PR: [#75044](https://github.com/dotnet/roslyn/pull/75044))
  * Report source generator failures in Hot Reload diagnostics (PR: [#75029](https://github.com/dotnet/roslyn/pull/75029))
  * Fix issue navigating from source link documents (PR: [#75030](https://github.com/dotnet/roslyn/pull/75030))
* Bump xamltools to 17.12.35311.18 (PR: [#7549](https://github.com/dotnet/vscode-csharp/pull/7549))
  * XAML color swatches

# 2.47.21
* Update Roslyn to 4.12.0-3.24456.2 (PR: [#7525](https://github.com/dotnet/vscode-csharp/pull/7525))
  * Avoid BuildHost crash in Mono due to missing types (PR: [#74994](https://github.com/dotnet/roslyn/pull/74994))
* Turn off word suggestions in XAML completions (PR: [#7516](https://github.com/dotnet/vscode-csharp/pull/7516))
* Bump xamltools to 17.12.35305.252 (PR: [#7521](https://github.com/dotnet/vscode-csharp/pull/7521))
  * XAML editor enabled various lightbulbs related to x:DataType, BindingContext and Bindings.

# 2.46.32
* Update Roslyn to 4.12.0-3.24430.2 (PR: [#7496](https://github.com/dotnet/vscode-csharp/pull/7496))
* Bump Razor to 9.0.0-preview.24427.2  (PR: [#7471](https://github.com/dotnet/vscode-csharp/pull/7471))
  * Suppress unique ids (#10791) (PR: [#10791](https://github.com/dotnet/razor/pull/10791))
  * Self-versioned documents (#10747) (PR: [#10747](https://github.com/dotnet/razor/pull/10747))
  * Remove ItemCollection from CodeRenderingContext (#10764) (PR: [#10764](https://github.com/dotnet/razor/pull/10764))
  * Moving formatting service to common layer (#10761) (PR: [#10761](https://github.com/dotnet/razor/pull/10761))
  * Allow LSP and cohosting to provide specialized methods to get a syntax tree (#10765) (PR: [#10765](https://github.com/dotnet/razor/pull/10765))
  * Update NOTICE.txt (#10768) (PR: [#10768](https://github.com/dotnet/razor/pull/10768))
  * Allow @@ as a fallback (#10752) (PR: [#10752](https://github.com/dotnet/razor/pull/10752))
  * Support component rename from an end tag (#10762) (PR: [#10762](https://github.com/dotnet/razor/pull/10762))
* Bump xamltools to 17.12.35230.10 (PR: [#7493](https://github.com/dotnet/vscode-csharp/pull/7493))

# 2.45.25
* Bump Roslyn to 4.12.0-2.24461.7 (PR: [#7544](https://github.com/dotnet/vscode-csharp/pull/7544))
  * Fix crash when closing source link documents (PR: [#75047](https://github.com/dotnet/roslyn/pull/75047))
  * Add option to disable source link (PR: [#75047](https://github.com/dotnet/roslyn/pull/75047))
  * Fix issue navigating from source link documents (PR: [#75033](https://github.com/dotnet/roslyn/pull/75033))
* Fix exception applying fix all code action (PR: [#7537](https://github.com/dotnet/vscode-csharp/pull/7537))

# 2.45.17
* Fix check for rzls being present (PR: [#7462](https://github.com/dotnet/vscode-csharp/pull/7462))
* Bump Razor to 9.0.0-preview.24418.1 (PR: [#7456](https://github.com/dotnet/vscode-csharp/pull/7456))
  * Don't add already known documents to the misc files project (#10753) (PR: [#10753](https://github.com/dotnet/razor/pull/10753))
  * Remove ItemCollection from TagHelperDescriptorProviderContext (#10720) (PR: [#10720](https://github.com/dotnet/razor/pull/10720))
  * Fix excerpt service to allow for multi line verbatim strings (#10675) (PR: [#10675](https://github.com/dotnet/razor/pull/10675))
  * Fix attribute parsing recovery (#10620) (PR: [#10620](https://github.com/dotnet/razor/pull/10620))
  * Turn off trailing whitespace triming in strings (#10646) (PR: [#10646](https://github.com/dotnet/razor/pull/10646))
  * Handle `:get`/`:set` in `EditorRequired` checking (#10628) (PR: [#10628](https://github.com/dotnet/razor/pull/10628))
* Include tooltip to Razor provisional completion (PR: [#7440](https://github.com/dotnet/vscode-csharp/pull/7440))
* Add option `dotnet.completion.triggerCompletionInArgumentLists` to disable completion in argument lists (PR: [#7446](https://github.com/dotnet/vscode-csharp/pull/7446))
* Bump Roslyn to 4.12.0-2.24422.6 (PR: [#7463](https://github.com/dotnet/vscode-csharp/pull/7463))
  * Fix error closing source link documents in VSCode (PR: [#74862](https://github.com/dotnet/roslyn/pull/74862))
  * Update LSP Protocol Types (PR: [#73911](https://github.com/dotnet/roslyn/pull/73911))
  * Fix issue projects would fail to load with missing output path error (PR: [#74791](https://github.com/dotnet/roslyn/pull/74791))
  * Expose option to disable completion triggers argument list (PR: [#74792](https://github.com/dotnet/roslyn/pull/74792))
* Update Debugger to v2.43.0 (PR: [#7420](https://github.com/dotnet/vscode-csharp/pull/7420))
* Bump xamltools to 17.12.35223.16 (PR: [#7464](https://github.com/dotnet/vscode-csharp/pull/7464))
* Added XAML Hot Reload support for x:FactoryMethod and x:Arguments
* Bump xamltools to 17.12.35304.30 (PR: [#7507](https://github.com/dotnet/vscode-csharp/pull/7508))

# 2.44.19
* Bump Roslyn to 4.12.0-2.24416.3 (PR: [#7448](https://github.com/dotnet/vscode-csharp/pull/7448))
  * Use EnableCodeStyleSeverity instead of AnalysisLevel to control new diagnostic severity behavior (PR: [#73843](https://github.com/dotnet/roslyn/pull/73843))
  * Cleanup LSP error reporting (PR: [#74530](https://github.com/dotnet/roslyn/pull/74530))
  * Add support in DevKit for source link go to definition (requires C# DevKit version `v1.10.6 (pre-release)` or higher) (PR: [#74626](https://github.com/dotnet/roslyn/pull/74626))
* Bump xamltools to 17.12.35216.22 (PR: [#7447](https://github.com/dotnet/vscode-csharp/pull/7447))
* Update Debugger to v2.43.0 (PR: [#7420](https://github.com/dotnet/vscode-csharp/pull/7420))
* Fix issue with Hot Reload not connecting when Android deploy/launch is too slow: https://github.com/microsoft/vscode-dotnettools/issues/1358

# 2.43.16
* Fix handling Razor files with non-ascii characters (PR: [#7442](https://github.com/dotnet/vscode-csharp/pull/7442))
* Bump Roslyn to 4.12.0-2.24413.5 (PR: [#7442](https://github.com/dotnet/vscode-csharp/pull/7442))
  * Fix URI comparisons for different casing (PR: [#74746](https://github.com/dotnet/roslyn/pull/74746))
  * Remove implicit unsafe cast in foreach(PR: [#74747](https://github.com/dotnet/roslyn/pull/74747))
  * Send a TextDocumentidentifier for razor dynamic file requests/responses (PR: [#74727](https://github.com/dotnet/roslyn/pull/74727))
  * Fix issues with VSCode LSP EA causing handlers to fail to load (PR: [#74700](https://github.com/dotnet/roslyn/pull/74700))
  * Reduce allocations in SyntaxEquivalence.AreEquivalent by using a more appropriate pooling mechanism for the stack it uses to walk trees. (PR: [#74610](https://github.com/dotnet/roslyn/pull/74610))
  * Reduce allocations in SyntaxNodeExtensions.GetMembers to instead execute a given lambda over the collection. (PR: [#74628](https://github.com/dotnet/roslyn/pull/74628))
  * Modify ISyntaxFacts methods to allocate less (PR: [#74596](https://github.com/dotnet/roslyn/pull/74596))
  * Fix cases where unused private members were not grayed out (PR: [#74589](https://github.com/dotnet/roslyn/pull/74589))
  * Fix URI handling when comparing encoded and unencoded URIs (PR: [#74544](https://github.com/dotnet/roslyn/pull/74544))
  * Only report project load events for initial load in VSCode (PR: [#74688](https://github.com/dotnet/roslyn/pull/74688))
  * Reduce allocations in AbstractSymbolCompletionProvider.CreateItems (PR: [#74670](https://github.com/dotnet/roslyn/pull/74670))
* Bump xamltools to 17.12.35209.18 (PR: [#7428](https://github.com/dotnet/vscode-csharp/pull/7428))
* Task 2187810: [VS Code] Add OnEnter rules to indent tags (PR: [#7426](https://github.com/dotnet/vscode-csharp/pull/7426))
* Fix completion handler bug that causes language server to crash (#7401) (PR: [#7406](https://github.com/dotnet/vscode-csharp/pull/7406))

# 2.41.26
* Bump Roslyn to 4.12.0-1.24376.3 (PR: [#7393](https://github.com/dotnet/vscode-csharp/pull/7393))
  * Fix race condition in LSP FindAllReferences when linked files were involved.(PR: [#74566](https://github.com/dotnet/roslyn/pull/74566))
  * Fix dll load issue when loading Razor projects in VSCode (PR: [#74570](https://github.com/dotnet/roslyn/pull/74570))
  * Don't bring up completion when deleting in an xml doc comment's text (PR: [#74558](https://github.com/dotnet/roslyn/pull/74558))
  * Merge changes from a single DidChange notification (PR: [#74268](https://github.com/dotnet/roslyn/pull/74268))
  * Support language features in metadata / decompiled source (PR: [#74488](https://github.com/dotnet/roslyn/pull/74488))
  * Fix crash in sighelp (PR: [#74510](https://github.com/dotnet/roslyn/pull/74510))
* Update Debugger Packages to v2.40.0 (PR: [#7390](https://github.com/dotnet/vscode-csharp/pull/7390))
* Update Razor to 9.0.0-preview.24366.2 (PR: [#7384](https://github.com/dotnet/vscode-csharp/pull/7384))
  * [FUSE] Component attribute nameof() (#10581) (PR: [#10581](https://github.com/dotnet/razor/pull/10581))
  * Pool CodeWriter ReadOnlyMemory<char> pages (#10585) (PR: [#10585](https://github.com/dotnet/razor/pull/10585))
  * Improve performance of `DefaultRazorTagHelperContextDiscoveryPhase` (#10602) (PR: [#10602](https://github.com/dotnet/razor/pull/10602))
  * Flesh out `PooledArrayBuilder<T>` a bit (#10606) (PR: [#10606](https://github.com/dotnet/razor/pull/10606))
* Bump xamltools to 17.12.35126.17 (PR: [#7392](https://github.com/dotnet/vscode-csharp/pull/7392))
* Add option to disable server gc (PR: [#7155](https://github.com/dotnet/vscode-csharp/pull/7155))
* Update the workspace status bar when the server is stopped. (PR: [#7352](https://github.com/dotnet/vscode-csharp/pull/7352))
* Update Debugger to v2.39.0 (PR: [#7342](https://github.com/dotnet/vscode-csharp/pull/7342))
* Bump xamltools to 17.12.35119.17 (PR: [#7366](https://github.com/dotnet/vscode-csharp/pull/7366))
* Update Roslyn to 4.12.0-1.24366.6 (PR: [#7356](https://github.com/dotnet/vscode-csharp/pull/7356))
  * Convert ImplementTypeOptions to editorconfig options (PR: [#74376](https://github.com/dotnet/roslyn/pull/74376))
  * Remove double array allocation in SemanticTokens (PR: [#74271](https://github.com/dotnet/roslyn/pull/74271))
  * Do not use memory mapped files on non-windows (PR: [#74339](https://github.com/dotnet/roslyn/pull/74339))
* Renamed settings (PR: [#7356](https://github.com/dotnet/vscode-csharp/pull/7356))
  * `dotnet.implementType.insertionBehavior` to `dotnet.typeMembers.memberInsertionLocation`
  * `dotnet.implementType.propertyGenerationBehavior` to `dotnet.typeMembers.propertyGenerationBehavior`

# 2.39.29
* Add language status bar item displaying project context for open files (PR: [#7321](https://github.com/dotnet/vscode-csharp/pull/7321), PR: [#7333](https://github.com/dotnet/vscode-csharp/pull/7333))
* Add language status bar item for workspace status (C# standalone) (PR: [#7254](https://github.com/dotnet/vscode-csharp/pull/7254), PR: [#7329])https://github.com/dotnet/vscode-csharp/pull/7329))
* Update Razor to 9.0.0-preview.24365.1 (PR: [#7354](https://github.com/dotnet/vscode-csharp/pull/7354))
  * Fix project info reading (PR: [#10623](https://github.com/dotnet/razor/pull/10623))
  * Fix NRE when invoking completion in empty document (PR: [#10610](https://github.com/dotnet/razor/pull/10610))
  * Improve perf in generator cache cases (PR: [#10577](https://github.com/dotnet/razor/pull/10577))
  * Handle InsertReplaceEdit for completion (PR: [#10563](https://github.com/dotnet/razor/pull/10563))
  * Use System.Text.Json for serialization (PR: [#10551](https://github.com/dotnet/razor/pull/10551))
  * Support `DocumentSymbol` results from Roslyn (PR: [#10560](https://github.com/dotnet/razor/pull/10560))
  * Use a named pipe to communicate projectinfo in vscode (PR: [#10521](https://github.com/dotnet/razor/pull/10521))
  * Reduce allocations in Razor's DirectiveVisitor (PR: [10521](https://github.com/dotnet/razor/pull/10521))
* Update Roslyn to 4.12.0-1.24359.11 (PR: [#7326](https://github.com/dotnet/vscode-csharp/pull/7326))
  * Fix issue causing error toasts to display on diff window views or new C# documents (PR: [#74300](https://github.com/dotnet/roslyn/pull/74300))
  * Fix issue where loaded projects would be missing references (PR: [#74189](https://github.com/dotnet/roslyn/pull/74189))
  * Fix UseNullPropagationCodeFixProvider for parenthesized property access (PR: [#74316](https://github.com/dotnet/roslyn/pull/74316))
  * Rename the record parameter when its property get renamed (PR: [#74168](https://github.com/dotnet/roslyn/pull/74168))
  * Report a diagnostic on missing body in partial property implementation (PR [#74224](https://github.com/dotnet/roslyn/pull/74224))
  * Do not offer 'convert' namespace when the ns has sibling types (PR [#74216](https://github.com/dotnet/roslyn/pull/74216))
  * Consume new Razor EA (PR: [#74134](https://github.com/dotnet/roslyn/pull/74134))
  * Report diagnostic for field and value in property accessors when used as primary expressions only (PR: [#74164](https://github.com/dotnet/roslyn/pull/74164))
  * Ensure an empty run result doesn't throw when generators are present (PR: [#74034](https://github.com/dotnet/roslyn/pull/74034))
  * Support navigating to an interceptor location when on an intercepted method call (PR: [#74006](https://github.com/dotnet/roslyn/pull/74006))
  * Add type hints for collection expressions (PR: [#74051](https://github.com/dotnet/roslyn/pull/74051))
  * Ensure source generated documents are up-to-date before analyzing EnC changes (PR: [#73989](https://github.com/dotnet/roslyn/pull/73989))
  * Support goto-def taking you from an interceptor method to the location being intercepted (PR: [#73992](https://github.com/dotnet/roslyn/pull/73992))
  * Various performance fixes
    * Reduce closures allocated during invocation of CapturedSymbolReplacement.Replacement (PR: [#74258](https://github.com/dotnet/roslyn/pull/74258))
    * Reduce allocations in SymbolDeclaredCompilationEvent (PR: [#74250](https://github.com/dotnet/roslyn/pull/74250))
    * Reduce allocations in AbstractProjectExtensionProvider.FilterExtensions (PR [#74112](https://github.com/dotnet/roslyn/pull/74112))
    * Avoid re-running all codeaction requests at low priority (PR: [#74083](https://github.com/dotnet/roslyn/pull/74083))
    * Reduce time spent in ConflictResolver.Session.GetNodesOrTokensToCheckForConflicts (PR: [#74101](https://github.com/dotnet/roslyn/pull/74101))
    * Avoid allocations in AbstractSyntaxIndex<>.GetIndexAsync( PR: [#74075](https://github.com/dotnet/roslyn/pull/74075))
* Bump xamltools to 17.12.35112.24 (PR: [#7309](https://github.com/dotnet/vscode-csharp/pull/7334))
  * Fixed issue with Exception type related to https://github.com/microsoft/vscode-dotnettools/issues/1247
  * Fixed Hot Reload not working on some Android device models: https://github.com/microsoft/vscode-dotnettools/issues/1241

# 2.38.16
* Start localizing additional strings (PR: [#7305](https://github.com/dotnet/vscode-csharp/pull/7305))
* Fix issue launching Razor server on macOS (PR: [#7300](https://github.com/dotnet/vscode-csharp/pull/7300))

# 2.37.26
* Bump xamltools to 17.11.35027.17 (PR: [#7288](https://github.com/dotnet/vscode-csharp/pull/7288))
  * Fix impossible to enter multiple spaces in attribute area
  * Fix cannot accept Copilot suggestion with Tab when IntelliSense is open
* Fixing snippets in Razor LSP completion (PR: [#7274](https://github.com/dotnet/vscode-csharp/pull/7274))
* Fix NRE in Razor completion. (PR: [#7272](https://github.com/dotnet/vscode-csharp/pull/7272))
* Update debugger to indicate Monterey as the lowest supported MacOS version (PR: [#7256](https://github.com/dotnet/vscode-csharp/pull/7256))
* Improve Razor completion experience (tag helpers, icons) (PR: [#7205](https://github.com/dotnet/vscode-csharp/pull/7205))

# 2.36.19
* Update Razor to 9.0.0-preview.24325.5 (PR: [#7277](https://github.com/dotnet/vscode-csharp/pull/7277))
  * Fix completion commit characters (PR: [#10533](https://github.com/dotnet/razor/pull/10533))
  * Add back roll foward to rzls (PR: [#10530](https://github.com/dotnet/razor/pull/10530))
  * Don't show misc files project in hover info (PR: [#10503](https://github.com/dotnet/razor/pull/10503))
  * Fold C# statement keyword blocks (PR: [#10496](https://github.com/dotnet/razor/pull/10496))
* Update Roslyn to 4.11.0-3.24320.2 (PR: [#7257](https://github.com/dotnet/vscode-csharp/pull/7257))
  * Add brokered service for Hot Reload in VS Code: GenericHotReloadAgentManagerService (PR: [#74029](https://github.com/dotnet/roslyn/pull/74029))
  * Bump razor to include fix for project serialization (PR: [#74021](https://github.com/dotnet/roslyn/pull/74021))
  * Fix find refs doing too much work lookign for types that had an alias to them in one file. (PR: [#74015](https://github.com/dotnet/roslyn/pull/74015))
  * Ensure source generated documents are up-to-date before analyzing EnC changes (PR: [#73989](https://github.com/dotnet/roslyn/pull/73989))
  * Fix project configuration telemetry for legacy csproj projects (PR: [#73995](https://github.com/dotnet/roslyn/pull/73995))
  * Throw when there is a syntax version mismatch in codelens (PR: [#73902](https://github.com/dotnet/roslyn/pull/73902))
* Remove runtime download of Razor telemetry pkg (PR: [#7236](https://github.com/dotnet/vscode-csharp/pull/7236))
* Remove legacy project.json support (PR: [#7244](https://github.com/dotnet/vscode-csharp/pull/7244))
* Update xamlTools to 17.11.35021.135
  * Trigger full page MAUI XAML Hot Reload when clicking the Hot Reload icon, matching VS Windows
  * Fix "Ambiguous reference" in HotReloadMobileTapInitializer (Issue: [#1204](https://github.com/microsoft/vscode-dotnettools/issues/1204))
  * Give descriptive error if using Hot Reload with Android on pre .NET8, saying to update .NET

# 2.35.15
* Improve reliability of documentation comment auto insertion (PR: [#7230](https://github.com/dotnet/vscode-csharp/pull/7230))
* Update Roslyn to 4.11.0-3.24313.9 (PR: [#7234](https://github.com/dotnet/vscode-csharp/pull/7234))
  * Fix issue serializing exceptions (PR: [#73851](https://github.com/dotnet/roslyn/pull/73851))
  * Cache the last string's hash to improve cpu cost in solution load (PR: [#73937](https://github.com/dotnet/roslyn/pull/73937))
  * Improve EnC log messages (PR: [#73919](https://github.com/dotnet/roslyn/pull/73919))
  * Reduce allocations in PENamespaceSymbol.GetMembers() (PR: [#73794](https://github.com/dotnet/roslyn/pull/73794))
  * Change global option change notification to batch all option changes (PR: [#73882](https://github.com/dotnet/roslyn/pull/73882))
  * Update msbuild version to 17.3.4 (PR: [#73283](https://github.com/dotnet/roslyn/pull/73283))
* Update XAML tools to 17.11.35013.26 (PR: [#7233](https://github.com/dotnet/vscode-csharp/pull/7233))
  * Fixes AutoInsert in MAUI
  * Support GUID properties when parsing XAML
  * Improve support for x:DataType in MAUI
* Update Razor to 9.0.0-preview.24311.4 (PR: [#7225](https://github.com/dotnet/vscode-csharp/pull/7225))
  * Fix Parsing regression from 8.0.205, commas after @ character
  * Improve diagnostic reliability for js/ts
  * Fix tooling for projects that don't use the razor sdk
* Update debugger packages to v2.34.1. (PR: [#7224](https://github.com/dotnet/vscode-csharp/pull/7224))

# 2.34.10
* Update Roslyn to 4.11.0-3.24307.2 (PR: [#7211](https://github.com/dotnet/vscode-csharp/pull/7211))
  * Avoid writing analyzer shadow copies to /tmp/ on Unix (PR: [#73809](https://github.com/dotnet/roslyn/pull/73809))
  * Fix exponential blowup parsing pathological files (PR: [#73788](https://github.com/dotnet/roslyn/pull/73788))
  * Fix serialization of capabilities in onautoinsert (PR: [#73867](https://github.com/dotnet/roslyn/pull/73867))
* Update Debugger Packages to v2.33.0 (PR: [#7204](https://github.com/dotnet/vscode-csharp/pull/7204))

# 2.33.16
* Update Roslyn to 4.11.0-3.24304.4 (PR: [#7191](https://github.com/dotnet/vscode-csharp/pull/7191))
  * Fix build host when only the .net 6 SDK is installed (PR: [#73818](https://github.com/dotnet/roslyn/pull/73818))
  * Bump Razor to 9.0.0-preview.24281.3 (PR: [#73817](https://github.com/dotnet/roslyn/pull/73817))
  * Fix null reference exception during shutdown (PR: [#73790](https://github.com/dotnet/roslyn/pull/73790))
  * Fix race causing workspace diagnostics to be stale (PR: [#73653](https://github.com/dotnet/roslyn/pull/73653))
  * Reduce upfront assembly loads in language server (PR: [#73566](https://github.com/dotnet/roslyn/pull/73566))
  * Update Debugger.Contracts to 17.11.0-beta.24274.2 (PR: [#73748](https://github.com/dotnet/roslyn/pull/73748))
  * Fix signature help in nested method calls (PR: [#73606](https://github.com/dotnet/roslyn/pull/73606))
  * Ignore drive casing when comparing paths for .editorconfig on windows platforms (PR: [#73380](https://github.com/dotnet/roslyn/pull/73380))
  * Remove dependency on all Roslyn assemblies from build host (PR: [#73497](https://github.com/dotnet/roslyn/pull/73497))
  * Various performance improvements and allocation reductions
    * Improve AddImport conflict detection performance (PR: [#73780](https://github.com/dotnet/roslyn/pull/73780))
    * Modify (Large/Source)Text.ParseLineStart to specify an initial capacity for line count (PR: [#73701](https://github.com/dotnet/roslyn/pull/73701))
    * Reduce exceptions in work queue (PR: [#73766](https://github.com/dotnet/roslyn/pull/73766))
    * Run providers in parallel when determining if we should show the lightbulb icon (PR: [#73758](https://github.com/dotnet/roslyn/pull/73758))
    * Change the DocumentationCommentId to use a PooledStringBuilder (PR: [#73737](https://github.com/dotnet/roslyn/pull/73737))
    * Avoid unnecessary array+linq allocs in common case (PR: [#73727](https://github.com/dotnet/roslyn/pull/73727))
    * Improve performance in async / await keyword highlighting (PR: [#73721](https://github.com/dotnet/roslyn/pull/73721))
    * Avoid unnecessary tree walk when hitting non-relevant directives (PR: [#73720](https://github.com/dotnet/roslyn/pull/73720))
    * Utilize ImmutableCollectionsMarshal to get ROS for XxHash128.Hash call (PR: [#73692](https://github.com/dotnet/roslyn/pull/73692))
    * Use IAsyncEnumerable for Find References (PR: [#73613](https://github.com/dotnet/roslyn/pull/73613))
    * Compute classifications for FAR results in parallel (PR: [#73599](https://github.com/dotnet/roslyn/pull/73599))
    * Switch to a List as the backing store for the FAR window from an ImmutableList (PR: [#73589](https://github.com/dotnet/roslyn/pull/73589))
    * Switch FAR data from an immutable dictionary to an immutable array (PR: [#73587](https://github.com/dotnet/roslyn/pull/73587))
    * More classification perf fixes. (PR: [#73535](https://github.com/dotnet/roslyn/pull/73535))
    * Avoid unnecessary allocations while finding token matches in a file (PR: [#73547](https://github.com/dotnet/roslyn/pull/73547))
    * Lower the amount of time FAR spends in classification by 4% (PR: [#73533](https://github.com/dotnet/roslyn/pull/73533))

# 2.33.13
* Update xamlTools to 17.11.34931.156 (PR: [#7195](https://github.com/dotnet/vscode-csharp/pull/7195))
  * Support XAML Hot Reload on iOS physical devices
  * Encrypt Hot Reload connection
  * Fix issue where WinUI Hot Reload stops working on successive debug sessions
  * Fix issue where Hot Reload sometimes doesn't work on first debug launch
* Include process environment variables when running shell commands (PR: [#7152](https://github.com/dotnet/vscode-csharp/pull/7152))

# 2.32.14
* Use XML settings for XAML language-configuration.json (PR: https://github.com/dotnet/vscode-csharp/pull/7162)
* Bump xamlTools to the latest (PR: https://github.com/dotnet/vscode-csharp/pull/7161)
* Update Debugger to v2.30.1 (PR: https://github.com/dotnet/vscode-csharp/pull/7145)

# 2.31.28
* Update Razor to use source generator shipped in extension instead of the SDK (PR: [#7134](https://github.com/dotnet/vscode-csharp/pull/7134))
  * Fixes incorrect 'Amibuity between' errors displaying in Razor files (Issue: [#10351](https://github.com/dotnet/razor/issues/10351))
* Update Roslyn to 4.11.0-2.24267.3 (PR: [#7134](https://github.com/dotnet/vscode-csharp/pull/7134))
  * Allow Razor to use source generator shipped with tooling (PR: [#73524](https://github.com/dotnet/roslyn/pull/73524))
  * Various performance improvements and allocation reductions
    * Reduce allocations in retrieving text from parsed trees (PR: [#73512](https://github.com/dotnet/roslyn/pull/73512))
    * Improve code action performance (PR: [#73493](https://github.com/dotnet/roslyn/pull/73493))
    * Reduce more allocations in formatting. (PR: [#73487](https://github.com/dotnet/roslyn/pull/73487))
    * Reduce allocations in formatting. (PR: [#73475](https://github.com/dotnet/roslyn/pull/73475))
    * Reduce allocations in simplification (PR: [#73473](https://github.com/dotnet/roslyn/pull/73473))
    * Remove array allocations for formatting rules. (PR: [#73458](https://github.com/dotnet/roslyn/pull/73458))
    * Optimize suppress operations during formatting. (PR: [#73456](https://github.com/dotnet/roslyn/pull/73456))
    * Produce less string allocs while formatting documents (PR: [#73452](https://github.com/dotnet/roslyn/pull/73452))
    * Improve memory allocs in interval trees (PR: [#73451](https://github.com/dotnet/roslyn/pull/73451))
  * Switch to System.Text.Json serialization in LSP server (PR: [#73207](https://github.com/dotnet/roslyn/pull/73207))
  * Add dynamic registration for razor and cshtml files (PR: [#73369](https://github.com/dotnet/roslyn/pull/73369))

# 2.30.24
* XAML IntelliSense for .NET MAUI (Issue: [#565](https://github.com/microsoft/vscode-dotnettools/issues/565))
  * Controlled by feature flag `dotnet.enableXamlTools` which is on by default
  * Requires C# Dev Kit and .NET MAUI extensions
* Update Roslyn to 4.11.0-2.24259.4 (PR: [#7117](https://github.com/dotnet/vscode-csharp/pull/7117))
  * Shrink the size and remove unnecessary dependencies in the build host (PR: [#73393](https://github.com/dotnet/roslyn/pull/73393))
  * Make fix-all code action more parallel (PR: [#73356](https://github.com/dotnet/roslyn/pull/73356))
  * Allow use of more Hot Reload brokered services by LSP (for VS Code) (PR: [#73240](https://github.com/dotnet/roslyn/pull/73240))
  * Improve parallel processing in FAR (PR: [#73253](https://github.com/dotnet/roslyn/pull/73253))
  * Improve parallel processing in NavTo (PR: [#73249](https://github.com/dotnet/roslyn/pull/73249))
* Add temporary option, `dotnet.server.suppressLspErrorToasts` to allow suppression of recoverable LSP error toasts (PR: [#7106](https://github.com/dotnet/vscode-csharp/pull/7106))
* Update Debugger to v2.30.0 (PR: [#7101](https://github.com/dotnet/vscode-csharp/pull/7101))
  * Adds support for disabling implict evaluation of properties and functions (Issue: [#3173](https://github.com/dotnet/vscode-csharp/pull/3173))
* Don't download razor telemetry if disabled by vscode (PR: [#7092](https://github.com/dotnet/vscode-csharp/pull/7092))

# 2.29.11
* List solution filter files (.slnf) in the 'Open Solution' command. (PR: [#7082](https://github.com/dotnet/vscode-csharp/pull/7082))
* No longer activate on the presence of .sln or .slnf files (PR: [#7081](https://github.com/dotnet/vscode-csharp/pull/7081))
* Update Debugger Packages to v2.28.1 (PR: [#7072](https://github.com/dotnet/vscode-csharp/pull/7072))

# 2.28.8
* Update Roslyn to 4.11.0-1.24226.4 (PR: [#7069](https://github.com/dotnet/vscode-csharp/pull/7069))
  * Separate document diagnostics into multiple buckets to improve diagnostics performance (PR: [#73073](https://github.com/dotnet/roslyn/pull/73073))
  * Improve performance of diagnostics when analysis is set to fullSolution (PR: [#73201](https://github.com/dotnet/roslyn/pull/73201))
  * updated Telemetry to 17.11.8 and Utilities.Internal to 16.3.73 (PR: [#73107](https://github.com/dotnet/roslyn/pull/73107))
  * Fix issue where file watchers for Razor documents were not created (PR: [#73077](https://github.com/dotnet/roslyn/pull/73077))
* Upgrade Debugger for 2.19.18 Release (PR: [#7060](https://github.com/dotnet/vscode-csharp/pull/7060))
* Textmate: fix Razor expression classification inside of HTML tags using injection (PR: [#7055](https://github.com/dotnet/vscode-csharp/pull/7055))
* Textmate: fix Razor expression classification inside of HTML tags (PR: [#7051](https://github.com/dotnet/vscode-csharp/pull/7051))

# 2.26.13
* Update Roslyn to 4.11.0-1.24209.10 (PR: [#<>](https://github.com/dotnet/vscode-csharp/pull/<>))
  * Fix issue with case sensitivity when finding documentIds for URIs (PR: [#72965](https://github.com/dotnet/roslyn/pull/72965))
  * Bulk add/remove projects to workspace (PR: [#72957](https://github.com/dotnet/roslyn/pull/72957))
  * Allow language specific handlers to use their own types for serialization (PR: [#72230](https://github.com/dotnet/roslyn/pull/72230))
  * Update VS telemetry for devkit (PR: [#72894](https://github.com/dotnet/roslyn/pull/72894))
* Bump Razor to 7.0.0-preview.24178.4 (PR: [#7017](https://github.com/dotnet/vscode-csharp/pull/7017))
  * Add option to force runtime code generation for razor (a.k.a fuse)
  * [Fix vscode fuse feature flag (10169)](https://github.com/dotnet/razor/pull/10169)
  * [Replace `BatchingWorkQueue` with `AsyncBatchingWorkQueue` from Roslyn (10140)](https://github.com/dotnet/razor/pull/10140)

## 2.24.17
* Add oboslete classification definitions to vs2019 themes (PR: [#7011](https://github.com/dotnet/vscode-csharp/pull/7011))
* Bump Roslyn to 4.11.0-1.24179.11 (PR: [#7011](https://github.com/dotnet/vscode-csharp/pull/7011))
  * Add feature to strike out obsolete symbols (PR: [#72156](https://github.com/dotnet/roslyn/pull/72156))
  * Fix issue where some file changes would be ignored on Windows due to casing (PR: [#72555](https://github.com/dotnet/roslyn/pull/72555))
  * Drop win32-ia32 language server support (PR: [#72605](https://github.com/dotnet/roslyn/pull/72605))
  * Use built in Razor source generator instead of generator from SDK. (PR: [#72482](https://github.com/dotnet/roslyn/pull/72482))
  * Always log LSP server processId and increase attach timeout (PR: [#72531](https://github.com/dotnet/roslyn/pull/72531))
* Bump razor and update changelog (PR: [#7005](https://github.com/dotnet/vscode-csharp/pull/7005))
  * Tweak RazorConfigurationFormatter to account for serialization format change (PR: [#10157](https://github.com/dotnet/razor/pull/10157))
  * Use PooledArrayBuilder<SyntaxToken> throughout parsers and tokenizer (PR [#10095](https://github.com/dotnet/razor/pull/10095))
  * Fix hot path string allocations from ProjectKey (PR: [#10138](https://github.com/dotnet/razor/pull/10138))
  * Disable latest runtime patch (PR: [#10133](https://github.com/dotnet/razor/pull/10133))

## 2.23.15
* Rename RazorComponentAttribute semantic token to razorComponentAttribute (PR: [#6867](https://github.com/dotnet/vscode-csharp/pull/6867))
* Drop win32-ia32 platform support (PR: [#6983](https://github.com/dotnet/vscode-csharp/pull/6983))
* Fix some issues with casing when comparing Razor files (PR: [#6974](https://github.com/dotnet/vscode-csharp/pull/6974))
* Do not timeout on connecting to the server if waitForDebugger is set (PR: [#6969](https://github.com/dotnet/vscode-csharp/pull/6969))
* Bump Razor and update changelog (PR: [#6965](https://github.com/dotnet/vscode-csharp/pull/6965))
  * Fix an issue that could cause numerous semantic tokens LSP failures on new projects (PR: [#10050](https://github.com/dotnet/razor/pull/10050))
  * Fix an issue with running on .NET 9 preview builds (PR: [#10064](https://github.com/dotnet/razor/pull/10064))
* Update Debugger Packages to v2.19.17 (PR: [#6958](https://github.com/dotnet/vscode-csharp/pull/6958))

## 2.23.2
- Updated debugger to fix .NET debugging break with searchNuGetOrgSymbolServer enabled (PR: [#6937](https://github.com/dotnet/vscode-csharp/pull/6937))
- Update Razor to add formatting option to force open brace onto the next line after a @code or @functions block (PR: [#10018](https://github.com/dotnet/razor/pull/10018))

## 2.22.5
* Update Razor to 7.0.0-preview.24165.1 (PR: [#6922](https://github.com/dotnet/vscode-csharp/pull/6922))
  * Fix casing issues that cause missing components in Razor files (PR: [#10050](https://github.com/dotnet/razor/pull/10050))

## 2.22.2
- Update Roslyn to run on .NET 8 (PR: [#6920](https://github.com/dotnet/vscode-csharp/pull/6920))
  * Upgrade language server to run on .NET 8 (PR: [#72247](https://github.com/dotnet/roslyn/pull/72247))
  * Refactors LSP server extension assembly loading (PR: [#71862](https://github.com/dotnet/roslyn/pull/71862))
  * Report better warnings and errors if build hosts exit abnormally (PR: [#71909](https://github.com/dotnet/roslyn/pull/71909))
- Update Razor to 7.0.0-preview.24161.6 (PR: [#6922](https://github.com/dotnet/vscode-csharp/pull/6922))
  - Upgrade language server to run on .NET 8 (PR: [#9981](https://github.com/dotnet/razor/pull/9981))
  - Support inlay hints (PR: [#9904](https://github.com/dotnet/razor/pull/9904) and [#6857](https://github.com/dotnet/vscode-csharp/pull/6857))
  - Don't ship as self-contained (PR: [#9891](https://github.com/dotnet/razor/pull/9891))
  - Better using directive completiong (PR: [#9982](https://github.com/dotnet/razor/pull/9982))
  - Add option to format code block open brace on new line (PR: [#10018](https://github.com/dotnet/razor/pull/10018) and [#6939](https://github.com/dotnet/vscode-csharp/pull/6939))

## 2.19.13
* Fix `Attribute` snippet (PR: [#6879](https://github.com/dotnet/vscode-csharp/pull/6879))
* Add grammar support for new Razor directives: rendermode, preservewhitespace and typeparam (PR: [#6887](https://github.com/dotnet/vscode-csharp/pull/6887))
* Ensure failures to connect to the named pipe are propagated (PR: [#6881](https://github.com/dotnet/vscode-csharp/pull/6881))
* Update Razor to 7.0.0-preview.24079.3 (PR: [#6841](https://github.com/dotnet/vscode-csharp/pull/6841))
  * Fix an issue with component hover not showing enough information (PR: [dotnet/razor#9862](https://github.com/dotnet/razor/pull/9862))

# 2.18.15
* Fix regression in override completion (PR: [#6869](https://github.com/dotnet/vscode-csharp/pull/6869))
* Update debugger to 2.18.0 release (PR: [#6853](https://github.com/dotnet/vscode-csharp/pull/6853))

## 2.17.7
* Update Roslyn to 4.10.0-2.24102.11 (PR: [#6847](https://github.com/dotnet/vscode-csharp/pull/6847))
  * Fix another issue loading .NET projects when only the 6.0 SDK is installed (PR: [#71881](https://github.com/dotnet/roslyn/pull/71881))
  * Fix request info leak when project loading is cancelled (PR: [#71737](https://github.com/dotnet/roslyn/pull/71737))
  * Load Roslyn DevKit assemblies into the default ALC (PR: [#71807](https://github.com/dotnet/roslyn/pull/71807))

## 2.16.24
* Update Roslyn to 4.10.0-1.24069.13 (PR: [#6823](https://github.com/dotnet/vscode-csharp/pull/6823))
  * Fix request metric logging (PR: [#71734](https://github.com/dotnet/roslyn/pull/71734))
  * Fix issue loading .NET 6.0 projects when only the 6.0 SDK is installed (PR: [#71597](https://github.com/dotnet/roslyn/pull/71597))

## 2.15.30
* Update Roslyn to 4.10.0-1.24058.1 (PR: [#6791](https://github.com/dotnet/vscode-csharp/pull/6791))
  * Fix error when a source generated file was present in find references or go to definition requests (PR: [#71395](https://github.com/dotnet/roslyn/pull/71395))
  * Remove usages of incorrectly licensed library (Microsoft.VisualStudio.LanguageServer.Protocol) for serialization of LSP json messages (PR: [#68990](https://github.com/dotnet/roslyn/pull/68990))
  * Add custom Roslyn serialization code for LSP json messages (PR: [#71141](https://github.com/dotnet/roslyn/pull/71141))
  * Use named executables for the language server process on Windows and Linux (PR: [#71007](https://github.com/dotnet/roslyn/pull/71007))
  * Add back LSP request telemetry in CLaSP queue (PR: [#71157](https://github.com/dotnet/roslyn/pull/71157))
* Fix command enablement by using specific activation contexts for O#, Roslyn standalone, and Roslyn devkit (PR: [#6782](https://github.com/dotnet/vscode-csharp/pull/6782))
* Update Razor to 7.0.0-preview.23627.2 (PR: [#6770](https://github.com/dotnet/vscode-csharp/pull/6770)
  * Fixed issue where Razor trace level was ignored. New `razor.server.trace` setting created that is not ignored (PR: [dotnet/razor#9745](https://github.com/dotnet/razor/pull/9745))
* Update OmniSharp to 1.39.11 (PR: [#6771](https://github.com/dotnet/vscode-csharp/pull/6771))
  * Fix loading AspNetCore projects by shipping the AspNetCore EA library
  * Update SDKs and dependencies ([omnisharp-roslyn/#2586](https://github.com/OmniSharp/omnisharp-roslyn/issues/2586), PR: [omnisharp-roslyn/#2588](https://github.com/OmniSharp/omnisharp-roslyn/pull/2588))
  * Updated to latest dotnet-script 1.5.0 (PR: [omnisharp-roslyn/#2585](https://github.com/OmniSharp/omnisharp-roslyn/pull/2585))
* Update checkForDevCert aka.ms link (PR: [#6769](https://github.com/dotnet/vscode-csharp/pull/6769))
* Support debug apps running under mono runtime using vsdbg (PR: [#6752](https://github.com/dotnet/vscode-csharp/pull/6752))
* Update debugger to 2.9.1 (PR: [#6765](https://github.com/dotnet/vscode-csharp/pull/6765))
* Remove check for projectPath for resolveDebugConfiguration (PR: [#6754](https://github.com/dotnet/vscode-csharp/pull/6754))

## 2.14.8
* Fix Remote Process Listing from Windows (PR: [#6730](https://github.com/dotnet/vscode-csharp/pull/6730))
* Fix description of debugger `console` setting (PR: [#6726](https://github.com/dotnet/vscode-csharp/pull/6726))
* Read extension paths option (PR: [#6724](https://github.com/dotnet/vscode-csharp/pull/6724))

## 2.13.10
* Update Roslyn to 4.9.0-3.23604.10 (PR: [#6676](https://github.com/dotnet/vscode-csharp/pull/6676))
  * Pass through folders for additional files (PR: [#71061](https://github.com/dotnet/roslyn/pull/71061))
  * Automatically detect missing NuGet packages and restore (PR: [#70851](https://github.com/dotnet/roslyn/pull/70851))
  * Enable route embedded language features in vscode (PR: [#70927](https://github.com/dotnet/roslyn/pull/70927))
* Add automatic nuget restore support to C# standalone (PR: [#6676](https://github.com/dotnet/vscode-csharp/pull/6676))
* Update required VSCode version to 1.75.0 (PR: [#6711](https://github.com/dotnet/vscode-csharp/pull/6711))
* Update debugger docs to point to official documentation (PR: [#6674](https://github.com/dotnet/vscode-csharp/pull/6674))

## 2.12.19
* Update Roslyn to 4.9.0-2.23571.2 (PR: [#6681](https://github.com/dotnet/vscode-csharp/pull/6681))
  * Workaround vscode bug with returning defaultBehavior from prepareRename (PR: [#70840](https://github.com/dotnet/roslyn/pull/70840))
  * Implement textDocument/prepareRename to show error in invalid rename locations (PR: [#70724](https://github.com/dotnet/roslyn/pull/70724))
  * Improve Hover markdown on 'await' keyword (PR: [#70629](https://github.com/dotnet/roslyn/pull/70629))
* Remove blazor debugging extension (PR: [#5579](https://github.com/dotnet/vscode-csharp/pull/5579))
* Fix issue with mismatch in casing in solution file (PR: [#6683](https://github.com/dotnet/vscode-csharp/pull/6683))
* Add nested code actions to csharp extension (PR: [#6572](https://github.com/dotnet/vscode-csharp/pull/6572))
* Direct debugger setting documentation to code.visualstudio.com (PR: [#6659](https://github.com/dotnet/vscode-csharp/pull/6659))
* Add a timeout for downloading razor telemetry (PR: [#6622](https://github.com/dotnet/vscode-csharp/pull/6622))
* Rearrange settings sections into actual categories (PR: [#6652](https://github.com/dotnet/vscode-csharp/pull/6652))

## 2.10.28
* Fix C# Debugger telemetry (PR: [#6627](https://github.com/dotnet/vscode-csharp/pull/6627))
* Add support for deduping build diagnostics from C# Devkit (PR: [#6543](https://github.com/dotnet/vscode-csharp/pull/6543))
* Update Roslyn to 4.9.0-1.23530.4 (PR: [#6603](https://github.com/dotnet/vscode-csharp/pull/6603))
  * Enable NuGet restore commands `dotnet.restore.all` and `dotnet.restore.project` (PR: [#70588](https://github.com/dotnet/roslyn/pull/70588))
  * Fix issue where server did not reload projects after NuGet restore (PR: [#70602](https://github.com/dotnet/roslyn/pull/70602))
* Update debugger to 2.9.0 (PR: [#6623](https://github.com/dotnet/vscode-csharp/pull/6623))
  * Flush `Console.Write` buffer more often (Fixes: [#6598](https://github.com/dotnet/vscode-csharp/issues/6598))
  * Fix logpoint freezing on start (Fixes: [#6585](https://github.com/dotnet/vscode-csharp/issues/6585))
  * Fix logpoints when using variables after breakpoint breaks (Fixes: [#583](https://github.com/microsoft/vscode-dotnettools/issues/583))
* Update README.md to rename the Runtime dependency (PR: [#6617](https://github.com/dotnet/vscode-csharp/pull/6617))

## 2.9.20
* Bump Roslyn to 4.9.0-1.23526.14 (PR: [#6608](https://github.com/dotnet/vscode-csharp/pull/6608))
  * Fix some project loading issues caused by evaluation failures (PR: [#70496](https://github.com/dotnet/roslyn/pull/70496))
  * Ensure evaluation diagnostics are logged during project load (PR: [#70467](https://github.com/dotnet/roslyn/pull/70467))
  * Include evaluation results in binlogs (PR: [#70472](https://github.com/dotnet/roslyn/pull/70472))
  * Fix failure to start language server when pipe name is too long (PR: [#70492](https://github.com/dotnet/roslyn/pull/70492))
* Update Razor to 7.0.0-preview.23528.1 (PR: [#6607](https://github.com/dotnet/vscode-csharp/pull/6607))
* Support platform agnostic Razor language server & telemetry (PR: [#6600](https://github.com/dotnet/vscode-csharp/pull/6600))
* Fix issue where runtime from PATH was not found when only 7.0.100 SDK was installed (PR: [#6601](https://github.com/dotnet/vscode-csharp/pull/6601))

## 2.8.23
* Fix various failed requests in razor documents (PR: [#6580](https://github.com/dotnet/vscode-csharp/pull/6580))
* Update Roslyn to 4.9.0-1.23519.13 (PR: [#6573](https://github.com/dotnet/vscode-csharp/pull/6573))
  * Filter completion list only with text before cursor (PR: [#70448](https://github.com/dotnet/roslyn/pull/70448))
  * Bump MSBuild.StructuredLogger package version (PR: [#70157](https://github.com/dotnet/roslyn/pull/70157))
  * Fix issues launching the server when a .NET 7 preview 7 runtime is installed (PR: [#70446](https://github.com/dotnet/roslyn/pull/70446))
  * Ensure LSP didChange processing matches specification. (PR: [#70407](https://github.com/dotnet/roslyn/pull/70407))
* Debugger: Support Console.ReadLine with 'internalConsole' (PR: [#6569](https://github.com/dotnet/vscode-csharp/pull/6569))
* Add dotnet executable path in list runtimes command (PR: [#6559](https://github.com/dotnet/vscode-csharp/pull/6559))
* Update Razor to 7.0.0-preview.23516.2 (PR: [#6550](https://github.com/dotnet/vscode-csharp/pull/6550))
  * Make sure correct info is passed in code action resolve (PR: [razor#9420](https://github.com/dotnet/razor/pull/9420))

## 2.7.25
* Update Razor to 7.0.0-preview.23513.5 (PR: [#6551](https://github.com/dotnet/vscode-csharp/pull/6551))
  * Reduce noisy errors when viewing git diff (PR: [razor#9407](https://github.com/dotnet/razor/pull/9407))
* Update Roslyn to 4.9.0-1.23513.7 (PR: [#6548](https://github.com/dotnet/vscode-csharp/pull/6548))
  * Fix extraneous error when connecting to devkit (PR: [#70298](https://github.com/dotnet/roslyn/pull/70298))
  * Add support for using Mono to load .NET Framework projects on macOS and Linux (PR: [#70263](https://github.com/dotnet/roslyn/pull/70263))
  * Fix source generator and analyzer output not being recognized if you didn't have C# Dev Kit installed (PR: [#70331](https://github.com/dotnet/roslyn/pull/70331))
* Hide debug console when using `"console": "integratedTerminal"` (PR: [#6523](https://github.com/dotnet/vscode-csharp/pull/6523))
* Fix dotnet path resolution when using snap installed packages (PR: [#6515](https://github.com/dotnet/vscode-csharp/pull/6515))
* Track debugging sessions until csdevkit is initialized (PR: [#6480](https://github.com/dotnet/vscode-csharp/pull/6480))
* Update vsdbg and vsdbg-ui to 2.0.4 (PR: [#6517](https://github.com/dotnet/vscode-csharp/pull/6517))
* Debugger: better handle long strings ([#6496](https://github.com/dotnet/vscode-csharp/issues/6496)). Strings are truncated if they are longer than 1024 UTF-16 characters, but the full value  up to 5,242,880 characters or 10 megabytes, is available using 'Copy Value' in the watch or variables window. Truncated strings will end with '...'.
* Add setting to control Razor component commit behaviour (PR: [#6506](https://github.com/dotnet/vscode-csharp/pull/6506))
* Razor textmate colorization fixes (PR: [#6514](https://github.com/dotnet/vscode-csharp/pull/6514))
* Update Razor version to 7.0.0-preview.23475.5 (PR: [#6506](https://github.com/dotnet/vscode-csharp/pull/6506))
  * Add setting for whether to complete components with space (PR: [razor#9379](https://github.com/dotnet/razor/pull/9379))

## 2.6.24
* Update Roslyn version to 4.9.0-1.23506.7 (PR: [#6447](https://github.com/dotnet/vscode-csharp/pull/6447))
  * Fix various issues with project loading and allow fallbacks to .NET framework msbuild (PR: [#70240](https://github.com/dotnet/roslyn/pull/70240))
* Fix some Razor colorization issues (PR: [#6502](https://github.com/dotnet/vscode-csharp/pull/6502))
* Fire telemetry if Razor buffers get out of sync, and recover from same (PR: [#6494](https://github.com/dotnet/vscode-csharp/pull/6494))
* Update OmniSharp to 1.39.10 (PR: [#6491](https://github.com/dotnet/vscode-csharp/pull/6491))
  * Add RazorComplier EA to support razor generators (PR: [omnisharp-roslyn#2572](https://github.com/OmniSharp/omnisharp-roslyn/pull/2572))
  * Add Kind parameter to InlayHint (PR: [omnisharp-roslyn#2570](https://github.dev/OmniSharp/omnisharp-roslyn/pull/2570))
  * Do not include commit characters if the typed span is empty (PR: [omnisharp-roslyn#2569](https://github.com/OmniSharp/omnisharp-roslyn/pull/2569))
  * Update Roslyn to version 4.9.0-1.23504.3 (PR: [omnisharp-roslyn#2567](https://github.com/OmniSharp/omnisharp-roslyn/pull/2567))
  * Async diagnostics analyzer work queue (PR: [omnisharp-roslyn#2351](https://github.com/OmniSharp/omnisharp-roslyn/pull/2351))
  * Add InlayHint implementation to OmniSharp.LSP (PR: [omnisharp-roslyn#2566](https://github.com/OmniSharp/omnisharp-roslyn/pull/2566))
  * Include the project file name when invoking `dotnet build` (PR: [omnisharp-roslyn#2565](https://github.com/OmniSharp/omnisharp-roslyn/pull/2565))
  * feat: ignore diagnostics for generated code (PR: [omnisharp-roslyn#2509](https://github.com/OmniSharp/omnisharp-roslyn/pull/2509))
  * Update documentation to reflect --stdio flag deprecation (#2439) (PR: [omnisharp-roslyn#2554](https://github.com/OmniSharp/omnisharp-roslyn/pull/2554))
  * Update Roslyn to version 4.8.0-1.23374.10 (PR: [omnisharp-roslyn#2555](https://github.com/OmniSharp/omnisharp-roslyn/pull/2555))
  * Use double quote when quoting un script path (PR: [omnisharp-roslyn#2553](https://github.com/OmniSharp/omnisharp-roslyn/pull/2553))
  * Use core LSP TokenTypes where possible and validate token names (PR: [omnisharp-roslyn#2548](https://github.com/OmniSharp/omnisharp-roslyn/pull/2548))
* Add Razor C# semantic tokens support in VS Code (PR: [#6489](https://github.com/dotnet/vscode-csharp/pull/6489))
* Update Roslyn version to 4.9.0-1.23502.8 (PR: [#6447](https://github.com/dotnet/vscode-csharp/pull/6447))
  * Update Razor project configuration file name (PR: [#70156](https://github.com/dotnet/roslyn/pull/70156))* added support.md file (PR: [#6478](https://github.com/dotnet/vscode-csharp/pull/6478))
* Debugger: Improve the display of various debug configurations and snippets (PR: [#6456](https://github.com/dotnet/vscode-csharp/pull/6456))
* Initialize Razor even if Razor doc isn't opened yet (PR: [#6473](https://github.com/dotnet/vscode-csharp/pull/6473))

## 2.5.30
* Add code action fix all support (PR: [#6310](https://github.com/dotnet/vscode-csharp/pull/6310))
* Update Roslyn version to 4.9.0-1.23502.2 (PR: [#6463](https://github.com/dotnet/vscode-csharp/pull/6463))
  * Fix issue loading projects on .NET 8 RC2 (PR: [#70196](https://github.com/dotnet/roslyn/pull/70196))
  * Fix exception thrown by outdated version of ExternalAccess.RazorCompiler.dll (PR: [#70716](https://github.com/dotnet/roslyn/pull/70176))
  * Fix crash when navigating to .NET Framework reference assemblies (PR: [#69936](https://github.com/dotnet/roslyn/pull/69936))
  * Fix error when only the invariant culture is available (PR: [#70096](https://github.com/dotnet/roslyn/pull/70096))
* Update Razor version to 7.0.0-preview.23475.5 (PR: [#6449](https://github.com/dotnet/vscode-csharp/pull/6449))
  * Add Razor language server telemetry when DevKit is installed (PR: [#9283](https://github.com/dotnet/razor/pull/9283))
  * Use message pack for project.razor.* configuration file (PR: [#9270](https://github.com/dotnet/razor/pull/9270))
* Fix issues with Razor completion (PR: [#6441](https://github.com/dotnet/vscode-csharp/pull/6441))
* Add option to collect crash dumps on language server crash (PR: [#6438](https://github.com/dotnet/vscode-csharp/pull/6438))
* Add support for multilaunch for Blazorwasm (PR: [#6432](https://github.com/dotnet/vscode-csharp/pull/6432))
* Fix issue in Razor new file formatting (PR: [#6429](https://github.com/dotnet/vscode-csharp/pull/6429))
* Fix issue in debug tests where tests would complete before the debugger attached (PR: [#6415](https://github.com/dotnet/vscode-csharp/pull/6415))
* Hide certain debugger launch configurations when devkit is installed (PR: [#6405](https://github.com/dotnet/vscode-csharp/pull/6405))
* Fix issue where build errors were not parsed correctly in the problems list (PR: [#6340](https://github.com/dotnet/vscode-csharp/pull/6340))
* Update debugger packages to 2.0.3 (PR: [#6401](https://github.com/dotnet/vscode-csharp/pull/6401))

## 2.4.4
* Respect `dotnet.preferCSharpExtension` option (PR: [#6390](https://github.com/dotnet/vscode-csharp/pull/6390))

## 2.3.27
* Update Roslyn version to 4.8.0-3.23470.7 (PR: [#6408](https://github.com/dotnet/vscode-csharp/pull/6408))
  * Update NuGet version to fix issues loading projects with .NET 8 RC2 (PR: [#70023](https://github.com/dotnet/roslyn/pull/70023))
  * Update MSBuildLocator version to fix issues loading projects when only .NET 6 is installed (PR: [#70038](https://github.com/dotnet/roslyn/pull/70038))
  * Remove diagnostic source name (PR: [#69939](https://github.com/dotnet/roslyn/pull/69939))
  * Fix fold all regions (PR: [#69817](https://github.com/dotnet/roslyn/pull/69817))
  * Fix escaping and wrapping in hover (PR: [#69893](https://github.com/dotnet/roslyn/pull/69893))
  * Fix error in override completion when containing type does not exist (PR: [#69855](https://github.com/dotnet/roslyn/pull/69855))
* Fix issues generating assets in Omnisharp (PR: [#6380](https://github.com/dotnet/vscode-csharp/pull/6380))
* Allow Razor to format new documents via Roslyn (PR: [#6329](https://github.com/dotnet/vscode-csharp/pull/6329))
* Switch to named pipes for client <-> server communication (PR: [#6351](https://github.com/dotnet/vscode-csharp/pull/6351))
* Only show clr debugger if on Windows (PR: [#6359](https://github.com/dotnet/vscode-csharp/pull/6359))
* Update Razor version to 7.0.0-preview.23456.2 (PR: [#6304](https://github.com/dotnet/vscode-csharp/pull/6304))
  * Fixes regression where semantic colors for razor components appear as red
* Make completion complex text edits more robust (PR: [#6325](https://github.com/dotnet/vscode-csharp/pull/6325))
* Fix dotnet info when the dotnet path contains spaces (PR: [#6334](https://github.com/dotnet/vscode-csharp/pull/6334))
* Add support for specifying a .runsettings file when using Roslyn LSP (PR: [#6265](https://github.com/dotnet/vscode-csharp/pull/6265))
* Update Roslyn version (PR: [#6265](https://github.com/dotnet/vscode-csharp/pull/6265))
  * Add server support for .runsettings in unit tests (PR: [#69792](https://github.com/dotnet/roslyn/pull/69792))
  * Log more information when we're unable to parse a URI (PR: [#69840](https://github.com/dotnet/roslyn/pull/69840))
  * Bump ICSharpCode.Decompiler to 8.1.0.745 (PR: [#69772](https://github.com/dotnet/roslyn/pull/69772))
  * Fix override completion erroring when framework assemblies are not found (PR: [#69795](https://github.com/dotnet/roslyn/pull/69795))
* Remove test only files from vsix (PR: [#6332](https://github.com/dotnet/vscode-csharp/pull/6332))
* Fix override completion when drive letter casing does not match (PR: [#6315](https://github.com/dotnet/vscode-csharp/pull/6315))
* Allow the server path to be specified by the `DOTNET_ROSLYN_SERVER_PATH` environment variable (PR: [#6316](https://github.com/dotnet/vscode-csharp/pull/6316))

## 2.2.10
* Update Roslyn version
  * Includes better support for .NET 8 and .NET Framework-targeting projects (PR: [#69616](https://github.com/dotnet/roslyn/pull/69616))
    * This should fix a number of reports where projects don't have full IntelliSense. .NET Framework projects on Windows should load without errors. .NET Framework targeting projects on Mac and Linux which would use Mono are still processed as if they are .NET Core projects and may not load correctly; support for Mono is coming in a future update.
  * Fix issues where some projects fail to load being unable to find NuGet.Frameworks (PR: [#69824](https://github.com/dotnet/roslyn/pull/69824))
* Update Razor to 7.0.0-preview.23455.5 (PR: [#6291](https://github.com/dotnet/vscode-csharp/pull/6291))
  * Fixes issue reading razor.format.enable and other options (PR: [dotnet/razor#9240](https://github.com/dotnet/razor/issues/9240))
* Fix parsing of tasks.json with comments in certain locations (PR: [#6288](https://github.com/dotnet/vscode-csharp/pull/6288))
* Fix Razor browser discovery issues on Mac and Linux `DOTNET_ROSLYN_SERVER_PATH` environment variable (PR: [#6269](https://github.com/dotnet/vscode-csharp/pull/6269))

## 2.1.2
* Update Roslyn version (PR: [#6264](https://github.com/dotnet/vscode-csharp/pull/6264))
  * Upgrade MSBuildLocator to fix homebrew dotnet resolution (PR: [#69769](https://github.com/dotnet/roslyn/pull/69769))
  * Fix reported ExeName / ExeVersion (PR: [#69771](https://github.com/dotnet/roslyn/pull/69771))
* Add 1.x setting names to migrated settings descriptions (PR: [#6266](https://github.com/dotnet/vscode-csharp/pull/6266))

## 2.0.436
* Update Roslyn version (PR: [#6245](https://github.com/dotnet/vscode-csharp/pull/6245))
  * Fix import completion (PR: [#69691](https://github.com/dotnet/roslyn/pull/69691))
  * Reduce overhead on semantic token refresh requests (PR: [#69690](https://github.com/dotnet/roslyn/pull/69690))
* Localization additions (PR: [#6233](https://github.com/dotnet/vscode-csharp/pull/6233), [#6233](https://github.com/dotnet/vscode-csharp/pull/6233), [#6206](https://github.com/dotnet/vscode-csharp/pull/6206), [#6196](https://github.com/dotnet/vscode-csharp/pull/6196))
* Fix specific case where razor formatting no longer worked (PR: [#6195](https://github.com/dotnet/vscode-csharp/pull/6236))
* Fix quoting bug in extension paths (PR: [#6228](https://github.com/dotnet/vscode-csharp/pull/6228))
* Fix Razor mapping errors in the log (PR: [#6209](https://github.com/dotnet/vscode-csharp/pull/6209))
* Add the configuration option for creating binlogs (PR: [#6155](https://github.com/dotnet/vscode-csharp/pull/6155))
* Update option changes toast to reload window (PR: [#6174](https://github.com/dotnet/vscode-csharp/pull/6174))
* Update Roslyn version (PR: [#6205](https://github.com/dotnet/vscode-csharp/pull/6205))
  * Add option to capture binlogs for design time builds (PR: [#69572](https://github.com/dotnet/roslyn/pull/69572))
  * Enable decompilation support (PR: [#69501](https://github.com/dotnet/roslyn/pull/69501))
  * Fix move type adding to the root folder (PR: [#68995](https://github.com/dotnet/roslyn/pull/68995))
  * Add support for compilation end diagnostics (PR: [#69541](https://github.com/dotnet/roslyn/pull/69541))
* Bump Razor to 7.0.0-preview.23421.4 (PR: [#6195](https://github.com/dotnet/vscode-csharp/pull/6195))

## 2.0.416
* Fix UriFormatException during dotnet SDK resolution when symlinks are involved (PR: [#6230](https://github.com/dotnet/vscode-csharp/pull/6230))

## 2.0.413
* Update Roslyn version (PR: [#6192](https://github.com/dotnet/vscode-csharp/pull/6192))
  * Include CodeLens on more types and members (PR: [#69608](https://github.com/dotnet/roslyn/pull/69608))
  * Improve performance when computing colorization (PR: [#69496](https://github.com/dotnet/roslyn/pull/69496))
* Fix dotnet resolver returning incorrect runtime in certain scenarios (PR: [#6180](https://github.com/dotnet/vscode-csharp/pull/6180))
* Fix issue resolving .NET 7 runtimes from path (PR: [#6175](https://github.com/dotnet/vscode-csharp/pull/6175))
* Fix URI issue when loading Razor files (PR: [#6168](https://github.com/dotnet/vscode-csharp/pull/6168))
* Bump Razor to 7.0.0-preview.23417.3 (PR: [#6165](https://github.com/dotnet/vscode-csharp/pull/6165))
  * Fix various textDocument/foldingRange issues (PR: [#9134](https://github.com/dotnet/razor/pull/9134))
* Clarify dotnet path option description (PR: [#6164](https://github.com/dotnet/vscode-csharp/pull/6164))
* Handle multiple dotnet on path and symlinks (PR: [#6152](https://github.com/dotnet/vscode-csharp/pull/6152))
* Localize Roslyn options (PR: [#6136](https://github.com/dotnet/vscode-csharp/pull/6136))
* Show a prompt if we have more than one solution file (PR: [#6132](https://github.com/dotnet/vscode-csharp/pull/6132))

## 2.0.376
* Update Roslyn (PR: [#6131](https://github.com/dotnet/vscode-csharp/pull/6131))
  * Only show toast for project load failures (PR: [#69494](https://github.com/dotnet/roslyn/pull/69494))
* Fix enter inserting /// on the incorrect line in documentation comments  (PR: [#6130](https://github.com/dotnet/vscode-csharp/pull/6130))
* Build extension with node 18 LTS (PR: [#6128](https://github.com/dotnet/vscode-csharp/pull/6128))
* Update localized strings (PR: [#6129](https://github.com/dotnet/vscode-csharp/pull/6129))
* Fix paths for package.nls.*.json (PR: [#6121](https://github.com/dotnet/vscode-csharp/pull/6121))
* Add request to prepare for build diagnostic de-dupping (PR: [#6113](https://github.com/dotnet/vscode-csharp/pull/6113))
* Support unit test debugging options in Roslyn LSP (PR: [#6110](https://github.com/dotnet/vscode-csharp/pull/6110))
* Fix loading of package.nls.*.json (PR: [#6118](https://github.com/dotnet/vscode-csharp/pull/6118))
* Add localization infrastructure to debugger package.json strings (PR: [#6088](https://github.com/dotnet/vscode-csharp/pull/6088))
* Adjust C# semantic token scopes to better match 1.26 (PR: [#6094](https://github.com/dotnet/vscode-csharp/pull/6094))
* Update Razor to 7.0.0-preview.23410.1 (PR: [#6105](https://github.com/dotnet/vscode-csharp/pull/6105))
* Implement razor support for method simplification (PR: [#5982](https://github.com/dotnet/vscode-csharp/pull/5982))
* Attempt to find a valid dotnet version from PATH before using runtime installer extension (PR: [#6074](https://github.com/dotnet/vscode-csharp/pull/6074))
* Respect background analysis scope option in O# (PR: [#6058](https://github.com/dotnet/vscode-csharp/pull/6058))
* Add localization infrastructure to debugger components (PR: [#6064](https://github.com/dotnet/vscode-csharp/pull/6064))
* Add coreclr as a search keyword (PR: [#6071](https://github.com/dotnet/vscode-csharp/pull/6071))

## 2.0.357
* Fix issue with Go to Definition giving a "unable to resolve reference" error (PR: [#69453](https://github.com/dotnet/roslyn/pull/69453))
* Fix completion items not correctly adding using statements to the top of the file (PR: [#69454](https://github.com/dotnet/roslyn/pull/69454))
* Improve de-duping of project load failure toasts (PR: [#69455](https://github.com/dotnet/roslyn/pull/69455))
* Bring VS Code telemetry reporting in DevKit to match log level requirements of VS (PR: [#69444](https://github.com/dotnet/roslyn/pull/69444))
* Update Razor to 7.0.0-preview.23410.1 (PR: [#6107](https://github.com/dotnet/vscode-csharp/pull/6107))

## 2.0.346
* Change how hint diagnostics are shown so they aren't shown as blue squiggles (PR: [#69403](https://github.com/dotnet/roslyn/pull/69403))
* Load projects even if there is no solution file (PR: [#6062](https://github.com/dotnet/vscode-csharp/pull/6062))
* Show toast when project loading fails (PR: [#6060](https://github.com/dotnet/vscode-csharp/pull/6060))
* Fix misleading LSP server logs (PR: [#69378](https://github.com/dotnet/roslyn/pull/69378))
* Add support for code lens enable/disable options to roslyn LSP (PR: [#6001](https://github.com/dotnet/vscode-csharp/pull/6001))
* Onboard Localization pipeline (PR: [#5990](https://github.com/dotnet/vscode-csharp/pull/5990))
* Enable loading translated strings from Razor TS code (PR: [#5962](https://github.com/dotnet/vscode-csharp/pull/5962))
* Update typescript and eslint plugin to remove build warning (PR: [6002](https://github.com/dotnet/vscode-csharp/pull/6002))
* Report how the extension was activated (PR: [#6043](https://github.com/dotnet/vscode-csharp/pull/6043))
* Update Razor to 7.0.0-preview.23410.1 (PR: [#6105](https://github.com/dotnet/vscode-csharp/pull/6105))

## 2.0.328
* Update Roslyn to 4.8.0-1.23403.6 (PR: [#6003](https://github.com/dotnet/vscode-csharp/pull/6003))
  * Fix issue where the ProcessFrameworkReferences task causes projects to fail to load (PR: [#69354](https://github.com/dotnet/roslyn/pull/69354))
  * Emulate suggestion mode in LSP completion by always soft-selecting (PR: [#69327](https://github.com/dotnet/roslyn/pull/69327))
* Updated CHANGELOG.md (PR: [#5992](https://github.com/dotnet/vscode-csharp/pull/5992))
* Add back accidentally-excluded changelog file from the extension (PR: [#5991](https://github.com/dotnet/vscode-csharp/pull/5991))

## 2.0.320
We are switching to the new Roslyn language server as the default. We recognize that this version doesn’t have full parity with the OmniSharp version. If you need one of these features before we can get to it, you can switch back to OmniSharp by following these [instructions](https://github.com/dotnet/vscode-csharp#how-to-use-omnisharp).

## 1.26.1
* Update Razor to 7.0.0-preview.23363.1
  * Remove unsupported features (PR: [#8951](https://github.com/dotnet/razor/pull/8951))

## 1.26.0
* Update OmniSharp to 1.39.7 (PR: [#5840](https://github.com/OmniSharp/omnisharp-vscode/pull/5840))
  * Respond to breaking change in VSCode 1.79.2 in completion (PR:[omnisharp-roslyn#2542](https://github.com/OmniSharp/omnisharp-roslyn/pull/2542))
  * Use dotnet-cake for build (PR:[omnisharp-roslyn#2537](https://github.com/OmniSharp/omnisharp-roslyn/pull/2537))
  * Implement LSP CodeAction resolve (PR:[omnisharp-roslyn#2467](https://github.com/OmniSharp/omnisharp-roslyn/pull/2467))
* Update debugger to 1.25.8 (PR: [#5706](https://github.com/OmniSharp/omnisharp-vscode/pull/5706))
* Updates to README, default branch and repo link (PR: [#5709](https://github.com/OmniSharp/omnisharp-vscode/pull/5709))

## 1.25.9
* Readme updates (PR: [#5705](https://github.com/OmniSharp/omnisharp-vscode/pull/5672))

## 1.25.8
* Update Razor to 7.0.0-preview.23258.1 (PR: [#5672](https://github.com/OmniSharp/omnisharp-vscode/pull/5672))
  * Fix issue with Razor attribute hover and Go to Definition (PR: [#8653](https://github.com/dotnet/razor/pull/8653))
  * Fix issue with Razor formatting (PR: [#8669](https://github.com/dotnet/razor/pull/8669))
* Combine test compile step into normal compile (PR: [#5666](https://github.com/OmniSharp/omnisharp-vscode/pull/5666))

## 1.25.7
* Update Razor to 7.0.0-preview.23224.3 (PR: [#5660](https://github.com/OmniSharp/omnisharp-vscode/pull/5660))
  * Fix issue with Razor diagnostics (PR: [#8622](https://github.com/dotnet/razor/pull/8622))

## 1.25.6
* Update Razor to 7.0.0-preview.23213.4 (PR: [#5655](https://github.com/OmniSharp/omnisharp-vscode/pull/5655))
  * Fix serialization issue with project.razor.json files (PR: [#8489](https://github.com/dotnet/razor/pull/8489))

## 1.25.5
* Update Razor to 7.0.0-preview.23124.2 (PR: [#5604](https://github.com/OmniSharp/omnisharp-vscode/pull/5604))
  * Fix colorization when nullable operators are present ([#5570](https://github.com/OmniSharp/omnisharp-vscode/pull/5570))
  * Add C#/HTML folding range support ([razor#8309](https://github.com/dotnet/razor/pull/8309))
  * Formatting fixes ([razor#8318](https://github.com/dotnet/razor/pull/8318))
* Update OmniSharp to 1.39.6 (PR: [#5625](https://github.com/OmniSharp/omnisharp-vscode/pull/5625))
  * Use new VS threading version to match with Razor (PR:[omnisharp-roslyn#2518](https://github.com/OmniSharp/omnisharp-roslyn/pull/2518))
* Update OmniSharp to 1.39.5 (PR: [#5618](https://github.com/OmniSharp/omnisharp-vscode/pull/5618))
  * Update to Roslyn `4.6.0-3.23153.5` (PR:[omnisharp-roslyn#2511](https://github.com/OmniSharp/omnisharp-roslyn/pull/2511))
  * Report to the client if the project being loaded is sdk style (PR:[omnisharp-roslyn#2502](https://github.com/OmniSharp/omnisharp-roslyn/pull/2502))
* Automatically trust ASP.NET Core HTTPS development certificate (PR: [#5589](https://github.com/OmniSharp/omnisharp-vscode/pull/5589))
* Improve outline to be less verbose (PR: [#5536](https://github.com/OmniSharp/omnisharp-vscode/pull/5536))
* Update Razor TextMate grammar (PR: [#5570](https://github.com/OmniSharp/omnisharp-vscode/pull/5570))

## 1.25.4
* Update OmniSharp to 1.39.4 (PR: [#5544](https://github.com/OmniSharp/omnisharp-vscode/pull/5544))
  * Disable snippets in sync completion (PR: [omnisharp-roslyn#2497](https://github.com/OmniSharp/omnisharp-roslyn/pull/2497))

## 1.25.3
* Update Razor to 7.0.0-preview.23067.5 (PR: [#5543](https://github.com/OmniSharp/omnisharp-vscode/pull/5543))
  * Enables support for arm64
  * Adds document color and color presentation features
* Update OmniSharp to 1.39.3 (PR: [#5520](https://github.com/OmniSharp/omnisharp-vscode/pull/5520))
  * Update Roslyn to 4.5.0-2.22527.10 (PR: [omnisharp-roslyn#2486](https://github.com/OmniSharp/omnisharp-roslyn/pull/2486))
  * Update dotnet-script dependencies to 1.4.0 (PR: [omnisharp-roslyn#2477](https://github.com/OmniSharp/omnisharp-roslyn/pull/2477))
  * Register the LanguageServerLogger only once (PR: [omnisharp-roslyn#2473](https://github.com/OmniSharp/omnisharp-roslyn/pull/2473))
* Fix extension not finding mono. ([#5454](https://github.com/OmniSharp/omnisharp-vscode/issues/5454), PR: [#5484](https://github.com/OmniSharp/omnisharp-vscode/pull/5484))
* Update debugger to 1.25.3. ([#5460](https://github.com/OmniSharp/omnisharp-vscode/issues/5460), PR: [#5489](https://github.com/OmniSharp/omnisharp-vscode/pull/5489))
* Fix missing fix all commands. ([#5474](https://github.com/OmniSharp/omnisharp-vscode/issues/5474), PR: [#5475](https://github.com/OmniSharp/omnisharp-vscode/pull/5475))
* Fix failure to parse sdk version and sdk path. ([#2412](https://github.com/OmniSharp/omnisharp-vscode/issues/2412), PR: [#5459](https://github.com/OmniSharp/omnisharp-vscode/pull/5459))
* Handle custom OmniSharp launch paths. ([#5449](https://github.com/OmniSharp/omnisharp-vscode/issues/5449), PR: [#5456](https://github.com/OmniSharp/omnisharp-vscode/pull/5456))

## 1.25.2
* Fix the MSBuild version check on Unix and Linux platforms. ([#5443](https://github.com/OmniSharp/omnisharp-vscode/issues/5443), PR: [#5444](https://github.com/OmniSharp/omnisharp-vscode/pull/5444))

## 1.25.1
* When `.editorconfig` support is enabled (on by default), it is given higher priority over the legacy `omnisharp.json` code formatting options. If you would like to have the `omnisharp.json` code formatting options respected, disable `.editorconfig` support by setting `"omnisharp.enableEditorConfigSupport": false`
* Fix csharp.unitTestDebuggingOptions description ([#5309](https://github.com/OmniSharp/omnisharp-vscode/issues/5309), PR: [#5315](https://github.com/OmniSharp/omnisharp-vscode/pull/5315))
* Removed quoted examples from omnisharp.sdkVersion and omnisharp.sdkPath ([omnisharp-roslyn#2412](https://github.com/OmniSharp/omnisharp-roslyn/issues/2412), PR: [#5301](https://github.com/OmniSharp/omnisharp-vscode/pull/5301))
* Added an example on how to launch swagger ui (PR: [#5283](https://github.com/OmniSharp/omnisharp-vscode/pull/5283))
* Package manager nullability fixes (PR: [#5255](https://github.com/OmniSharp/omnisharp-vscode/pull/5255))
* Return all launch targets when `maxProjectResults` is set to 0 ([#5227](https://github.com/OmniSharp/omnisharp-vscode/issues/5227), PR: [#5241](https://github.com/OmniSharp/omnisharp-vscode/pull/5241))
* Clear nullability warnings (PR: [#5236](https://github.com/OmniSharp/omnisharp-vscode/pull/5236))
*  Provide actionable error messages for .NET SDK issues ([#5223](https://github.com/OmniSharp/omnisharp-vscode/issues/5223), PR: [#5225](https://github.com/OmniSharp/omnisharp-vscode/pull/5225))
* Clear all strict mode violations in src & enforce strict mode (PR: [#5407](https://github.com/OmniSharp/omnisharp-vscode/pull/5407))
* Update debugger to 1.25.1  (PR: [#5415](https://github.com/OmniSharp/omnisharp-vscode/pull/5415))
* Add github action to merge master to feature branches (PR: [#5414](https://github.com/OmniSharp/omnisharp-vscode/pull/5414)
* coreclr-debug nullability (PR: [#5405](https://github.com/OmniSharp/omnisharp-vscode/pull/5405))
* Feature nullability (PR: [#5400](https://github.com/OmniSharp/omnisharp-vscode/pull/5400))
* Add prerequisite check for running OmniSharp. (PR: [#5397](https://github.com/OmniSharp/omnisharp-vscode/pull/5397))
* Add projectFilesIncludePattern & projectFilesExcludePattern options. (PR: [#5382)](https://github.com/OmniSharp/omnisharp-vscode/pull/5382))
* Replaced the deprecated ProjectDiagnosticStatus event with the newer BackgroundDiagnosticStatus. (PR: [#5372](https://github.com/OmniSharp/omnisharp-vscode/pull/5372))
* Implement the "dotNetCliPaths" option to support custom .NET SDK locations (PR: [#4738](https://github.com/OmniSharp/omnisharp-vscode/pull/4738))
* Make the sourceGeneratedDocumentProvider always lazy (PR: [#5340](https://github.com/OmniSharp/omnisharp-vscode/pull/5340))
* Reintroduce typing version bumps (PR: [#5350](https://github.com/OmniSharp/omnisharp-vscode/pull/5350))
* Observer nullability fixes (PR: [#5349](https://github.com/OmniSharp/omnisharp-vscode/pull/5349))
* Support generated files in referenceProvider (PR: [#5339](https://github.com/OmniSharp/omnisharp-vscode/pull/5339))
* Provide source generated file info for workspace symbols (PR: [#5338](https://github.com/OmniSharp/omnisharp-vscode/pull/5338))
* Provide CodeActionKind for code actions (PR: [#5337](https://github.com/OmniSharp/omnisharp-vscode/pull/5337))
* Fix alpine support (PR: [#5322](https://github.com/OmniSharp/omnisharp-vscode/pull/5322))
* Update OmniSharp to 1.39.2 (PR: [#5319](<TODO>))
  * Update Roslyn to 4.4.0 1.22369.1 (PR: [omnisharp-roslyn#2420](https://github.com/OmniSharp/omnisharp-roslyn/pull/2420))
  * Simplify some code (PR: [omnisharp-roslyn#2370](https://github.com/OmniSharp/omnisharp-roslyn/pull/2370))
  * Return meaningful error when pinned SDK version is not found. ([#5128](https://github.com/OmniSharp/omnisharp-vscode/issues/5128), PR: [omnisharp-roslyn#2403](https://github.com/OmniSharp/omnisharp-roslyn/pull/2403))
  * Added support for `<WarningsAsErrors>nullable</WarningsAsErrors>` ([omnisharp-roslyn#2292](https://github.com/OmniSharp/omnisharp-roslyn/issues/2292), PR: [omnisharp-roslyn#2406](https://github.com/OmniSharp/omnisharp-roslyn/pull/2406))
  * Removed nuget versioning reference from OmniSharp.Abstractions ([omnisharp-roslyn#2410](https://github.com/OmniSharp/omnisharp-roslyn/issues/2410), PR: [omnisharp-roslyn#2414](https://github.com/OmniSharp/omnisharp-roslyn/pull/2414))
  * Bump Newtonsoft.Json to 13.0.1 (PR: [omnisharp-roslyn#2415](https://github.com/OmniSharp/omnisharp-roslyn/pull/2415))
  * Add missing LSP Handlers (PR: [omnisharp-roslyn#2463](https://github.com/OmniSharp/omnisharp-roslyn/pull/2463))
  * Add the TypeDefinitionHandler to the LSP (PR: [omnisharp-roslyn#2461](https://github.com/OmniSharp/omnisharp-roslyn/pull/2461))
  * Update .NET SDK and Roslyn (PR: [omnisharp-roslyn#2458](https://github.com/OmniSharp/omnisharp-roslyn/pull/2458))
  * Don't remap line mappings in Razor files (PR: [omnisharp-roslyn#2460](https://github.com/OmniSharp/omnisharp-roslyn/pull/2460))
  * Adds missing /open endpoint to Cake (PR: [omnisharp-roslyn#2457](https://github.com/OmniSharp/omnisharp-roslyn/pull/2457))
  * Adds V2 Highlight support to Cake (PR: [omnisharp-roslyn#2456](https://github.com/OmniSharp/omnisharp-roslyn/pull/2456))
  * Include Cake bits in .NET 6 builds (PR: [omnisharp-roslyn#2455](https://github.com/OmniSharp/omnisharp-roslyn/pull/2455))
  * Host dependency cleanup (PR: [omnisharp-roslyn#2436](https://github.com/OmniSharp/omnisharp-roslyn/pull/2436))
  * Upgrade http driver to latest ASP.NET Core version when running in .NET 6 (PR: [omnisharp-roslyn#2446](https://github.com/OmniSharp/omnisharp-roslyn/pull/2446))
  * updated IL Spy to 7.2.1.6856 (PR: [omnisharp-roslyn#2447](https://github.com/OmniSharp/omnisharp-roslyn/pull/2447))
  * Add comment to app.config explaining System.Memory versioning (PR: [omnisharp-roslyn#2444](https://github.com/OmniSharp/omnisharp-roslyn/pull/2444))
  * Add explicit System.Memory dependency to Hosts (PR: [omnisharp-roslyn#2443](https://github.com/OmniSharp/omnisharp-roslyn/pull/2443))
  * Return generated file info for find references (PR: [omnisharp-roslyn#2434](https://github.com/OmniSharp/omnisharp-roslyn/pull/2434))
  * Support NUnit TheoryAttribute (PR: [omnisharp-roslyn#2435](https://github.com/OmniSharp/omnisharp-roslyn/pull/2435))
  * Provide SourceGeneratedFileInfo for workspace symbolls requests (PR: [omnisharp-roslyn#2431](https://github.com/OmniSharp/omnisharp-roslyn/pull/2431))
  * Take the first dotnet cli we find instead of the last one we find (match the comment) (PR: [omnisharp-roslyn#2427](https://github.com/OmniSharp/omnisharp-roslyn/pull/2427)]
  * Record whether a CodeAction is a fix or not (PR: [omnisharp-roslyn#2430](https://github.com/OmniSharp/omnisharp-roslyn/pull/2430))
  * Update VMs used in build CI. (PR: [omnisharp-roslyn#2425](https://github.com/OmniSharp/omnisharp-roslyn/pull/2425))
  * Only get first document's highlights (PR: [omnisharp-roslyn#2424](https://github.com/OmniSharp/omnisharp-roslyn/pull/2424))

## 1.25.0 (May 24th, 2022)
* Make SDK build of OmniSharp the default ([#5120](https://github.com/OmniSharp/omnisharp-vscode/issues/5120), PR: [#5176](https://github.com/OmniSharp/omnisharp-vscode/pull/5176))
* Add auto complete name to class, interface, enum, struct etc. snippets (PR: [#5198](https://github.com/OmniSharp/omnisharp-vscode/pull/5198))
* Add a fallback for ps in remoteProcessPickerScript ([#4096](https://github.com/OmniSharp/omnisharp-vscode/issues/4096), PR: [#5207](https://github.com/OmniSharp/omnisharp-vscode/pull/5207))
* Clear nullability warnings in server/omnisharp.ts (PR: [#5199](https://github.com/OmniSharp/omnisharp-vscode/pull/5199))
* Fix nullability for autoStart preferredPath (PR: [#5192](https://github.com/OmniSharp/omnisharp-vscode/pull/5192))
* coreclr debug configuration should support input variables for envFile ([#5102](https://github.com/OmniSharp/omnisharp-vscode/issues/5102), PR: [#5189](https://github.com/OmniSharp/omnisharp-vscode/pull/5189))
* Fix small spelling mistake (PR: [#5215](https://github.com/OmniSharp/omnisharp-vscode/pull/5215))
* Low-hanging nullable fruit (PR: [#5186](https://github.com/OmniSharp/omnisharp-vscode/pull/5186))
* Fire a buffer update instead of filechanged when active editor changes  ([#5216](https://github.com/OmniSharp/omnisharp-vscode/issues/5216), PR: [#5218](https://github.com/OmniSharp/omnisharp-vscode/pull/5218))
* Add support for InlayHint.TextEdits (PR: [#5177](https://github.com/OmniSharp/omnisharp-vscode/pull/5177))
* Fix .net6 OmniSharp acquisition on Linux arm64 (PR: [#5172](https://github.com/OmniSharp/omnisharp-vscode/pull/5172))
* Remove project.json reference in debugger.md (PR: [#5210](https://github.com/OmniSharp/omnisharp-vscode/pull/5210))
* Update debugger to 1.24.5 (PR: [#5211](https://github.com/OmniSharp/omnisharp-vscode/pull/5211))
  * Fixes [#5083](https://github.com/OmniSharp/omnisharp-vscode/issues/5083)
* Update OmniSharp to 1.39.0 (PR: [#5219](https://github.com/OmniSharp/omnisharp-vscode/pull/5219))
  * Update Roslyn to 4.3.0-2.22267.5 (PR: [omnisharp-roslyn#2401](https://github.com/OmniSharp/omnisharp-roslyn/pull/2401))
  * Fixed run script for Mono ([#5181](https://github.com/OmniSharp/omnisharp-vscode/issues/5181), [#5179](https://github.com/OmniSharp/omnisharp-vscode/issues/5179), PR: [omnisharp-roslyn##2398](https://github.com/OmniSharp/omnisharp-roslyn/pull/2398))
  * Fall back to /usr/lib/os-release if /etc/os-release doesn't exist (PR: [omnisharp-roslyn##2380](https://github.com/OmniSharp/omnisharp-roslyn/pull/2380))
  * Added support for linux-musl-x64 and linux-musl-arm64 ([omnisharp-roslyn##2366](https://github.com/OmniSharp/omnisharp-roslyn/issues/2366), PR: [omnisharp-roslyn##2395](https://github.com/OmniSharp/omnisharp-roslyn/pull/2395))
  * Enable GoToDefinition for symbols in metadata documents ([#4818](https://github.com/OmniSharp/omnisharp-vscode/issues/4818), PR: [omnisharp-roslyn##2390](https://github.com/OmniSharp/omnisharp-roslyn/pull/2390))
  * Use human readable doc in lsp's signature help ([omnisharp-roslyn##2372](https://github.com/OmniSharp/omnisharp-roslyn/issues/2372), PR: [omnisharp-roslyn##2392](https://github.com/OmniSharp/omnisharp-roslyn/pull/2392))
  * Add TextEdits support to InlayHints (PR: [omnisharp-roslyn##2385](https://github.com/OmniSharp/omnisharp-roslyn/pull/2385))
  * Fix Equals of AutoCompleteResponse and simplify some code (PR: [omnisharp-roslyn##2362](https://github.com/OmniSharp/omnisharp-roslyn/pull/2362))
  * Support O# running on .NET 7 SDKs (PR: [omnisharp-roslyn##2377](https://github.com/OmniSharp/omnisharp-roslyn/pull/2377))
  * Provide constructor accepting hostServices (PR: [omnisharp-roslyn##2373](https://github.com/OmniSharp/omnisharp-roslyn/pull/2373))
  * Typo fix ([omnisharp-roslyn##2374](https://github.com/OmniSharp/omnisharp-roslyn/pull/2374))
  * Update to latest .NET SDKs (PR: [omnisharp-roslyn##2378](https://github.com/OmniSharp/omnisharp-roslyn/pull/2378))
  * Remove MSBuild and Mono from release packages ([omnisharp-roslyn##2339](https://github.com/OmniSharp/omnisharp-roslyn/issues/2339), PR: [omnisharp-roslyn##2360](https://github.com/OmniSharp/omnisharp-roslyn/pull/2360))

## 1.24.4 (Apr 11th, 2022)
* Remove inlayHints from diff view (PR: [#5151](https://github.com/OmniSharp/omnisharp-vscode/pull/5151))
* Quote arguments containing spaces when launching OmniSharp ([#5150](https://github.com/OmniSharp/omnisharp-vscode/issues/5150), PR: [#5154](https://github.com/OmniSharp/omnisharp-vscode/pull/5154))

## 1.24.3 (Apr 1st, 2022)
* Fix OmniSharp not found issue on Mono ([#5140](https://github.com/OmniSharp/omnisharp-vscode/issues/5140), PR: [#5141](https://github.com/OmniSharp/omnisharp-vscode/pull/5141))

## 1.24.2 (Apr 1st, 2022)
* Support inlay hints ([#1932](https://github.com/OmniSharp/omnisharp-roslyn/issues/1932), PR: [#5107](https://github.com/OmniSharp/omnisharp-vscode/pull/5107))
* Pass "shell: true" as a spawn option when launching O# (PR: [#5125](https://github.com/OmniSharp/omnisharp-vscode/pull/5125))
* Add GoToTypeDefinition provider ([#4251](https://github.com/OmniSharp/omnisharp-vscode/issues/4251), PR: [#5094](https://github.com/OmniSharp/omnisharp-vscode/pull/5094))
* Quote launch paths when necessary ([#5099](https://github.com/OmniSharp/omnisharp-vscode/issues/5099), PR: [#5101](https://github.com/OmniSharp/omnisharp-vscode/pull/5101))
* Fix string escape for linux and unix (PR: [#5122](https://github.com/OmniSharp/omnisharp-vscode/pull/5122))
* Debounce diagnostic requests ([#5085](https://github.com/OmniSharp/omnisharp-vscode/issues/5085), PR: [#5089](https://github.com/OmniSharp/omnisharp-vscode/pull/5089))
* Add AnalyzeOpenDocumentsOnly (PR: [#5088](https://github.com/OmniSharp/omnisharp-vscode/pull/5088))
* Pass env variables from vstest to debugger ([#5131](https://github.com/OmniSharp/omnisharp-vscode/issues/5131), PR: [#5137](https://github.com/OmniSharp/omnisharp-vscode/pull/5137))
* Upgrade OmniSharp to 1.38.2:
    * Add analyze open documents only (PR: [omnisharp-roslyn#2346](https://github.com/OmniSharp/omnisharp-roslyn/pull/2346))
    * Create a new GoToTypeDefinition endpoint ([omnisharp-roslyn#2297](https://github.com/OmniSharp/omnisharp-roslyn/issues/2297), PR: [omnisharp-roslyn#2315](https://github.com/OmniSharp/omnisharp-roslyn/pull/2315))
    * Eliminate more instances of IWorkspaceOptionsProvider (PR: [omnisharp-roslyn#2343](https://github.com/OmniSharp/omnisharp-roslyn/pull/2343))
    * Update Build.md brew cask instructions (PR: [omnisharp-roslyn#2355](https://github.com/OmniSharp/omnisharp-roslyn/pull/2355))
    * Remove not used middleware extension methods and unify adding middleware (PR: [omnisharp-roslyn#2340](https://github.com/OmniSharp/omnisharp-roslyn/pull/2340))
    * Pass --overwrite when pushing build artifacts to azure (PR: [omnisharp-roslyn#2358](https://github.com/OmniSharp/omnisharp-roslyn/pull/2358))
    * Delete System.Configuration.ConfigurationManager from deployed packages ([#5113](https://github.com/OmniSharp/omnisharp-vscode/issues/5113), PR: [omnisharp-roslyn#2359](https://github.com/OmniSharp/omnisharp-roslyn/pull/2359))
    * Support inlay hints (PR: [omnisharp-roslyn#2357](https://github.com/OmniSharp/omnisharp-roslyn/pull/2357))
    * Update build tools to match .NET SDK 6.0.201 ([omnisharp-roslyn#2363](https://github.com/OmniSharp/omnisharp-roslyn/pull/2363))

## 1.24.1 (Mar 1st, 2022)

* Only semantically highlight documents from uri.scheme 'file' (PR: [#5059](https://github.com/OmniSharp/omnisharp-vscode/pull/5059))
* Filter packages to install by framework before attempting install ([#5032](https://github.com/OmniSharp/omnisharp-vscode/issues/5032), PR: [#5041](https://github.com/OmniSharp/omnisharp-vscode/pull/5041))
* Update Razor's TextMate to latest. (PR: [#5012](https://github.com/OmniSharp/omnisharp-vscode/pull/5012))
* Upgrade OmniSharp to 1.38.1:
  * Reuse Roslyn's analyzer assembly loader (PR: [omnisharp-roslyn#2236](https://github.com/OmniSharp/omnisharp-roslyn/pull/2236))
  * Pass Completion, Rename and Block Structure options directly instead of updating the Workspace (PR: [omnisharp-roslyn#2306](https://github.com/OmniSharp/omnisharp-roslyn/pull/2306))
  * Update included build tool to match the current 6.0.200 sdk (PR: [omnisharp-roslyn#2329](https://github.com/OmniSharp/omnisharp-roslyn/pull/2329))
  * Fix concurrency issue in CSharpDiagnosticWorker (PR: [omnisharp-roslyn#2333](https://github.com/OmniSharp/omnisharp-roslyn/pull/2333))
  * run analyzers on multiple threads if allowed to (PR: [omnisharp-roslyn#2285](https://github.com/OmniSharp/omnisharp-roslyn/pull/2285))
  * Add MSBuild project to solution and apply the change to Roslyn workspace as a unit (PR: [omnisharp-roslyn#2314](https://github.com/OmniSharp/omnisharp-roslyn/pull/2314))
  * Updated to Roslyn 4.0.1 (PR: [omnisharp-roslyn#2323](https://github.com/OmniSharp/omnisharp-roslyn/pull/2323))
  * Enable OmniSharp.Cake tests for .NET 6 (PR: [omnisharp-roslyn#2307](https://github.com/OmniSharp/omnisharp-roslyn/pull/2307))
  * Handle completions with trailing whitespace on previous lines (PR: [omnisharp-roslyn#2319](https://github.com/OmniSharp/omnisharp-roslyn/pull/2319))
  * Update build bools to match .NET SDK 6.0.200 (PR: [omnisharp-roslyn#2347](https://github.com/OmniSharp/omnisharp-roslyn/pull/2347))

## 1.24.0 (Jan 13th, 2022)
* Upgrade OmniSharp to 1.38.0 (PR: [#4961](https://github.com/OmniSharp/omnisharp-vscode/issues/4961))
  * Build OmniSharp servers that run on .NET 6 SDK (PR: [omnisharp-roslyn#2291](https://github.com/OmniSharp/omnisharp-roslyn/pull/2291))
  * Allow net6 build of O# to load newer .NET SDKs (PR: [omnisharp-roslyn#2308](https://github.com/OmniSharp/omnisharp-roslyn/pull/2308))
  * Allow alternate versions of documents to be Semantically Highlighted (PR: [omnisharp-roslyn#2304](https://github.com/OmniSharp/omnisharp-roslyn/pull/2304))
  * Pass the logger for loading projects. So errors occur in loading projects can be printed out. ([#4832](https://github.com/OmniSharp/omnisharp-vscode/issues/4832), PR: [omnisharp-roslyn#2288](https://github.com/OmniSharp/omnisharp-roslyn/pull/2288))
  * Update OmniSharp.Cake dependencies (PR: [omnisharp-roslyn#2280](https://github.com/OmniSharp/omnisharp-roslyn/pull/2280))
  * Ensure each published platform uses matching hostfxr library (PR: [omnisharp-roslyn#2272](https://github.com/OmniSharp/omnisharp-roslyn/pull/2272))
  * Produce an Arm64 build for Linux (PR: [omnisharp-roslyn#2271](https://github.com/OmniSharp/omnisharp-roslyn/pull/2271))
  * Use 6.0.100 SDK for building (PR: [omnisharp-roslyn#2269](https://github.com/OmniSharp/omnisharp-roslyn/pull/2269))
  * Added Code of Conduct (PR: [omnisharp-roslyn#2266](https://github.com/OmniSharp/omnisharp-roslyn/pull/2266))
  * Improved Cake/CSX info messages (PR: [omnisharp-roslyn#2264](https://github.com/OmniSharp/omnisharp-roslyn/pull/2264))
* Send document buffer when semantically highlighting old document versions (PR: [#4915](https://github.com/OmniSharp/omnisharp-vscode/pull/4915))
* Improved Regex syntax highlighting (PR: [#4902](https://github.com/OmniSharp/omnisharp-vscode/pull/4902))
* .NET 6 bug fixes ([#4931](https://github.com/OmniSharp/omnisharp-vscode/issues/4931), PR: [#4950](https://github.com/OmniSharp/omnisharp-vscode/pull/4950))
* Add File-scoped namespace snippet (PR: [#4948](https://github.com/OmniSharp/omnisharp-vscode/pull/4948))
* Add searchNuGetOrgSymbolServer documentation (PR: [#4939](https://github.com/OmniSharp/omnisharp-vscode/pull/4939))
* Fix 'watch' Task (PR: [#4932](https://github.com/OmniSharp/omnisharp-vscode/pull/4932))
* Support using .NET 6 OmniSharp (PR: [#4926](https://github.com/OmniSharp/omnisharp-vscode/pull/4926))
* Rename LaunchTarget.kind to not conflict with VSCode separators. ([#4907](https://github.com/OmniSharp/omnisharp-vscode/issues/4907), PR: [#4914](https://github.com/OmniSharp/omnisharp-vscode/pull/4914))
* Label optional dependencies as external (PR: [#4905](https://github.com/OmniSharp/omnisharp-vscode/pull/4905))
* Provide a friendly name for the Razor language (PR: [#4904](https://github.com/OmniSharp/omnisharp-vscode/pull/4904))
* Update Debugger to 1.23.19 (PR: [4899](https://github.com/OmniSharp/omnisharp-vscode/pull/4899))
* Add targetArch to Attach and documentation ([#4900](https://github.com/OmniSharp/omnisharp-vscode/pull/4900), PR: [#4901](https://github.com/OmniSharp/omnisharp-vscode/pull/4901))
* Allow Linux Arm64 users to run the experimental O# build (PR: [#4892](https://github.com/OmniSharp/omnisharp-vscode/pull/4892))
* Always send document text when Semantic Highlighting (PR: [#5003](https://github.com/OmniSharp/omnisharp-vscode/pull/5003))
* Remove obsolete settings checks for Blazor debugging (PR: [#4964](https://github.com/OmniSharp/omnisharp-vscode/pull/4964))
* Explicitly install vscode-nls as a dependency (PR: [#4980](https://github.com/OmniSharp/omnisharp-vscode/pull/4980))
* Modernize code action provider (PR: [#4988](https://github.com/OmniSharp/omnisharp-vscode/pull/4988))
* Fix OmnisharpDownloader tests (PR: [#4989](https://github.com/OmniSharp/omnisharp-vscode/pull/4989))

## 1.23.17 (Dec 3rd, 2021)
* Greatly improved download experience: when the C# extension is downloaded from the VS Code Marketplace, it will include all of its dependencies already ([#4775](https://github.com/OmniSharp/omnisharp-vscode/issues/4775))
* Fix decompilation authorization check ([#4817](https://github.com/OmniSharp/omnisharp-vscode/issues/4817), PR: [#4821](https://github.com/OmniSharp/omnisharp-vscode/pull/4821))
* Fix typo in Readme.md (PR: [#4819](https://github.com/OmniSharp/omnisharp-vscode/pull/4819))
* Fix indentation level and spacing for xUnit fact snippet. (PR: [#4831](https://github.com/OmniSharp/omnisharp-vscode/pull/4831))
* Support relative paths with omnisharp.testRunSettings (PR: [#4860](https://github.com/OmniSharp/omnisharp-vscode/pull/4860)) (PR: [#4849](https://github.com/OmniSharp/omnisharp-vscode/pull/4849))
* Add `CimAttachItemsProvider` to replace `WmicAttachItemsProvider` (PR: [#4848](https://github.com/OmniSharp/omnisharp-vscode/pull/4848))
* Enhance sourceFileMap documentation (PR: [#4844](https://github.com/OmniSharp/omnisharp-vscode/pull/4844))
* Update the indentation level and spacing for the '"xUnit Test" fact' snippet. (PR: [#4831](https://github.com/OmniSharp/omnisharp-vscode/pull/4831))

* Debugger changes:
  * The debugger itself runs on .NET 6 RC2
  * Enhanced support for launchSettings.json ([#3121](https://github.com/OmniSharp/omnisharp-vscode/issues/3121))
  * Fixed process listing on Windows 11 (PR: [#4848](https://github.com/OmniSharp/omnisharp-vscode/pull/4848)) _(Many thanks to [@eternalphane](https://github.com/eternalphane))_
  * Update debugger to 1.23.17 (PR: [#4855](https://github.com/OmniSharp/omnisharp-vscode/pull/4855))
  * Update Debugger Labels (PR: [#4798](https://github.com/OmniSharp/omnisharp-vscode/pull/4798))
  * Add Debug Welcome View (PR: [#4797](https://github.com/OmniSharp/omnisharp-vscode/pull/4797))

* Update OmniSharp version to 1.37.17:
  * Update versions to match dotnet SDK 6.0.1xx (PR: [omnisharp-roslyn#2262](https://github.com/OmniSharp/omnisharp-roslyn/pull/2262))
  * Remove all completion commit characters in suggestion mode. ([omnisharp-roslyn#1974](https://github.com/OmniSharp/omnisharp-vscode/issues/1974), [omnisharp-roslyn#3219](https://github.com/OmniSharp/omnisharp-vscode/issues/3219), [omnisharp-roslyn#3647](https://github.com/OmniSharp/omnisharp-vscode/issues/3647), [omnisharp-roslyn#4833](https://github.com/OmniSharp/omnisharp-vscode/issues/4833), PR: [omnisharp-roslyn#2253](https://github.com/OmniSharp/omnisharp-roslyn/pull/2253))
  * fixed logging interpolation in ProjectManager (PR: [omnisharp-roslyn#2246](https://github.com/OmniSharp/omnisharp-roslyn/pull/2246))
  * Support signature help for implicit object creation ([omnisharp-roslyn#2243](https://github.com/OmniSharp/omnisharp-roslyn/issues/2243), PR: [omnisharp-roslyn#2244](https://github.com/OmniSharp/omnisharp-roslyn/pull/2244))
  * Implement /v2/gotodefinition for Cake ([omnisharp-roslyn#2209](https://github.com/OmniSharp/omnisharp-roslyn/issues/2209), PR: [omnisharp-roslyn#2212](https://github.com/OmniSharp/omnisharp-roslyn/pull/2212))


## 1.23.16 (Oct 12th, 2021)
* Show decompilation authorization once per install. ([#3982](https://github.com/OmniSharp/omnisharp-vscode/issues/3982), PR: [#4760](https://github.com/OmniSharp/omnisharp-vscode/pull/4760))
* Launch with first Folder or Solution target found (PR: [#4780](https://github.com/OmniSharp/omnisharp-vscode/pull/4780))
* Update Debugger Labels (PR: [#4798](https://github.com/OmniSharp/omnisharp-vscode/pull/4798))
* Add Debug Welcome View (PR: [#4797](https://github.com/OmniSharp/omnisharp-vscode/pull/4797))
* Update OmniSharp version to 1.37.16:
  * Update included Build Tools to match .NET SDK 6 (PR: [omnisharp-roslyn#2239](https://github.com/OmniSharp/omnisharp-roslyn/pull/2239))
  * Add Custom .NET CLI support to OmniSharp (PR: [omnisharp-roslyn#2227](https://github.com/OmniSharp/omnisharp-roslyn/pull/2227))
  * Handle .editorconfig changes without running a new design time build ([omnisharp-roslyn#2112](https://github.com/OmniSharp/omnisharp-roslyn/issues/2112) PR: [omnisharp-roslyn#2234](https://github.com/OmniSharp/omnisharp-roslyn/pull/2234))
  * Do not return nulls when getting documents by path ([omnisharp-roslyn#2125](https://github.com/OmniSharp/omnisharp-roslyn/issues/2125) PR: [omnisharp-roslyn#2233](https://github.com/OmniSharp/omnisharp-roslyn/pull/2233))
  * handle RecordStructName in semantic highlighting classification ([omnisharp-roslyn#2228](https://github.com/OmniSharp/omnisharp-roslyn/issues/2228) PR: [omnisharp-roslyn#2232](https://github.com/OmniSharp/omnisharp-roslyn/pull/2232))
  * Update CodeStructureService with FileScoped Namespace support ([omnisharp-roslyn#2225](https://github.com/OmniSharp/omnisharp-roslyn/issues/2225) PR: [omnisharp-roslyn#2226](https://github.com/OmniSharp/omnisharp-roslyn/pull/2226))

## 1.23.15 (Aug 31st, 2021)
* Restore launch target for workspace root when no solution present ([#4691](https://github.com/OmniSharp/omnisharp-vscode/issues/4691), PR: [#4695](https://github.com/OmniSharp/omnisharp-vscode/pull/4695))
* Don't create launch.json for no select process ([omnisharp-roslyn#4696](https://github.com/OmniSharp/omnisharp-roslyn/issues/4696), PR: [#4699](https://github.com/OmniSharp/omnisharp-vscode/pull/4699))
* Support inserting outside code when texts are selected (PR: [#4715](https://github.com/OmniSharp/omnisharp-vscode/pull/4715))
* Fix autoFix on save ([#4401](https://github.com/OmniSharp/omnisharp-roslyn/issues/4401), PR: [#4717](https://github.com/OmniSharp/omnisharp-vscode/pull/4717))

* Update OmniSharp version to 1.37.15:
  * Update Roslyn to 4.0.0-4.21427.11 (PR: [omnisharp-roslyn#2220](https://github.com/OmniSharp/omnisharp-roslyn/pull/2220))
  * Update NuGet to 5.10.0 ([omnisharp-roslyn#2027](https://github.com/OmniSharp/omnisharp-roslyn/issues/2027), PR: [omnisharp-roslyn#2034](https://github.com/OmniSharp/omnisharp-roslyn/pull/2034))
  * Remove .NET Core 2.1 (PR: [omnisharp-roslyn#2219](https://github.com/OmniSharp/omnisharp-roslyn/pull/2219))
  * Update versions to match .NET SDK 6 RC1 (PR: [omnisharp-roslyn#2217](https://github.com/OmniSharp/omnisharp-roslyn/pull/2217))
  * Use FullPaths for Locations that are returned with relative paths. ([omnisharp-roslyn#2215](https://github.com/OmniSharp/omnisharp-roslyn/issues/2215), PR: [omnisharp-roslyn#2216](https://github.com/OmniSharp/omnisharp-roslyn/pull/2216))
  * Improved logging in project manager (PR: [omnisharp-roslyn#2203](https://github.com/OmniSharp/omnisharp-roslyn/pull/2203))
  * Log a warning when external features path has no assemblies ([omnisharp-roslyn#2201](https://github.com/OmniSharp/omnisharp-roslyn/issues/2201), PR: [omnisharp-roslyn#2202](https://github.com/OmniSharp/omnisharp-roslyn/pull/2202))

## 1.23.14 (July 28th, 2021)
* Bump minimum required version of VS Code (PR: [#4664](https://github.com/OmniSharp/omnisharp-vscode/pull/4664))
* Change useGlobalMono scope to default (window) (PR: [#4674](https://github.com/OmniSharp/omnisharp-vscode/pull/4674))
* Fix a typo in package.json (PR: [#4675](https://github.com/OmniSharp/omnisharp-vscode/pull/4675))
* Update OmniSharp version to 1.37.14
    * Update Roslyn to 4.0.0-2.21354.7 (PR: [omnisharp-roslyn#2189](https://github.com/OmniSharp/omnisharp-roslyn/pull/2189))
    * Update included Build Tools to match .NET SDK 6 Preview 6 (PR: [omnisharp-roslyn#2187](https://github.com/OmniSharp/omnisharp-roslyn/pull/2187))
    * Update to latest .NET SDKs (PR: [omnisharp-roslyn#2197](https://github.com/OmniSharp/omnisharp-roslyn/pull/2197))
    * Update included Build Tools to match .NET SDK 6 Preview 7 (PR: [omnisharp-roslyn#2196](https://github.com/OmniSharp/omnisharp-roslyn/pull/2196))
    * Upgrade McMaster.Extensions.CommandLineUtils to 3.1.0 ([#4090](https://github.com/OmniSharp/omnisharp-vscode/issues/4090), PR: [omnisharp-roslyn#2192](https://github.com/OmniSharp/omnisharp-roslyn/pull/2192))
* Debugger changes:
    * Added support for win10-arm64 debugging ([#3006](https://github.com/OmniSharp/omnisharp-vscode/issues/3006), PR: [#4672](https://github.com/OmniSharp/omnisharp-vscode/pull/4672))

## 1.23.13 (July 13th, 2021)
* Fixes Razor editing support (PR: [#4642](https://github.com/OmniSharp/omnisharp-vscode/pull/4642))
* Show C# project files in the project selector ([#4633](https://github.com/OmniSharp/omnisharp-vscode/issues/4633), PR: [#4644](https://github.com/OmniSharp/omnisharp-vscode/pull/4644))
* Use new CompletionItem label API ([#4640](https://github.com/OmniSharp/omnisharp-vscode/issues/4640), PR: [#4648](https://github.com/OmniSharp/omnisharp-vscode/pull/4648))
* Support V2 version of GoToDefinition, which can show more than one location for partial types and show source-generated file information (PR: [#4581](https://github.com/OmniSharp/omnisharp-vscode/pull/4581))
* Add command 'listRemoteDockerProcess' and variable 'pickRemoteDockerProcess' ([#4607](https://github.com/OmniSharp/omnisharp-vscode/issues/4607), PR: [#4617](https://www.github.com/OmniSharp/omnisharp-vscode/pull/4617))
* Ensure we only start one instance of OmniSharp server (PR: [#4612](https://www.github.com/OmniSharp/omnisharp-vscode/pull/4612))
* Set the names of status bar items (PR: [#4621](https://github.com/OmniSharp/omnisharp-vscode/pull/4621))
* Add Debugger Languages (PR: [#4626](https://github.com/OmniSharp/omnisharp-vscode/pull/4626))
* Use temporary directory for debug sockets on NIX systems (PR: [#4637](https://github.com/OmniSharp/omnisharp-vscode/pull/4637))
* Update OmniSharp version to 1.37.12
    * Include timing info in logged responses (PR: [omnisharp-roslyn#2173](https://www.github.com/omnisharp/omnisharp-roslyn/pull/2173))
    * Defend against null value in BuildErrorEventArgs ([omnisharp-roslyn#2171](https://github.com/OmniSharp/omnisharp-roslyn/issues/2171), PR: [omnisharp-roslyn#2172](https://www.github.com/omnisharp/omnisharp-roslyn/pull/2172))
    * Updated to all the latest .NET SDKs (PR: [omnisharp-roslyn#2166](https://www.github.com/omnisharp/omnisharp-roslyn/pull/2166))
    * Add support for GoToDefinition on source-generated files (PR: [omnisharp-roslyn#2170](https://www.github.com/omnisharp/omnisharp-roslyn/pull/2170))
    * Add V2 version of GotoDefinitionService (PR: [omnisharp-roslyn#2168](https://www.github.com/omnisharp/omnisharp-roslyn/pull/2168))
    * avoid NRE when document is null (PR: [omnisharp-roslyn#2163](https://www.github.com/omnisharp/omnisharp-roslyn/pull/2163)))
    * Update Roslyn to 4.0.0-2.21322.50 (PR: [omnisharp-roslyn#2183](https://www.github.com/OmniSharp/omnisharp-roslyn/pull/2183))
    * Added support for diagnostic suppressors ([omnisharp-roslyn#1711](https://github.com/OmniSharp/omnisharp-roslyn/issues/1711), PR: [omnisharp-roslyn#2182](https://www.github.com/OmniSharp/omnisharp-roslyn/pull/2182))
    * Use the Microsoft.Build.Locator package for discovery (PR: [omnisharp-roslyn#2181](https://www.github.com/OmniSharp/omnisharp-roslyn/pull/2181))
    * Update build tools to match NET 6 Preview 5 (PR: [omnisharp-roslyn#2175](https://www.github.com/OmniSharp/omnisharp-roslyn/pull/2175))

## 1.23.12 (May 26th, 2021)
* Support experimental async completion (PR: [#4116](https://www.github.com/OmniSharp/omnisharp-vscode/pull/4116))
* Add option to to exclude custom symbols from codelens ([#4335](https://github.com/OmniSharp/omnisharp-vscode/issues/4335), PR: [#4418](https://www.github.com/OmniSharp/omnisharp-vscode/pull/4418))
* Handle ProcessPicker via resolveDebugConfiguration (PR: [#4509](https://www.github.com/OmniSharp/omnisharp-vscode/pull/4509))
* Update OmniSharp version to 1.37.10
  * Update included toolset to match .NET 6 preview4 (PR: [omnisharp-roslyn#2159](https://github.com/OmniSharp/omnisharp-roslyn/pull/2159))
  * Add async completion support (PR: [omnisharp-roslyn#1986](https://www.github.com/OmniSharp/omnisharp-roslyn/pull/1986))
  * Only subscribe to AppDomain.AssemblyResolve once (PR: [omnisharp-roslyn#2149](https://www.github.com/OmniSharp/omnisharp-roslyn/pull/2149))
  * Update build tools to match .NET 6 Preview 3 SDK. (PR: [omnisharp-roslyn#2134](https://www.github.com/OmniSharp/omnisharp-roslyn/pull/2134))
  * Do not return null responses from BlockStructureService and CodeStructureService (PR: [omnisharp-roslyn#2148](https://www.github.com/OmniSharp/omnisharp-roslyn/pull/2148))
  * Strong-name sign OmniSharp assemblies (PR: [omnisharp-roslyn#2143](https://www.github.com/OmniSharp/omnisharp-roslyn/pull/2143))
  * Updated IL Spy to 7.0.0 stable (PR: [omnisharp-roslyn#2142](https://www.github.com/OmniSharp/omnisharp-roslyn/pull/2142))
  * Do not crash on startup when configuration is invalid (PR: [omnisharp-roslyn#2140](https://www.github.com/OmniSharp/omnisharp-roslyn/pull/2140))
  * Bump System.Text.Encodings.Web from 4.7.1 to 4.7.2 in /tools (PR: [omnisharp-roslyn#2137](https://www.github.com/OmniSharp/omnisharp-roslyn/pull/2137))
  * Correctly set compilation platform of the project (PR: [omnisharp-roslyn#2135](https://www.github.com/OmniSharp/omnisharp-roslyn/pull/2135))
  * Fix typo (PR: [omnisharp-roslyn#2098](https://www.github.com/OmniSharp/omnisharp-roslyn/pull/2098))
  * Rework completion resolution ([omnisharp-roslyn#2123](https://github.com/OmniSharp/omnisharp-roslyn/issues/2123), PR: [omnisharp-roslyn#2126](https://www.github.com/OmniSharp/omnisharp-roslyn/pull/2126))
  * Report back the solution filter name in workspace updated event (PR: [omnisharp-roslyn#2130](https://www.github.com/OmniSharp/omnisharp-roslyn/pull/2130))
* Debugger changes:
  * Added support for osx-arm64 debugging ([#4390](https://github.com/OmniSharp/omnisharp-vscode/issues/4390))
  * Added support for exception conditions. See [documentation](https://aka.ms/VSCode-CS-ExceptionSettings) for more information ([#4356](https://github.com/OmniSharp/omnisharp-vscode/issues/4356)).
  * Fixed an issue with character encoding for multi-byte characters written to the debug console ([#4398](https://github.com/OmniSharp/omnisharp-vscode/issues/4398))
* Fixed a bug where Blazor WASM debugging would fail to launch correctly ([dotnet/aspnetcore#31653](https://github.com/dotnet/aspnetcore/issues/31653))

## 1.23.11 (April 9, 2021)
* Move the global Mono check to the correct place ([#4489](https://github.com/OmniSharp/omnisharp-vscode/issues/4489), PR: [#4492](https://github.com/OmniSharp/omnisharp-vscode/pull/4492))

## 1.23.10 (April 9, 2021)
* Support solution filters (*.slnf) (PR: [#4481](https://github.com/OmniSharp/omnisharp-vscode/pull/4481))
* Prompt user to install Blazor WASM companion extension if needed (PR: [#4392](https://github.com/OmniSharp/omnisharp-vscode/pull/4392))
* Add path to dotnet so child processes can use the CLI (PR: [#4459](https://github.com/OmniSharp/omnisharp-vscode/pull/4459))
* Give more information when Mono is missing or invalid. ([#4428](https://github.com/OmniSharp/omnisharp-vscode/issues/4428), PR: [#4431](https://github.com/OmniSharp/omnisharp-vscode/pull/4431))
* Revert incremental change forwarding (PR: [#4477](https://github.com/OmniSharp/omnisharp-vscode/pull/4477))
* Fixes to asset generation (PR: [#4402](https://github.com/OmniSharp/omnisharp-vscode/pull/4402))
* Add properties to blazorwasm debug configuration. ([dotnet/aspnetcore#30977](https://github.com/dotnet/aspnetcore/issues/30977), PR: [#4445](https://github.com/OmniSharp/omnisharp-vscode/pull/4445))
* Avoid white status bar items to ensure contrast ([#4384](https://github.com/OmniSharp/omnisharp-vscode/issues/4384), PR: [#4385](https://github.com/OmniSharp/omnisharp-vscode/pull/4385))
* Update OmniSharp to 1.37.8
  * Update Roslyn version to `3.10.0-1.21125.6` (PR: [omnisharp-roslyn#2105](https://github.com/OmniSharp/omnisharp-roslyn/pull/2105))
  * Update included build tools to closely match NET 6 Preview 1 SDK (PR: [omnisharp-roslyn#2103](https://github.com/OmniSharp/omnisharp-roslyn/pull/2103))
  * Improve custom error messages for MSB3644 (PR: [omnisharp-roslyn#2097](https://github.com/OmniSharp/omnisharp-roslyn/pull/2097))
  * Do not call FindReferencesAsync for null symbol ([omnisharp-roslyn#2054](https://github.com/OmniSharp/omnisharp-roslyn/issues/2054), PR: [omnisharp-roslyn#2089](https://github.com/OmniSharp/omnisharp-roslyn/pull/2089))
  * use an OmniSharp specific message for MSB3644 ([omnisharp-roslyn#2029](https://github.com/OmniSharp/omnisharp-roslyn/issues/2029), PR: [omnisharp-roslyn#2069](https://github.com/OmniSharp/omnisharp-roslyn/pull/2069))
  * changed the default RunFixAllRequest timeout to 10 seconds (PR: [omnisharp-roslyn#2066](https://github.com/OmniSharp/omnisharp-roslyn/pull/2066))
  * Support Solution filter (.slnf) (PR: [omnisharp-roslyn#2121](https://github.com/OmniSharp/omnisharp-roslyn/pull/2121))
  * updated to IL Spy 7.0.0.6372 (PR: [omnisharp-roslyn#2113](https://github.com/OmniSharp/omnisharp-roslyn/pull/2113))
  * Add sentinel file to MSBuild to enable workload resolver ([#4417](https://github.com/OmniSharp/omnisharp-vscode/issues/4417), PR: [omnisharp-roslyn#2111](https://github.com/OmniSharp/omnisharp-roslyn/pull/2111))
  * fixed CS8605 "Unboxing possibly null value" (PR: [omnisharp-roslyn#2108](https://github.com/OmniSharp/omnisharp-roslyn/pull/2108))
* Updated Razor support (PR: [#4470](https://github.com/OmniSharp/omnisharp-vscode/pull/4470))
  * Bug fixes

## 1.23.9 (February 3, 2021)
* Add option to organize imports during document formatting. (PR: [#4302](https://github.com/OmniSharp/omnisharp-vscode/pull/4302))
* Update to use zero based indexes (PR: [#4300](https://github.com/OmniSharp/omnisharp-vscode/pull/4300))
* Improve request queues to improve code completion performance (PR: [#4310](https://github.com/OmniSharp/omnisharp-vscode/pull/4310))
* Add setting to control whether to show the OmniSharp log on error ([#4102](https://github.com/OmniSharp/omnisharp-vscode/issues/4102), [#4330](https://github.com/OmniSharp/omnisharp-vscode/issues/4330), PR: [#4333](https://github.com/OmniSharp/omnisharp-vscode/pull/4333))
* Support building launch assets for NET6-NET9 projects ([#4346](https://github.com/OmniSharp/omnisharp-vscode/issues/4346), PR: [#4349](https://github.com/OmniSharp/omnisharp-vscode/pull/4349))
* Add debugger support for Concord extensions. See the [ConcordExtensibilitySamples wiki](https://github.com/microsoft/ConcordExtensibilitySamples/wiki/Support-for-cross-platform-.NET-scenarios) for more information.
* Update OmniSharp version to 1.37.6
  *  Handle records in syntax highlighting ([omnisharp-roslyn#2048](https://github.com/OmniSharp/omnisharp-roslyn/issues/2048), PR: [omnisharp-roslyn#2049](https://github.com/OmniSharp/omnisharp-roslyn/pull/2049))
  * Remove formatting on new line (PR: [omnisharp-roslyn#2053](https://github.com/OmniSharp/omnisharp-roslyn/pull/2053))
  * Validate highlighting ranges in semantic highlighting requests (PR: [omnisharp-roslyn#2055](https://github.com/OmniSharp/omnisharp-roslyn/pull/2055))
  * Delay project system init to avoid solution update race (PR: [omnisharp-roslyn#2057](https://github.com/OmniSharp/omnisharp-roslyn/pull/2057))
  * Use "variable" kind for parameter completion ([omnisharp-roslyn#2060](https://github.com/OmniSharp/omnisharp-roslyn/issues/2060), PR: [omnisharp-roslyn#2061](https://github.com/OmniSharp/omnisharp-roslyn/pull/2061))
  * Log request when response fails ([omnisharp-roslyn#2064](https://github.com/OmniSharp/omnisharp-roslyn/pull/2064))

## 1.23.8 (December 17, 2020)
* Updated Debugger support (PR: [#4281](https://github.com/OmniSharp/omnisharp-vscode/pull/4281))
  * Updated the version of .NET that the debugger uses for running its own C# code to .NET 5
  * Updated .NET debugging services loader to address problem with debugging after installing XCode12 ([dotnet/runtime/#42311](https://github.com/dotnet/runtime/issues/42311))
  * Fixed integrated terminal on non-Windows ([#4203](https://github.com/OmniSharp/omnisharp-vscode/issues/4203))
* Updated Razor support (PR: [#4278](https://github.com/OmniSharp/omnisharp-vscode/pull/4278))
  * Bug fixes
* Update OmniSharp version to 1.37.5 (PR: [#4299](https://github.com/OmniSharp/omnisharp-vscode/pull/4299))
  * Update Roslyn version to 3.9.0-2.20570.24 (PR: [omnisharp-roslyn#2022](https://github.com/OmniSharp/omnisharp-roslyn/pull/2022))
  * Editorconfig improvements - do not lose state, trigger re-analysis on change ([omnisharp-roslyn#1955](https://github.com/OmniSharp/omnisharp-roslyn/issues/1955), [#4165](https://github.com/OmniSharp/omnisharp-vscode/issues/4165), [#4184](https://github.com/OmniSharp/omnisharp-vscode/issues/4184), PR: [omnisharp-roslyn#2028](https://github.com/OmniSharp/omnisharp-roslyn/pull/2028))
  * Add documentation comment creation to the FormatAfterKeystrokeService (PR: [omnisharp-roslyn#2023](https://github.com/OmniSharp/omnisharp-roslyn/pull/2023))
  * Raise default GotoDefinitionRequest timeout from 2s to 10s ([#4260](https://github.com/OmniSharp/omnisharp-vscode/issues/4260), PR: [omnisharp-roslyn#2032](https://github.com/OmniSharp/omnisharp-roslyn/pull/2032))
  * Workspace create file workaround (PR: [omnisharp-roslyn#2019](https://github.com/OmniSharp/omnisharp-roslyn/pull/2019))
  * Added `msbuild:UseBundledOnly` option to force the usage of bundled MSBuild (PR: [omnisharp-roslyn#2038](https://github.com/OmniSharp/omnisharp-roslyn/pull/2038))
* Support auto doc comment generation ([#8](https://github.com/OmniSharp/omnisharp-vscode/issues/8), PR: [#4261](https://github.com/OmniSharp/omnisharp-vscode/pull/4261))
* Add schema support for appsettings.json ([#4279](https://github.com/OmniSharp/omnisharp-vscode/issues/4279), PR: [#4280](https://github.com/OmniSharp/omnisharp-vscode/pull/4280))
* Add schema support for global.json (PR: [#4290](https://github.com/OmniSharp/omnisharp-vscode/pull/4290))
* Update remoteProcessPickerScript windows ssh exit ([#3482](https://github.com/OmniSharp/omnisharp-vscode/issues/3482), PR: [#4225](https://github.com/OmniSharp/omnisharp-vscode/pull/4225))
* Do not start OmniSharp server in Live Share scenarios ([#3910](https://github.com/OmniSharp/omnisharp-vscode/issues/3910), PR: [#4038](https://github.com/OmniSharp/omnisharp-vscode/pull/4038))
* Suppress codelens for IEnumerable.GetEnumerator ([#4245](https://github.com/OmniSharp/omnisharp-vscode/issues/4245), PR: [#4246](https://github.com/OmniSharp/omnisharp-vscode/pull/4246))
* Allow arm64 MacOS to debug dotnet projects ([#4277](https://github.com/OmniSharp/omnisharp-vscode/issues/4277), PR: [#4288](https://github.com/OmniSharp/omnisharp-vscode/pull/4288))

## 1.23.7 (December 7, 2020)
* Update OmniSharp version to 1.37.4 (PR: [#4224](https://github.com/OmniSharp/omnisharp-vscode/pull/4224))
  * Fixed global Mono MSBuild version reporting (PR: [omnisharp-roslyn#1988](https://github.com/OmniSharp/omnisharp-roslyn/pull/1988))
  * Fixed incremental changes and completion in Cake (PR: [omnisharp-roslyn#1997](https://github.com/OmniSharp/omnisharp-roslyn/pull/1997))
  * Omnisharp now uses libPaths and sourcePaths defined in custom .rsp file for scripting (PR: [omnisharp-roslyn#2000](https://github.com/OmniSharp/omnisharp-roslyn/pull/2000))
  * C# scripting should use language version "latest" by default (PR: [omnisharp-roslyn#2001](https://github.com/OmniSharp/omnisharp-roslyn/pull/2001))
  * Improve handling with Cake Script Service (PR: [omnisharp-vscode#2013](https://github.com/OmniSharp/omnisharp-roslyn/pull/2013))
  * Updated to latest Dotnet.Script scripting packages for .NET 5.0 ([omnisharp-vscode#2020](https://github.com/OmniSharp/omnisharp-roslyn/issues/2020), PR: [omnisharp-vscode#2012](https://github.com/OmniSharp/omnisharp-roslyn/pull/2012))
  * Updated Roslyn to `3.8.0`, MSBuild to `16.8.0`, DotNetHostResolver to `5.0.0`, Nuget packages to `5.8.0-rc.6930` and MSBuildSDKResolver to `5.0.101-servicing.20564.2` to match .NET 5.0.100 SDK (PR: [omnisharp-vscode#2015](https://github.com/OmniSharp/omnisharp-roslyn/pull/2015), [omnisharp-vscode#2016](https://github.com/OmniSharpomnisharp-roslyn/pull/2016))
  * Workspace create file workaround for VS Code (to avoid race condtion on newly created files) ([omnisharp-vscode#4181](https://github.com/OmniSharp/omnisharp-vscode/issues/4181), PR: [omnisharp-vscode#2019](https://github.com/OmniSharp/omnisharp-roslyn/pull/2019))
  * Response file can now used enviroment variables in the path + more error handling (PR: [omnisharp-vscode#2008](https://github.com/OmniSharp/omnisharp-roslyn/pull/2008))
* Do not start OmniSharp server in Live Share scenarios ([#3910](https://github.com/OmniSharp/omnisharp-vscode/issues/3910), PR: [#4038](https://github.com/OmniSharp/omnisharp-vscode/pull/4038))
* Update remoteProcessPickerScript windows ssh exit (PR: [#4225](https://github.com/OmniSharp/omnisharp-vscode/pull/4225))
* Only suppress file changed notifications for C# files ([#4178](https://github.com/OmniSharp/omnisharp-vscode/pull/4178), PR: [#4230](https://github.com/OmniSharp/omnisharp-vscode/pull/4230))
* Suppress codelens for IEnumerable.GetEnumerator ([#4245](https://github.com/OmniSharp/omnisharp-vscode/issues/4245), PR: [#4246](https://github.com/OmniSharp/omnisharp-vscode/pull/4246))

## 1.23.6 (November 13, 2020)
* Do not call updateBuffer if there are no changes. (PR: [#4170](https://github.com/OmniSharp/omnisharp-vscode/pull/4170))
* Only skip file changed events when document is open. (PR: [#4178](https://github.com/OmniSharp/omnisharp-vscode/pull/4178))

## 1.23.5 (November 3, 2020)
* Set meaning of UseGlobalMono "auto" to "never" since Mono 6.12.0 still ships with MSBuild 16.7 (PR: [#4130](https://github.com/OmniSharp/omnisharp-vscode/pull/4130))
* Ensure that the rename identifier and run code action providers do not apply changes twice (PR: [#4133](https://github.com/OmniSharp/omnisharp-vscode/pull/4133))
* Do not send file changed events for .cs files (PR: [#4141](https://github.com/OmniSharp/omnisharp-vscode/pull/4141), [#4143](https://github.com/OmniSharp/omnisharp-vscode/pull/4143))
* Update Razor to 6.0.0-alpha.1.20529.17:
  * Improvements to HTML colorization for non-C# portions of the document.
  * Bug fix - the `razor.format.enable` option is honored again

## 1.23.4 (October 19, 2020)
* Use incremental changes to update language server (PR: [#4088](https://github.com/OmniSharp/omnisharp-vscode/pull/4088))
* Set meaning of UseGlobalMono "auto" to "always" now that Mono 6.12.0 ships with MSBuild 16.8 (PR: [#4115](https://github.com/OmniSharp/omnisharp-vscode/pull/4115))
* Updated OmniSharp to 1.37.3
  * Fixed a bug when the server wouldn't start on MacOS/Linux when a username contained a space (PR: [omnisharp-roslyn/#1979](https://github.com/OmniSharp/omnisharp-roslyn/pull/1979))
  * Update to Mono 6.12.0 (PR: [omnisharp-roslyn/#1981](https://github.com/OmniSharp/omnisharp-roslyn/pull/1981))
  * Fix responsiveness regression with targeted DiagnosticWorker revert ([omnisharp-roslyn/#1982](https://github.com/OmniSharp/omnisharp-roslyn/issues/1982), [omnisharp-roslyn/#1983](https://github.com/OmniSharp/omnisharp-roslyn/issues/1983), PR: [omnisharp-roslyn/#1984](https://github.com/OmniSharp/omnisharp-roslyn/pull/1984))

## 1.23.3 (October 12, 2020)
* Fix ps call for Alpine images ([#4023](https://github.com/OmniSharp/omnisharp-vscode/issues/4023), PR: [#4097](https://github.com/OmniSharp/omnisharp-vscode/pull/4097))
* Support TextEdit in completion responses (PR: [@4073](https://github.com/OmniSharp/omnisharp-vscode/pull/4073))
* Updated Razor support
  * Updated OmniSharp version (should improve stability) [dotnet/aspnetcore-tooling#20320](https://github.com/dotnet/aspnetcore/issues/20320)
  * Corrected positioning for `@using` for components added by light bulb. [dotnet/aspnetcore-tooling#25019](https://github.com/dotnet/aspnetcore/issues/25019)
  * Mixed HTML & C# Razor formatting support ([dotnet/aspnetcore-tooling#25470](https://github.com/dotnet/aspnetcore/issues/25470)) / ([dotnet/aspnetcore-tooling#14271](https://github.com/dotnet/aspnetcore/issues/14271))
  * Add using for C# Type light bulb ([dotnet/aspnetcore-tooling#18173](https://github.com/dotnet/aspnetcore/issues/18173))
  * Fully qualify C# Type light bulb ([dotnet/aspnetcore-tooling#24778](https://github.com/dotnet/aspnetcore/issues/24778))
  * Added support for engine logging on .NET process for Blazor WASM apps ([OmniSharp/omnisharp-vscode#4070](https://github.com/OmniSharp/omnisharp-vscode/issues/4070))
  * Fixed bug in clean-up of Blazor WASM debugging session ([OmniSharp/omnisharp-vscode#4056](https://github.com/OmniSharp/omnisharp-vscode/issues/4056))
* Debugger Features:
  * Add support for Function Breakpoints ([#295](https://github.com/OmniSharp/omnisharp-vscode/issues/295))
* Debugger Fixes:
  * [Debugger licensing errors are not reported to the UI ([#3759](https://github.com/OmniSharp/omnisharp-vscode/issues/3759))
  * [Error processing 'variables' request. Unknown Error: 0x8000211d ([#3926](https://github.com/OmniSharp/omnisharp-vscode/issues/3926))
  * [Method with a function pointer local breaks variables view and debug console ([#4052](https://github.com/OmniSharp/omnisharp-vscode/issues/4052))
* Update OmniSharp to 1.37.2 (PR: [#4107](https://github.com/OmniSharp/omnisharp-vscode/pull/4107))
  * Updated MSBuild, MSBuild resolvers and Roslyn to match .NET Core 5.0 RC2 and VS 16.8 Preview 4. (PR: [omnisharp-roslyn/#1971](https://github.com/OmniSharp/omnisharp-roslyn/pull/1971), PR: [omnisharp-roslyn/#1974](https://github.com/OmniSharp/omnisharp-roslyn/pull/1974))
  * Decouple FixAll from the workspace ([omnisharp-roslyn/#1960](https://github.com/OmniSharp/omnisharp-roslyn/issues/1960), PR: [omnisharp-roslyn/#1962](https://github.com/OmniSharp/omnisharp-roslyn/pull/1962))
  * Added binding redirects for Microsoft.CodeAnalysis.Features and Microsoft.CodeAnalysis.CSharp.Features (PR: [omnisharp-roslyn/#1964](https://github.com/OmniSharp/omnisharp-roslyn/pull/1964))
  * Always log error responses with error level (PR: [omnisharp-roslyn/#1963](https://github.com/OmniSharp/omnisharp-roslyn/pull/1963))
  * Added support for override property completion. **Warning**: contains breaking change, as `InsertText` was removed from the response, please use `TextEdit` instead (PR: [omnisharp-roslyn/#1957](https://github.com/OmniSharp/omnisharp-roslyn/pull/1957))
  * Correctly handle <ProjectReferences> that don't produce references (PR: [omnisharp-roslyn/#1956](https://github.com/OmniSharp/omnisharp-roslyn/pull/1956))
  * Marked `/autocomplete` endpoint as obsolete - the clients should be switching to `/completion` and `/completion/resolve` (PR: [omnisharp-roslyn/#1951](https://github.com/OmniSharp/omnisharp-roslyn/pull/1951))
  * Fixed escapes in regex completions ([omnisharp-roslyn/#1949](https://github.com/OmniSharp/omnisharp-roslyn/issues/1949), PR: [omnisharp-roslyn/#1950](https://github.com/OmniSharp/omnisharp-roslyn/pull/1950))
  * Fixed completion on part of existing string ([omnisharp-vscode#4063](https://github.com/OmniSharp/omnisharp-vscode/issues/4063), PR: [omnisharp-roslyn/#1941](https://github.com/OmniSharp/omnisharp-roslyn/pull/1941))
  * Fixed LSP completion item kinds (PR: [omnisharp-roslyn/#1940](https://github.com/OmniSharp/omnisharp-roslyn/pull/1940))
  * Added support for textDocument/implementation in LSP mode (PR: [omnisharp-roslyn/#1970](https://github.com/OmniSharp/omnisharp-roslyn/pull/1970))
  * Fixed namespace icon in completion response ([omnisharp-vscode#4051](https://github.com/OmniSharp/omnisharp-vscode/issues/4051), PR: [omnisharp-roslyn/#1936](https://github.com/OmniSharp/omnisharp-roslyn/pull/1936))
  * Improved performance of find implementations (PR: [omnisharp-roslyn/#1935](https://github.com/OmniSharp/omnisharp-roslyn/pull/1935))
  * Add support for new quick info endpoint when working with Cake (PR: [omnisharp-roslyn/#1945](https://github.com/OmniSharp/omnisharp-roslyn/pull/1945))
  * Add support for new completion endpoints when working with Cake ([omnisharp-roslyn/#1939](https://github.com/OmniSharp/omnisharp-roslyn/issues/1939), PR: [omnisharp-roslyn/#1944](https://github.com/OmniSharp/omnisharp-roslyn/pull/1944))
  * When an analyzer fails to load, log an error (PR: [omnisharp-roslyn/#1972](https://github.com/OmniSharp/omnisharp-roslyn/pull/1972))
  * Added support for 'extract base class' (PR: [omnisharp-roslyn/#1969](https://github.com/OmniSharp/omnisharp-roslyn/pull/1969))
  * OmniSharp.Path can only be set in user settings (PR: [omnisharp-roslyn/#1946](https://github.com/OmniSharp/omnisharp-roslyn/pull/1946))
  * Add support for code actions besides ApplyChangesOperation's (PR: [omnisharp-roslyn/#1724](https://github.com/OmniSharp/omnisharp-roslyn/pull/1724))

## 1.23.2 (September 3, 2020)
* Ensure that all quickinfo sections have linebreaks between them, and don't add unecessary duplicate linebreaks (PR: [omnisharp-roslyn#1900](https://github.com/OmniSharp/omnisharp-roslyn/pull/1900))
* Support completion of unimported types (PR: [omnisharp-roslyn#1896](https://github.com/OmniSharp/omnisharp-roslyn/pull/1896))
* Exclude Misc project from InternalsVisibleTo completion (PR: [omnisharp-roslyn#1902](https://github.com/OmniSharp/omnisharp-roslyn/pull/1902))
* Ensure unimported things are sorted after imported things (PR: [omnisharp-roslyn#1903](https://github.com/OmniSharp/omnisharp-roslyn/pull/1903))
* Correctly handle multiple reference aliases (PR: [omnisharp-roslyn#1905](https://github.com/OmniSharp/omnisharp-roslyn/pull/1905))
* Better handle completion when the display text is not in the final result (PR: [omnisharp-roslyn#1908](https://github.com/OmniSharp/omnisharp-roslyn/pull/1908))
* Correctly mark hover markup content as markdown ([omnisharp-roslyn#1906](https://github.com/OmniSharp/omnisharp-roslyn/issues/1906), PR: [omnisharp-roslyn#1909](https://github.com/OmniSharp/omnisharp-roslyn/pull/1909))
* Upgrade lsp ([omnisharp-roslyn#1898](https://github.com/OmniSharp/omnisharp-roslyn/issues/1898), PR: [omnisharp-roslyn#1911](https://github.com/OmniSharp/omnisharp-roslyn/pull/1911))
* Updated to ILSpy 6.1.0.5902 (PR: [omnisharp-roslyn#1913](https://github.com/OmniSharp/omnisharp-roslyn/pull/1913))
* Updated to NET 5.0 preview8 (PR: [omnisharp-roslyn#1916](https://github.com/OmniSharp/omnisharp-roslyn/pull/1916))
* Add HTTP Driver back to build.json (PR: [omnisharp-roslyn#1918](https://github.com/OmniSharp/omnisharp-roslyn/pull/1918))
* Updated the docs to mention .NET 4.7.2 targeting pack (PR: [omnisharp-roslyn#1922](https://github.com/OmniSharp/omnisharp-roslyn/pull/1922))
* Support for configurations remapping in solution files ([omnisharp-roslyn#1828](https://github.com/OmniSharp/omnisharp-roslyn/issues/1828), PR: [omnisharp-roslyn#1835](https://github.com/OmniSharp/omnisharp-roslyn/pull/1835))
* Only run dotnet --info once for the working directory (PR: [omnisharp-roslyn#1925](https://github.com/OmniSharp/omnisharp-roslyn/pull/1925))
* Update build tool versions for NET 5 RC1 (PR: [omnisharp-roslyn#1926](https://github.com/OmniSharp/omnisharp-roslyn/pull/1926))
* Update Roslyn to 3.8.0-3.20451.2 (PR: [omnisharp-roslyn#1927](https://github.com/OmniSharp/omnisharp-roslyn/pull/1927))
* Clean up Blazor WebAssembly notifications (PR: [#4018](https://github.com/OmniSharp/omnisharp-vscode/pull/4018))
* Remove proposed api attribute (PR: [#4029](https://github.com/OmniSharp/omnisharp-vscode/pull/4029))
* New completion service including override and unimported type completion (`omnisharp.enableImportCompletion`) (PR: [#3986](https://github.com/OmniSharp/omnisharp-vscode/pull/3986))

## 1.23.1 (August 19, 2020)
* Register FixAll commands for disposal ([#3984](https://github.com/OmniSharp/omnisharp-vscode/issues/3984), PR: [#3985](https://github.com/OmniSharp/omnisharp-vscode/pull/3985))
* Include version matched target files with minimal MSBuild (PR: [omnisharp-roslyn#1895](https://github.com/OmniSharp/omnisharp-roslyn/pull/1895))
* Fix lack of trailing italics in quickinfo (PR: [omnisharp-roslyn#1894](https://github.com/OmniSharp/omnisharp-roslyn/pull/1894))
* Set meaning of UseGlobalMono "auto" to "never" until Mono updates their MSBuild (PR: [#3998](https://github.com/OmniSharp/omnisharp-vscode/pull/3998))
* Updated Razor support
  * Fully qualify component light bulb ([dotnet/aspnetcore-tooling#22309](https://github.com/dotnet/aspnetcore/issues/22309))
  * Add using for component light bulb ([dotnet/aspnetcore-tooling#22308](https://github.com/dotnet/aspnetcore/issues/22308))
  * Create component from tag light bulb ([dotnet/aspnetcore-tooling#22307](https://github.com/dotnet/aspnetcore/issues/22307))
  * Go to definition on Blazor components ([dotnet/aspnetcore-tooling#17044](https://github.com/dotnet/aspnetcore/issues/17044))
  * Rename Blazor components ([dotnet/aspnetcore-tooling#22312](https://github.com/dotnet/aspnetcore/issues/22312))
  * Prepare Blazor debugging to have better support for "Start without debugging" scenarios ([dotnet/aspnetcore-tooling#24623](https://github.com/dotnet/aspnetcore/issues/24623))

## 1.23.0 (August 14, 2020)
* Fix typo in supressBuildAssetsNotification setting name ([#3941](https://github.com/OmniSharp/omnisharp-vscode/issues/3941), PR: [#3942](https://github.com/OmniSharp/omnisharp-vscode/pull/3942))
* Introduced a new `/quickinfo` endpoint to provide a richer set of information compared to `/typeinfo`. Consumers are encouraged to use it as their hover provider ([omnisharp-roslyn#1808](https://github.com/OmniSharp/omnisharp-roslyn/issues/1808), PR: [omnisharp-roslyn#1860](https://github.com/OmniSharp/omnisharp-roslyn/pull/1860)
* Added support for Roslyn `EmbeddedLanguageCompletionProvider` which enables completions for string literals for `DateTime` and `Regex` ([omnisharp-roslyn#1871](https://github.com/OmniSharp/omnisharp-roslyn/pull/1871))
* Improve performance of the `textDocument/codeAction` request. (PR: [omnisharp-roslyn#1814](https://github.com/OmniSharp/omnisharp-roslyn/pull/1814))
* Provide a warning when the discovered MSBuild version is lower than the minimumMSBuildVersion supported by the configured SDK (PR: [omnisharp-roslyn#1875](https://github.com/OmniSharp/omnisharp-roslyn/pull/1875))
* Use the real MSBuild product version during discovery (PR: [omnisharp-roslyn#1876](https://github.com/OmniSharp/omnisharp-roslyn/pull/1876))
* Fixed debugging in .NET 5 preview SDKs ([#3459](https://github.com/OmniSharp/omnisharp-vscode/issues/3459), PR: [omnisharp-roslyn#1862](https://github.com/OmniSharp/omnisharp-roslyn/pull/1862))
* Move omnisharp vscode to the new hover implementation ([#3928](https://github.com/OmniSharp/omnisharp-vscode/pull/3928))
* Ignore screen size is bogus errors with ps ([#3580](https://github.com/OmniSharp/omnisharp-vscode/issues/3580), PR: [#3961](https://github.com/OmniSharp/omnisharp-vscode/pull/3961))
* Fix all providers support (PR: [#3440](https://github.com/OmniSharp/omnisharp-vscode/pull/3440), PR: [omnisharp-roslyn#1581](https://github.com/OmniSharp/omnisharp-roslyn/pull/1581))
* Fix MSBuild version mismatch with new SDKs ([omnisharp-vscode#3951](https://github.com/OmniSharp/omnisharp-vscode/issues/3951), PR: [#1883](https://github.com/OmniSharp/omnisharp-roslyn/pull/1883))

## 1.22.2 (August 04, 2020)
* Updated Razor support
  * Improved Semantic Highlighting support by fixing some scenarios which might lead to thrown exceptions and incorrect results. [dotnet/aspnetcore-tooling#2126](https://github.com/dotnet/aspnetcore-tooling/pull/2126)
  * Fixed support in the case of projects with spaces in path. [dotnet/aspnetcore#23336](https://github.com/dotnet/aspnetcore/issues/23336)
  * Various performance improvements.
  * `@inject` completion [dotnet/aspnetcore#22886](https://github.com/dotnet/aspnetcore/issues/22886)
  * Improved behavior in cases where directory is not available. [dotnet/aspnetcore-tooling#2008](https://github.com/dotnet/aspnetcore-tooling/pull/2008)
  * Added the `Extract to CodeBehind` light bulb code action. [dotnet/aspnetcore-tooling#2039](https://github.com/dotnet/aspnetcore-tooling/pull/2039)
* Use global MSBuild property when resetting target framework ([omnisharp-roslyn#1738](https://github.com/OmniSharp/omnisharp-roslyn/issues/1738), PR: [omnisharp-roslyn#1846](https://github.com/OmniSharp/omnisharp-roslyn/pull/1846))
* Do not use Visual Studio MSBuild if it doesn't have .NET SDK resolver ([omnisharp-roslyn#1842](https://github.com/OmniSharp/omnisharp-roslyn/issues/1842), [omnisharp-roslyn#1730](https://github.com/OmniSharp/omnisharp-roslyn/issues/1730), PR: [omnisharp-roslyn#1845](https://github.com/OmniSharp/omnisharp-roslyn/pull/1845))
* Only request dotnet info once for the solution or directory ([omnisharp-roslyn#1844](https://github.com/OmniSharp/omnisharp-roslyn/issues/1844), PR: [omnisharp-roslyn#1857](https://github.com/OmniSharp/omnisharp-roslyn/pull/1857))
* Allow client to specify symbol filter for FindSymbols Endpoint. (PR: [omnisharp-roslyn#1823](https://github.com/OmniSharp/omnisharp-roslyn/pull/1823))
* Upgraded to Mono 6.10.0.105, msbuild 16.6 and added missing targets (PR: [omnisharp-roslyn#1854](https://github.com/OmniSharp/omnisharp-roslyn/pull/1854))
* Make "Run/debug tests in context" position a link ([#3915](https://github.com/OmniSharp/omnisharp-vscode/pull/3915))
* Update browser launch regex to support non-default logging frameworks ([#3842](https://github.com/OmniSharp/omnisharp-vscode/pull/3842))

## 1.22.1 (June 14, 2020)
* Added LSP handler for `textDocument/codeAction` request. (PR: [omnisharp-roslyn#1795](https://github.com/OmniSharp/omnisharp-roslyn/pull/1795))
* Expose a custom LSP `omnisharp/client/findReferences` command via code lens (meant to be handled by LSP client). (PR: [#omnisharp-roslyn/1807](https://github.com/OmniSharp/omnisharp-roslyn/pull/1807))
* Added `DirectoryDelete` option to `FileChangeType` allowing clients to report deleted directories that need to be removed (along all the files) from the workspace (PR: [#3829](https://github.com/OmniSharp/omnisharp-vscode/pull/3829), PR: [omnisharp-roslyn#1821](https://github.com/OmniSharp/omnisharp-roslyn/pull/1821))
* Do not crash when plugin assembly cannot be loaded ([omnisharp-roslyn#1307](https://github.com/OmniSharp/omnisharp-roslyn/issues/1307), PR: [omnisharp-roslyn#1827](https://github.com/OmniSharp/omnisharp-roslyn/pull/1827))
* Update browser launch regex to support non-default logging frameworks ([#3842](https://github.com/OmniSharp/omnisharp-vscode/pull/3842))
* Improved support for Codespaces

## 1.22.0 (May 28, 2020)
* Add setting for enabling go to decompilation (PR: [#3774](https://github.com/OmniSharp/omnisharp-vscode/pull/3774))
* Add experimental Semantic Highlighter `csharp.semanticHighlighting.enabled` ([#3565](https://github.com/OmniSharp/omnisharp-vscode/issues/3565), PR: [#3667](https://github.com/OmniSharp/omnisharp-vscode/pull/3667)
* Add commands for Run and Debug Tests in Context (PR: [#3772](https://github.com/OmniSharp/omnisharp-vscode/pull/3772), PR: [omnisharp-roslyn#1782](https://github.com/OmniSharp/omnisharp-roslyn/pull/1782))
* Do not add references CodeLens to Dispose methods ([#3243](https://github.com/OmniSharp/omnisharp-vscode/issues/3243), PR: [#3780](https://github.com/OmniSharp/omnisharp-vscode/pull/3780))
* Add Visual Studio 2019 themes with semantic colors (PR: [#3790](https://github.com/OmniSharp/omnisharp-vscode/pull/3790))
* Added support for `WarningsAsErrors` in csproj files (PR: [omnisharp-roslyn#1779](https://github.com/OmniSharp/omnisharp-roslyn/pull/1779))
* Added support for `WarningsNotAsErrors` in csproj files ([omnisharp-roslyn#1681](https://github.com/OmniSharp/omnisharp-roslyn/issues/1681), PR: [#1784](https://github.com/OmniSharp/omnisharp-roslyn/pull/1784))
* Improved MSBuild scoring system ([omnisharp-roslyn#1783](https://github.com/OmniSharp/omnisharp-roslyn/issues/1783), PR: [omnisharp-roslyn#1797](https://github.com/OmniSharp/omnisharp-roslyn/pull/1797))
* Updated OmniSharp.Extensions.LanguageServer to `0.14.2` to fix synchronisation (PR: [omnisharp-roslyn#1791](https://github.com/OmniSharp/omnisharp-roslyn/pull/1791))
* Add test discovery and NoBuild option to test requests (PR: [omnisharp-roslyn#1719](https://github.com/OmniSharp/omnisharp-roslyn/pull/1719))
* Updated Razor support
  * Enable Semantic Highlighting for Razor TagHelpers and Blazor components ([dotnet/aspnetcore#21713](https://github.com/dotnet/aspnetcore/issues/21713))
  * Directive and TagHelper Attribute Completions are now committed contextually with `=`, `:` and ` ` commit characters. ([dotnet/aspnetcore#21485](https://github.com/dotnet/aspnetcore/issues/21485))
  * Removed TagHelper attribute completion snippet support as we felt the typing experience was superior without it.
* Add support for Blazor WebAssembly-specific debug adapter ([dotnet/aspnetcore-tooling#1885](https://github.com/dotnet/aspnetcore-tooling/pull/1885))

## 1.21.18 (May 5, 2020)
* Fadeout unused variable names ([#1324](https://github.com/OmniSharp/omnisharp-vscode/issues/1324), PR: [#3733](https://github.com/OmniSharp/omnisharp-vscode/pull/3733))
* Updated debugger (PR: [#3729](https://github.com/OmniSharp/omnisharp-vscode/pull/3729))
* Fixed not supported exception when trying to decompile a BCL assembly on Mono. For now we do not try to resolve implementation assembly from a ref assembly (PR: [omnisharp-roslyn#1767](https://github.com/OmniSharp/omnisharp-roslyn/pull/1767))
* Added support for generic classes in test runner ([#3722](https://github.com/OmniSharp/omnisharp-vscode/issues/3722), PR: [omnisharp-roslyn#1768](https://github.com/OmniSharp/omnisharp-roslyn/pull/1768))
* Improved autocompletion performance (PR: [omnisharp-roslyn#1761](https://github.com/OmniSharp/omnisharp-roslyn/pull/1761))
* Move to Roslyn's .editorconfig support ([omnisharp-roslyn#1657](https://github.com/OmniSharp/omnisharp-roslyn/issues/1657), PR: [omnisharp-roslyn#1771](https://github.com/OmniSharp/omnisharp-roslyn/pull/1771))
* Fully update CompilationOptions when project files change (PR: [omnisharp-roslyn#1774](https://github.com/OmniSharp/omnisharp-roslyn/pull/1774))

## 1.21.17 (April 13, 2020)
* Updated Razor support (PR:[#3696](https://github.com/OmniSharp/omnisharp-vscode/pull/3696))
  * Razor support for `<text>` tag completions.
  * Ability to restart the Razor Language Server to activate changes to the `razor.trace` level.
  * Bug fixes and performance improvements.
* Support for `<RunAnalyzers />` and `<RunAnalyzersDuringLiveAnalysis />` (PR: [omnisharp-roslyn#1739](https://github.com/OmniSharp/omnisharp-roslyn/pull/1739))
* Add `typeparam` documentation comments to text description ([#3516](https://github.com/OmniSharp/omnisharp-vscode/issues/3516), PR: [omnisharp-roslyn#1749](https://github.com/OmniSharp/omnisharp-roslyn/pull/1749))
* Tag `#region` blocks appropriately in the block structure service ([#2621](https://github.com/OmniSharp/omnisharp-vscode/issues/2621), PR: [omnisharp-roslyn#1748](https://github.com/OmniSharp/omnisharp-roslyn/pull/1748))

## 1.21.16 (March 30, 2020)
* Support for .NET Core 3.1 in csx files (PR: [#1731](https://github.com/OmniSharp/omnisharp-roslyn/pull/1731))
* Update the minimal MSBuild to better support .NET 5 Previews ([omnisharp-vscode#3653](https://github.com/OmniSharp/omnisharp-vscode/issues/3653), PR: [#1746](https://github.com/OmniSharp/omnisharp-roslyn/pull/1746))

## 1.21.15 (March 19, 2020)
* Fixed freezing and unresponsiveness when opening folder with many nested sub-folders (PR: [#3681](https://github.com/OmniSharp/omnisharp-vscode/pull/3681))
* Fixed handling of dismiss response to assets prompt (PR: [3678](https://github.com/OmniSharp/omnisharp-vscode/pull/3678))

## 1.21.14 (March 11, 2020)
* Fixed an issue where Razor formatting fails in the presence of @using directives
* Added support for `annotations` value of `Nullable` csproj property ([omnisharp-roslyn#1721](https://github.com/OmniSharp/omnisharp-roslyn/issues/1721), PR: [omnisharp-roslyn#1722](https://github.com/OmniSharp/omnisharp-roslyn/pull/1722))
* Added ability to specify custom RunSettings for tests (PR: [#3573](https://github.com/OmniSharp/omnisharp-vscode/pull/3573), PR: [omnisharp-roslyn#1710](https://github.com/OmniSharp/omnisharp-roslyn/pull/1710))

## 1.21.13 (March 5, 2020)
* Change Marketplace publisher for the C# extension from ms-vscode to ms-dotnettools
* Ignore diagnostics from virtual files ([dotnet/aspnetcore#18927](https://github.com/dotnet/aspnetcore/issues/18927), PR: [#3592](https://github.com/OmniSharp/omnisharp-vscode/pull/3592))
* Detect and create Blazor WASM launch and debug settings ([dotnet/aspnetcore#17549](https://github.com/dotnet/aspnetcore/issues/17549), PR: [#3593](https://github.com/OmniSharp/omnisharp-vscode/pull/3593))
* Updated Razor support (PR:[3594](https://github.com/OmniSharp/omnisharp-vscode/pull/3594))
  * Support for @code/@functions block formatting
  * Updated Razor's TextMate grammar to include full syntactic colorization
  * Several bug fixes

## 1.21.12 (February 20, 2020)
* Fixed out of bounds exception in line mapping ([#3485](https://github.com/OmniSharp/omnisharp-vscode/issues/3485), PR: [omnisharp-roslyn#1707](https://github.com/OmniSharp/omnisharp-roslyn/pull/1707))
* Added support for aliases in project references ([omnisharp-roslyn#1685](https://github.com/OmniSharp/omnisharp-roslyn/issues/1685), PR: [omnisharp-roslyn#1701](https://github.com/OmniSharp/omnisharp-roslyn/pull/1701))
* Raised the lowest discovered VS2019 version to 16.3 ([omnisharp-roslyn#1700](https://github.com/OmniSharp/omnisharp-roslyn/issues/1700), PR: (#1713)(https://github.com/OmniSharp/omnisharp-roslyn/pull/1713))
* Fixed a bug where organizing usings clashed with other formatting settings (PR: [omnisharp-roslyn#1715](https://github.com/OmniSharp/omnisharp-roslyn/pull/1713))

## 1.21.11 (February 6, 2020)
* Updated the bundled to Mono 6.8.0 and MSBuild to be copied from Mono 6.8.0 ([omnisharp-roslyn#1693](https://github.com/OmniSharp/omnisharp-roslyn/issues/1693), PR: [omnisharp-roslyn#1697](https://github.com/OmniSharp/omnisharp-roslyn/pull/1697))
* Included NugetSDKResolver in the minimal MSBuild, which introduces support for Nuget based project SDKs like Arcade ([omnisharp-roslyn#1678](https://github.com/OmniSharp/omnisharp-roslyn/issues/1678), PR: [omnisharp-roslyn#1696](https://github.com/OmniSharp/omnisharp-roslyn/pull/1696))
* Added option (`csharp.supressBuildAssetsNotification`) to surpress missing build asset notifications (PR:[#3538](https://github.com/OmniSharp/omnisharp-vscode/pull/3538))
* The minimum Mono version required to run OmniSharp on has been increased to 6.4.0

## 1.21.10 (February 2, 2020)
* Updated Razor support (PR:[#3524](https://github.com/OmniSharp/omnisharp-vscode/pull/3524))
    * Added quick info (hover) support for TagHelper and Blazor components. You can now hover over TagHelpers, Components and their attributes to understand what associated C# type you're hovering over in addition to an attributes expected value type.
    * Migrated Razor's project understanding from the VSCode extension into the Language Server. This enables the language server to reboot without extra assistance (reliability) from an LSP client and also enables future Razor LSP clients to have richer functionality with less "work".
    * Added C# light bulbs to enable users to "Fully Qualify" members that are causing errors.
    * Expanded Razor's TextMate grammar colorization support to understand email addresses and `await foreach`.
    * Several bug fixes
* Updated Debugger support (PR:[#3515](https://github.com/OmniSharp/omnisharp-vscode/pull/3515))
    * Added option to search the NuGet.org Symbol Server
    * Added options to control logging Process and Thread exits while debugging
* Fixed a bug where completion items didn't decode symbols corectly (impacted, for example, object initializer completion quality) ([#3465](https://github.com/OmniSharp/omnisharp-vscode/issues/3465), PR:[omnisharp-roslyn#1670](https://github.com/OmniSharp/omnisharp-roslyn/pull/1670))
* Updated to MsBuild 16.4.0 on Linux/MacOS (PR:[omnisharp-roslyn#1669](https://github.com/OmniSharp/omnisharp-roslyn/pull/1669))
* Added support for implement type options - it is now possible to define whether code-fix/refactoring generated properties should be auto- or throwing-properties and at which place in the class should newly generated members be inserted. They can be set via OmniSharp configuration, such as `omnisharp.json` file. (PR: [omnisharp-roslyn#1672](https://github.com/OmniSharp/omnisharp-roslyn/pull/1672))
* Added support for organizing usings on format. This can be set via OmniSharp configuration, such as `omnisharp.json` file. (PR:[omnisharp-roslyn#1686](https://github.com/OmniSharp/omnisharp-roslyn/pull/1686))
* Improved support for .NET Core 3.1

## 1.21.9 (December 16, 2019)
* Use the base filename instead of 'ClassName' in ctor snippet (PR:[#3385](https://github.com/OmniSharp/omnisharp-vscode/pull/3385))
* Added command to re-run code analysis on single project or all projects (PR:[#3089](https://github.com/OmniSharp/omnisharp-vscode/pull/3089))
* Updated Razor support (PR:[#3445](https://github.com/OmniSharp/omnisharp-vscode/pull/3445))
  * Rename support
  * Go to definition support
  * Go to implementation support
  * Find all references support
  * CodeLens support
  * Several mainline bug fixes
* Updated Razor grammar for better colorization (PR:[#3448](https://github.com/OmniSharp/omnisharp-vscode/pull/3448))
* Updated to MsBuild 16.4.0 (PR:[omnisharp-roslyn#1662](https://github.com/OmniSharp/omnisharp-roslyn/pull/1662))
* Line pragma is now respected in find references ([omnisharp-roslyn#1649](https://github.com/OmniSharp/omnisharp-roslyn/issues/1649), PR:[omnisharp-roslyn#1660](https://github.com/OmniSharp/omnisharp-roslyn/pull/1660))
* Do not set mono paths when running in standalone mode ([omnisharp-vscode#3410](https://github.com/OmniSharp/omnisharp-vscode/issues/3410), [omnisharp-vscode#3340](https://github.com/OmniSharp/omnisharp-vscode/issues/3340), [omnisharp-roslyn#1650](https://github.com/OmniSharp/omnisharp-roslyn/issues/1650), PR:[omnisharp-roslyn#1656](https://github.com/OmniSharp/omnisharp-roslyn/pull/1656))
* Fixed a bug where OmniSharp would crash on startup if the path contained `=` sign ([omnisharp-vscode#3436](https://github.com/OmniSharp/omnisharp-vscode/issues/3436), PR:[omnisharp-roslyn#1661](https://github.com/OmniSharp/omnisharp-roslyn/pull/1661))
* Improved support for .NET Core 3.1

## 1.21.8 (November 11, 2019)
* Update Razor to work for 3.1 SDKs (PR:[#3406](https://github.com/OmniSharp/omnisharp-vscode/pull/3406))
* Support plugins configuration in omnisharp.json (PR:[omnisharp-roslyn#1615](https://github.com/OmniSharp/omnisharp-roslyn/pull/1615))
* Improved support for .NET Core 3.1

## 1.21.7 (November 6, 2019)
* Updated the embedded Mono to 6.4.0 (PR:[omnisharp-roslyn#1640](https://github.com/OmniSharp/omnisharp-roslyn/pull/1640))
* Improved support for .NET Core 3

## 1.21.6 (October 28, 2019)
* Fixed a bug that caused CS0019 diagnostic to be erroneously reported when comparing to `default` ([omnisharp-roslyn#1619](https://github.com/OmniSharp/omnisharp-roslyn/issues/1619), PR:[omnisharp-roslyn#1634](https://github.com/OmniSharp/omnisharp-roslyn/pull/1634))
* Fixed a concurrency bug in scripting/Cake support ([omnisharp-roslyn#1627](https://github.com/OmniSharp/omnisharp-roslyn/pull/1627))
* Correctly respect request cancellation token in metadata service ([omnisharp-roslyn#1631](https://github.com/OmniSharp/omnisharp-roslyn/pull/1631))
* Improved support for .NET Core 3

## 1.21.5 (October 9, 2019)
* Fixed regression that caused "go to metadata" to not work ([omnisharp-roslyn#1624](https://github.com/OmniSharp/omnisharp-roslyn/issues/1624), PR: [omnisharp-roslyn#1625](https://github.com/OmniSharp/omnisharp-roslyn/pull/1625))

## 1.21.4 (September 30, 2019)
* Improved support for .NET Core 3

## 1.21.3 (September 18, 2019)
* Added support for `CheckForOverflowUnderflow ` in csproj files
* Improved support for .NET Core 3

## 1.21.2 (September 5, 2019)
* Improved support for .NET Core 3

## 1.21.1 (August 20, 2019)
* Fixed a regression which caused AllowUnsafeCode in csproj to also enable TreatWarningsAsErrors behavior.([omnisharp-roslyn#1565](https://github.com/OmniSharp/omnisharp-roslyn/issues/1565), PR: [omnisharp-roslyn#1567](https://github.com/OmniSharp/omnisharp-roslyn/pull/1567))

## 1.21.0 (July 18, 2019)

* Added a `omnisharp.enableEditorConfigSupport` setting to enable support for .editorconfig [#3136](https://github.com/OmniSharp/omnisharp-vscode/pull/3136) (_Contributed by_ [@hoffs](https://github.com/hoffs))(PR: [omnisharp-roslyn#1526](https://github.com/OmniSharp/omnisharp-roslyn/pull/1526) (_Contributed by_ [@filipw](https://github.com/filipw)))
* Modified the auto generated tasks in tasks.json to generate full paths and disable summary to fix the problem of no source links in the problems panel. (PR:[#3145](https://github.com/OmniSharp/omnisharp-vscode/pull/3145))
* Added support for Roslyn code actions that normally need UI - they used to be explicitly sipped by OmniSharp, now it surfaces them with predefined defaults instead. ([omnisharp-roslyn#1220](https://github.com/OmniSharp/omnisharp-roslyn/issues/1220), PR: [#1406](https://github.com/OmniSharp/omnisharp-roslyn/pull/1406)) These are:
  * extract interface
  * generate constructor
  * generate overrides
  * generate *Equals* and *GetHashCode*
* Improved analyzers performance by introducing background analysis support ([omnisharp-roslyn#1507](https://github.com/OmniSharp/omnisharp-roslyn/pull/1507))
* According to [official Microsoft .NET Core support policy](https://dotnet.microsoft.com/platform/support/policy/dotnet-core), .NET Core 1.0 and 1.1 (`project.json`-based .NET Core flavors) have reached end of life and went out of support on 27 June 2019. OmniSharp features to support that, which have been obsolete and disabled by default since version 1.32.2 (2018-08-07), are now completely removed.
* Fixed a bug where some internal services didn't respect the disabling of a project system ([omnisharp-roslyn#1543](https://github.com/OmniSharp/omnisharp-roslyn/pull/1543))
* Improved the MSBuild selection logic. The standalone instance inside OmniSharp is now preferred over VS2017, with VS2019 given the highest priority. This ensures that .NET Core 3.0 works correctly. It is also possible manually provide an MSBuild path using OmniSharp configuration, which is then always selected. ([omnisharp-roslyn#1541](https://github.com/OmniSharp/omnisharp-roslyn/issues/1541), PR: [omnisharp-roslyn#1545](https://github.com/OmniSharp/omnisharp-roslyn/pull/1545))
    ```JSON
        {
            "MSBuild": {
                "MSBuildOverride": {
                    "MSBuildPath": "C:\\Program Files (x86)\\Microsoft Visual Studio\\2017\\Enterprise\\MSBuild\\15.0\\Bin",
                    "Name": "vs2017 msbuild"
                }
            }
        }
    ```
* Added support for *AdditionalFiles* in csproj files ([omnisharp-roslyn#1510](https://github.com/OmniSharp/omnisharp-roslyn/issues/1510), PR: [omnisharp-roslyn#1547](https://github.com/OmniSharp/omnisharp-roslyn/pull/1547))
* Fixed a bug in *.editorconfig* where formatting settings were not correctly passed into external code fixes ([omnisharp-roslyn#1558](https://github.com/OmniSharp/omnisharp-roslyn/issues/1558), PR: [omnisharp-roslyn#1559](https://github.com/OmniSharp/omnisharp-roslyn/pull/1559))


## 1.20.0 (June 11, 2019)

* Updated the auto-generated launch.json to use new mechanism for starting web browser. For more information: https://aka.ms/VSCode-CS-LaunchJson-WebBrowser
* Improved support for .NET Core 3
* Updates to Razor support
* Made QuickInfo display more consistent with Visual Studio. ([#2610](https://github.com/OmniSharp/omnisharp-vscode/issues/2610))  (_Contributed by_ [@paladique](https://github.com/paladique))(PR: [#3090](https://github.com/OmniSharp/omnisharp-vscode/pull/3090/))
* Added support for fading unnecessary code and using statements [#2873](https://github.com/OmniSharp/omnisharp-vscode/pull/2873)

## 1.19.1 (May 6, 2019)

* Updated debugger to work correctly on Linux distributions with openssl 1.1 such as Ubuntu 19.04 ([#3010](https://github.com/OmniSharp/omnisharp-vscode/issues/3010))
* Fixed OmniSharp hanging on wildcard Nuget package references.(PR: [omnisharp-roslyn#1473](https://github.com/OmniSharp/omnisharp-roslyn/pull/1473))
* OmniSharp now uses correct 4.7.2 framework sku to prompt for installation of .NET 4.7.2 if missing.(PR: [omnisharp-roslyn#1469](https://github.com/OmniSharp/omnisharp-roslyn/pull/1469)).

## 1.19.0 (April 16, 2019)
* Improved support for .NET Core 3
* Added support for roslyn analyzers, code fixes and rulesets which can be enabled via`omnisharp.enableRoslynAnalyzers` setting.
* Improved Razor diagnostics
* Razor tooling support for tag helpers

## 1.18.0 (March 26, 2019)

* Added a `csharp.maxProjectFileCountForDiagnosticAnalysis` setting to configure the file limit when the extension stops reporting errors for whole workspace. When this threshold is reached, the diagnostics are reported for currently opened files only. This mechanism was available in previous versions, but now can be configured. The default is 1000. (PR: [#1877](https://github.com/OmniSharp/omnisharp-vscode/pull/1877))
* Added a `omnisharp.enableMsBuildLoadProjectsOnDemand` setting to load project for files that were opened in the editor. This setting is useful for big C# codebases and allows for faster initialization of code navigation features only for projects that are relevant to code that is being edited._(Contributed by [@dmgonch](https://github.com/dmgonch))(PR: [#2750](https://github.com/OmniSharp/omnisharp-vscode/pull/2750/files))
* Added initial support for C# 8. (PR: [omnisharp-roslyn#1365](https://github.com/OmniSharp/omnisharp-roslyn/pull/1365))
* Fixed finding references to operator overloads _(Contributed by [@SirIntruder](https://github.com/SirIntruder))_ (PR: [omnisharp-roslyn#1371](https://github.com/OmniSharp/omnisharp-roslyn/pull/1371))
* Improved handling of files moving on disk (PR: [omnisharp-roslyn#1368](https://github.com/OmniSharp/omnisharp-roslyn/pull/1368))
* Improved detection of MSBuild when multiple instances are available _(Contributed by [@johnnyasantoss ](https://github.com/johnnyasantoss))_ (PR: [omnisharp-roslyn#1349](https://github.com/OmniSharp/omnisharp-roslyn/pull/1349))
* Fixed a bug where the "OmniSharp" and "C# log" would steal the editor focus and hinder the user's development flow.(PR: [#2828](https://github.com/OmniSharp/omnisharp-vscode/pull/2828))
* Improvement in code load times for the extension by using webpack (PR: [#2835](https://github.com/OmniSharp/omnisharp-vscode/pull/2835))
* Added tasks for "dotnet publish" and "dotnet watch" in the initial asset generation  _(Contributed by [@timheuer ](https://github.com/timheuer))_ (PR: [#2903](https://github.com/OmniSharp/omnisharp-vscode/pull/2903))

#### Debugger
* Added support for set next statement. Set next statement is a feature that has been available for a long time in full Visual Studio, and this brings the feature to Visual Studio Code. This feature allows developers to change what code is executed next in the target program. For example, you can move the instruction pointer back to re-execute a function that you just ran so you can debug into it, or you can skip over some code that you don't want to execute. To use this feature, move your cursor to the statement you would like to execute next, and either open the editor context menu and invoke 'Set Next Statement (.NET)', or use the keyboard shortcut of <kbd>Ctrl+Shift+F10</kbd> ([#1753](https://github.com/OmniSharp/omnisharp-vscode/issues/1753))
* Improved responsiveness by making the debugger backend asynchronous and cancelable so that operations (ex: evaluate expression 'xyz') can be aborted on step/go/disconnect ([#1215](https://github.com/OmniSharp/omnisharp-vscode/issues/1215)).
* Added support for pagination of evaluation result children. Before, if an element in the watch/variables/data tip had a large number of child elements, then the first 1,000 children would be calculated up front and no others would be shown. This could be very slow. Now only the first 25 elements are calculated and there is a '\[More]' node to obtain additional values. Note that if you are trying to find a particular element in a large collection it is still best to use Linq (example: `myCollection.Where(x => x > 12).ToList()`).
* Added support for showing return values in the variables window ([#859](https://github.com/OmniSharp/omnisharp-vscode/issues/859)).
* Fixed evaluating string functions with interpretation in .NET Core 2.1+. Evaluation uses interpretation for conditional breakpoints, evaluating methods that take a lambda, etc ([#2683](https://github.com/OmniSharp/omnisharp-vscode/issues/2683)).
* Many small improvements to launch.json/tasks.json generation. Highlights include a selection dialog if the workspace contains multiple launchable projects, a few simplifications to reduce the number of fields in the default launch.json, and switching the 'problem matcher' for build tasks. (PR: [#2780](https://github.com/OmniSharp/omnisharp-vscode/pull/2780))
* Updated the default symbol cache directory to match other .NET Tools ([#2797](https://github.com/OmniSharp/omnisharp-vscode/issues/2797)).

## 1.17.1 (November 11, 2018)

* Updated Razor language service to fix various Razor editing reliability issues. For details see https://github.com/aspnet/Razor.VSCode/releases/tag/1.0.0-alpha2.

## 1.17.0 (October 31, 2018)

* Added preview Razor (cshtml) language service with support for C# completions and diagnostics in ASP.NET Core projects. Please report issues with the preview Razor tooling on the [aspnet/Razor.VSCode](https://github.com/aspnet/Razor.VSCode/issues) repo. To disable the preview Razor tooling set the "razor.disabled" setting to `true`. (PR: [2554](https://github.com/OmniSharp/omnisharp-vscode/pull/2554))
* Added omnisharp.minFindSymbolsFilterLength setting to configure the number of characters a user must type in for "Go to Symbol in Workspace" command to return any results (default is 0 to preserve existing behavior). Additionally added omnisharp.maxFindSymbolsItems for configuring maximum number of items returned by "Go to Symbol in Workspace" command. The default is 1000. (PR: [#2487](https://github.com/OmniSharp/omnisharp-vscode/pull/2487))
* Added a command - "CSharp: Start authoring a new issue on GitHub" to enable the users to file issues on github from within the extension with helpful config information from their system.(PR: [#2503](https://github.com/OmniSharp/omnisharp-vscode/pull/2503))

#### Debugger
* Fixed crash at the end of debug sessions on Linux ([#2439](https://github.com/OmniSharp/omnisharp-vscode/issues/2439))
* Fixed searching for PDBs in original built location ([#2483](https://github.com/OmniSharp/omnisharp-vscode/issues/2483))
* Fixed launching the web browser against an ASP.NET project that uses wildcard ('*') bindings ([#2528](https://github.com/OmniSharp/omnisharp-vscode/issues/2528))

## 1.16.2 (October 3, 2018)
* Update extension to handle upcoming breaking change to launch.json configurations in VS Code 1.28. (PR: [#2558](https://github.com/OmniSharp/omnisharp-vscode/pull/2558))
* Fixed a bug where OmniSharp flame was red in spite of OmniSharp loading the projects without any errors. (PR: [#2450](https://github.com/OmniSharp/omnisharp-vscode/pull/2540))
* Fixed launch.json `envFile` option on Windows. (PR: [#2560](https://github.com/OmniSharp/omnisharp-vscode/pull/2560))
* Fixed a problem with tracking virtual documents from other providers. (PR: [#2562](https://github.com/OmniSharp/omnisharp-vscode/pull/2562))

## 1.16.0 (September 10, 2018)

#### Project System

* Separated the existing "Restore Packages" option in the Command Palette into two distinct functions:
  * "Restore Project" - Displays a drop-down that shows all the available projects in the solution or in the workspace. Selecting one of them would trigger a dotnet restore for the particular project.
  * "Restore All Projects" - Triggers a dotnet restore for all projects in the current solution or workspace.

* Modified the "Unresolved dependencies" prompt to restore the all the projects in the currently selected solution or workspace. (PR: [#2323](https://github.com/OmniSharp/omnisharp-vscode/pull/2323))

* Added support to configure the default *.sln file loaded when opening a project with multiple *.sln files in the root. _(Contributed by [@janaka](https://github.com/janaka))_ (PR: [#2053](https://github.com/OmniSharp/omnisharp-vscode/pull/2053))

* Added support for tracking opening, closing and changing of virtual documents that don't exist on disk. (PR: [#2436](https://github.com/OmniSharp/omnisharp-vscode/pull/2436)) _(Contributed by [@NTaylorMullen](https://github.com/NTaylorMullen))_

* Enabled IDE features for .cs files that are not part of a project. (PR: [#2471](https://github.com/OmniSharp/omnisharp-vscode/pull/2471), [omnisharp-roslyn#1252](https://github.com/OmniSharp/omnisharp-roslyn/pull/1252))

#### Misc

* Added a prompt to "Restart OmniSharp" when there is a change in omnisharp "path", "useGlobalMono" or "waitForDebugger" settings.(PR: [#2316](https://github.com/OmniSharp/omnisharp-vscode/pull/2316))

#### Editor

* Improved diagnostics by refreshing them when the active editor changes or the current window is focused. (PR: [#2317](https://github.com/OmniSharp/omnisharp-vscode/pull/2317)) _(Contributed by [@SirIntruder](https://github.com/SirIntruder))_

* Improved completions by adding the preselect property so the best match is preselected. (PR: [#2388](https://github.com/OmniSharp/omnisharp-vscode/pull/2388))

#### Testing

* Added test execution output to the output of the Run/Debug Test CodeLens. (PR: [#2337](https://github.com/OmniSharp/omnisharp-vscode/pull/2337), [#2343](https://github.com/OmniSharp/omnisharp-vscode/pull/2343), [omnisharp-roslyn#1203](https://github.com/OmniSharp/omnisharp-roslyn/pull/1203))
* Fixed a bug where a debug session could not be started and duplicate logs were displayed after a previous one failed due to build failure. (PR: [#2405](https://github.com/OmniSharp/omnisharp-vscode/pull/2405), [omnisharp-roslyn#1239](https://github.com/OmniSharp/omnisharp-roslyn/pull/1239))

#### Options

* Added `monoPath` option to use the mono installation at the specified path when the `useGlobalMono` is set to "always" or "auto". (PR: [#2425](https://github.com/OmniSharp/omnisharp-vscode/pull/2425)) _(Contributed by [@shana](https://github.com/shana))_

#### Debugger

* Added support for launching with environment variables stored in a seperate file from launch.json via a new `envFile` option. (PR: [#2462](https://github.com/OmniSharp/omnisharp-vscode/pull/2462), [#1944](https://github.com/OmniSharp/omnisharp-vscode/issues/1944)) _(Contributed by [@SebastianPfliegel](https://github.com/SebastianPfliegel))_
* Fixed editting breakpoint conditions while debugging with recent versions of VS Code. ([#2428](https://github.com/OmniSharp/omnisharp-vscode/issues/2428))
* Added support for hit count breakpoint conditions. ([#895](https://github.com/OmniSharp/omnisharp-vscode/issues/895))
* Support the `applicationUrl` property in launchSettings.json. ([#2296](https://github.com/OmniSharp/omnisharp-vscode/issues/2296))
* Improve the error message when attaching to privileged processes on Linux and macOS. ([#477](https://github.com/OmniSharp/omnisharp-vscode/issues/477))

## 1.15.2 (May 15, 1018)

* Fixed a 1.30.0 regression that prevented the script project system from working on Unix-based systems ([omnisharp-roslyn#1184](https://github.com/OmniSharp/omnisharp-roslyn/pull/1184), PR: [omnisharp-roslyn#1185](https://github.com/OmniSharp/omnisharp-roslyn/pull/1185)) _(Contributed by [@filipw](https://github.com/filipw))_
* Fixed a regression that could cause the debugger to crash on Windows ([#2297](https://github.com/OmniSharp/omnisharp-vscode/issues/2297)).

## 1.15.1 (May 11, 1018)

* The minimum Mono version required to run OmniSharp on has been increased to 5.8.1.

## 1.15.0 (May 10, 2018)

#### Debugger

* New features:

  * Adds support for [Source Link](https://aka.ms/SourceLinkSpec), Symbol Servers and other more advanced symbol options ([#373](https://github.com/OmniSharp/omnisharp-vscode/issues/373))
  * Adds launch.json option to suppress Just-In-Time compiler optimizations.
  * Due to the previous two items and work from the .NET Team, it is now possible to easily debug into ASP.NET itself in projects running against .NET Core 2.1. Instructions are in the [wiki](https://github.com/OmniSharp/omnisharp-vscode/wiki/Debugging-into-the-.NET-Framework-itself).
  * Adds support for pulling in environment variables from `${cwd}/Properties/launchSettings.json`. This means that if you add environment variable configuration to your launchSettings.json file, they will now be used when you start your app from Visual Studio Code like they previously would be used from the command line (`dotnet run`), and from Visual Studio. ([#2017](https://github.com/OmniSharp/omnisharp-vscode/issues/2017))

* Bug fixes:

  * On Linux, this reduces the native dependencies of the debugger to match the .NET Core 2.1 runtime. The Linux .NET Core 2.1 runtime reduced its native dependencies over all the previous versions, but the debugger still had the same dependencies as .NET Core 2.0. With this fix, the debugger will now continue to work on Linux after installing the .NET Core runtime and nothing else. ([#2199](https://github.com/OmniSharp/omnisharp-vscode/issues/2199))
  * Fixes async call stacks with the .NET Core 2.1 runtime. ([#1892](https://github.com/OmniSharp/omnisharp-vscode/issues/1892))
  * Fixes the debugger's browser launch code when launching projects configured to use Application Insights. ([2177](https://github.com/OmniSharp/omnisharp-vscode/issues/2177))

#### Editor

* Fixed regression where the "Generate Type in New File" code action would create an empty file. ([#2112](https://github.com/OmniSharp/omnisharp-vscode/issues/2112), PR: [omnisharp-roslyn#1143](https://github.com/OmniSharp/omnisharp-roslyn/pull/1143))
* Made several improvements to the display of tooltips in Signature Help. ([#1940](https://github.com/OmniSharp/omnisharp-vscode/issues/1940), PR: [#1958](https://github.com/OmniSharp/omnisharp-vscode/pull/1958))

#### Options

* "omnisharp.path": This option has been updated to enable the user to specify different versions of OmniSharp, including prerelease versions. ([#1909](https://github.com/OmniSharp/omnisharp-vscode/issues/1909), PR: [#2039](https://github.com/OmniSharp/omnisharp-vscode/pull/2039))

  Possible values for this option are:
  * `<Path to the omnisharp executable>`: Use a local copy of OmniSharp. The value must point directly to the OmniSharp executable. This is typically the build output directory of the [omnisharp-roslyn](https://github.com/OmniSharp/omnisharp-roslyn) project on the current machine, for example, `C:/omnisharp-roslyn/artifacts/publish/OmniSharp.Stdio/win7-x64/OmniSharp.exe`.
  * `latest`: Use the latest CI build from [omnisharp-roslyn](https://github.com/OmniSharp/omnisharp-roslyn).
  * `<version>`: Use a specific version of OmniSharp. Example: `1.29.2-beta.60`
  If "omnisharp.path" is not set, the defalut version of OmniSharp for the current release of C# for VS Code is used.

* "omnisharp.useGlobalMono": This option replaces the old "omnisharp.useMono" option and controls whether or not OmniSharp will be launched with a globally-installed version of Mono. (PR: [#2244](https://github.com/OmniSharp/omnisharp-vscode/pull/2244))

  There are three possible values:
  * "auto": Automatically launch OmniSharp with `mono` if version 5.2.0 or greater is available on the PATH.
  * "always": Always launch OmniSharp with `mono`. If version 5.2.0 or greater is not available on the PATH, an error will be printed.
  * "never": Never launch OmniSharp on a globally-installed Mono.

* It is now possible to suppress the "Some projects have trouble loading" popup using the `omnisharp.disableMSBuildDiagnosticWarning` option. ([#2110](https://github.com/OmniSharp/omnisharp-vscode/issues/2110)

#### Project System

* Several common globbing patterns are now excluded by default when OmniSharp scans for `*.csproj`, `*.cake`, or `*.csx` files to load. The deafault patterns are `**/node_modules/**/*`, `**/bin/**/*`, `**/obj/**/*`, `**/.git/**/*`. ([omnisharp-roslyn#896](https://github.com/OmniSharp/omnisharp-roslyn/issues/896), PR: [omnisharp-roslyn#1161](https://github.com/OmniSharp/omnisharp-roslyn/pull/1161)) _(Contributed by [@filipw](https://github.com/filipw))_
* The list of globbing patterns that are excluded by OmniSharp can be customized in an `omnisharp.json` file list so.
  ```JSON
  {
    "systemExcludeSearchPatterns": [
      "**/test/**/*"
    ],
    "excludeSearchPatterns": [
      "**/local/**/*"
    ]
  }
  ```

  For more details on configuring OmniSharp see [Configuration Options](https://github.com/OmniSharp/omnisharp-roslyn/wiki/Configuration-Options) at the [omnisharp-roslyn](https://github.com/OmniSharp/omnisharp-roslyn) repo. ([omnisharp-roslyn#896](https://github.com/OmniSharp/omnisharp-roslyn/issues/896), PR: [omnisharp-roslyn#1161](https://github.com/OmniSharp/omnisharp-roslyn/pull/1161)) _(Contributed by [@filipw](https://github.com/filipw))_
* Improved handling of projects with XAML files. ([#2173](https://github.com/OmniSharp/omnisharp-vscode/issues/2173), PR: [omnisharp-roslyn#1157](https://github.com/OmniSharp/omnisharp-roslyn/pull/1157))
* MSBuild is now properly located on Windows for Visual Studio 2017 previews. ([omnisharp-roslyn#1166](https://github.com/OmniSharp/omnisharp-roslyn/pull/1166)) _(Contributed by [@rainersigwald](https://github.com/rainersigwald))_

#### Scripting

* It is now possible to define the default target framework for C# scripts in an `omnisharp.json` file.

  ```JSON
  {
    "script": {
      "defaultTargetFramework": "netcoreapp2.0"
    }
  }
  ```

  (PR: [omnisharp-roslyn#1154](https://github.com/OmniSharp/omnisharp-roslyn/pull/1154)) _(Contributed by [@filipw](https://github.com/filipw))_

#### Status Bar

* Splits the OmniSharp status bar item into two parts, both of which appear on the left side of VS Code's status bar and have specific responsibilities. ([#2146](https://github.com/OmniSharp/omnisharp-vscode/issues/2146), PR: [#2133](https://github.com/OmniSharp/omnisharp-vscode/pull/2133))

  * OmniSharp Server info:
    * Displays the current state of the  OmniSharp server, such as Downloading, Installing, etc. The flame icon is green when the server is initialized and running properly, or red if there is an error.
  * Selected Project info:
    * Displays the name of the selected project regardless of the currently active document.
    * If a project is already selected, it displays the name of the selected project. Clicking on it displays a menu to switch to other projects in the workspace.
    * If there are multiple possible launch targets, it displays 'Select Project'. Clicking on it displays a menu to select one.

#### Testing

* Added "debug all tests" and "run all tests" to the CodeLens that appears above test classes to allow running or debugging all tests in a class. ([#420](https://github.com/OmniSharp/omnisharp-vscode/issues/420), PRs: [#1961](https://github.com/OmniSharp/omnisharp-vscode/pull/1961), [omnisharp-roslyn#1089](https://github.com/OmniSharp/omnisharp-roslyn/pull/1089)

#### Misc

* Fixed script for creating offline VSIXs. ([#2137](https://github.com/OmniSharp/omnisharp-vscode/issues/2137), PR: [#2138](https://github.com/OmniSharp/omnisharp-vscode/pull/2138))

## 1.14.0 (February 14, 2018)

#### C# Language Support

* Support for C# 7.2 (PR: [omnisharp-roslyn#1055](https://github.com/OmniSharp/omnisharp-roslyn/pull/1055)) _(Contributed by [@filipw](https://github.com/filipw))_

#### Debugger

* Fixes symbol loading while debugging apps running under .NET Core 2.1 (ex: netcoreapp 2.1) on Linux and macOS
* Fixes debug console message encoding issue on Windows ([#1775](https://github.com/OmniSharp/omnisharp-vscode/issues/1775)).
* Adds support for extracting source files embedded in PDBs. See the C# [EmbeddedFiles](https://github.com/dotnet/roslyn/issues/19127) feature for more information.
* Adds preliminary support for Linux ARM debugging

#### Editor

* Fix to allow signature help return results for attribute constructors. ([#1814](https://github.com/OmniSharp/omnisharp-vscode/issues/1814), PR: [omnisharp-roslyn#1007](https://github.com/OmniSharp/omnisharp-roslyn/pull/1007))
* Fix to return correct SymbolKinds from WorkspaceSymbolprovider ([#1907](https://github.com/OmniSharp/omnisharp-vscode/issues/1907), PR: [#1911](https://github.com/OmniSharp/omnisharp-vscode/pull/1911)) _(Contributed by [@craig006](https://github.com/craig006))_
* Improved newline formatting in hover info ([#1057](https://github.com/OmniSharp/omnisharp-vscode/issues/1057), PR: [#1918](https://github.com/OmniSharp/omnisharp-vscode/pull/1918))
* Disabled Go To Definition on property acessor keywords ([#1949](https://github.com/OmniSharp/omnisharp-vscode/issues/1949), PR: [omnisharp-roslyn#1086](https://github.com/OmniSharp/omnisharp-roslyn/pull/1086))
* Bug fixes to IntelliSense (completion, signature help): (([#1664](https://github.com/OmniSharp/omnisharp-vscode/issues/1664), [1440](https://github.com/OmniSharp/omnisharp-vscode/issues/1440), PR: [omnisharp-roslyn#1030](https://github.com/OmniSharp/omnisharp-roslyn/pull/1030)); ([#146](https://github.com/OmniSharp/omnisharp-vscode/issues/146) , PR: [#1776](https://github.com/OmniSharp/omnisharp-vscode/pull/1776)))
* Improved "Format Code" behavior: ([#214](https://github.com/OmniSharp/omnisharp-vscode/issues/214), PR: [omnisharp-roslyn#1043](https://github.com/OmniSharp/omnisharp-roslyn/pull/1043))
* Improved code action ordering: ([omnisharp-roslyn#758](https://github.com/OmniSharp/omnisharp-roslyn/issues/758), PR: [omnisharp-roslyn#1078](https://github.com/OmniSharp/omnisharp-roslyn/pull/1078))
* Fixed duplicate errors in error list ([#1830](https://github.com/OmniSharp/omnisharp-vscode/issues/1830), PR:[#1107](https://github.com/OmniSharp/omnisharp-roslyn/pull/1107))

#### Project System

* Addressed problems with projects not being refreshed by OmniSharp after a package restore. ([#1583](https://github.com/OmniSharp/omnisharp-vscode/issues/1583), [#1661](https://github.com/OmniSharp/omnisharp-vscode/issues/1661), [#1785](https://github.com/OmniSharp/omnisharp-vscode/issues/1785), PR: [omnisharp-roslyn#1003](https://github.com/OmniSharp/omnisharp-roslyn/pull/1003))
* Added option to disable warning about project.json deprecation ([1920](https://github.com/OmniSharp/omnisharp-vscode/issues/1920), PR: [#1926](https://github.com/OmniSharp/omnisharp-vscode/pull/1926))

#### Task Generation

* Updated task generator to match latest schema from VS Code (PR: [#1932](https://github.com/OmniSharp/omnisharp-vscode/pull/1923)) _(Contributed by [@natec425](https://github.com/natec425))_
* Fixed a typo in tasks.json (PR: [1945](https://github.com/OmniSharp/omnisharp-vscode/pull/1945)) _(Contributed by [@SebastianPfliegel](SebastianPfliegel))_

#### Misc

* Fixed offline packaging ([1912](https://github.com/OmniSharp/omnisharp-vscode/issues/1912), [1930](https://github.com/OmniSharp/omnisharp-vscode/issues/1930), PR: [#1931](https://github.com/OmniSharp/omnisharp-vscode/pull/1931))

## 1.13.1 (November 13, 2017)

* Addressed problem with Sdk-style projects not being loaded properly in certain cases. ([#1846](https://github.com/OmniSharp/omnisharp-vscode/issues/1846), [#1849](https://github.com/OmniSharp/omnisharp-vscode/issues/1849), PR: [omnisharp-roslyn#1021](https://github.com/OmniSharp/omnisharp-roslyn/pull/1021))
* Fixed issue with discovering MSBuild under Mono even when it is missing. ([omnisharp-roslyn#1011](https://github.com/OmniSharp/omnisharp-roslyn/issues/1011), PR: [omnisharp-roslyn#1016](https://github.com/OmniSharp/omnisharp-roslyn/pull/1016))
* Fixed issue to not use Visual Studio 2017 MSBuild if it is from VS 2017 RTM. ([omnisharp-roslyn#1014](https://github.com/OmniSharp/omnisharp-roslyn/issues/1014), PR: [omnisharp-roslyn#1016](https://github.com/OmniSharp/omnisharp-roslyn/pull/1016))

## 1.13.0 (November 7, 2017)

#### Cake

* Added support for *.cake files! (PRs: [#1681](https://github.com/OmniSharp/omnisharp-vscode/pull/1681), [omnisharp-roslyn#932](https://github.com/OmniSharp/omnisharp-roslyn/pull/932)) _(Contributed by [@mholo65](https://github.com/mholo65))_

#### Debugger

* Improved logic for resolving breakpoints in local functions and lambdas. ([#1678](https://github.com/OmniSharp/omnisharp-vscode/issues/1678))
* When generating a new launch.json file via "start debugging" in a workspace without a launch.json file, the extension now provides the same content as is created with the '.NET: Generate Assets for Build and Debug' command. This takes advantage of a new extensibility point from VS Code. Before the C# extension could only statically provide templates, so, for example, they couldn't have the path to the launchable project. (PR: [#1801](https://github.com/OmniSharp/omnisharp-vscode/pull/1801))

#### Editor

* Improved completion list behavior when matching substrings. (PRs: [#1813](https://github.com/OmniSharp/omnisharp-vscode/pull/1813), [omnisharp-roslyn#990](https://github.com/OmniSharp/omnisharp-roslyn/pull/990)) _(Contributed by [@filipw](https://github.com/filipw))_
* Completion list now triggers on SPACE after `new`. ([#146](https://github.com/OmniSharp/omnisharp-vscode/issues/146), PR: [#1776](https://github.com/OmniSharp/omnisharp-vscode/pull/1776), [omnisharp-roslyn#975](https://github.com/OmniSharp/omnisharp-roslyn/pull/975))

#### Navigation

* Fixed issue with Go to Definition where it was not possible to navigate to a  definition within the same file if the file was generated from metadata. (PR: [#1772](https://github.com/OmniSharp/omnisharp-vscode/pull/1772)) _(Contributed by [@filipw](https://github.com/filipw))_
* Improved symbol search behavior when matching substrings. (PR: [omnisharp-roslyn#990](https://github.com/OmniSharp/omnisharp-roslyn/pull/990)) _(Contributed by [@filipw](https://github.com/filipw))_

#### Project System

* Significantly changed how MSBuild is located by OmniSharp, resulting in more project types loading properly. (PR: [omnisharp-roslyn#988](https://github.com/OmniSharp/omnisharp-roslyn/pull/988))
* Fixed bug where `LangVersion` property was not read correctly from project file, blocking C# 7.1 development. ([omnisharp-roslyn#961](https://github.com/OmniSharp/omnisharp-roslyn/issues/961), PR: [omnisharp-roslyn#962](https://github.com/OmniSharp/omnisharp-roslyn/pull/962)]) _(Contributed by [@filipw](https://github.com/filipw))_
* Fixed issue where signing key was not read correctly from project file, which can result in InternalsVisibleTo not being handled properly. (PR: [omnisharp-roslyn#964](https://github.com/OmniSharp/omnisharp-roslyn/pull/964))
* Fixed long-standing problem with renaming files. ([#785](https://github.com/OmniSharp/omnisharp-vscode/issues/785), [#1792](https://github.com/OmniSharp/omnisharp-vscode/issues/1792), PR: [#1805](https://github.com/OmniSharp/omnisharp-vscode/pull/1805))
* Fixed problem where the Antlr4.CodeGenerator Nuget package would not generate files during OmniSharp design-time build. ([#1822](https://github.com/OmniSharp/omnisharp-vscode/issues/1822), PR: [omnisharp-roslyn#1002](https://github.com/OmniSharp/omnisharp-roslyn/pull/1002))
* Fixed issue where a C# project referencing a non-C# project would cause the referenced project to be loaded (causing OmniSharp to potentially treat it as C#!). ([#371](https://github.com/OmniSharp/omnisharp-vscode/issues/371), [#1829](https://github.com/OmniSharp/omnisharp-vscode/issues/1829), PR: [omnisharp-roslyn#1005](https://github.com/OmniSharp/omnisharp-roslyn/pull/1005))

#### Testing

* Fix error that occurs when running or debugging tests with latest xUnit 2.3.0 builds. ([#1733](https://github.com/OmniSharp/omnisharp-vscode/issues/1733), [omnisharp-rolsyn#944](https://github.com/OmniSharp/omnisharp-roslyn/issues/944), PR: [omnisharp-roslyn#945](https://github.com/OmniSharp/omnisharp-roslyn/pull/945), [#1749](https://github.com/OmniSharp/omnisharp-vscode/pull/1749))
* Fix issue causing NUnit tests not to work when running or debugging tests. ([#1615](https://github.com/OmniSharp/omnisharp-vscode/issues/1635), PR: [#1760](https://github.com/OmniSharp/omnisharp-vscode/pull/1760)). _(Contributed by [@dgileadi](https://github.com/dgileadi))_
* Pass `--no-restore` when invoking `dotnet build` to ensure that implicit restore does not run, making the build and the test run a bit faster. ([omnisharp-roslyn##942](https://github.com/OmniSharp/omnisharp-roslyn/issues/942), PR: [omnisharp-roslyn#945](https://github.com/OmniSharp/omnisharp-roslyn/pull/945))
* Fix Unit Test debugging with VS Code 1.18. ([#1800](https://github.com/OmniSharp/omnisharp-vscode/issues/1800))

#### Other Updates and Fixes

* If Mono 5.2.0 or greater is installed, OmniSharp will be launched on that rather than the local Mono runtime that it carries with it. This allows, more Mono and Xamarin projects to load properly and improves OmniSharp performance (since it can run on Mono AOT'd binaries). ([#1779](https://github.com/OmniSharp/omnisharp-vscode/issues/1779), PR: [#1789](https://github.com/OmniSharp/omnisharp-vscode/pull/1789))
* Support added for launching OmniSharp on folders and solutions across multi-root workspaces. ([#1762](https://github.com/OmniSharp/omnisharp-vscode/issues/1762), PR: [#1806](https://github.com/OmniSharp/omnisharp-vscode/pull/1806))
* Added `csharp.referencesCodeLens.enabled` and `csharp.testsCodeLens.enabled` options to allow disabling/enabling for the 'references' and 'run/debug test' code lenses independently. ([#1570](https://github.com/OmniSharp/omnisharp-vscode/issues/1570), [#1807](https://github.com/OmniSharp/omnisharp-vscode/issues/1807), PRs: [#1781](https://github.com/OmniSharp/omnisharp-vscode/pull/1781), [#1809](https://github.com/OmniSharp/omnisharp-vscode/pull/1809))

## 1.12.1 (August 14, 2017)

* MSBuild support properly sets CscToolExe to 'csc.exe' to address issues when a project's MSBuild targets have set it to 'mcs.exe'. ([#1707](https://github.com/OmniSharp/omnisharp-vscode/issues/1707))

## 1.12.0 (August 8, 2017)

#### Debugger

* Update debugger to run *itself* on .NET Core 2.0-preview2 (target app can still use .NET Core 1.x). This allows the debugger to run on more Linux distributions, and it allows there to be a single debugger package for all supported Linux distributions.
* Fix issue where the call stack may be empty when stepping quickly ([#1575](https://github.com/OmniSharp/omnisharp-vscode/issues/1575))
* Improvements to the information displayed in the editor peak window when stopping on an exception that has inner exceptions ([#1007](https://github.com/OmniSharp/omnisharp-vscode/issues/1007))
* Fix expression evaluation when stopping at an exception in .NET Core 2.0 ([#1593](https://github.com/OmniSharp/omnisharp-vscode/issues/1593))
* Improve error behavior when `"program"` in launch.json is set to a path that doesn't exist ([#1634](https://github.com/OmniSharp/omnisharp-vscode/issues/1634))
* Enable stepping by statement (instead of by line) ([#1476](https://github.com/OmniSharp/omnisharp-vscode/issues/1476))

#### Editor

* Go to Definition now works from "metadata as source" files ([#771](https://github.com/OmniSharp/omnisharp-vscode/issues/771), PR: [#1620](https://github.com/OmniSharp/omnisharp-vscode/pull/1620)) _(Contributed by [@filipw](https://github.com/filipw))_
* Selection-based code fixes and refactorings (such as "Extract Method") will no longer be offerred unless there is actually a selection in the editor. ([#1605](https://github.com/OmniSharp/omnisharp-vscode/issues/1605), PR: [#1606](https://github.com/OmniSharp/omnisharp-vscode/pull/1606))

#### Project System

* Mono targets and tasks are now better located when Mono is installed. This enables support for many Mono-based projects types, such as Xamarin.iOS, Xamarin.Android, MonoGame, etc. ([#1597](https://github.com/OmniSharp/omnisharp-vscode/issues/1597), [#1624](https://github.com/OmniSharp/omnisharp-vscode/issues/1624), [#1396](https://github.com/OmniSharp/omnisharp-vscode/issues/1396) [omnisharp-roslyn#892](https://github.com/OmniSharp/omnisharp-roslyn/issues/892), PR: [omnisharp-roslyn#923](https://github.com/OmniSharp/omnisharp-roslyn/pull/923))
* Use new solution parer to be more resilient against invalid solution files. ([1580](https://github.com/OmniSharp/omnisharp-vscode/issues/1580), [1645](https://github.com/OmniSharp/omnisharp-vscode/issues/1645), PRs: [omnisharp-roslyn#897](https://github.com/OmniSharp/omnisharp-roslyn/pull/897) and [omnisharp-roslyn#918](https://github.com/OmniSharp/omnisharp-roslyn/pull/918))
* The MSBuild project system now calls the "Compile" target rather than the "ResolveReferences" target when processing MSBuild files. This has the effect of ensuring that other targets have the opportunity to run (such as targets that generate files) while still not building any output binaries. ([#1531](https://github.com/OmniSharp/omnisharp-vscode/issues/1531))
* Binding redirects added for MSBuild assemblies, fixing issues with MSBuild tasks built with different versions of MSBuild. ([omnisharp-roslyn#903](https://github.com/OmniSharp/omnisharp-roslyn/issues/903))
* The OmniSharp server has updated to the latest MSBuild. ([omnisharp-roslyn#904](https://github.com/OmniSharp/omnisharp-roslyn/pull/904), PR: [omnisharp-roslyn#907](https://github.com/OmniSharp/omnisharp-roslyn/pull/907))

#### Scripting

* Support added for referencing NuGet packages in C# scripts. (PR: [omnisharp-roslyn#813](https://github.com/OmniSharp/omnisharp-roslyn/pull/813)) _(Contributed by [@seesharper](https://github.com/seesharper))_
* System.dll is now added correctly for C# scripts targeting .NET Framework. ([omnisharp-vscode#1581](https://github.com/OmniSharp/omnisharp-vscode/issues/1581), PR: [#898](https://github.com/OmniSharp/omnisharp-roslyn/pull/898)) _(Contributed by [@filipw](https://github.com/filipw))_

#### Other Updates and Fixes

* Switched to a new CDN for the extension's dependencies which should deliver an improved download experience ([#1542](https://github.com/OmniSharp/omnisharp-vscode/issues/1542))
* Automatically activate the extension when opening workspaces that contain any .csproj, .sln, or .csx files ([#1375](https://github.com/OmniSharp/omnisharp-vscode/issues/1375), [#1150](https://github.com/OmniSharp/omnisharp-vscode/issues/1150), PR: [#1592](https://github.com/OmniSharp/omnisharp-vscode/pull/1592)))
* Added nag message when project.json projects are opened by OmniSharp, to serve as a reminder to migrate projects from project.json to .csproj. (PR: [#1657](https://github.com/OmniSharp/omnisharp-vscode/pull/1657))
* Added `type` property to `csharp.unitTestDebuggingOptions` to allow debugging tests with 'clr' debugger (Windows only). ([#1586](https://github.com/OmniSharp/omnisharp-vscode/issues/1586), PR: [#1663](https://github.com/OmniSharp/omnisharp-vscode/pull/1663))
* The `[csharp]` configuration section is now checked for formatting options. ([#1574](https://github.com/OmniSharp/omnisharp-vscode/issues/1574)) _(Contributed by [@filipw](https://github.com/filipw))_
* All project systems (project.json, MSBuild, CSX Scripting) now support an "Enabled" property that can be configured in omnisharp.json. (PR: [omnisharp-roslyn#902](https://github.com/OmniSharp/omnisharp-roslyn/pull/902)) _(Contributed by [@filipw](https://github.com/filipw))_
* The OmniSharp server has been updated to Roslyn 2.3.0, which adds support for C# 7.1 (PRs: [omnisharp-roslyn#900](https://github.com/OmniSharp/omnisharp-roslyn/pull/900), [omnisharp-roslyn#901](https://github.com/OmniSharp/omnisharp-roslyn/pull/901), [omnisharp-roslyn#930](https://github.com/OmniSharp/omnisharp-roslyn/pull/930) and [omnisharp-roslyn#931](https://github.com/OmniSharp/omnisharp-roslyn/pull/931))

## 1.11.0 (June 27, 2017)

#### Completion List

* No longer trigger completion when a '<' character is typed. ([#1521](https://github.com/OmniSharp/omnisharp-vscode/issues/1521), PR: [#1530](https://github.com/OmniSharp/omnisharp-vscode/pull/1530))
* Completion list no longer triggers on space in contexts where a lambda expression could be typed. ([#1524](https://github.com/OmniSharp/omnisharp-vscode/issues/1524), PR: [#1548](https://github.com/OmniSharp/omnisharp-vscode/pull/1548))

#### Project System

* Fixed support for the latest .NET Core 2.0 preview. ([#1566](https://github.com/OmniSharp/omnisharp-vscode/issues/1566))

#### Other Updates and Fixes

* Improved download speeds for OmniSharp and Mono dependencies.
* Allow the ".NET: Restore Packages" command to run on projects targeting full framework. ([#1507](https://github.com/OmniSharp/omnisharp-vscode/pull/1507), PR: [#1545](https://github.com/OmniSharp/omnisharp-vscode/pull/1545)) _(contributed by [@adamhartford](https://github.com/adamhartford))_

## 1.10.0 (May 25, 2017)

#### Completion List

* Several improvements to the completion list! _(All contributed by [@filipw](https://github.com/filipw) with PR [omnisharp-roslyn#840](https://github.com/OmniSharp/omnisharp-roslyn/pull/840))_
  * Attributes are completed properly without the 'Attribute' suffix. ([#393](https://github.com/OmniSharp/omnisharp-vscode/issues/393))
  * Named parameters now appear in the completion list. ([#652](https://github.com/OmniSharp/omnisharp-vscode/issues/652))
  * Object initializer members now appear in the completion list. ([#260](https://github.com/OmniSharp/omnisharp-vscode/issues/260))
  * Completion appears within XML doc comment CREFs.
  * Initial support for completion on 'override' and 'partial' keywords. ([#1044](https://github.com/OmniSharp/omnisharp-vscode/issues/1044))
* New VS Code completion item glyphs (e.g. struct, event, etc.) are supported. (PR: [#1472](https://github.com/OmniSharp/omnisharp-vscode/pull/1472)) _(Contributed by [@dopare](https://github.com/dopare))_
* Updated completion to use same commit characters as Visual Studio. Completion should now complete as non-identifier characters are typed. ([#1487](https://github.com/OmniSharp/omnisharp-vscode/issues/1487), [#1491](https://github.com/OmniSharp/omnisharp-vscode/issues/1491), PR: [#1494](https://github.com/OmniSharp/omnisharp-vscode/pull/1494))

#### Project System

* Project references to projects located outside of the current workspace directory are now loaded and processed. ([#963](https://github.com/OmniSharp/omnisharp-vscode/issues/963), PR: [omnisharp-roslyn#832](https://github.com/OmniSharp/omnisharp-vscode/issues/963))
* OmniSharp now loads .NET Core projects using the SDKs included with the .NET Core SDK appropriate for that project, if they're installed on the machine. ([#1438](https://github.com/OmniSharp/omnisharp-vscode/issues/1438), [omnisharp-roslyn#765](https://github.com/OmniSharp/omnisharp-roslyn/issues/765), PR: [omnisharp-roslyn#847](https://github.com/OmniSharp/omnisharp-roslyn/pull/847))
* Options can now be set in an omnisharp.json to specify the Configuration (e.g. Debug) and Platform (e.g. AnyCPU) that MSBuild should use. ([omnisharp-roslyn#202](https://github.com/OmniSharp/omnisharp-roslyn/issues/202), PR: [omnisharp-roslyn#858](https://github.com/OmniSharp/omnisharp-roslyn/pull/858)) _(Contributed by [@nanoant](https://github.com/nanoant))_
* Fixed issue where a package reference would be reported as an unresolved dependency if the reference differed from the intended dependency by case (PR: [#861](https://github.com/OmniSharp/omnisharp-roslyn/pull/861))
* Cleaned up unresolved dependency detection in OmniSharp and added logging to help diagnose project issues. ([#1272](https://github.com/OmniSharp/omnisharp-vscode/issues/1272), PR: [#861](https://github.com/OmniSharp/omnisharp-roslyn/pull/862))

#### Scripting

* Support Metadata as Source for Go To Definition in CSX files. ([omnisharp-roslyn#755](https://github.com/OmniSharp/omnisharp-roslyn/issues/755), PR: ([omnisharp-roslyn#829](https://github.com/OmniSharp/omnisharp-roslyn/pull/829)) _(Contributed by [@filipw](https://github.com/filipw))_

#### Unit Testing

* MSTest support added ([#1482](https://github.com/OmniSharp/omnisharp-vscode/issues/1482), PRs: [#1478](https://github.com/OmniSharp/omnisharp-vscode/pull/1478), [omnisharp-roslyn#856](https://github.com/OmniSharp/omnisharp-roslyn/pull/856)) _(Contributed by [@AbhitejJohn](https://github.com/AbhitejJohn))_
* Add support for NUnit Test Adapter. ([#1434](https://github.com/OmniSharp/omnisharp-vscode/issues/1434), PR: [omnisharp-roslyn#834](https://github.com/OmniSharp/omnisharp-roslyn/pull/834))
* Files are saved before running or debugging tests to ensure that recent unsaved changes are included in test runs. ([#1473](https://github.com/OmniSharp/omnisharp-vscode/issues/1473), PR: [#1493](https://github.com/OmniSharp/omnisharp-vscode/pull/1493))
* Tests that define display names are now run properly. ([#1426](https://github.com/OmniSharp/omnisharp-vscode/issues/1426), PR: [omnisharp-roslyn#833](https://github.com/OmniSharp/omnisharp-roslyn/pull/833))
* Tests with similar names are no longer incorrectly run together when one of them is clicked. ([#1432](https://github.com/OmniSharp/omnisharp-vscode/issues/1432), PR: [omnisharp-roslyn#833](https://github.com/OmniSharp/omnisharp-roslyn/pull/833))
* Improve response from running/debugging tests to include output from build and test summary. ([#419](https://github.com/OmniSharp/omnisharp-vscode/issues/419), [#455](https://github.com/OmniSharp/omnisharp-vscode/issues/455), PRs: [#1436](https://github.com/OmniSharp/omnisharp-vscode/pull/1436), [#1486](https://github.com/OmniSharp/omnisharp-vscode/pull/1486))
* Added `csharp.unitTestDebugingOptions` setting to pass launch.json-style debug options (example: `justMyCode`) when unit test debugging.

#### Debugger

* Resolves crash on OSX when the target process loads an embedded PDB ([#1456](https://github.com/OmniSharp/omnisharp-vscode/issues/1456)). This commonly affects users trying to debug XUnit tests.
* Enhanced exception peek display to provide additional exception properties.

#### Other Updates and Fixes

* New `csharp.suppressHiddenDiagnostics` setting that can be set to true to display hidden diagnostics, such as 'unnecessary using directive'. ([#1429](https://github.com/OmniSharp/omnisharp-vscode/issues/1429), PR: [#1435](https://github.com/OmniSharp/omnisharp-vscode/pull/1435)) _(Contributed by [@cruz82](https://github.com/cruz82))_
* Fix issue causing several code snippets to not be available. ([#1459](https://github.com/OmniSharp/omnisharp-vscode/issues/1459), PR: [#1461](https://github.com/OmniSharp/omnisharp-vscode/pull/1461)) _(Contributed by [@shaunluttin](https://github.com/shaunluttin))_
* Ensure the 'Generate Assets for Build and Debug' command can cause the extension to activate. (PR: [#1470](https://github.com/OmniSharp/omnisharp-vscode/pull/1470))
* The OmniSharp process is now correctly terminated on Unix when the 'Restart OmniSharp' command is invoked. ([#1445](https://github.com/OmniSharp/omnisharp-vscode/issues/1445), PR: [#1466](https://github.com/OmniSharp/omnisharp-vscode/pull/1466))
* Added new `RoslynExtensions` option to allow specifying a set of assemblies in an omnisharp.json file that OmniSharp will look in to find Roslyn extensions to load. (PR: [omnisharp-roslyn#848](https://github.com/OmniSharp/omnisharp-roslyn/pull/848)) _(Contributed by [@filipw](https://github.com/filipw))_

## 1.9.0 (April 20, 2017)

#### Unit Testing

* Support added for running and debugging unit tests in .csproj-based .NET Core projects. ([#1100](https://github.com/OmniSharp/omnisharp-vscode/issues/1100))

#### Debugger

* **Arch Linux change**: Before, the debugger would automatically use the Ubuntu 16 debugger on Arch. Now we require the debugger to be explicitly set. See https://aka.ms/vscode-csext-arch for more information.
* Several bug fixes that addressed problems with launch ([#1335](https://github.com/OmniSharp/omnisharp-vscode/issues/1335), [#1336](https://github.com/OmniSharp/omnisharp-vscode/issues/1336))
* Fixed several pipeTransport issues including introducing a new `quoteArgs` option ([#1318](https://github.com/OmniSharp/omnisharp-vscode/issues/1318)), and fixing attach with Docker ([#1369](https://github.com/OmniSharp/omnisharp-vscode/issues/1369))
* Fix issue where VS Code would incorrectly display threads as paused ([#1317](https://github.com/OmniSharp/omnisharp-vscode/issues/1317))
* Added new 'csharp.fallbackDebuggerLinuxRuntimeId' configuration setting to control the version of the debugger used on Linux ([#1361](https://github.com/OmniSharp/omnisharp-vscode/issues/1361)).
* Added a new `clr` debugging `type` in launch.json to enable debugging for Azure scenarios. That type is limited to Windows Desktop CLR, 64-bit processes, and only supports the [Portable PDB debug format](https://github.com/OmniSharp/omnisharp-vscode/wiki/Portable-PDBs).
* Added support for the launch.json editor's 'Add Configuration' button ([#1024](https://github.com/OmniSharp/omnisharp-vscode/issues/1024]))

#### Project System

* Properly handle package references with version ranges in .csproj (PR: [omnisharp-roslyn#814](https://github.com/OmniSharp/omnisharp-roslyn/pull/814))
* Fix regression with MSBuild project system where a project reference and a binary reference could be added for the same assembly, causing ambiguity errors ([omnisharp-roslyn#795](https://github.com/OmniSharp/omnisharp-roslyn/issues/795), PR: [omnisharp-roslyn#815](https://github.com/OmniSharp/omnisharp-roslyn/pull/815))
* If VS 2017 is on the current machine, use the MSBuild included with VS 2017 for processing projects. ([#1368](https://github.com/OmniSharp/omnisharp-vscode/issues/1368), PR: [omnisharp-roslyn#818]()https://github.com/OmniSharp/omnisharp-roslyn/issues/818)
* Fixed null reference exception in DotNetProjectSystem when project reference is invalid (PR: [omnisharp-roslyn#797](https://github.com/OmniSharp/omnisharp-roslyn/pull/797))

#### Improved OmniSharp Settings
* Added support for global omnisharp.json file ([omnisharp-roslyn#717](https://github.com/OmniSharp/omnisharp-roslyn/issues/7170), PR: [omnisharp-roslyn#809](https://github.com/OmniSharp/omnisharp-roslyn/pull/809)) _(Contributed by [@filipw](https://github.com/filipw))_

  This file can appear in one of the following locations:
  * Windows: `%APPDATA%\OmniSharp\omnisharp.json`
  * macOS/Linus: `~/.omnisharp/omnisharp.json`
* Watch local and global omnisharp.json files for changes while OmniSharp is running. Currently, this only works for formatting options. (PR: [omnisharp-roslyn#804](https://github.com/OmniSharp/omnisharp-roslyn/pull/804))_(Contributed by [@filipw](https://github.com/filipw))_
* New 'omnisharp.waitForDebugger' setting to make it easier to debug the OmniSharp server itself. (PR: [#1370](https://github.com/OmniSharp/omnisharp-roslyn/pull/1370))

#### Other Updates and Fixes

* Improvements made to project.json package completion experience. ([#1338](https://github.com/OmniSharp/omnisharp-vscode/pull/1338))
* Diagnostics are no longer created for hidden diagnostics, addressing the problem of "Remove Unnecessary Usings" spam in the Problems pane. ([#1231](https://github.com/OmniSharp/omnisharp-vscode/issues/1231))
* Improved the extension's runtime dependency download logic to skip re-downloading packages that were already successfully downloaded and installed.
* Assets for building and debugging are now always generated with POSIX style paths. ([#1354](https://github.com/OmniSharp/omnisharp-vscode/pull/1354))
* Don't offer to generate tasks.json if build task already exists. (PR #1363) _(Contributed by [@eamodio](https://github.com/eamodio))_

## 1.8.1 (March 31, 2017)

Fixes debugging on macOS Sierra 10.12.4.

## 1.8.0 (March 10, 2017)

#### Go to Implementation

* Added support for "Go to Implementation" and "Peek Implementation" introduced in Visual Studio Code 1.9. ([#37](https://github.com/OmniSharp/omnisharp-vscode/issues/37)) _(Contributed by [@ivanz](https://github.com/ivanz))_

#### Scripting

* C# scripts (.csx files) now allow multiple `#load` directives, and `#r` and `#load` directives update live. ([omnisharp-roslyn#760](https://github.com/OmniSharp/omnisharp-roslyn/pull/760)) _(Contributed by [@filipw](https://github.com/filipw))_
* .csx files can now be discovered as valid launch targets using the project selector at the bottom-right of the status bar. ([#1247](https://github.com/OmniSharp/omnisharp-vscode/pull/1247)) _(Contributed by [@filipw](https://github.com/filipw))_
* Assembly references will now unify properly for C# scripts. ([omnisharp-roslyn#764](https://github.com/OmniSharp/omnisharp-roslyn/pull/764)) _(Contributed by [@filipw](https://github.com/filipw))_
* Unsafe code is now allowed in C# scripts. ([omnisharp-roslyn#781](https://github.com/OmniSharp/omnisharp-roslyn/pull/781)) _(Contributed by [@filipw](https://github.com/filipw))_
* C# scripting now ignores duplicated CorLibrary types, which can manifest in certain edge scenarios. ([omnisharp-roslyn#784](https://github.com/OmniSharp/omnisharp-roslyn/pull/784)) _(Contributed by [@filipw](https://github.com/filipw))_

#### Debugger

The 1.8 release makes a major change to how the debugger works under the hood. This new architecture simplifies how the debugger is tied to VS Code. We hope that this will make it easier to bring .NET debugging features to VS Code. We also expect it to improve debugger launch performance.

Changes:

* The module load messages in the output window are now more detailed and hopefully less confusing. ([#837](https://github.com/OmniSharp/omnisharp-vscode/issues/837))
* Programs can now be launched into VS Code's integrated terminal. ([documentation](https://github.com/dotnet/vscode-csharp/blob/main/debugger.md#console-terminal-window))
* VS Code recently introduced [column breakpoint support](https://code.visualstudio.com/updates/v1_10#_column-breakpoints) and they are now enabled for C#.
* React to the VS Code change to use `${command:` instead of `${command.`. ([#1275](https://github.com/OmniSharp/omnisharp-vscode/issues/1275))
* Fix a problem with browser launch support that could lead to debugger session's being aborted when the browser is started. ([#1274](https://github.com/OmniSharp/omnisharp-vscode/issues/1274))
* Remote debugging breaking changes: as part of our new architecture, there are a few breaking changes to the way remote debugging works.

    * vsdbg vs. clrdbg: As part of the new architecture, clrdbg has been replaced with a new executable named vsdbg. As such, the script to download vsdbg has changed to http://aka.ms/getvsdbgsh. Run `curl -sSL https://aka.ms/getvsdbgsh | bash /dev/stdin -v latest -l ~/vsdbg` to download. See the [wiki](https://github.com/OmniSharp/omnisharp-vscode/wiki/Attaching-to-remote-processes) for more information.
    * Pseudo-tty's are no longer supported: previously we were a little more tolerant of pseudo-tty's transforming the input/output from the remote debugger. We are currently not as tolerant. If you are using `ssh` or `plink` as a pipe program, pass `-T` to fix this. If you have another transport and you are no longer able to connect, let us know and we can fix this for a future release.
    * `debuggerPath` is now required - previously the `debuggerPath` property of `pipeTransport` was recomended but not required. As part of this change we are now requiring it.

#### Other Updates and Fixes

* Find All References now properly highlights locations of found references. ([#428](https://github.com/OmniSharp/omnisharp-vscode/issues/428))
* Assembly references will now unify properly for project.json projects. ([#1221](https://github.com/OmniSharp/omnisharp-vscode/issues/1221))
* Code Actions (i.e. refactorings and fixes) now respect the formatting options that are set when a project is opened. ([omnisharp-roslyn#759](https://github.com/OmniSharp/omnisharp-roslyn/issues/759)) _(Contributed by [@filipw](https://github.com/filipw))_
* Completion support for package references in project.json files has been restored. ([#1236](https://github.com/OmniSharp/omnisharp-vscode/pull/1236))
* The C# TextMate grammar used for syntax highlighting has been removed because it is now part of Visual Studio Code itself. ([#1206](https://github.com/OmniSharp/omnisharp-vscode/issues/1206)) _(Many thanks to [@aeschli](https://github.com/aeschli))_

## 1.7.0 (February 8, 2017)

#### Syntax Hightlighting

* Introduced a brand new TextMate grammar written from scratch that provides much more robust C# syntax highlighting. ([#101](https://github.com/OmniSharp/omnisharp-vscode/issues/101), [#225](https://github.com/OmniSharp/omnisharp-vscode/issues/225), [#268](https://github.com/OmniSharp/omnisharp-vscode/issues/268), [#316](https://github.com/OmniSharp/omnisharp-vscode/issues/316), [#674](https://github.com/OmniSharp/omnisharp-vscode/issues/674), [#706](https://github.com/OmniSharp/omnisharp-vscode/issues/706), [#731](https://github.com/OmniSharp/omnisharp-vscode/issues/731), [#746](https://github.com/OmniSharp/omnisharp-vscode/issues/746), [#782](https://github.com/OmniSharp/omnisharp-vscode/issues/782), [#802](https://github.com/OmniSharp/omnisharp-vscode/issues/802), [#816](https://github.com/OmniSharp/omnisharp-vscode/issues/816), [#829](https://github.com/OmniSharp/omnisharp-vscode/issues/829), [#830](https://github.com/OmniSharp/omnisharp-vscode/issues/830), [#861](https://github.com/OmniSharp/omnisharp-vscode/issues/861), [#1078](https://github.com/OmniSharp/omnisharp-vscode/issues/1078), [#1084](https://github.com/OmniSharp/omnisharp-vscode/issues/1084), [#1086](https://github.com/OmniSharp/omnisharp-vscode/issues/1086), [#1091](https://github.com/OmniSharp/omnisharp-vscode/issues/1091), [#1096](https://github.com/OmniSharp/omnisharp-vscode/issues/1096), [#1097](https://github.com/OmniSharp/omnisharp-vscode/issues/1097), [#1106](https://github.com/OmniSharp/omnisharp-vscode/issues/1106), [#1115](https://github.com/OmniSharp/omnisharp-vscode/issues/1108))
* The C# TextMate grammar has a new home! Issues and contributions are welcome at [https://github.com/dotnet/csharp-tmLanguage](https://github.com/dotnet/csharp-tmLanguage).

#### Project Support

* Updated with the latest changes for .NET Core .csproj projects. ([omnisharp-roslyn#738](https://github.com/OmniSharp/omnisharp-roslyn/pull/738))
* Automatic package restore and out-of-date notifications implemented for .NET Core .csproj projects. ([#770](https://github.com/OmniSharp/omnisharp-vscode/issues/770))
* Correctly update project when dotnet restore is performed on a .NET Core .csproj project. ([#1114](https://github.com/OmniSharp/omnisharp-vscode/issues/1114))
* Properly handle .csproj projects in .sln files that were added via .NET CLI commands. ([omnisharp-roslyn#741](https://github.com/OmniSharp/omnisharp-roslyn/pull/741))
* Fix `dotnet restore` Visual Studio Code command to execute for .csproj .NET Core projects. ([#1175](https://github.com/OmniSharp/omnisharp-vscode/issues/1175))
* Respect `nowarn` in project.json projects. ([omnisharp#734](https://github.com/OmniSharp/omnisharp-roslyn/pull/734)) _(Contributed by [@filipw](https://github.com/filipw))_
* Fix problem with project.json projects that wrap assemblies. ([#424](https://github.com/OmniSharp/omnisharp-vscode/issues/424))

#### Debugging

* Enable debugger support for Zorin OS 12. ([#1160](https://github.com/OmniSharp/omnisharp-vscode/issues/1160)) _(Contributed by [@mkaziz](https://github.com/mkaziz))_
* Added off-road support for [Windows Subsystem for Linux](https://blogs.msdn.microsoft.com/wsl/2016/04/22/windows-subsystem-for-linux-overview/) (NOTE: requires newer version of Windows than have been publicly released yet)
* Fixed issue with debugger pause and multithreaded call stacks ([#1107](https://github.com/OmniSharp/omnisharp-vscode/issues/1107) and [#1105](https://github.com/OmniSharp/omnisharp-vscode/issues/1105))

#### C# Scripting

* Support resolving `#r` references from the GAC. ([omnisharp-roslyn#721](https://github.com/OmniSharp/omnisharp-roslyn/pull/721)) _(Contributed by [@filipw](https://github.com/filipw))_
* Include System.ValueTuple in C# scripts implicitly. ([omnisharp-roslyn#722](https://github.com/OmniSharp/omnisharp-roslyn/pull/722)) _(Contributed by [@filipw](https://github.com/filipw))_

#### Code Actions

* Fixed code actions that add files, such as "Move Type to File". ([#975](https://github.com/OmniSharp/omnisharp-vscode/issues/975))
* Properly surface code actions that have "nested code actions". This allows "generate type" to work properly. ([#302](https://github.com/OmniSharp/omnisharp-vscode/issues/302))
* Don't display the Remove Unnecessary Usings code action unless it is relevant. ([omnisharp-roslyn#742](https://github.com/OmniSharp/omnisharp-roslyn/issues/742))
* Don't show the Extract Interface refactoring as it requires a dialog that does not exist in VS Code. ([#925](https://github.com/OmniSharp/omnisharp-vscode/issues/925))

#### Completion List

* A namespace icon should be displayed for namespaces in the completion list. ([#1125](https://github.com/OmniSharp/omnisharp-vscode/issues/1124)) _(Contributed by [@filipw](https://github.com/filipw))_
* Add icons for several symbol kinds in the completion list, fixing many symbols that incorrectly displayed a property "wrench" icon. ([#1145](https://github.com/OmniSharp/omnisharp-vscode/issues/1145))

#### Other Updates and Fixes

* Add schema validation for omnisharp.json files. ([#1082](https://github.com/OmniSharp/omnisharp-vscode/pull/1082)) _(Contributed by [@Thaina](https://github.com/Thaina))_
* Add support for auto-closing and surrounding characters. ([#749](https://github.com/OmniSharp/omnisharp-vscode/issues/749), [#842](https://github.com/OmniSharp/omnisharp-vscode/issues/842)) _(Contributed by [@filipw](https://github.com/filipw))_
* Fix running and debugging of tests defined in nested classes. ([#743](https://github.com/OmniSharp/omnisharp-vscode/issues/743), [#1151](https://github.com/OmniSharp/omnisharp-vscode/issues/1151))
* Fix error when 'tasks.json' does not contain a 'tasks' node, or contains os-specific 'tasks' nodes. ([#1140](https://github.com/OmniSharp/omnisharp-vscode/issues/1140))
* Better detection of Windows architecture (x86 or x64) when determining extension dependencies to download. The detection logic now uses well-known environment variables rather than launching 'wmic'. ([#1110](https://github.com/OmniSharp/omnisharp-vscode/issues/1110), [#1125](https://github.com/OmniSharp/omnisharp-vscode/issues/1125))
* Improvements to the OmniSharp Log ([#1155](https://github.com/OmniSharp/omnisharp-vscode/pull/1155))
* Add new values to the `omnisharp.logginglevel` option to allow more granualar control of OmniSharp logging. ([#993](https://github.com/OmniSharp/omnisharp-vscode/issues/993)) _(Contributed by [@filipw](https://github.com/filipw))_
* Don't display the "some projects have trouble loading" message if projects only contain warnings. ([#707](https://github.com/OmniSharp/omnisharp-vscode/issues/707))
* Update Mono detection logic to succeed even if another shell is set as the default (e.g. zsh). ([#1031](https://github.com/OmniSharp/omnisharp-vscode/issues/1031))

## 1.6.2 (December 24, 2016)

* Fix performance issue when editing type names containing multiple generic type parameters. ([#1088](https://github.com/OmniSharp/omnisharp-vscode/issues/1088), [#1086](https://github.com/OmniSharp/omnisharp-vscode/issues/1086))

## 1.6.1 (December 22, 2016)

* Fix crash when tasks.json contains comments. ([#1074](https://github.com/OmniSharp/omnisharp-vscode/issues/1074))

## 1.6.0 (December 21, 2016)

#### C# Scripting

* Roslyn scripting support in CSX files! ([#23](https://github.com/OmniSharp/omnisharp-vscode/issues/23), [omnisharp-roslyn#659](https://github.com/OmniSharp/omnisharp-roslyn/pull/659)) _(Contributed by [@filipw](https://github.com/filipw))_

#### Project Support

* Support for latest .NET Core .csproj projects updates. ([omnisharp-roslyn#705](https://github.com/OmniSharp/omnisharp-roslyn/pull/705))
* Update 'tasks.json' and 'launch.json' generation to support .NET Core .csproj projects. ([#767](https://github.com/OmniSharp/omnisharp-vscode/issues/767))
* Properly support `<NoWarn>` in MSBuild projects and specifically ignore the `CS1701` warning in .NET Core MSBuild projects. ([#967](https://github.com/OmniSharp/omnisharp-vscode/issues/967))
* Fix global.json-based project search to also the top-level folders specified by the `"projects"` property and not just their children. ([#904](https://github.com/OmniSharp/omnisharp-vscode/issues/904) and [#962](https://github.com/OmniSharp/omnisharp-vscode/issues/962))

#### Debugging

* Update the debugger so that the debugger itself runs on .NET Core 1.1. This change:
    * Enables debugger support for additional Linux distributions - Ubuntu 16.10, openSUSE 42, Fedora 24
    * Brings support for running all supported distros on top of Linux Kernel >= 4.6
* Enable debugger support for Arch Linux ([#564](https://github.com/OmniSharp/omnisharp-vscode/issues/564))
* Improve debugger install errors for macOS without openSSL symlinks ([#986](https://github.com/OmniSharp/omnisharp-vscode/pull/986)), and x86 Windows ([#998](https://github.com/OmniSharp/omnisharp-vscode/pull/998)).
* Improve debugger performance using precompiled debugger binaries  ([#896](https://github.com/OmniSharp/omnisharp-vscode/issues/896))([#971](https://github.com/OmniSharp/omnisharp-vscode/issues/971)).

#### Syntax Highlighting

* Tons of great syntax highlighting fixes and support! _(All contributed by [@ivanz](https://github.com/ivanz))_
    * Fix for field declarations. ([#757](https://github.com/OmniSharp/omnisharp-vscode/issues/757))
    * Fix for generic types with multiple type parameters. ([#960](https://github.com/OmniSharp/omnisharp-vscode/issues/960))
    * Proper support for interpolated strings (verbatim and non-verbatim). ([#852](https://github.com/OmniSharp/omnisharp-vscode/issues/852))
    * Fix for multi-line properties. ([#854](https://github.com/OmniSharp/omnisharp-vscode/issues/854))
    * Fixes for events, nested type references (e.g. `Root.IInterface<Something.Nested>`), variable declarations, nested classes, and fields spanning multiple lines

#### Hover Tooltips

* Improve display of hover tool tips for built-in C# types, such as `int` and `string`. ([#250](https://github.com/OmniSharp/omnisharp-vscode/issues/250)) _(Contributed by [@filipw](https://github.com/filipw))_
* Improve display of hover tool tips for nested classes. ([#394](https://github.com/OmniSharp/omnisharp-vscode/issues/394)) _(Contributed by [@filipw](https://github.com/filipw))_
* Fix spacing in hover tool tips around `<paramref/>` in XML doc comments. ([#672](https://github.com/OmniSharp/omnisharp-vscode/issues/672)) _(Contributed by [@filipw](https://github.com/filipw))_

#### Other Updates and Fixes

* Support for running/debugging NUnit tests ([#996](https://github.com/OmniSharp/omnisharp-vscode/pull/996)) _(Contributed by [@HexWrench](https://github.com/HexWrench))_
* Fix exception thrown when sending `/autocomplete` request to OmniSharp server in location where no completion items are available. ([#980](https://github.com/OmniSharp/omnisharp-vscode/issues/980))
* Add `omnisharp.maxProjectResults` setting to control the maximum number of projects to display in the 'Select Project' dropdown. The default is 250. ([#875](https://github.com/OmniSharp/omnisharp-vscode/issues/875)) _(Contributed by [@filipw](https://github.com/filipw))_
* Fix signature help display for constructors. ([#36](https://github.com/OmniSharp/omnisharp-vscode/issues/36)) _(Contributed by [@filipw](https://github.com/filipw))_
* Ensure that the `editor.insertSpaces` and `editor.tabSize` settings are passed to OmniSharp for formatting. Note that this behavior can be controlled with the `omnisharp.useEditorFormattingSettings` option, which defaults to true. ([#1055](https://github.com/OmniSharp/omnisharp-vscode/pull/1055)) _(Contributed by [@filipw](https://github.com/filipw))_

## 1.5.3 (November 21, 2016)

* Use value of `http.proxyStrictSSL` even when `http.proxy` is not set. ([#957](https://github.com/OmniSharp/omnisharp-vscode/issues/957))

## 1.5.2 (November 15, 2016)

* Ensure diagnostics are cleared in files when they are no longer needed. ([#858](https://github.com/OmniSharp/omnisharp-vscode/issues/858))
* Enqueue requests for diagnostics in visible editors when the extension starts up. ([#843](https://github.com/OmniSharp/omnisharp-vscode/issues/843))
* Provide fallback URLs for debugger downloads. ([#930](https://github.com/OmniSharp/omnisharp-vscode/issues/930))
* Properly require .NET Framework 4.6 in the OmniSharp.exe.config file to ensure that the user is displayed a dialog on Windows machines that don't have .NET Framework 4.6 installed. ([#937](https://github.com/OmniSharp/omnisharp-vscode/issues/937))
* Fix issue with installing on non-English installations of Windows. ([#938](https://github.com/OmniSharp/omnisharp-vscode/issues/938))
* Display platform information when acquiring runtime dependencies. ([#948](https://github.com/OmniSharp/omnisharp-vscode/issues/948))

## 1.5.1 (November 14, 2016)

* Fix to properly support `http.proxy` and `http.proxyStrictSSL` settings. ([#930](https://github.com/OmniSharp/omnisharp-vscode/issues/930))

## 1.5.0 (November 14, 2016)

#### Initial support for C# 7

* New C# 7 features like pattern-matching and tuples are now supported in VS Code editor. Note: To use tuples, you will need a reference to [this NuGet package](https://www.nuget.org/packages/System.ValueTuple).

#### Initial support for CSProj .NET Core Projects

* With the .NET Core SDK moving to embrace MSBuild and .csproj files over project.json, we've made sure the C# extension can handle the new format. This support is preliminary and there are still several features coming to smooth out the experience.

#### Broader OS Support for C# Code Editing

* This release dramatically changes the runtime that OmniSharp runs on, which allows it to be run an many more operating systems than before:

  * Windows: OmniSharp runs on the installed .NET Framework. In addition, OmniSharp now runs on 32-bit Windows!
  * macOS/Linux: OmniSharp runs on a custom embedded Mono runtime. Note: Mono does not need to be installed on the system for this to work.

#### Debugger

* Remote debugging is now supported for attach by using the `pipeTransport` launch.json option.
* Resolved issue with setting breakpoints when there are multple files with the same name (e.g. two 'Program.cs' files).

#### New Dependency Acquisition System

* This improves the acquisition and reliability of platform-specific OmniSharp and debugger dependencies.

#### New Settings

Several new settings have been added:

* `csharp.suppressDotnetRestoreNotification`: Suppress the notification window to perform a 'dotnet restore' when dependencies can't be resolved.
* `omnisharp.projectLoadTimeout`: The time Visual Studio Code will wait for the OmniSharp server to start. Time is expressed in seconds. _(Contributed by [@wjk](https://github.com/wjk))_

#### Colorizer

* A new unit testing framework for testing the colorizer grammer ([#742](https://github.com/OmniSharp/omnisharp-vscode/pull/742)) _(Contributed by [@ivanz](https://github.com/ivanz))_
* Single-line comments after preprocessor directives ([#762](https://github.com/OmniSharp/omnisharp-vscode/pull/762)) _(Contributed by [@damieng](https://github.com/damieng))_

#### Performance

* Major improvements have been made to editor performance. The communication with the OmniSharp server has been rewritten to allow long-running operations (such as gathering all errors and warnings) to queue while high priority operations (such as text buffer changes) run serially. ([#902](https://github.com/OmniSharp/omnisharp-vscode/pull/902)) _(Thanks to [@david-driscoll](https://github.com/david-driscoll) for his help with this change!)_

#### Other Improvements

* The prompt to generate assets for building and debugging can now be dismissed for a workspace permanently. In addition, a new `dotnet.generateAssets` command has been added to force regeneration of the assets. ([#635](https://github.com/OmniSharp/omnisharp-vscode/issues/635))
* Fix "running forever" issue for folder with multple .NET Core projects. ([#735](https://github.com/OmniSharp/omnisharp-vscode/issues/735)) _(Contributed by [@eamodio](https://github.com/eamodio))_
* `ctor` snippet is now more consistent with other code snippets. ([#849](https://github.com/OmniSharp/omnisharp-vscode/pull/849)) _(Contibuted by [@Eibx](https://github.com/Eibx))_
* Ampersands in file paths are now properly escaped on Windows ([#909](https://github.com/OmniSharp/omnisharp-vscode/pull/909)) _(Contributed by [@filipw](https://github.com/filipw))_

## 1.4.1 (September 1, 2016)

* This addresses an issue found and fixed by @sixpindin in which the legacy csharp.omnisharp and csharp.omnisharpUsesMono settings are no longer respected. These settings have been supplanted by the omnisharp.path and omnisharp.useMono settings but are still expected to work if specified.

## 1.4.0 (August 29, 2016)

#### Metadata as Source

* Go to Definition (<kbd>F12</kbd>) can now show a C#-like view for APIs that do not appear in your project's source code. ([#165](https://github.com/OmniSharp/omnisharp-vscode/issues/165))

#### Debugger

* Applications can now be launched without attaching the debugger with <kbd>Ctrl+F5</kbd>.
* Support for new "embedded portable PDB" debug format.
* The launch.json file generator now automatically sets the option to show a console window by default (`"internalConsoleOptions": "openOnSessionStart"`).

#### New Settings

Several new settings have been added:

* `csharp.suppressDotnetInstallWarning`: Suppress the warning that the .NET CLI is not on the path.
* `omnisharp.autoStart`: Used to control whether the OmniSharp server will be automatically launched when a folder containing a project or solution is opened. The default value for this setting is `true`.
* `omnisharp.path`: Can be used to specify a file path to a different OmniSharp server than the one that will be used by default. Previously, this option was controlled by `csharp.omnisharp`, which is now deprecated.
* `omnisharp.useMono`: When `omnisharp.path` is specified, this controls whether OmniSharp will be launched with Mono or not. Previously, this option was controlled by `csharp.omnisharpUsesMono`, wich is now deprecated.
* `omnisharp.loggingLevel`: Used to control the level of logging output from the OmniSharp server. Legal values are `"default"` or `"verbose"`.

#### Colorizer

There have been several fixes to the colorizer grammar resulting in much smoother syntax highlighting, with better support for C# 6.0. Special thanks go to [@ivanz](https://github.com/ivanz) and [@seraku24](https://github.com/seraku24) for contributing most of the fixes below!

* Expression-bodied members ([#638](https://github.com/OmniSharp/omnisharp-vscode/issues/638), [#403](https://github.com/OmniSharp/omnisharp-vscode/issues/403), [#679](https://github.com/OmniSharp/omnisharp-vscode/issues/679), [#249](https://github.com/OmniSharp/omnisharp-vscode/issues/249))
* Escaped keyword identifiers ([#614](https://github.com/OmniSharp/omnisharp-vscode/issues/614))
* Using directives and nested namespaces ([#282](https://github.com/OmniSharp/omnisharp-vscode/issues/282), [#381](https://github.com/OmniSharp/omnisharp-vscode/issues/381))
* Field and local variable type names ([#717](https://github.com/OmniSharp/omnisharp-vscode/issues/717), [#719](https://github.com/OmniSharp/omnisharp-vscode/issues/719))
* Multi-dimensional arrays in parameters ([#657](https://github.com/OmniSharp/omnisharp-vscode/issues/657))

#### Performance

* Improvements have been made in processing diagnostics (i.e. errors and warnings).
* Full solution diagnostics are no longer computed for large solutions (e.g. solutions with >1000 files across all projects). However, diagnostics are still computed for open files.

#### Other Improvements

* Multibyte characters are now properly encoded, resulting in proper display in tooltips and fixing crashes in the OmniSharp server. ([#4](https://github.com/OmniSharp/omnisharp-vscode/4), [#140](https://github.com/OmniSharp/omnisharp-vscode/140), [#427](https://github.com/OmniSharp/omnisharp-vscode/427))
* Will no longer attempt to install a CoreCLR flavor of OmniSharp on Ubuntu versions other than 14 and 16. ([#655](https://github.com/OmniSharp/omnisharp-vscode/issues/655))
* Opening a solution or csproj no longer results in '0 projects' displayed in the status bar. ([#723](https://github.com/OmniSharp/omnisharp-vscode/issues/723))

## 1.3.0 (July 20, 2016)

* Support for Unity and Mono development on macOS and Linux has been restored! This release brings back support for the Mono version of OmniSharp, which is used to provide *much* better support for .csproj/.sln projects. Please note that Mono version 4.0.1 or newer is required.
* Generation of tasks.json and launch.json files can now properly handle nested projects. [#170](https://github.com/OmniSharp/omnisharp-vscode/issues/170)
* New UI that makes it easy to select a process ID when attaching the debugger to another process. Note: If you have an existing launch.json file, you can re-generate it by deleting the file, closing your workspace in Visual Studio Code and opening it again. Or, you can open the launch.json file and change the `processId` value to `"${command:pickProcess}"`.
* Support for debugging in .cshtml files. To enable this, add a `sourceFileMap` entry to your launch.json with the following content: `"sourceFileMap": { "/Views": "${workspaceRoot}/Views" }`
* Support for conditional breakpoints
* New support for changing variable values in the debugger! To try this, just right-click on the variable name and select 'Set Value'. Note: To properly support this feature, we've changed the display of variable type names in the debugger to a shortened form. The full type name can be viewed by hovering over the name with the mouse.
* New configuration option to enable [stepping into properties and operators](https://github.com/OmniSharp/omnisharp-vscode/blob/release/debugger.md#stepping-into-properties-and-operators).
* Duplicate warnings and errors should no longer accumulate in Unity projects [#447](https://github.com/OmniSharp/omnisharp-vscode/issues/447)

## 1.2.0 (June 29, 2016)

* Adds debugger support for new Linux versions: Ubuntu 16.04, Fedora 23, openSUSE 13.2, and Oracle Linux 7.1
* Enhanced debug console output: module loads are now output, and there are launch.json options for controlling what is output
* Source file checksum support for breakpoints. This ensures that the debugger only sets breakpoints in code that exactly matches the open document.
* Support for editing the value of variables in the watch and locals window (requires VS Code 1.3)
