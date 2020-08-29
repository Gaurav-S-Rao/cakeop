const mongoose = require('mongoose');
const cakeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  weight: {
    type: Number,
    required: [true, 'Weight is required']
  },
  theme: {
    type: String
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  description: {
    type: String,
    required: [true, 'A Cake must have a description']
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Cake', cakeSchema);
