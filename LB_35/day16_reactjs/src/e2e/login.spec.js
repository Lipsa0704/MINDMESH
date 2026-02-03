import { test, expect } from "@playwright/test";

test("login success", async ({ page }) => {
  await page.goto("/login");

  await page.fill('input[name="email"]', "test@example.com");
  await page.fill('input[name="password"]', "password123");
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL("/dashboard");
});
