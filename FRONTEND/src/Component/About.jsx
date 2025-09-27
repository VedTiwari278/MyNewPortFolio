import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const About = () => {
  return (
    <div className="min-h-screen px-6 pt-20 pb-12 flex flex-col items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-sans">
      {/* Header Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center mb-12 max-w-4xl"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-3xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400"
          >
            About me !
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4 rounded-full"
          />
        </motion.div>
        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
        >
          A passionate developer crafting digital experiences with modern
          technologies and creative solutions.
        </motion.p>
      </motion.div>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="w-full max-w-4xl text-center"
      >
        <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-400/40 transition-all duration-300">
          {/* Profile Image */}
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white mx-auto mb-6 overflow-hidden border-4 border-purple-400">
            <img
              src="\myPic.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Content */}
          <h3 className="text-2xl font-bold text-white mb-3 leading-tight hover:text-purple-300 transition-colors">
            MERN Stack Developer
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6 text-base">
            I am a dedicated developer with a passion for building innovative
            solutions using modern technologies. My journey in tech has been
            driven by a love for problem-solving and creating user-friendly
            digital experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/project"
              className="px-8 py-4 rounded-xl  no-underline bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-white font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl no-underline bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 transition-all duration-300 text-white font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/VedTiwari278"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ved-prakash-tiwari-b21522280/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:vedpraksht759@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-12"
      />

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 w-full max-w-4xl"
      >
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 text-center hover:border-purple-400/30 transition-all duration-300">
          <h2 className="text-4xl font-bold text-purple-400 mb-2">1+</h2>
          <p className="text-gray-300 font-medium">Years of Experience</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 text-center hover:border-purple-400/30 transition-all duration-300">
          <h2 className="text-4xl font-bold text-purple-400 mb-2">5+</h2>
          <p className="text-gray-300 font-medium">Projects Completed</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 text-center hover:border-purple-400/30 transition-all duration-300">
          <h2 className="text-4xl font-bold text-purple-400 mb-2">100%</h2>
          <p className="text-gray-300 font-medium">Scalable and clean code</p>
        </div>
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-400 text-sm">
          Always exploring new technologies and enhancing my skills to deliver
          the best solutions.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
