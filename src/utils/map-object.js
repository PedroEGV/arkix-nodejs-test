'use strict';

function mapObject(data, keys) {
  const obj = {};
  keys.forEach(key => obj[key] = data[key]);
  return obj;
}

module.exports = function (data, keys) {
  return Array.isArray(data)
    ? data.map(d => mapObject(d, keys))
    : mapObject(data, keys);
}
