'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const schema = new Schema({
  id: { type: ObjectId, required: true, default: new ObjectId(), unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true });

schema.methods.checkPassword = function (password) {
  return this.password.length === password.length && this.password.includes(password);
};

module.exports = mongoose.model("User", schema);
