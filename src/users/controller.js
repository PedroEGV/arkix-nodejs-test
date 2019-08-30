'use strict';

const repository = require("./repository");
const mapObject = require('../utils/map-object');
const keys = ['id', 'name', 'email', 'createdAt', 'updatedAt'];

async function list(req, res) {
  let entities = await repository.find();
  entities = mapObject(entities, keys);
  return res.json(entities);
}

async function one(req, res) {
  let entity = await repository.findOne(req.params.id);
  entity = mapObject(entity, keys);
  return res.json(entity);
}

async function create(req, res) {
  try {
    let entity = await repository.save(req.body);
    entity = mapObject(entity, keys);
    return res.json(entity);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ code: 'ALREADY_EXIST' });
    }

    console.error(error);
    return res.status(500).send('Internal server error:', error.message);
  }
}

async function update(req, res) {
  try {
    let entity = await repository.edit(req.params.id, req.body);
    entity = mapObject(entity, keys);
    return res.json(entity);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ code: 'ALREADY_EXIST' });
    }

    console.error(error);
    return res.status(500).send('Internal server error:', error.message);
  }
}

async function remove(req, res) {
  let entity = await repository.remove(req.params.id);
  entity = mapObject(entity, keys);
  return res.json(entity);
}

module.exports = {
  list,
  one,
  create,
  update,
  remove
};
