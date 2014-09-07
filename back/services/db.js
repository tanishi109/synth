/* Connect to Mongo DB */
var db = require('promised-mongo')(process.env.MONGODB || 'schedules-db');

exports.db = function () {
  return db;
};
