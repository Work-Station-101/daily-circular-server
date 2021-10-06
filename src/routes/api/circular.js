'use strict';

const circular = require('express').Router();
const circularService = require('../../services/circular');

circular.get('/', (req, res) => {
  res.send('circular api');
});

circular.post('/', circularService.createOrUpdateCircular);

module.exports = circular;
