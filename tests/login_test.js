const LoginPage = require("../pages/LoginPage");

Feature('Giriş Kontrolü')
Before(async({I})=>{
    I.amOnPage('https://www.trendyol.com/')
    I.forceClick('Giriş Yap', '.link-text')
})
Scenario(
    "User should not be able to sign in with an incorrect password",
    ({I,loginPagePage,navbarFragment })=>{
        loginPagePage.fillUsernameField('abc@gmail.com');
        
        loginPagePage.fillPasswordField('incorrectPassword');
        navbarFragment.dontSeeAccount();
          }
    
);
Scenario(
    "Wrong user should not be able to sign in",
    ({I,loginPagePage,navbarFragment}) =>{
        loginPagePage.fillUsernameField('user');
         loginPagePage.fillPasswordField('1234567898');
         loginPagePage.clickButton();
         navbarFragment.dontSeeAccount();
    }
);
Scenario(
    "User should successfully sign in",
    ({I,loginPagePage,navbarFragment}) =>{
          loginPagePage.fillUsernameField('abc@gmail.com');
          loginPagePage.fillPasswordField('12345678');
          loginPagePage.clickButton();
          navbarFragment.seeHesap();
    }
    
)
