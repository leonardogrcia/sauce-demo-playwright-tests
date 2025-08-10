import { expect } from "@playwright/test";

export class ProductDetailsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.productTitle = page.locator(".inventory_details_name");
    this.productDescription = page.locator(".inventory_details_desc");
    this.productPrice = page.locator(".inventory_details_price");
    this.addToCartButton = page.locator("button[data-test^='add-to-cart']");
    this.backButton = page.locator("button[data-test='back-to-products']");
  }

  async isOnProductDetailsPage() {
    await expect(this.productTitle).toBeVisible();
    return true;
  }

  async getProductInfo() {
    const title = await this.productTitle.textContent();
    const description = await this.productDescription.textContent();
    const priceText = await this.productPrice.textContent();
    const price = parseFloat(priceText.replace("$", ""));
    return { title, description, price };
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async goBackToInventory() {
    await this.backButton.click();
    await expect(this.page).toHaveURL(/inventory.html/);
  }
}
