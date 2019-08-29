'use strict';

const controllers = require('./controller');

module.exports = function (app) {
  app.get('/api/v1/users', controllers.list);
  app.get('/api/v1/users/:id', controllers.one);
  app.post('/api/v1/users', controllers.create);
  app.put('/api/v1/users/:id', controllers.update);
  app.delete('/api/v1/users/:id', controllers.remove);
}
