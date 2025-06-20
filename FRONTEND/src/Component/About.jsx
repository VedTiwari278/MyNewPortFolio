import React from "react";
import { TypeAnimation } from "react-type-animation";
import NavBar from "../assets/NavBar";
import { FaYoutube } from "react-icons/fa";

import { Link } from "react-router-dom";
import Footer from "./Footer";
import "../App.css"; // Make sure this imports your CSS with hover styles

const About = () => {
  return (
    <>
      <div
        className="min-vh-100 px-4 py-5"
        style={{
          backgroundColor: "#0f172a",
          color: "#f8fafc",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Typing Animation Section */}
        <div className="text-center mb-5">
          <TypeAnimation
            sequence={[
              "I am Ved Tiwari",
              2000,
              "A Software Developer",
              2000,
              "A Problem Solver",
              2000,
              "An Open Source Enthusiast",
              2000,
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            className="display-5 fw-bold text-white"
          />
          <p
            className="lead mt-3 mx-auto text-light"
            style={{ maxWidth: "800px" }}
          >
            A software developer passionate about building efficient, elegant,
            and user-friendly applications. I enjoy solving real-world problems
            through code and working with others to build impactful solutions.
          </p>
        </div>
        <div className="position-relative my-5 d-flex justify-content-center ">
          <div className="glowing-circle d-flex flex-column align-items-center text-decoration-none">
            <Link
              to="https://www.youtube.com/@Algo_Tap"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex flex-column align-items-center text-decoration-none"
            >
              <FaYoutube size={50} className="text-danger mt-2" />
            </Link>
          </div>
        </div>

        {/* About Section */}
        <h2 className="text-center mb-4 fw-bold text-white">More About Me</h2>
        <p className="lead text-center mb-4 text-light">
          I am a passionate developer building solutions that make an impact.
        </p>

        <div className="text-center mb-5">
          <Link to="/project" className="btn btn-primary">
            Explore My Projects
          </Link>
        </div>

        {/* Mission & Values Cards */}
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div
                className="card h-100 bg-dark text-white"
                style={{ backgroundColor: "#1e293b" }}
              >
                <div className="card-body">
                  <h5 className="card-title">My Mission</h5>
                  <p className="card-text">
                    To deliver high-quality, scalable, and user-friendly digital
                    experiences that help businesses and users succeed.
                  </p>
                  <Link to="/skills" className="btn btn-outline-light">
                    💡Explore My Skills
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="card h-100 bg-dark text-white"
                style={{ backgroundColor: "#1e293b" }}
              >
                <div className="card-body">
                  <h5 className="card-title">My Values</h5>
                  <ul className="list-unstyled">
                    <li>✅ Innovation</li>
                    <li>✅ Integrity</li>
                    <li>✅ Teamwork</li>
                    <li>✅ Continuous Learning</li>
                  </ul>
                  <Link to="/contact" className="btn btn-outline-light">
                    📞 Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications and Education */}
          <div className="row mt-5 g-3 justify-content-center">
            <div className="col-12 col-sm-6">
              <Link
                to="/certification"
                className="btn btn-outline-warning w-100"
              >
                🎓 See My Certifications
              </Link>
            </div>
            <div className="col-12 col-sm-6">
              <Link to="/education" className="btn btn-outline-info w-100">
                📊 My Education
              </Link>
            </div>
          </div>

          {/* Services Section */}
          <div className="text-center mt-5">
            <h3 className="fw-bold mb-4 text-white">Services</h3>
            <div className="row g-4 justify-content-center">
              {[
                "Backend Development",
                "Frontend Development",
                "Freelancing",
              ].map((service, index) => (
                <div key={index} className="col-md-4">
                  <div
                    className="card h-100 p-3 text-white text-center card-hover"
                    style={{ backgroundColor: "#1e293b" }}
                  >
                    {service}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
