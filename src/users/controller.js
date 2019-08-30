'use strict';

const repository = require("./repository");

async function list(req, res) {
  const entities = await repository.find();
  return res.json(entities);
}

async function one(req, res) {
  const entity = await repository.findOne(req.params.id);
  return res.json(entity);
}

async function create(req, res) {
  try {
    const entity = await repository.save(req.body);
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
    const entity = await repository.edit(req.params.id, req.body);
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
