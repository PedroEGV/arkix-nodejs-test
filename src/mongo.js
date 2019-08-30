'use strict';

const mongoose = require("mongoose");

module.exports = function (app) {
  const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/arkix';
  mongoose.connect(mongoUrl, { useNewUrlParser: true });
  mongoose.Promise = global.Promise;

  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);
  process.on("SIGHUP", cleanup);

  if (app) {
    app.set("mongoose", mongoose);
  }
};

function cleanup() {
  mongoose.connection.close(function () {
    process.exit(0);
  });
}
