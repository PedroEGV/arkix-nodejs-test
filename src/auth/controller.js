'use strict';

const jwt = require('jsonwebtoken');
const repository = require('../users/repository');
const JWT_SECRET = process.env.JWT_SECRET || 'catch_me_if_you_can';

async function auth(req, res) {
  const user = await repository.findByEmail(req.body.email);

  if (!user || !user.checkPassword(req.body.password)) return res.status(401).send('Unauthorized.');

  const token = jwt.sign({
    userId: user.id,
    email: user.email
  }, JWT_SECRET, { expiresIn: 60 * 60 * 1000 });

  return res.json({ token });
}

module.exports = {
  auth
};
