'use strict';

require('./model');

const mongoose = require("mongoose");
const Post = mongoose.model('Post');

async function save(data) {
  const entity = new Post(data);
  return entity.save();
}

async function edit(id, data) {
  const currentEntity = await findOne(id);

  currentEntity.title = data.title || currentEntity.title;
  currentEntity.content = data.content || currentEntity.content;
  currentEntity.imageUrl = data.imageUrl || currentEntity.imageUrl;
  currentEntity.author = data.author || currentEntity.author;

  return currentEntity.save();
}

async function remove(id) {
  const entity = await findOne(id);
  return entity.remove();
}

async function find(filter) {
  if (!filter) return Post.find();
  else return Post.find(filter);
}

async function findOne(id) {
  return Post.findOne({ id });
}

module.exports = {
  save,
  edit,
  remove,
  find,
  findOne
};
