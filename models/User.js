const mongoose = require('mongoose');
const { mongoUri } = require('../env.js');

mongoose.connect(mongoUri, { useMongoClient: true }, () => console.log('Database connection successful!'));

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
