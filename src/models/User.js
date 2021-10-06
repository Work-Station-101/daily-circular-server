'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  guid: { type: String },
  email: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  password: { type: String },
  address: {
    present: { type: String },
    permanent: { type: String },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
