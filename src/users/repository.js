'use strict';

require('./model');

const mongoose = require("mongoose");
const User = mongoose.model("User");

async function save(data) {
  const entity = new User(data);
  return entity.save();
}

async function edit(id, data) {
  const currentEntity = await findOne(id);

  currentEntity.name = data.name || currentEntity.name;
  currentEntity.email = data.email || currentEntity.email;
  currentEntity.password = data.password || currentEntity.password;

  return currentEntity.save();
}

async function remove(id) {
  const entity = await findOne(id);
  return entity.remove();
}

async function find() {
  return User.find();
}

async function findOne(id) {
  return User.findOne({ id });
}

async function findByEmail(email) {
  return User.findOne({ email });
}

module.exports = {
  save,
  edit,
  remove,
  find,
  findOne,
  findByEmail
};
