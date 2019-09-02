'use strict';

const repository = require("./repository");
const jwt = require('../utils/jwt');
const mapObject = require('../utils/map-object');
const s3FileUpload = require('../utils/s3-upload');
const keys = ['id', 'title', 'content', 'author', 'createdAt', 'updatedAt'];

async function list(req, res) {
  const token = req.headers['authorization'];
  const page = req.query.page || 0;
  const perPage = req.query.perPage || 10;
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

  entities = entities.splice(page * perPage, perPage);
  entities = mapObject(entities, keys);

  return res.json(entities);
}

async function one(req, res) {
  let entity = await repository.findOne(req.params.id);
  entity = mapObject(entity, keys);
  return res.json(entity);
}

async function create(req, res) {
  const body = req.body;
  const token = req.headers['authorization'];
  body.author = jwt.decode(token).userId;
  let entity = await repository.save(body);
  entity = mapObject(entity, keys);
  return res.json(entity);
}

async function update(req, res) {
  const body = req.body;
  body.author = null;
  let entity = await repository.edit(req.params.id, req.body);
  entity = mapObject(entity, keys);
  return res.json(entity);
}

async function remove(req, res) {
  const token = req.headers['authorization'];
  let entity = await repository.remove(req.params.id);
  if (entity.author !== jwt.decode(token).userId) return res.status(401).send('Unauthorized.');
  entity = mapObject(entity, keys);
  return res.json(entity);
}

async function uploadImage(req, res) {
  const files = req.files;
  const id = req.params.id;

  if (!files || files.length === 0) return res.status(400).json({ code: 'MISSING_FILE' });

  try {
    const fileName = files[0].filename;
    const imageUrl = await s3FileUpload(fileName);
    await repository.edit(id, { imageUrl });
    return res.json({ imageUrl });
  } catch (error) {
    return res.status(500).json({ code: 'ERROR_UPLOADING' });
  }
}

module.exports = {
  list,
  one,
  create,
  update,
  remove,
  uploadImage
};
