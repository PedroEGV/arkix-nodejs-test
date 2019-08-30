'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const schema = new Schema({
  id: { type: ObjectId, required: true, default: new ObjectId() },
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: String,
  author: { type: ObjectId, required: true, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model("Post", schema);
