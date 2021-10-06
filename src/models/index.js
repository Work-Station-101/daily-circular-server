const mongoose = require('mongoose');
const { circularSchema } = require('./circular')

const Circular = mongoose.model('Circular', circularSchema);
