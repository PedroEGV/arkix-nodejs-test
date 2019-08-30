'use strict';

const repository = require("./repository");
const jwt = require('../utils/jwt');

async function list(req, res) {
  const token = req.headers['authorization'];
  let search = req.query.search;
  let entities = await repository.find({ author: jwt.decode(token).userId });

  if (search && search !== '') {
    search = search
      .split('-').join(' ')
      .split('_').join(' ')
      .split('.').join(' ')
      .split(',').join(' ')
      .toLowerCase().split(' ')
      .filter(s => s !== '');
    entities = entities.filter(entity => {
      return search.some(s => entity.title.toLowerCase().includes(s)
        || entity.content.toLowerCase().includes(s));
    });
  }

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
  const token = req.headers['authorization'];
  const entity = await repository.remove(req.params.id);
  if (entity.author !== jwt.decode(token).userId) return res.status(401).send('Unauthorized.');
  return res.json(entity);
}

module.exports = {
  list,
  one,
  create,
  update,
  remove
};
