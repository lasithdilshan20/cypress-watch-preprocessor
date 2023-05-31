const { defineConfig } = require("cypress");
const watch = require("@cypress/watch-preprocessor");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", watch());
    },
  },
});