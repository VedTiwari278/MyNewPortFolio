const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  JobTitle: {
    type: String,
    required: true,
  },
  Company: {
    type: String,
    required: true,
  },
  Duration: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Experience", experienceSchema);
