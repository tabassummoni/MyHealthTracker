const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  meal: String,
  exercise: String,
  mood: String,
  water: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Log', logSchema);
