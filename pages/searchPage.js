const { locator } = require("./sepetPage");

const { I } = inject();

module.exports = {

  locators: {
    firstCard : "(//a[@data-testid='product-card'])[1]"
  },
  firstcardDetail(){
    I.waitForElement(this.locators.firstCard,3)
    I.forceClick(this.locators.firstCard);

  }
}
