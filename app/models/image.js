'use strict';

const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  // _owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  // },
}, {
  timestamps: true,
  toObject: { virtuals: true }, // like serializing
  toJSON: { virtuals: true }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
