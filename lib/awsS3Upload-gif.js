'use strict';

require('dotenv').load();

const awsUpload = require('../lib/aws-upload');
const Gif = require('../app/models/gif.js');

let awsS3Upload = function(fileToUpload){
  return new Promise((resolve, reject) => {
    let result = awsUpload(fileToUpload);
    result ? resolve(result) : reject(result);
  }).then((awsS3Response) => {
    return Gif.create({ location: awsS3Response.Location,
        name: fileToUpload.name,
        comment: fileToUpload.comment,
        _owner: fileToUpload._owner,
      });
  }).then((file) => {
    console.log('Success!');
    console.log(file);
    return file;
  }).catch(console.error);
};

module.exports = awsS3Upload;
