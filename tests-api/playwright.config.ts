import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  use: {
    baseURL:
      process.env.PLAYWRIGHT_TEST_BASE_URL || "http://localhost:8080/api/",
  },
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
