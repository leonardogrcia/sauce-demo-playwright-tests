import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";

test("Usuário pode remover item do carrinho", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

  await inventoryPage.addFirstProductToCart();
  await inventoryPage.goToCart();

  let itens = await cartPage.getCartItemNames();
  expect(itens.length).toBeGreaterThan(0);

  await cartPage.removeItemByName(itens[0]);

  itens = await cartPage.getCartItemNames();
  expect(itens.length).toBe(0);
});
