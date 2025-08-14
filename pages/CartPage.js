export class CartPage {
  //pagina do carrinho
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator(".title");
    this.cartItems = page.locator(".cart_item");
  }

  async isOnCartPage() {
    return (await this.pageTitle.textContent()) === "Your Cart";
  }

  async getCartItemNames() {
    return await this.cartItems
      .locator(".inventory_item_name")
      .allTextContents();
  }

  async removeItemByName(productName) {
    const item = this.cartItems.filter({
      hasText: productName,
    });
    const removeButton = item.locator("button[data-test^='remove']");
    await removeButton.click();
  }
}
