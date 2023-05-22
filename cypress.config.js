const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'knkcum',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: ['**/cpress/e2e/1-getting-started', '**/cpress/e2e/2-advanced-examples']
  },
});
