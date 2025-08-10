import { test, expect } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";

test.describe("Página de Inventário Básica", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.fill('[data-test="username"]', "standard_user");
    await page.fill('[data-test="password"]', "secret_sauce");
    await page.click('[data-test="login-button"]');
  });

  test("Deve carregar a página de inventário e mostrar produtos", async ({
    page,
  }) => {
    const inventory = new InventoryPage(page);

    expect(await inventory.isOnInventoryPage()).toBe(true);

    const produtosVisiveis = await inventory.productPrices.count();
    expect(produtosVisiveis).toBeGreaterThan(0);
  });
});
