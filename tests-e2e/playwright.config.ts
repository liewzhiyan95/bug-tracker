import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: ".",
  testMatch: "integration.spec.ts",
  use: {
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || "http://localhost:3000",
    trace: "on-first-retry",
    headless: process.env.CI ? true : false,
    launchOptions: {
      slowMo: process.env.CI ? 0 : 1000,
    },
    ...devices['Desktop Chrome'], 
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  },
  timeout: 30000,
  reporter: [
    ["list"],
    ["junit", { outputFile: "test-results/results.xml" }],
    ["html", { outputFolder: "playwright-report" }],
  ],
  projects: [
    {
      name: 'brave',
      use: {
        ...devices['Desktop Chrome'],
        executablePath: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',
      },
    },
  ],
});
