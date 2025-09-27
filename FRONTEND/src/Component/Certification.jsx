import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useCertification } from "../Component/Context/CertificationProvider";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
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
    y: -5,
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const Certification = () => {
  const { certifications, isLoading, fetchCertifications } = useCertification();

  useEffect(() => {
    fetchCertifications();
    // eslint-disable-next-line
  }, []);

  const totalCertifications = certifications.length;
  const cloudPlatforms = new Set(
    certifications
      .map((cert) => cert.Issuer)
      .filter(
        (issuer) =>
          issuer?.toLowerCase().includes("aws") ||
          issuer?.toLowerCase().includes("google") ||
          issuer?.toLowerCase().includes("microsoft") ||
          issuer?.toLowerCase().includes("cloud")
      )
  ).size;

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
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-3xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400"
        >
          My Certifications
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4 rounded-full"
        />
        <motion.p
          className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Professional certifications and achievements validating my expertise
          and continuous learning in technology.
        </motion.p>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 w-full max-w-4xl"
      >
        <motion.div
          variants={cardVariants}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 text-center hover:border-purple-400/30 transition-all duration-300"
        >
          <h2 className="text-4xl font-bold text-purple-400 mb-2">
            {totalCertifications}+
          </h2>
          <p className="text-gray-300 font-medium">Active Certifications</p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 text-center hover:border-purple-400/30 transition-all duration-300"
        >
          <h2 className="text-4xl font-bold text-purple-400 mb-2">
            {cloudPlatforms}
          </h2>
          <p className="text-gray-300 font-medium">Cloud Platforms</p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 text-center hover:border-purple-400/30 transition-all duration-300"
        >
          <h2 className="text-4xl font-bold text-purple-400 mb-2">100%</h2>
          <p className="text-gray-300 font-medium">Success Rate</p>
        </motion.div>
      </motion.div>

      {/* Certifications Grid */}
      {certifications.length > 0 && !isLoading && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl"
        >
          {certifications.map((cert, index) => {
            const formattedDate = new Date(cert.Date).toLocaleDateString(
              "en-US",
              { year: "numeric", month: "long" }
            );
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover="hover"
                className="group"
              >
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-400/40 transition-all duration-300 h-full">
                  <div className="flex justify-between items-center mb-6">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>{" "}
                      Active
                    </span>
                    <span className="flex items-center text-gray-400 text-sm gap-2 bg-slate-700/50 px-3 py-1 rounded-full">
                      📅 {formattedDate}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-purple-300 transition-colors">
                    {cert.Title}
                  </h3>
                  <p className="text-purple-400 font-medium text-lg mb-6">
                    {cert.Issuer}
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6 text-base">
                    {cert.Description}
                  </p>
                  <div>
                    <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                      Key Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.Description?.split(" ")
                        .slice(0, 4)
                        .map((word, i) => (
                          <span
                            key={i}
                            className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-600/50"
                          >
                            {word.replace(/[.,]/g, "")}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* Empty State */}
      {!isLoading && certifications.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center py-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50 max-w-md mx-auto">
            <div className="text-6xl mb-4">📜</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No Certifications Available
            </h3>
            <p className="text-gray-300">
              Currently working on new certifications. Check back soon!
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Certification;
