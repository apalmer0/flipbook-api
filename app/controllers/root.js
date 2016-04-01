'use strict';

const controller = require('lib/wiring/controller');

/* GET home page. */
const root = (req, res) => {
  res.json({ index: { title: 'flipbook' } });
};

module.exports = controller({
  root,
});
