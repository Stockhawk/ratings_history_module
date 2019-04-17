const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/fec_ratings';

mongoose.connect(mongoUri, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Now connected to MongoDB called fec_ratings...');
});

module.exports = db;
