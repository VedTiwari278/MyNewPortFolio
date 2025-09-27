import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useProjects } from "./Context/ProjectsProvider";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const Projects = () => {
  const { projects, loading, fetchProjects } = useProjects();

  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen px-4 sm:px-6 pt-20 pb-12 flex flex-col items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-sans"
    >
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
            My Creative Projects
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
          A curated collection of my work that showcases innovation, technical
          expertise, and passion for creating digital solutions that make a
          difference.
        </motion.p>
      </motion.div>

      {/* Loader */}
      {loading && projects.length === 0 && (
        <div className="flex justify-center items-center my-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-12 h-12 border-4 border-t-blue-500 border-gray-700 rounded-full"
          />
        </div>
      )}

      {/* Projects Grid */}
      {projects.length > 0 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id || index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover="hover"
              className="group cursor-pointer"
            >
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <motion.h3
                    whileHover={{ color: "#c4b5fd" }}
                    className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 text-center"
                  >
                    {project.Title}
                  </motion.h3>
                  <motion.div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {project.TechStack?.split(",").map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 text-purple-300 text-xs rounded-full border border-purple-500/20"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </motion.div>
                </div>
                <motion.p className="text-gray-300 mb-4 leading-relaxed flex-grow relative z-10">
                  {project.Description}
                </motion.p>
                <motion.div className="flex gap-3 mt-auto relative z-10">
                  {project.ProjectLink && (
                    <motion.a
                      href={project.ProjectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 text-center px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-sm shadow-lg transition-all duration-300 no-underline"
                    >
                      Code
                    </motion.a>
                  )}
                  {project.LivePreview && (
                    <motion.a
                      href={project.LivePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 text-center px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold text-sm shadow-lg transition-all duration-300 no-underline"
                    >
                      Live Demo
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Empty State */}
      {!loading && projects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center py-20"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl mb-6"
          />
          <h3 className="text-2xl font-bold text-white mb-3">
            Projects in Progress
          </h3>
          <p className="text-gray-300 max-w-md mx-auto">
            Amazing things are being built! Check back soon to see my latest
            creations.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;
