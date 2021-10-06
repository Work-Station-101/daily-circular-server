'use strict';

const mongoose = require('mongoose');

const circularSchema = new mongoose.Schema({
  guid: { type: String },
  title: { type: String },
  body: { type: String },
  tags: [{ type: String }],
  comments: [{ body: String, date: Date }],
  deleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  meta: {
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    shares: { type: Number, default: 0 },
  },
});

const Circular = mongoose.model('Circular', circularSchema);

module.exports = Circular;
