import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

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
      <hr />
      <h2 className="text-warning">Follow me on...</h2>
      <Link
        to="https://www.instagram.com/vedprakash_431/"
        className="text-decoration-none text-light"
      >
        <FaInstagram size={32} />
      </Link>

      <Link
        to="https://github.com/VedTiwari278"
        className="text-decoration-none text-light  w-100 m-3"
      >
        <FaGithubSquare size={32} />
      </Link>

      <Link to="https://www.linkedin.com/in/ved-prakash-tiwari-b21522280/">
        <FaLinkedin size={32} className="text-decoration-none text-light  " />
      </Link>

      <Link to="https://www.youtube.com/@Algo_Tap">
        <FaYoutube
          size={40}
          className="text-decoration-none text-light   m-3"
        />
      </Link>
      <br />
      <br />
      {/* Copyright */}
      <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>
        &copy; {new Date().getFullYear()} Ved Tiwari. All Rights Reserved.
      </div>
      <hr />
      <Link
        to="/admin/dashboard"
        style={{ color: "#1e293b" }}
        className="text-decoration-none"
      >
        DashBoard
      </Link>
    </footer>
  );
};

export default Footer;
