import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test("Usuário pode adicionar múltiplos itens ao carrinho e o badge atualiza", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

  for (let i = 0; i < 3; i++) {
    const addButton = inventoryPage.page
      .locator(`button[data-test^='add-to-cart']`)
      .nth(i);
    await addButton.click();
  }

  const quantidadeBadge = await inventoryPage.cartBadge.textContent();
  expect(quantidadeBadge).toBe("3");
});
