'use strict';

const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const { mongodb, server } = require('./config');

_connentToMongodb().catch(err => console.log(err));

async function _connentToMongodb() {
  await mongoose.connect(mongodb);
}

const app = express();

app.use('/', routes);

app.listen(server.port, server.host);
