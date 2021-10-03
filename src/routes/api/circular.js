'use strict';

const circular = require('express').Router();

circular.get('/', (req, res) => {
  res.send('circular api');
});

module.exports = circular;
