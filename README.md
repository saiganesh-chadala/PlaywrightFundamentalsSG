# PlaywrightFundamentalsSG

A small Playwright test project used to learn browser, context, page handling, locators, session storage, and Allure reporting with Playwright Test.

## Prerequisites

- Node.js 18 or later
- npm
- Java JDK 17 or later for Allure report viewing

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

## Allure reporting

This project supports Allure reporting through the Playwright reporter.

### Reporter configuration

Configured in `playwright.config.ts`:

```ts
reporter: [['html'], ['allure-playwright', { outputFolder: 'allure-results' }]]
```

### Run tests and generate Allure results

```bash
npx playwright test
```

After test execution, `allure-results/` should be created.

### Open the Allure report

```powershell
allure serve .\allure-results
```

### Java check

```powershell
java -version
```

### Allure check

```powershell
allure --version
```

## Important Windows note

When passing a single file to `npx playwright test` on PowerShell, prefer forward slashes in the path:

```bash
npx playwright test tests/01_Basics/215_ManualContext_In_PWTest.spec.ts --project=chromium
```

Avoid using a quoted Windows path like `.\tests\01_Basics\215_ManualContext_In_PWTest.spec.ts` as the positional filter. Playwright treats the argument as a regular expression, and backslashes can prevent the file from matching, resulting in `Error: No tests found`.

If needed, filter by regex explicitly:

```bash
npx playwright test "215_ManualContext_In_PWTest\.spec\.ts$" --project=chromium
```

## Common error: "No tests found"

This usually means one of these:

- command is run from the wrong folder
- Windows backslashes are used in the file filter
- file path does not match the actual spec location — **check for typos in the filename** (e.g. `Prjoect4` vs `Project4`)

Example:

```bash
npx playwright test tests/04_Allure_Reporting/226_Login.spec.ts
```

Run commands from the folder that contains:

- `playwright.config.ts`
- `package.json`
- `tests/`

## Common error: "Requiring @playwright/test second time"

This usually means Playwright was installed in both parent and child folders.

Keep dependencies only in the real project folder and remove accidental duplicates from parent folders.

## Common error: "Playwright Test did not expect test() to be called here"

This error usually means the spec file is being executed outside the Playwright test runner.

Use Playwright commands such as:

```bash
npx playwright test
```

Do not run a spec file directly with Node.js or a generic "Run File" action.

## Common error: "page.goto: Test ended"

This usually happens when navigation was started but not awaited, so the test ends while `page.goto()` is still in progress.

Use:

```ts
await page.goto('https://katalon-demo-cura.herokuapp.com');
```

Instead of:

```ts
page.goto('https://katalon-demo-cura.herokuapp.com');
```

For URL verification, prefer Playwright auto-wait assertions:

```ts
await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/#appointment');
```

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
- `tests/02_Locator_Commands/218_Commands.spec.ts`
- `tests/02_Locator_Commands/219_Common_Referer.spec.ts`
- `tests/02_Locator_Commands/220_Automate_Cura_Site_Task.spec.ts`
- `tests/02_Locator_Commands/221_Automate_app.vwo.com_getByRole.spec.ts`
- `tests/02_Locator_Commands/222_CSS_Locators.spec.ts`
- `tests/02_Locator_Commands/223_PressSequentially.spec.ts`
- `tests/02_Locator_Commands/25thTask_getByRole.spec.ts`
- `tests/02_Locator_Commands/28thTask.spec.ts`
- `tests/03_Session_Storage/224_Session.spec.ts`
- `tests/03_Session_Storage/225_Test_Vwo.spec.ts`
- `tests/04_Allure_Reporting/226_Login.spec.ts`
- `tests/05_Core_Concepts/`
- `tests/Projects/Project4_Automate_TTA.spec.ts` — end-to-end signup and fund transfer on TTA Bank app

## Output folders

- HTML report: `playwright-report/` *(git-ignored)*
- Test artifacts: `test-results/` *(git-ignored)*
- Allure results: `allure-results/` *(git-ignored)*

> These folders are excluded from version control via `.gitignore`. If they were previously committed, untrack them with:
> ```bash
> git rm -r --cached allure-results/ test-results/ playwright-report/
> git commit -m "Remove test artifacts from tracking"
> ```