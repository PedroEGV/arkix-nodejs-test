'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const SERVER_PORT = process.env.SERVER_PORT || 8000;
const app = express();

// Middleware
app.use(methodOverride());
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', parameterLimit: 20000, extended: true }));

var server = app.listen(SERVER_PORT, () => console.log('Listening port', SERVER_PORT));

module.exports = server;