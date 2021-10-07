'use strict';

const circular = require('express').Router();
const circularService = require('../../services/circular');

circular.post('/', circularService.createOrUpdateCircular);
circular.post('/circulars', circularService.getCirculars);

module.exports = circular;
