/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homeScreenPage = typeof import('./pages/homeScreen.js');
type loginPagePage = typeof import('./pages/LoginPage.js');
type navbarFragment = typeof import('./fragments/NavbarFragment.js');
type sepetPagePage = typeof import('./pages/sepetPage.js');
type searchPagePage = typeof import('./pages/searchPage.js');
type addBasketCardPage = typeof import('./pages/addBasketCard.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homeScreenPage: homeScreenPage, loginPagePage: loginPagePage, navbarFragment: navbarFragment, sepetPagePage: sepetPagePage, searchPagePage: searchPagePage, addBasketCardPage: addBasketCardPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
