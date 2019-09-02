'use strict';

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongo = require('./mongo');
const users = require('./users');
const posts = require('./posts');
const auth = require('./auth');
const PORT = process.env.PORT || 8000;
const app = express();

// Middleware
app.use(methodOverride());
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', parameterLimit: 20000, extended: true }));

mongo(app);

// API
app.get('/', (req, res) => {
  return res.send('Server is running.');
});

users(app);
posts(app);
auth(app);

var server = app.listen(PORT, () => console.log('Listening port', PORT));

module.exports = server;
