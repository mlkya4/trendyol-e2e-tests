const NavbarFragment = require("../fragments/NavbarFragment");

Feature('HomePage Controller')
Before(({I})=>{
    I.amOnPage('https://www.trendyol.com/')
})

Scenario(
     
    'Should be HomePage Search Bar Tests',
    
    ({I,homeScreenPage,navbarFragment})  =>{

    homeScreenPage.searchBarInputControl();
    navbarFragment.searchClick();
    navbarFragment.homeSeeSearchKontrol();


}),
Scenario(
    'Should be HomePage Male Button click ',
    
    ({I,homeScreenPage,navbarFragment}) =>{
    NavbarFragment.clickMaleButton();
    NavbarFragment.verifyMalePageResultUrl();

}),
Scenario(
    'Should be HomePage Female Button Click',
    ({I,homeScreenPage,navbarFragment}) =>{
    
    NavbarFragment.clickFemaleButton();

    NavbarFragment.verifyFemalePageResult();

})