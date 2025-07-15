const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const cucumber = require('@badeball/cypress-cucumber-preprocessor');

// module.exports = defineConfig({
//   'cypress-cucumber-preprocessor': {
//     nonGlobalStepDefinitions: false,
//     step_definitions: './cypress/e2e/steps/',
//   },
//   e2e: {
//     baseUrl: 'https://www.amazon.com.br',
//     setupNodeEvents(on, config) {
//       allureWriter(on, config);
//       return require('./cypress/plugins/index.js')(on, config)
//     },
//     specPattern: 'cypress/e2e/**/*.feature',
//     supportFile: 'cypress/e2e/support/e2e.js',
//   },
  
// })

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.amazon.com.br',
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    screenshotOnRunFailure: true,
    video: true,
    async setupNodeEvents(on, config) {
      await cucumber.addCucumberPreprocessorPlugin(on, config);
      allureWriter(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );
      return config;
    },
  },
  env: {
    allure: true,
  },
  cucumber: {
    stepDefinitions: 'cypress/support/step_definitions',
  },
});