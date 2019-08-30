'use strict';

const jwt = require('../utils/jwt');

module.exports = function (req, res, next) {
  const token = req.headers['authorization'];

  if (!jwt.verify(token)) {
    return res.status(401).send('Unauthorized.');
  }

  next();
}
