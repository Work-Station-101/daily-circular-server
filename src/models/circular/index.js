const mongoose = require('mongoose');

const circularSchema = new mongoose.Schema({
  title: String,
  body: Object,
  createdAt: Date,
});

module.exports = circularSchema;
