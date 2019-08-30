'use strict';

const repository = require("./repository");
const jwt = require('../utils/jwt');

async function list(req, res) {
  const entities = await repository.find();
  return res.json(entities);
}

async function one(req, res) {
  const entity = await repository.findOne(req.params.id);
  return res.json(entity);
}

async function create(req, res) {
  const body = req.body;
  const token = req.headers['authorization'];
  body.author = jwt.decode(token).userId;
  const entity = await repository.save(body);
  return res.json(entity);
}

async function update(req, res) {
  const body = req.body;
  body.author = null;
  const entity = await repository.edit(req.params.id, req.body);
  return res.json(entity);
}

async function remove(req, res) {
  const entity = await repository.remove(req.params.id);
  return res.json(entity);
}

module.exports = {
  list,
  one,
  create,
  update,
  remove
};
