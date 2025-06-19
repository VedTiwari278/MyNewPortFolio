const express = require("express");
const controller = require("../Controller/Controller");
const Router = express.Router();

Router.post("/contact", controller.Contact);

Router.post("/admin/add-project", controller.ProjectAdd);
Router.post("/admin/add-education", controller.EducationAdd);
Router.post("/admin/add-experience", controller.ExperienceAdd);
Router.post("/admin/add-skill", controller.SkillAdd);
Router.post("/admin/add-certification", controller.CertificationAdd);

// code For Fetching Data from Backend And sending it to frontend

Router.get("/skills", controller.getSkill);
Router.get("/project", controller.getProject);
Router.get("/certification", controller.getCertificate);
Router.get("/education", controller.getEducation);

module.exports = Router;
