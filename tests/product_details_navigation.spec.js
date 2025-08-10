import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";

test("Usuário pode navegar para detalhes do produto e validar informações", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const productDetailsPage = new ProductDetailsPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

  const nomePrimeiroProduto = await inventoryPage.page
    .locator(".inventory_item_name")
    .first()
    .textContent();

  await inventoryPage.page.locator(".inventory_item_name").first().click();

  await productDetailsPage.isOnProductDetailsPage();

  const infoProduto = await productDetailsPage.getProductInfo();
  expect(infoProduto.title.trim()).toBe(nomePrimeiroProduto.trim());
  expect(infoProduto.price).toBeGreaterThan(0);
  expect(infoProduto.description.length).toBeGreaterThan(0);

  await productDetailsPage.goBackToInventory();

  await expect(inventoryPage.page).toHaveURL(/inventory.html/);
});
