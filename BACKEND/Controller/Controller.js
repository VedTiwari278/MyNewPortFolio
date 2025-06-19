const Project = require("../Modal/Projects");
const Skill = require("../Modal/Skills");
const Certificates = require("../Modal/Certificates");
const Education = require("../Modal/Education");
const Experience = require("../Modal/Experience");
const Contact = require("../Modal/Contact");

// Contact Form Handler
exports.Contact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    res
      .status(200)
      .json({ message: "Thanks For Contacting Us, We'll catch you shortly." });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: "Failed to save contact" });
  }
};

// Add Project
exports.ProjectAdd = async (req, res) => {
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
      .json({ message: "Project saved successfully", project: newProject });
  } catch (error) {
    console.error("Error saving project:", error);
    res.status(500).json({ message: "Failed to save project" });
  }
};

// Add Education
exports.EducationAdd = async (req, res) => {
  try {
    const { Degree, Institute, Session } = req.body;
    const newEducation = new Education({ Degree, Institute, Session });
    await newEducation.save();
    res.status(200).json({ message: "Education added successfully" });
  } catch (error) {
    console.error("Error saving education:", error);
    res.status(500).json({ message: "Failed to save education" });
  }
};

// Add Certificate
exports.CertificationAdd = async (req, res) => {
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
    res.status(200).json({ message: "Certificate added successfully" });
  } catch (error) {
    console.error("Error saving certificate:", error);
    res.status(500).json({ message: "Failed to save certificate" });
  }
};

// Add Experience
exports.ExperienceAdd = async (req, res) => {
  try {
    const { Role, Company, Duration, Description } = req.body;
    const newExperience = new Experience({
      Role,
      Company,
      Duration,
      Description,
    });
    await newExperience.save();
    res.status(200).json({ message: "Experience added successfully" });
  } catch (error) {
    console.error("Error saving experience:", error);
    res.status(500).json({ message: "Failed to save experience" });
  }
};

// Add Skill
exports.SkillAdd = async (req, res) => {
  try {
    const { SkillName, ProficiencyLevel } = req.body;
    const newSkill = new Skill({ SkillName, ProficiencyLevel });
    await newSkill.save();

    res
      .status(201)
      .json({ message: "Skill saved successfully", skill: newSkill });
  } catch (error) {
    console.error("Error saving skill:", error);
    res.status(500).json({ message: "Failed to save skill" });
  }
};

// Get Skills
exports.getSkill = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
    console.log("Fetched Skills:", skills);
  } catch (error) {
    console.error("Error fetching skills:", error);
    res.status(500).json({ message: "Failed to fetch skills" });
  }
};

// Get Projects
exports.getProject = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
    console.log("Fetched Projects:", projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Failed to fetch projects" });
  }
};

// Get Certificates
exports.getCertificate = async (req, res) => {
  try {
    console.log("Hello Dosto");
    const certificates = await Certificates.find();
    res.status(200).json(certificates);
    console.log("Fetched Certificates:", certificates);
  } catch (error) {
    console.error("Error fetching certificates:", error);
    res.status(500).json({ message: "Failed to fetch certificates" });
  }
};

// Get Education
exports.getEducation = async (req, res) => {
  try {
    const educationData = await Education.find();
    res.status(200).json(educationData);
    console.log("Fetched Education:", educationData);
  } catch (error) {
    console.error("Error fetching education:", error);
    res.status(500).json({ message: "Failed to fetch education" });
  }
};
