'use strict';

'use strict';

const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'catch_me_if_you_can';

function generate(user) {
  const token = jwt.sign({
    userId: user.id,
    email: user.email
  }, JWT_SECRET, { expiresIn: 60 * 60 * 1000 });

  return token;
}

function decode(token) {
  if (!token || token === '') return null;
  token = token.replace('Bearer', '').trim();
  return jwt.verify(token, JWT_SECRET);
}

function verify(token) {
  try {
    const decoded = decode(token);
    return decoded !== null;
  } catch (error) {
    return false;
  }
}

module.exports = {
  generate,
  decode,
  verify
};
