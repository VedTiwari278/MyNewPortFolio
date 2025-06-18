import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/project")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="min-vh-100 px-4 py-5"
      style={{ backgroundColor: "#1e293b", fontFamily: "'Inter', sans-serif" }}
    >
      {/* Heading */}
      <h1
        className="display-4 fw-bold text-center mb-5"
        style={{
          color: "white",
          textShadow: "0 0 10px rgba(59, 130, 246, 0.7)", // blue glow
        }}
      >
        🚀 Projects I've Done So Far
      </h1>

      {loading ? (
        <div className="dots-loader my-5">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : projects.length > 0 ? (
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {projects.map((project, index) => (
              <div key={index} className="col">
                <div
                  className="card h-100 mx-2"
                  style={{
                    maxWidth: "300px",
                    backgroundColor: "rgba(17, 24, 39, 0.9)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.6)",
                    transition: "all 0.4s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.07)";
                    e.currentTarget.style.boxShadow =
                      "0 0 25px rgba(59, 130, 246, 0.9)";
                    e.currentTarget.style.border = "1px solid #2dd4bf";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 16px rgba(0, 0, 0, 0.6)";
                    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
                  }}
                >
                  <div className="card-body d-flex flex-column p-4">
                    <h5
                      className="card-title mb-3 text-center"
                      style={{
                        color: "#7dd3fc",
                        fontSize: "1.3rem",
                        fontWeight: "700",
                        textShadow: "0 0 8px rgba(59, 130, 246, 0.6)",
                      }}
                    >
                      {project.Title}
                    </h5>

                    <p
                      style={{
                        color: "#a5f3fc",
                        fontWeight: "600",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Description:
                    </p>
                    <p
                      className="card-text mb-3"
                      style={{
                        color: "#e5e7eb",
                        fontSize: "1rem",
                        textShadow: "0 0 4px rgba(0, 0, 0, 0.4)",
                      }}
                    >
                      {project.Description}
                    </p>

                    <p
                      className="card-text mb-4"
                      style={{
                        color: "#fcd34d",
                        fontSize: "0.95rem",
                        fontWeight: "500",
                      }}
                    >
                      <strong>Tech Stack:</strong> {project.TechStack}
                    </p>

                    <div className="mt-auto d-flex flex-wrap justify-content-center gap-2">
                      {project.ProjectLink && (
                        <Button
                          variant="primary"
                          href={project.ProjectLink}
                          target="_blank"
                          className="btn-sm"
                          style={{
                            background: "linear-gradient(to right, #3b82f6, #2dd4bf)",
                            border: "none",
                            fontWeight: "600",
                          }}
                        >
                          Project Link
                        </Button>
                      )}
                      {project.LivePreview && (
                        <Button
                          variant="success"
                          href={project.LivePreview}
                          target="_blank"
                          className="btn-sm"
                          style={{
                            background: "linear-gradient(to right, #34d399, #3b82f6)",
                            border: "none",
                            fontWeight: "600",
                          }}
                        >
                          Live Preview
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p
          className="text-center mt-5"
          style={{ color: "#e5e7eb", fontSize: "1.125rem" }}
        >
          No projects available at the moment.
        </p>
      )}

      {/* Dots Loader CSS */}
      <style>{`
        .dots-loader {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
        }

        .dots-loader div {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: #2dd4bf;
          animation: blink 1.4s infinite ease-in-out both;
        }

        .dots-loader div:nth-child(1) {
          animation-delay: -0.48s;
        }

        .dots-loader div:nth-child(2) {
          animation-delay: -0.36s;
        }

        .dots-loader div:nth-child(3) {
          animation-delay: -0.24s;
        }

        .dots-loader div:nth-child(4) {
          animation-delay: -0.12s;
        }

        .dots-loader div:nth-child(5) {
          animation-delay: 0s;
        }

        @keyframes blink {
          0%, 80%, 100% {
            transform: scale(0);
            opacity: 0.3;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
