'use strict';

const tokenChecker = require('../middlewares/token-checker')
const fileUpload = require('../middlewares/file-upload');
const controllers = require('./controller');

module.exports = function (app) {
  app.get('/api/v1/posts', tokenChecker, controllers.list);
  app.get('/api/v1/posts/:id', tokenChecker, controllers.one);
  app.post('/api/v1/posts', tokenChecker, controllers.create);
  app.put('/api/v1/posts/:id', tokenChecker, controllers.update);
  app.delete('/api/v1/posts/:id', tokenChecker, controllers.remove);
  app.post('/api/v1/posts/:id/image-upload', [tokenChecker, fileUpload], controllers.uploadImage);
}
