'use strict';

const user = require('express').Router();
const userService = require('../../services/user');

user.post('/', userService.createOrUpdateUser);
user.get('/:email', userService.getUserByEmail);
user.post('/login', userService.authenticate);

module.exports = user;
