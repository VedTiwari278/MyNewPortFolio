import React from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
// import Resume from "./Resume";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8)), url('/images/hero-bg.jpg')",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
            Hi, I'm Ved Tiwari
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-6">
            Web Developer | Designer | Programmer
          </p>
          <Link to="about" smooth={true} duration={500}>
            <button className="px-6 py-3 font-semibold border border-white rounded-lg text-white hover:bg-purple-500/20 transition-all duration-300">
              Explore My Work
            </button>
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-slate-900 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <About />
          <Link to="projects" smooth={true} duration={500}>
            <button className="mt-6 px-6 py-3 font-semibold rounded-lg bg-gradient-to-r from-purple-400 to-blue-400 text-white hover:opacity-90 transition">
              See My Projects
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 bg-slate-800 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Projects />
          <a href="/mernCV.pdf" target="_blank" rel="noopener noreferrer">
            <button className="mt-6 px-6 py-3 font-semibold rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 text-white hover:opacity-90 transition">
              View My Resume
            </button>
          </a>
        </motion.div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-12 bg-slate-900 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Resume />
          <Link to="skills" smooth={true} duration={500}>
            <button className="mt-6 px-6 py-3 font-semibold rounded-lg bg-gradient-to-r from-purple-400 to-blue-400 text-white hover:opacity-90 transition">
              Check My Skills
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 bg-slate-800 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Skills />
          <Link to="contact" smooth={true} duration={500}>
            <button className="mt-6 px-6 py-3 font-semibold rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 text-white hover:opacity-90 transition">
              Get In Touch
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-slate-900 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Contact />
        </motion.div>
      </section>
    </>
  );
};

export default Home;
