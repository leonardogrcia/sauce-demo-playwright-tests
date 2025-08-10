import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login com credenciais inválidas", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("wrong_user", "wrong_pass");

  await loginPage.assertErrorVisible(
    "Epic sadface: Username and password do not match"
  );
});
