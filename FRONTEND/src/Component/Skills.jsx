import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useSkills } from "./Context/SkillsProvider";

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

const Skills = () => {
  const { skills, isLoading, fetchSkills } = useSkills();

  useEffect(() => {
    fetchSkills();
  }, [fetchSkills]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen px-6 pt-20 flex flex-col items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-sans"
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
            My Skills
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
          A showcase of my technical expertise and proficiency in various
          domains.
        </motion.p>
      </motion.div>

      {/* Loader */}
      {isLoading && skills.length === 0 && (
        <div className="flex justify-center items-center my-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-12 h-12 border-4 border-t-blue-500 border-gray-700 rounded-full"
          />
        </div>
      )}

      {/* Skills Grid */}
      {skills.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="w-full max-w-6xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-400/40 transition-all duration-300 h-full text-center">
                  <h5 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {skill.SkillName}
                  </h5>
                  <p className="text-gray-300 mb-3">
                    Proficiency: {skill.ProficiencyLevel}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Empty State */}
      {!isLoading && skills.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center py-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50 max-w-md mx-auto">
            <div className="text-6xl mb-4">🛠️</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No Skills Available
            </h3>
            <p className="text-gray-300">
              Currently updating my skill set. Check back soon!
            </p>
          </div>
        </motion.div>
      )}

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
          Continuously learning and refining my skills to stay ahead in tech.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
