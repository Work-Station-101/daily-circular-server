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

module.exports = {
  createOrUpdateUser,
  getUserByEmail,
}
