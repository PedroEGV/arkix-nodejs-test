'use strict';

const jwt = require('../utils/jwt');
const repository = require('../users/repository');

async function auth(req, res) {
  const user = await repository.findByEmail(req.body.email);

  if (!user || !user.checkPassword(req.body.password)) {
    return res.status(401).send('Unauthorized.');
  }

  const token = jwt.generate(user);

  return res.json({ token });
}

module.exports = {
  auth
};
