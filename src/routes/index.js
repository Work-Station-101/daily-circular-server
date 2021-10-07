'use strict';

const routes = require('express').Router();
const user = require('./api/user');
const circular = require('./api/circular');

routes.use('/api/user', user);
routes.use('/api/circular', circular);
routes.use('/api/circular/:userGUID', circular);

module.exports = routes;
