
const { I } = inject();

module.exports = {

  locators: {
    
    addToCartButton: ".add-to-cart-button-label"
  },
  addProductToCart() {
    I.waitForElement(this.locators.addToCartButton, 3);
    I.forceClick(this.locators.addToCartButton);
  }
}