const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    trim: true,
  },
  Description: {
    type: String,
    required: true,
    trim: true,
  },
  TechStack: {
    type: String,
    required: true,
  },
  ProjectLink: {
    type: String,
    required: true,
  },
  LivePreview: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Project", projectSchema);
