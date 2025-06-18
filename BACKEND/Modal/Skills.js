const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  SkillName: String,
  ProficiencyLevel: String
});

module.exports = mongoose.model("Skill", skillSchema);
