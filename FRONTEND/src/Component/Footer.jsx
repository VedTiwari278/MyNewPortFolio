import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="mt-auto py-4 px-3 text-center"
      style={{
        backgroundColor: "#1e293b",
        color: "#e5e7eb",
        fontFamily: "'Inter', sans-serif",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {/* Nav Links */}
      <div className="mb-3 d-flex flex-wrap justify-content-center gap-3">
        <Link to="/" className="text-decoration-none text-light">
          Home
        </Link>
        <Link to="/about" className="text-decoration-none text-light">
          About
        </Link>
        <Link to="/project" className="text-decoration-none text-light">
          Projects
        </Link>
        <Link to="/skills" className="text-decoration-none text-light">
          Skills
        </Link>
        <Link to="/certification" className="text-decoration-none text-light">
          Certifications
        </Link>
        <Link to="/contact" className="text-decoration-none text-light">
          Contact
        </Link>
        <Link to="/education" className="text-decoration-none text-light">
          Education
        </Link>
      </div>

      {/* Copyright */}
      <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>
        &copy; {new Date().getFullYear()} Ved Tiwari. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
