import React, { useEffect, useState } from "react";
import axios from "axios";

const Certification = () => {
  const [certifications, setCertifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCertifications = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000https://my-new-port-folio-jbab.vercel.app/certification"
      );
      console.log("Fetched certifications:", response.data);
      setCertifications(response.data);
    } catch (error) {
      console.error("Error fetching certifications:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCertifications();
  }, []);

  return (
    <div
      className="min-vh-100 px-4 pt-4 pb-2 d-flex flex-column align-items-center justify-content-start"
      style={{ backgroundColor: "#1e293b", fontFamily: "'Inter', sans-serif" }}
    >
      {/* Heading */}
      <h1
        className="display-4 fw-bold text-center mb-4"
        style={{
          color: "white",
          textShadow: "0 0 10px rgba(59, 130, 246, 0.7)",
        }}
      >
        🎓 My Certifications
      </h1>

      {/* Certifications Grid OR Loader */}
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
            {certifications.length > 0 ? (
              certifications.map((cert, index) => {
                const formattedDate = new Date(cert.Date).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                );

                return (
                  <div key={index} className="col">
                    <div
                      className="card h-100 mx-2"
                      style={{
                        maxWidth: "360px", // increased from 300px
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
                      <div className="card-body p-4">
                        <h5
                          className="card-title mb-3"
                          style={{
                            color: "#ffffff", // full white
                            fontSize: "1.25rem",
                            fontWeight: "600",
                            textShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
                          }}
                        >
                          {cert.Title}
                        </h5>
                        <h6
                          className="card-subtitle mb-2"
                          style={{
                            color: "#ffffff", // full white
                            fontSize: "1rem",
                            textShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                          }}
                        >
                          {cert.Issuer} &mdash; {formattedDate}
                        </h6>
                        <p
                          className="card-text"
                          style={{
                            color: "#ffffff", // full white
                            fontSize: "1rem",
                            textShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                          }}
                        >
                          {cert.Description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p
                className="col-12 text-center"
                style={{ color: "#e5e7eb", fontSize: "1.125rem" }}
              >
                No certifications available at the moment.
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
  );
};

export default Certification;
