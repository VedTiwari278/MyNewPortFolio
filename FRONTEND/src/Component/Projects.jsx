import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://my-new-port-folio-jbab.vercel.app/project")
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
      <h1 className="display-4 fw-bold text-center mb-5 text-white">
        Projects I've Done So Far
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
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="card-body d-flex flex-column p-4">
                    <h5 className="card-title mb-3 text-center text-info fw-bold">
                      {project.Title}
                    </h5>

                    <p className="fw-semibold text-light mb-1">Description:</p>
                    <p className="text-light small mb-3">{project.Description}</p>

                    <p className="text-warning small mb-4">
                      <strong>Tech Stack:</strong> {project.TechStack}
                    </p>

                    <div className="mt-auto d-flex flex-wrap justify-content-center gap-2">
                      {project.ProjectLink && (
                        <a
                          href={project.ProjectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-success btn-sm"
                        >
                          Project Link
                        </a>
                      )}
                      {project.LivePreview && (
                        <a
                          href={project.LivePreview}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-info btn-sm"
                        >
                          Live Preview
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center mt-5 text-light">
          No projects available at the moment.
        </p>
      )}

      {/* Loader CSS */}
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

        .dots-loader div:nth-child(1) { animation-delay: -0.48s; }
        .dots-loader div:nth-child(2) { animation-delay: -0.36s; }
        .dots-loader div:nth-child(3) { animation-delay: -0.24s; }
        .dots-loader div:nth-child(4) { animation-delay: -0.12s; }
        .dots-loader div:nth-child(5) { animation-delay: 0s; }

        @keyframes blink {
          0%, 80%, 100% { transform: scale(0); opacity: 0.3; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Projects;
