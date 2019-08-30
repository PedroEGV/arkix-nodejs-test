'use strict';

const controllers = require('./controller');

module.exports = function (app) {
  app.get('/api/v1/posts', controllers.list);
  app.get('/api/v1/posts/:id', controllers.one);
  app.post('/api/v1/posts', controllers.create);
  app.put('/api/v1/posts/:id', controllers.update);
  app.delete('/api/v1/posts/:id', controllers.remove);
}
