# Playwright TodoMVC Take-Home Assessment

This project contains a Playwright UI automation test for the TodoMVC demo application.

## Scenario

The test covers the following workflow:

1. Open the TodoMVC application.
2. Verify that the Todo input field is visible.
3. Add a todo named `Learn Playwright`.
4. Verify that `Learn Playwright` is displayed.
5. Add a second todo named `Write tests`.
6. Verify that two todo items are displayed.
7. Mark `Learn Playwright` as completed.
8. Select the **Completed** filter and verify that one completed item is displayed.
9. Verify that `Learn Playwright` is visible in the completed list.
10. Select the **Active** filter and verify that one active item is displayed.
11. Verify that `Write tests` is the remaining active todo.

## Prerequisites

- Node.js LTS
- npm
- Playwright
- VS Code, Cursor, or another preferred code editor

### Node.js Version

The project was developed with Node.js:

```text
v24.20.0
```

Check the Node.js version installed on your machine with:

```bash
node -v
```

If a different version is used to run the assessment, update the version shown above.

## Project Structure

```text
playwright-takehome/
├── pages/
│   └── todo.page.js
├── tests/
│   └── todo.spec.js
├── playwright.config.js
├── package.json
├── package-lock.json
├── README.md
└── .github/
    └── workflows/
        └── playwright.yml
```

## Installation

From the project root, install the dependencies:

```bash
npm install
```

If the Playwright browser binaries are not already installed, run:

```bash
npx playwright install
```

## Running the Tests

Run the complete Playwright test suite:

```bash
npx playwright test
```

Run the TodoMVC test in headed mode:

```bash
npx playwright test tests/todo.spec.js --headed
```

Run the TodoMVC test in debug mode:

```bash
npx playwright test tests/todo.spec.js --debug
```

View the HTML test report:

```bash
npx playwright show-report
```

## Test Design

The test follows the Page Object Model (POM) approach:

- [`pages/todo.page.js`](pages/todo.page.js) contains page locators and reusable page actions.
- [`tests/todo.spec.js`](tests/todo.spec.js) contains the test scenario and business flow.
- Playwright `expect` assertions validate the application behavior.
- Assertion messages provide context for failures and simplify debugging.
- User-facing locators such as `getByRole`, `getByText`, and `getByPlaceholder` are used where applicable.

## CI

The project includes a GitHub Actions workflow at
`.github/workflows/playwright.yml` for running the Playwright tests in CI.

## AI Usage

### Assistants Used

- Cursor AI
- GitHub Copilot

### How AI Assistance Was Used

AI assistants helped with:

- Creating the Page Object Model structure.
- Reviewing and improving locator usage.
- Improving code readability and documentation.

All generated suggestions were manually reviewed and adapted to the assessment requirements.
The test flow, locators, assertions, Page Object Model structure, and execution were manually
verified before submission.

## Application Under Test

[TodoMVC demo application](https://demo.playwright.dev/todomvc)

## Known Issues

No known issues.
