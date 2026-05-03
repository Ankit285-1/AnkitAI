# Playwright Project

A Playwright testing project for automated browser testing.

## Setup

```bash
npm install
```

## Running Tests

- Run all tests: `npm test`
- Run tests in UI mode: `npm run test:ui`
- Debug tests: `npm run test:debug`
- View test report: `npm run test:report`

## Project Structure

```
tests/              # Test files (.spec.ts)
playwright.config.ts # Playwright configuration
package.json        # Project dependencies and scripts
```

## Configuration

The `playwright.config.ts` file contains:
- Test directory: `./tests`
- Browsers: Chromium, Firefox, WebKit
- Base URL: http://localhost:3000
- Reporter: HTML report

## Writing Tests

Create new test files in the `tests/` directory with `.spec.ts` extension:

```typescript
import { test, expect } from '@playwright/test';

test('my test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example');
});
```

## More Information

- [Playwright Documentation](https://playwright.dev)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
