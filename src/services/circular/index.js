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

module.exports = {
  createOrUpdateCircular,
}
