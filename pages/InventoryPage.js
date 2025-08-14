import { expect } from "@playwright/test";

export class InventoryPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator(".title");
    this.menuButton = page.locator("#react-burger-menu-btn");
    this.logoutLink = page.locator("#logout_sidebar_link");
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.cartLink = page.locator(".shopping_cart_link");
    this.firstAddToCartButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    this.productPrices = page.locator(".inventory_item_price");
  }

  async isOnInventoryPage() {
    await expect(this.pageTitle).toBeVisible();
    const title = await this.pageTitle.textContent();
    return title.trim() === "Products";
  }

  async logout() {
    await this.menuButton.click();
    await expect(this.logoutLink).toBeVisible();
    await this.logoutLink.click();
    await expect(this.page).toHaveURL("https://www.saucedemo.com/");
  }

  async addFirstProductToCart() {
    await expect(this.firstAddToCartButton).toBeVisible();
    await expect(this.firstAddToCartButton).toBeEnabled();
    await this.firstAddToCartButton.click();
    await expect(this.cartBadge).toBeVisible();
  }

  async goToCart() {
    await expect(this.cartLink).toBeVisible();
    await this.cartLink.click();
    await expect(this.page).toHaveURL(/.*cart/);
  }

  async getProductPrices() {
    //vamos pegar o preço dos produtos no site
    const pricesText = await this.productPrices.allTextContents();
    return pricesText.map((price) => parseFloat(price.replace("$", "")));
  }
}
