const { email, password } = require("../user");
import { test, expect } from "@playwright/test";

test("test invalid login", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("petya312"); // Неверный email
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill("12345678"); // Неверный пароль
  await page.getByTestId("login-submit-btn").click();

  // Проверяем, что отображается сообщение об ошибке "Неверный email"
  await expect(
    page.locator("span", { hasText: "Неверный email" })
  ).toBeVisible();
});
