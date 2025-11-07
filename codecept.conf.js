const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);


setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.trendyol.com/',
      show: true
    }
  },
  include: {
    I: './steps_file.js',

    homeScreenPage: "./pages/homeScreen.js",



    loginPagePage: "./pages/LoginPage.js",

    navbarFragment: './fragments/NavbarFragment.js',

    sepetPagePage: "./pages/sepetPage.js",

    searchPagePage: "./pages/searchPage.js",

    addBasketCardPage: "./pages/addBasketCard.js",
  },
  plugins: {
    htmlReporter: {
      enabled: true
    }
  },
  name: 'codecept-basics'
}