require("dotenv").config();
const Project = require("../Modal/Projects");
const Skill = require("../Modal/Skills");
const Certificates = require("../Modal/Certificates");
const Education = require("../Modal/Education");
const Experience = require("../Modal/Experience");
const ContactModal = require("../Modal/Contact");
const nodemailer = require("nodemailer");

// Contact Form Handlerconst ContactModal = require("../Modal/Contact");
// const ContactModal = require("../Modal/Contact");
// const nodemailer = require("nodemailer");
// ; // Add dotenv for environment variables

// const ContactModal = require("../Modal/Contact");
// const nodemailer = require("nodemailer");
require("dotenv").config();

exports.Contact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save contact to DB
    const newContact = new ContactModal({ name, email, subject, message });
    await newContact.save();

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false, // Use STARTTLS
      port: 587, // Standard SMTP port
      auth: {
        user: process.env.EMAIL_USER || "projecttesting278@gmail.com",
        pass: process.env.EMAIL_PASS || "oxrb pekc cbrv osvi",
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_USER || "projecttesting278@gmail.com",
      to: email,
      subject: `Thank you for contacting us, ${name}!`,
      text: `Hi ${name},\n\nWe have received your message regarding "${subject}".\n\n"${message}"\n\nOur team will get back to you shortly!\n\nBest regards,\nTeam`,
      html: `
  <div style="
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f6f8;
    padding: 30px;
  ">
    <div style="
      max-width: 600px;
      margin: auto;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      overflow: hidden;
    ">
      <div style="background-color: #2563eb; padding: 20px; text-align: center;">
        <h2 style="color: white; margin: 0;">Thank You for Contacting Us!</h2>
      </div>

      <div style="padding: 25px;">
        <p style="font-size: 16px; color: #333;">Hi <strong>${name}</strong>,</p>
        <p style="font-size: 15px; color: #555; line-height: 1.6;">
          We’ve received your message and appreciate you taking the time to reach out.
          Here’s a summary of your submission:
        </p>

        <div style="margin-top: 15px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 15px;">
          <p style="margin: 0; color: #111; font-weight: 600;">Subject:</p>
          <p style="margin-top: 5px; color: #2563eb;">${subject}</p>

          <p style="margin-top: 15px; color: #111; font-weight: 600;">Your Message:</p>
          <p style="margin-top: 5px; color: #444; background: #fef9c3; padding: 10px; border-radius: 6px;">
            ${message}
          </p>
        </div>

        <p style="font-size: 15px; color: #555; line-height: 1.6; margin-top: 20px;">
          Our team will review your query and get back to you soon.  
          Meanwhile, feel free to explore our website or reply directly to this email for urgent concerns.
        </p>

        <p style="font-size: 15px; color: #333; margin-top: 25px;">
          Warm regards,<br/>
          <strong>Team QuizApp</strong>
        </p>
      </div>

      <div style="background-color: #f1f5f9; text-align: center; padding: 15px; font-size: 13px; color: #666;">
        <p style="margin: 0;">© ${new Date().getFullYear()} QuizApp. All rights reserved.</p>
      </div>
    </div>
  </div>
  `,
    };

    // Send email
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          // console.error("Error sending email:", error);
          return reject(error);
        }
        // console.log("Email sent: " + info.response);
        resolve(info);
      });
    });

    res.status(200).json({
      message: "Thanks for contacting us! Email sent successfully.",
    });
  } catch (error) {
    // console.error("Error in contact handler:", error);
    res.status(500).json({
      message: "Failed to process contact form",
      error: error.message,
    });
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
    const { Title, Issuer, Date, Description } = req.body;
    const newCertificate = new Certificates({
      Title,
      Issuer,
      Date,
      Description,
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

exports.getContacted = async (req, res) => {
  const ContactData = await ContactModal.find();
  console.log("The Data from Contact", ContactData);
  res
    .status(200)
    .json({ message: "List of Contact Fetched Successfully!", ContactData });
};
