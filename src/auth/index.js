'use strict';

const controllers = require('./controller');

module.exports = function (app) {
  app.post('/api/v1/auth', controllers.auth);
}
