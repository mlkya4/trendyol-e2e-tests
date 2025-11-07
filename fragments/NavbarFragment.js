const { clickKontrol, searchKontrol } = require("../pages/homeScreen");
const { buttons } = require("../pages/LoginPage");


const { I } = inject();

module.exports = {
 
  buttons:{
     femaleButtonControl: "//a[@href='/butik/liste/1/kadin' and text()='Kadın']" , 
     maleButtonControl : "//a[@href='/butik/liste/2/erkek' and text()='Erkek']" ,
     momAndchildButtonControl  : "//a[@href='/butik/liste/3/anne-cocuk' and text()='Anne & Çocuk']" ,
     homeAndlifeButtonControl : "//a[@href='/butik/liste/12/ev-yasam' and text()='Ev & Yaşam']" ,
     supermarketButtonControl: "//a[@href='/butik/liste/16/supermarket' and text()='Süpermarket']" , 

  },
  icon:{
    shoppingCartIconControl : "//i[@class='icon-bagg initial-icon']",
    myAccountIconControl : "//i[@class='icon-user-orange hover-icon']",
    favoriteIconControl:"//i[@class='icon-heart-orange hover-icon']",
    searchIconControl : "//i[@data-testid='search-icon']"


  },
  searchClick(){
    I.waitForElement(this.icon.searchIconControl,3);
    I.forceClick(this.icon.searchIconControl);

  },
  clickMaleButton(){
         I.waitForElement(this.buttons.maleButtonControl,3);
         I.forceClick(this.buttons.maleButtonControl);
  },
  clickFemaleButton(){
    I.waitForElement(this.buttons.femaleButtonControl);
    I.forceClick(this.buttons.femaleButtonControl);

  },
  verifyMalePageResultUrl(){
    I.waitForURL('https://www.trendyol.com/butik/liste/2/erkek',3);
    I.seeInCurrentUrl('https://www.trendyol.com/butik/liste/2/erkek');
  },
  verifyFemalePageResult(){
       I.waitForURL('https://www.trendyol.com/butik/liste/1/kadin',3); 
       I.seeInCurrentUrl('https://www.trendyol.com/butik/liste/1/kadin');
  },
  searchIconClick(){
    I.waitForElement(this.icon.searchIconControl,3);
    I.forceClick(this.icon.searchIconControl);

  },
  shoppingCartIconClick(){
    I.waitForElement(this.icon.shoppingCartIconControl,3);
    I.forceClick(this.icon.shoppingCartIconControl);

  },

  
  dontSeeAccount() {
    
    I.dontSee('Hesabım', '.link-text');
  },
  SeeAccount(text){
    I.waitForText(text,3);
    I.seeElement(text);
  },
  homeSeeSearchResultControl(){
    I.waitForElement("//h1[@class='title']",2);
    I.see("Kitaplık", "//h1[@class='title']");
  },
  enterKontrol(){
    I.pressKey('Enter');
  },
  clickControl(text){
    I.waitForElement(text);
    I.forceClick(text);
  },
  seeTextKontrol(text){
    I.waitForText(text,2);
    I.see(text);
  },

  
  
  basketClick(){
    I.click('Sepetim')

  }

}