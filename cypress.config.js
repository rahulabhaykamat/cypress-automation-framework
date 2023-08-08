const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

//>>>>custom config file setting starts here
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`);

  if(!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}//custom config file setting ends here<<<<

// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await preprocessor.addCucumberPreprocessorPlugin(on, config);

//   on("file:preprocessor", browserify.default(config));

//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }

module.exports = defineConfig({
  //cypress dashboard projectid
  projectId: "sgq5t2",
  e2e: {
    // implement node event listeners here
    //any plugin you install and have it on package.json needs to be linked here,
    //so that the plugins are loaded before the execution starts
    setupNodeEvents(on,config){
      //>>>>custom config file setting starts here
      const file = config.env.configFile || ''
      return getConfigurationByFile(file)//custom config file setting ends here<<<<
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl:"http://www.webdriveruniversity.com",
    //this config change will override default config value on project level
    defaultCommandTimeout: 6000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    videoCompression:35,
    viewportHeight:1080,
    viewportWidth:1920,
    reporter:'cypress-multi-reporters',
    reporterOptions: {
      configFile:'reporter-config.json'
    },
    env: {
      webDriverUniUrl:"http://www.webdriveruniversity.com",
      automationteststoreUrl:'https://www.automationteststore.com/',
      url: "https://rahulshettyacademy.com",
      qaloadurl: "https://qa.loadops.com",
      sauceurl: "https://www.saucedemo.com",
      rue21url: "https://www.rue21.com/store/",
      first_name:"Dhanvantari"
    },
    retries: {
      runMode: 1,
      openMode: 0,
      },
  },
});
