

const homeScreen = require("../pages/homeScreen");

Feature('Shopping Cart Flow'); 


Before(async ({ I, loginPagePage }) => {
    I.amOnPage('/');
    await loginPagePage.login();
});


Scenario(
    "Should be user able to see the empty cart message" ,
    ({ I,navbarFragment, sepetPagePage})=> {
    
    navbarFragment.shoppingCartIconClick();
    sepetPagePage.verifyEmptyCart();
    sepetPagePage.clickEmptyCartButton();
    
    
    
});


Scenario(
    "Should be user able to see the added product in the cart" ,  
   ({I,addBasketCardPage,homeScreenPage,loginPagePage,searchPagePage,sepetPagePage,navbarFragment })=> {
    
    homeScreenPage.searchKontrol('Multivitamin');
    
    searchPagePage.firstcardDetail();
    searchPagePage.switchToNextTab();
    addBasketCardPage.addProductToCart();
    addBasketCardPage.addProductToCart();
    navbarFragment.basketClick();
    sepetPagePage.verifyFullCart();
    
});