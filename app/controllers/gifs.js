'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const awsS3Upload = require('../../lib/awsS3Upload-gif');
const authenticate = require('./concerns/authenticate');

const Gif = models.gif;

const multer = require('multer'); //
const multerStorage = multer({ storage: multer.memoryStorage() });

const index = (req, res, next) => {
  console.log('start gif index');
  let gifFilter = { _owner: req.currentUser };
  Gif.find(gifFilter)
    .then(gifs => res.json({ gifs }))
    .catch(err => next(err));
};

const create = (req, res, next) => {
  console.log('gif create');
  let file = Object.assign(req.file, {
    name: req.body.gif.name,
    comment: req.body.gif.comment,
    _owner: req.currentUser._id,
  });
  awsS3Upload(file)
    .then(file => res.json({ file }))
    .catch(err => next(err));

};

const show = (req, res, next) => {
  Gif.findOne({ _id: req.params.id, _owner: req.currentUser })
    .then(gif => String(gif._owner) === String(req.currentUser._id) ? gif : next())
    .then(gif => gif ? res.json({ gif }) : next())
    .catch(err => next(err));
};

const update = (req, res, next) => {
  console.log('update');
  console.log(req.body);

  Gif.findOne({ _id: req.params.id, _owner: req.currentUser })
    .then(gif => {
      if (!gif) {
        console.log('didnt find the gif');
        return next();
      }
      console.log(gif);

      return gif.update(req.body)
        .then(updateResult => console.log(updateResult))
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

const destroy = (req, res, next) => {
  Gif.findOne({ _id: req.params.id, _owner: req.currentUser })

  .then((gif) => {
    gif.remove();
    res.json(true);
  })
  .catch(err => next(err));
};

module.exports = controller({
  index,
  create,
  show,
  update,
  destroy
}, { before: [
  { method: authenticate },
  { method: multerStorage.single('gif[file]'), only: ['create'] },
  { method: multerStorage.single('gif'), only: ['update'] }
], });
