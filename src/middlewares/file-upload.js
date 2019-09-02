'use strict';

const multer = require('multer');
const UPLOAD_PATH = process.env.UPLOAD_PATH || './uploads';
const fileUpload = multer({ dest: `${UPLOAD_PATH}/` }).any();

module.exports = fileUpload;
