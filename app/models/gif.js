'use strict';

const mongoose = require('mongoose');

const gifSchema = new mongoose.Schema({
  images: {
    type: Array,
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

const Gif = mongoose.model('Gif', gifSchema);

module.exports = Gif;