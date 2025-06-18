import React, { useEffect, useState } from "react";
import NavBar from "../assets/NavBar";

const Education = () => {
  const [educationData, setEducationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        const response = await fetch(
          "https://my-new-port-folio-rie1jel8o-vedtiwari278s-projects.vercel.app/education"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch education data");
        }
        const data = await response.json();
        // console.log("Fetched education data:", data);
        setEducationData(data);
      } catch (error) {
        console.error("Error fetching education data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEducationData();
  }, []);

  return (
    <>
      <div
        className="min-vh-100 px-4 py-5 d-flex flex-column align-items-center justify-content-center"
        style={{
          backgroundColor: "#1e293b",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Heading */}
        <h1
          className="display-4 fw-bold text-center mb-5"
          style={{
            color: "white",
            textShadow: "0 0 10px rgba(59, 130, 246, 0.7)",
          }}
        >
          🎓 My Education
        </h1>

        {/* Education Grid OR Loader */}
        {isLoading ? (
          <div className="dots-loader my-3">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {educationData.length > 0 ? (
                educationData.map((edu, index) => (
                  <div key={edu._id || index} className="col">
                    <div
                      className="card h-100 mx-2"
                      style={{
                        maxWidth: "250px",
                        backgroundColor: "rgba(17, 24, 39, 0.8)",
                        backdropFilter: "blur(8px)",
                        borderRadius: "14px",
                        border: "none",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                        transition: "all 0.3s ease-in-out",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow =
                          "0 0 20px rgba(59, 130, 246, 0.8)";
                        e.currentTarget.style.border = "1px solid #2dd4bf";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 10px rgba(0, 0, 0, 0.5)";
                        e.currentTarget.style.border = "none";
                      }}
                    >
                      <div className="card-body p-4 text-center">
                        <h5
                          className="card-title mb-3"
                          style={{
                            color: "#7dd3fc",
                            fontSize: "1.25rem",
                            fontWeight: "600",
                            textShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
                          }}
                        >
                          {edu.Degree}
                        </h5>
                        <p
                          className="card-text mb-2"
                          style={{
                            color: "#e5e7eb",
                            fontSize: "1rem",
                            textShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                          }}
                        >
                          Institute: {edu.Institute}
                        </p>
                        <p
                          className="card-text mb-2"
                          style={{
                            color: "#e5e7eb",
                            fontSize: "1rem",
                            textShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                          }}
                        >
                          Session: {edu.Session}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p
                  className="col-12 text-center"
                  style={{ color: "#e5e7eb", fontSize: "1.125rem" }}
                >
                  No education data found.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Blinking Dots Loader CSS */}
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
    </>
  );
};

export default Education;
