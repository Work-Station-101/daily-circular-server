const port = 5000;
const host = '0.0.0.0';
const mongodbUser = 'root';
const mongodbPassword = '1234';
const mongodbContainerName = 'dc-mongodb';
const mongodbPort = 27017;

const config = {
  server: {
    port,
    host,
  },
  mongodb: `mongodb://${mongodbContainerName}:${mongodbPort}/daily-circular`,
};

module.exports = config;
module.exports.default = config;
