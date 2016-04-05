'use strict';

const AWS = require('aws-sdk');
const crypto = require('crypto');

const randomString = () =>
  new Promise((resolve, reject) =>
    crypto.randomBytes(16, (err, data) =>
    err ? reject(err) : resolve(data.toString('hex'))
  )
);

const awsUpload = (file) => {
  let directory = new Date().toISOString().split('T')[0];
  let s3 = new AWS.S3();

  return randomString().then((randomHexString) => ({
    ACL: 'public-read',
    Body: file.buffer,
    Bucket: 'apalmer0',
    ContentType: file.mimetype,
    Key: `${directory}/${randomHexString}-${file.name}`,
  })).then((params) =>
    new Promise((resolve, reject) =>
      s3.upload(params, (err, data) =>
        err ? reject(err) : resolve(data)
      )
    )
  );
};

module.exports = awsUpload;
