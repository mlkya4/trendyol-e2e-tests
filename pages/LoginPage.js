// pages/LoginPage.js
const { I } = inject();

module.exports = {
  fields:{
    usernameField : "#login-email",
    passwordField : "#login-password-input"
 },

  buttons : {
   mainLoginButton: "//p[text()='Giriş Yap']", 
   signButton : "//button[@type='submit' and contains(., 'Giriş Yap')]"
 },

 
 fillUsernameField(username) {
    
    I.waitForClickable(this.fields.usernameField, 3); 
    
    I.click(this.fields.usernameField); 
    
    I.clearField(this.fields.usernameField);
    
    I.fillField(this.fields.usernameField, username);
 },

  
 fillPasswordField(password){
    
    I.waitForClickable(this.fields.passwordField, 3);
    
    I.click(this.fields.passwordField);
    
    I.clearField(this.fields.passwordField);
    
    I.fillField(this.fields.passwordField, password);
 },

 clickButton(){
    I.waitForElement(this.buttons.signButton,3);
    I.click(this.buttons.signButton); 
},


 login(){
      I.amOnPage('https://www.trendyol.com/')
      I.waitForElement(this.buttons.mainLoginButton, 3);
      I.click(this.buttons.mainLoginButton);


      this.fillUsernameField('abc@gmail.com');
      this.fillPasswordField('123456789');
      this.clickButton();

      I.waitForElement("//p[text()='Hesabım']", 5); 
       }
  
}
