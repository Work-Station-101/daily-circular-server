'use strict';

const { Circular } = require('../../models');

const createOrUpdateCircular = async (req, res, next) => {
  try {
    const circularDoc = new Circular(req.body);
    const response = await circularDoc.save();
    res.status(201);
    res.send(response);
  } catch (err) {
    next(err);
  }
}

const getCirculars = async (req, res) => {
  const circulars = await Circular.find().sort({ createdAt: 'desc' });
  res.status(200);
  res.send(circulars);
};

const getCircularsByUserGUID = async (req, res) => {
  const circulars = await Circular.find({'creatorGUID': req.params.userGUID}).sort({ createdAt: 'desc' });
  res.status(200);
  res.send(circulars);
};

module.exports = {
  createOrUpdateCircular,
  getCirculars,
  getCircularsByUserGUID,
}
