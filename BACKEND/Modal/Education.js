const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  Degree: {
    type: String,
    required: true,
    trim: true,
  },
  Institute: {
    type: String,
    required: true,
    trim: true,
  },
  Session: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Education", educationSchema);
