import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "../assets/NavBar";
import { useEducation } from "./Context/EducationProvider";

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
const Education = () => {
  const { educationData, isLoading, fetchEducationData } = useEducation();

  useEffect(() => {
    fetchEducationData();
  }, [fetchEducationData]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen px-6 pt-20 pb-12 flex flex-col items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-sans"
    >
      {/* Heading */}
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
            Education
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
          A glimpse into my academic journey and educational achievements.
        </motion.p>
      </motion.div>

      {/* Education Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="w-full max-w-6xl"
      >
        {educationData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu._id || index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-400/40 transition-all duration-300 h-full text-center">
                  <h5 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {edu.Degree}
                  </h5>
                  <p className="text-gray-300 mb-2">
                    Institute: {edu.Institute}
                  </p>
                  <p className="text-gray-300 mb-2">Session: {edu.Session}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50 max-w-md mx-auto">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No Education Data Available
              </h3>
              <p className="text-gray-300">
                Currently updating my education details. Check back soon!
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-12"
      />

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-400 text-sm">
          Continuously enhancing my knowledge through education and experience.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Education;
