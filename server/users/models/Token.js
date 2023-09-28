const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Replace 'User' with the actual name of your User model
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: '1h', // Token will expire after 1 hour
  },
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;