import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Skills from "./Component/Skills";
import NavBar from "./assets/NavBar";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import Certification from "./Component/Certification";
import Education from "./Component/Education";
import DashBoard from "./Component/DashBoard";
import AddSkill from "./Component/AddSkill";
import AddProjects from "./Component/AddProjects";
import AddEducation from "./Component/AddEducation";
import AddExperience from "./Component/AddExperience";
import AddCertificates from "./Component/AddCertificates";
import Footer from "./Component/Footer";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        {/* Default Route for Home Page */}
        {/* <Route path="*" element={<Home />} /> */}

        {/* Admin Side Frontend Coding */}
        <Route path="/admin/dashboard" element={<DashBoard />} />
        <Route path="/admin/add-skill" element={<AddSkill />} />
        <Route path="/admin/add-project" element={<AddProjects />} />
        <Route path="/admin/add-education" element={<AddEducation />} />
        <Route path="/admin/add-experience" element={<AddExperience />} />
        <Route path="/admin/add-certification" element={<AddCertificates />} />

        {/* Client Side Frontend Coding */}
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />

        <Route path="/certification" element={<Certification />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
