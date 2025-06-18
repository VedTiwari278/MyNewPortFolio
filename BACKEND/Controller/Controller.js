const Project = require("../Modal/Projects");
const Skill = require("../Modal/Skills");
const Certificates = require("../Modal/Certificates");
const Education = require("../Modal/Education");
const Experience = require("../Modal/Experience");
const Contact = require("../Modal/Contact");

exports.Contact = async (req, res) => {
  // console.log("The data is ", req.body);
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res
      .status(200)
      .json({ message: "Thanks For Contacting Us,We'll Catch you Shortly." });
  } catch (error) {}
};

exports.ProjectAdd = async (req, res) => {
  // console.log("The data is ", req.body);
  try {
    const { Title, Description, TechStack, ProjectLink, LivePreview } =
      req.body;

    const newProject = new Project({
      Title,
      Description,
      TechStack,
      ProjectLink,
      LivePreview,
    });
    await newProject.save();

    res
      .status(201)
      .json({ message: "Skill saved successfully", Project: newProject });
  } catch (error) {}
};

exports.EducationAdd = async (req, res) => {
  try {
    const { Degree, Institute, Session } = req.body;
    const newEducation = new Education({ Degree, Institute, Session });
    await newEducation.save();
    res.status(200).json({ message: "Education Added SuccessFully" });
  } catch (error) {}
};

exports.CertificationAdd = async (req, res) => {
  // console.log("The data is ", req.body);
  try {
    const { Title, Issuer, Date, Description, CertificateLink } = req.body;
    const newCertificate = new Certificates({
      Title,
      Issuer,
      Date,
      Description,
      CertificateLink,
    });
    await newCertificate.save();
    res.status(200).json({ message: "Certificate Added SuccessFully" });
  } catch (error) {}
};

exports.ExperienceAdd = (req, res) => {
  // console.log("The data is ", req.body);
};

exports.SkillAdd = async (req, res) => {
  try {
    const { SkillName, ProficiencyLevel } = req.body; // ✅ Correct spelling
    // console.log("The data is ", SkillName);

    const newSkill = new Skill({ SkillName, ProficiencyLevel }); // ✅ Correct spelling
    await newSkill.save();
    // console.log("Saved data: ", newSkill);

    res
      .status(201)
      .json({ message: "Skill saved successfully", skill: newSkill }); // Optional response
  } catch (error) {
    console.error("Error saving skill:", error);
    res.status(500).json({ message: "Failed to save skill" });
  }
};

// code For Getting data from db and make it available to the Frontend

exports.getSkill = async (req, res) => {
  const DataFromSkill = await Skill.find();
  res.status(200).json(DataFromSkill);
  // console.log("Fetched Skills: ", DataFromSkill);
};

exports.getProject = async (req, res) => {
  const DataFromProject = await Project.find();
  res.status(200).json(DataFromProject);
  // console.log("Project Found", DataFromProject);
};

exports.getCertificate = async (req, res) => {
  const DataFromCertiFicate = await Certificates.find();
  res.status(200).json(DataFromCertiFicate);
  // console.log("Certificate Found", DataFromCertiFicate);
};

exports.getEducation = async (req, res) => {
  const DataFromEducation = await Education.find();
  res.status(200).json(DataFromEducation);
  // console.log("Education Found :", DataFromEducation);
};
