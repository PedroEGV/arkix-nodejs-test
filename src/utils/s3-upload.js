'use strict';

const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

function s3FileUpload(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (error, fileContent) => {
      if (error) return reject(error);

      const params = {
        Bucket: process.env.AWS_S3_BUCKET,
        Key: fileName,
        Body: fileContent
      };

      s3.upload(params, (s3Error, data) => {
        if (s3Error) return reject(s3Error);
        console.log(`File uploaded successfully at ${data.Location}`);
        resolve(data.Location);
      });
    });
  });
}

module.exports = s3FileUpload;
