'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const schema = new Schema({
  id: { type: ObjectId, required: true, default: new ObjectId() },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
}, { timestamps: true });

schema.methods.checkPass = function (password) {
  return this.password === password;
};

module.exports = mongoose.model("User", schema);
