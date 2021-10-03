'use strict';

const routes = require('express').Router();
const circular = require('./api/circular');

routes.use('/api/circular', circular);

module.exports = routes;
