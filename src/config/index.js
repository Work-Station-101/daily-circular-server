const port = 5000;
const host = '0.0.0.0';

const config = {
  server: {
    port,
    host,
  },
  mongodb: 'mongodb://dc-mongodb:27017/daily-circular',
};

module.exports = config;
module.exports.default = config;
