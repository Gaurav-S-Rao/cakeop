const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  }, // bro install git
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    length: { min: 6 }
  },
  googleId: {
    type: String
  },
  facebook: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  userType: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
});

module.exports = mongoose.model('User', userSchema);
