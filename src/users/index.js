'use strict';

const tokenChecker = require('../middlewares/token-checker')
const controllers = require('./controller');

module.exports = function (app) {
  app.get('/api/v1/users', tokenChecker, controllers.list);
  app.get('/api/v1/users/:id', tokenChecker, controllers.one);
  app.post('/api/v1/users', tokenChecker, controllers.create);
  app.put('/api/v1/users/:id', tokenChecker, controllers.update);
  app.delete('/api/v1/users/:id', tokenChecker, controllers.remove);
}
