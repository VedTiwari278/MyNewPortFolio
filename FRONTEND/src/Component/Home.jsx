import React from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      {/* Inline CSS for Hero Section */}
      <style>{`
        .hero-section {
          height: 100vh;
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                      url('/images/hero-bg.jpg') no-repeat center center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center justify-content-center text-center">
        <div>
          <h1 className="display-4 fw-bold text-light">Hi, I'm Ved Tiwari</h1>
          <p className="lead text-light">
            Web Developer | Designer | Programmer
          </p>
          <Link to="about" smooth={true} duration={500}>
            <Button variant="outline-light" size="lg" className="mt-3">
              Explore My Work
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-light">
        <Container>
          <About />
          <div className="text-center mt-4">
            <Link to="projects" smooth={true} duration={500}>
              <Button variant="primary">See My Projects</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-white">
        <Container>
          <Projects />
          <div className="text-center mt-4">
            <Link to="resume" smooth={true} duration={500}>
              <Button variant="secondary">View My Resume</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-5 bg-light">
        <Container>
          <Resume />
          <div className="text-center mt-4">
            <Link to="skills" smooth={true} duration={500}>
              <Button variant="info">Check My Skills</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-white">
        <Container>
          <Skills />
          <div className="text-center mt-4">
            <Link to="contact" smooth={true} duration={500}>
              <Button variant="success">Get In Touch</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <Container>
          <Contact />
        </Container>
      </section>
    </>
  );
};

export default Home;
