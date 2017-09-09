/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'asset-cache': {
      include: [
        'assets/**/*',
        'ember-welcome-page/images/*'
      ]
    },
    'esw-cache-fallback': {
      patterns: [ '/' ],
      version: '1' // Changing the version will bust the cache
    }
  });

  return app.toTree();
};