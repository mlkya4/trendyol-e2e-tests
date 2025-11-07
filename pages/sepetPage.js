const { I } = inject();

module.exports = {
  locator:{
    emptyIcon : ".shopping-bag-icon" , 
    emptyStartShoppingButton :"//a[@href='/']",
    checkingButton : "//div[@class='checkout-button-text-content']",
    discountCodeButton : ".promotion-code-toggle-text"
  },
  
  verifyEmptyCart(){
  
    I.waitForElement(this.locator.emptyIcon,3);
    
    I.seeElement(this.locator.emptyIcon);
    
  },
  verifyFullCart(){
    
    I.seeElement(this.locator.checkingButton);
    I.seeElement(this.locator.discountCodeButton);
    
  },
clickEmptyCartButton(){
    I.waitForElement(this.locator.emptyStartShoppingButton)
    I.click(this.locator.emptyStartShoppingButton);
  },
  clickCheckoutButton(){
    I.waitForElement(this.locator.checkingButton);
    I.forceClick(this.locator.checkingButton);
  },
  switchToNextTab(){
    I.switchToNextTab();
    I.wait(1);
  },





 
}
