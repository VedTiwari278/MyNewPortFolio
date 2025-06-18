import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(
          "https://my-new-port-folio-rie1jel8o-vedtiwari278s-projects.vercel.app/skills"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch skills");
        }
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="min-vh-100 py-5" style={{ backgroundColor: "#1e293b" }}>
      <Container>
        {/* Heading */}
        <h1 className="text-center text-white mb-5 fw-bold">🚀 My Skills</h1>

        {isLoading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "200px" }}
          >
            <div className="dots-loader">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <Row className="g-4 justify-content-center">
            {skills.length > 0 ? (
              skills.map((skill, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                  <Card
                    bg="dark"
                    text="white"
                    border="info"
                    className="h-100 shadow-sm skill-card"
                  >
                    <Card.Body className="text-center">
                      <Card.Title className="text-info fw-bold mb-3">
                        {skill.SkillName}
                      </Card.Title>
                      <Card.Text>
                        Proficiency: {skill.ProficiencyLevel}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p className="text-white text-center">
                No skills available at the moment.
              </p>
            )}
          </Row>
        )}
      </Container>

      {/* CSS for Card Hover & Loader */}
      <style>{`
        .skill-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .skill-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.5);
        }

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

export default Skills;
