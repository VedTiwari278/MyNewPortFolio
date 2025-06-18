import React from "react";
import { TypeAnimation } from "react-type-animation";
import NavBar from "../assets/NavBar";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div
        className="min-vh-100 px-4 py-5 d-flex flex-column align-items-center"
        style={{
          backgroundColor: "#1e293b",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Typing Animation Section */}
        <div className="text-center mb-5">
          <TypeAnimation
            sequence={[
              "I am Ved Tiwari",
              2000, // wait 2 seconds
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
            className="display-4 fw-bold"
            style={{
              color: "white",
              textShadow: "0 0 12px rgba(59, 130, 246, 0.8)",
            }}
          />
          <p
            className="lead mt-3"
            style={{
              color: "#e5e7eb",
              fontSize: "1.2rem",
              maxWidth: "800px",
              margin: "0 auto",
              textShadow: "0 0 6px rgba(255, 255, 255, 0.2)",
            }}
          >
            A software developer with a passion for crafting efficient, elegant,
            and user-friendly applications. I enjoy solving real-world problems
            through code, continuously learning new technologies, and
            collaborating with others to build impactful solutions.
          </p>
        </div>

        {/* Rest of your content */}
        <h1
          className="display-4 fw-bold text-center mb-4"
          style={{
            color: "white",
            textShadow: "0 0 10px rgba(59, 130, 246, 0.7)",
          }}
        >
          👨‍💻More About Me
        </h1>

        <p
          className="lead text-center mb-4"
          style={{
            color: "#e5e7eb",
            fontSize: "1.25rem",
            textShadow: "0 0 6px rgba(255, 255, 255, 0.2)",
          }}
        >
          I am a passionate developer building solutions that make an impact.
        </p>

        <Link
          to="/project"
          className="btn btn-primary mb-5"
          style={{
            background: "linear-gradient(to right, #3b82f6, #2dd4bf)",
            border: "none",
            fontWeight: "600",
            padding: "10px 24px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
          }}
        >
          🚀 Explore My Projects
        </Link>

        {/* The rest of your component remains unchanged */}
        {/* Cards, Certifications, Services */}

        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div
                className="card h-100"
                style={{
                  backgroundColor: "rgba(17, 24, 39, 0.8)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "14px",
                  border: "none",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <div className="card-body p-4">
                  <h5
                    className="card-title mb-3"
                    style={{
                      color: "#7dd3fc",
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      textShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
                    }}
                  >
                    🎯 My Mission
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      color: "#e5e7eb",
                      fontSize: "1rem",
                      textShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    To deliver high-quality, scalable, and user-friendly digital
                    experiences that help businesses thrive and users succeed.
                  </p>
                  <Link
                    to="/skills"
                    className="btn btn-outline-primary mt-3"
                    style={{
                      borderColor: "#2dd4bf",
                      color: "#2dd4bf",
                      fontWeight: "600",
                    }}
                  >
                    💡 Explore My Skills
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="card h-100"
                style={{
                  backgroundColor: "rgba(17, 24, 39, 0.8)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "14px",
                  border: "none",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <div className="card-body p-4">
                  <h5
                    className="card-title mb-3"
                    style={{
                      color: "#7dd3fc",
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      textShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
                    }}
                  >
                    🌟 My Values
                  </h5>
                  <ul
                    className="list-unstyled mb-3"
                    style={{
                      color: "#e5e7eb",
                      fontSize: "1rem",
                      textShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <li>✅ Innovation</li>
                    <li>✅ Integrity</li>
                    <li>✅ Teamwork</li>
                    <li>✅ Continuous Learning</li>
                  </ul>
                  <Link
                    to="/contact"
                    className="btn btn-outline-primary"
                    style={{
                      borderColor: "#2dd4bf",
                      color: "#2dd4bf",
                      fontWeight: "600",
                    }}
                  >
                    📞 Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link
              to="/certification"
              className="btn btn-secondary mx-2"
              style={{
                background: "linear-gradient(to right, #3b82f6, #2dd4bf)",
                border: "none",
                padding: "10px 20px",
                fontWeight: "600",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              }}
            >
              🎓 See My Certifications
            </Link>
            <Link
              to="/education"
              className="btn btn-secondary mx-2"
              style={{
                background: "linear-gradient(to right, #3b82f6, #2dd4bf)",
                border: "none",
                padding: "10px 20px",
                fontWeight: "600",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              }}
            >
              📊 My Education
            </Link>
          </div>

          {/* Services Section */}
          <div className="text-center mt-5">
            <h2
              className="fw-bold mb-4"
              style={{
                color: "white",
                textShadow: "0 0 10px rgba(59, 130, 246, 0.7)",
              }}
            >
              Services
            </h2>
            <div className="row g-4 justify-content-center">
              {[
                "Backend Development",
                "Frontend Development",
                "Freelancing",
              ].map((service, index) => (
                <div key={index} className="col-md-4">
                  <div
                    className="card h-100"
                    style={{
                      backgroundColor: "rgba(17, 24, 39, 0.8)",
                      backdropFilter: "blur(8px)",
                      borderRadius: "14px",
                      border: "none",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                      padding: "20px",
                      color: "#e5e7eb",
                      fontSize: "1.1rem",
                      fontWeight: "500",
                      textShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                      cursor: "pointer",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(59, 130, 246, 0.7)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 10px rgba(0, 0, 0, 0.5)";
                    }}
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
