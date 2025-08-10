import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login exibe erro quando usuário e senha estão vazios", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login("", "");

  await loginPage.assertErrorVisible("Epic sadface: Username is required");
});
