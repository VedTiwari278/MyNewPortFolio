const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  Title: String,
  Issuer: String,
  Date: Date,
  Description: String,
});

module.exports = mongoose.model("Certificates", skillSchema);
