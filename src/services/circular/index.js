const { Circular } = require('../../models');

const circularDoc = new Circular();

const createOrUpdateCircular = async (req, res, next) => {
  try {
    const response = await circularDoc.save(req.body);
    res.status(201);
    res.send(response);
  }
  catch (err) {
    next(err);
  }
}

module.exports = {
  createOrUpdateCircular,
}
