const { buttons } = require("./LoginPage");

const { I } = inject();

module.exports = {
  fields:{
    searchBar: "//input[@data-testid='suggestion']",
    
  },
  clicks : {
     searchClick : "//i[@class = 'ft51BU2r']",
    buttonWoman :"//a[@href='/butik/liste/1/kadin']",
    tumkategori : ".icon-navigation-menu",
    buttonLogo : "//img[src='https://cdn.dsmcdn.com/web/logo/ty-web.svg']",

  },
  searchBarKontrol(){
    I.waitForElement(this.fields.searchBar,3)
    I.fillField(this.friends.searchBar,'Oyuncu Koltuğu');
    

  },
   verifySeeResultClickMaleButton(){
        I.seeElement()
  },
  kategoriControl(text){}
  

  
}
