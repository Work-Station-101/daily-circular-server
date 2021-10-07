'use strict';

const { User } = require('../../models');

const createOrUpdateUser = async (req, res, next) => {
  try {
    const userDoc = new User(req.body);
    const response = await userDoc.save();
    res.status(201);
    res.send(response);
  } catch (err) {
    next(err);
  }
};

const getUserByEmail = async (req, res) => {
  const response = await User.findOne({ 'email': req.params.email }).exec();
  res.status(200);
  res.send(response);
};

const authenticate = async (req, res) => {
  const response = await User.findOne({ 'email': req.body.email}).exec();
  const user = response._doc;
  if (user && user.password === req.body.password) {
    res.status(200);
    res.send({
      ...user,
      password: '----',
    });
  } else {
    res.status(400);
    res.send(null);
  }
};

module.exports = {
  authenticate,
  createOrUpdateUser,
  getUserByEmail,
}
