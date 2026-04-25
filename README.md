# PlaywrightFundamentalsSG

A small Playwright test project used to learn browser, context, and page handling with Playwright Test.

## Prerequisites

- Node.js 18 or later
- npm

## Install

```bash
npm install
npx playwright install
```

## Run tests

Run the entire suite:

```bash
npx playwright test
```

Run a single spec file:

```bash
npx playwright test tests/01_Basics/214_AutoContext_PWTest.spec.ts --project=chromium
```

Run in headed mode:

```bash
npx playwright test tests/01_Basics/217_Context_ShareOrReuse.spec.ts --headed --project=chromium
```

List discovered tests without executing them:

```bash
npx playwright test --list
```

Open the HTML report:

```bash
npx playwright show-report
```

## Important Windows note

When passing a single file to `npx playwright test` on PowerShell, prefer forward slashes in the path:

```bash
npx playwright test tests/01_Basics/215_ManualContext_In_PWTest.spec.ts --project=chromium
```

Avoid using a quoted Windows path like `.\tests\01_Basics\215_ManualContext_In_PWTest.spec.ts` as the positional filter. Playwright treats the argument as a regular expression, and backslashes can prevent the file from matching, resulting in `Error: No tests found`.

If needed, you can also filter by regex explicitly:

```bash
npx playwright test "215_ManualContext_In_PWTest\.spec\.ts$" --project=chromium
```

## Common error: "Playwright Test did not expect test() to be called here"

This error usually means the spec file is being executed outside the Playwright test runner.

Use Playwright commands such as:

```bash
npx playwright test
```

Do not run a spec file directly with Node.js or a generic "Run File" action.

## Project structure

- `tests/01_Basics/211_Browser_Context_PageBCP.spec.ts`
- `tests/01_Basics/212_MultipleContexts.spec.ts`
- `tests/01_Basics/213_Multiple_Pages.spec.ts`
- `tests/01_Basics/214_AutoContext_PWTest.spec.ts`
- `tests/01_Basics/215_ManualContext_In_PWTest.spec.ts`
- `tests/01_Basics/216_ManualContext_Options.spec.ts`
- `tests/01_Basics/217_Context_ShareOrReuse.spec.ts`
- `tests/01_Basics/Lab209.spec.ts`
- `tests/01_Basics/Lab210_TestAnnotations.spec.ts`

## Output folders

- HTML report: `playwright-report/`
- Test artifacts: `test-results/`