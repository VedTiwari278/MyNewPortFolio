import React, { useRef, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const AddCertification = () => {
  const Title = useRef();
  const Issuer = useRef();
  const DateField = useRef();
  const Description = useRef();
  const CertificateLink = useRef();

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submittedData = {
      Title: Title.current.value,
      Issuer: Issuer.current.value,
      Date: DateField.current.value,
      Description: Description.current.value,
    };

    try {
      setIsSubmitting(true);
      const response = await axios.post(
        "https://my-new-port-folio-jbab.vercel.app/admin/add-certification",
        submittedData
      );
      console.log("Response:", response.data);
      setStatus(response.data.message);

      // Reset form fields
      Title.current.value = "";
      Issuer.current.value = "";
      DateField.current.value = "";
      Description.current.value = "";
    } catch (error) {
      console.error("Error adding certification:", error);
      setStatus("An error occurred while adding the certification.");
    } finally {
      setIsSubmitting(false);
      // Hide status message after 3 sec
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen px-6 pt-20 pb-12 flex flex-col items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-sans">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-center mb-8"
      >
        <h1 className="text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          🏆 Add Certification
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Add a new certification to highlight your achievements.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="w-full max-w-md"
      >
        <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-400/40 transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
              <input
                ref={Title}
                type="text"
                className="w-full px-4 py-2 rounded-xl bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="e.g. React Development"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Issuer</label>
              <input
                ref={Issuer}
                type="text"
                className="w-full px-4 py-2 rounded-xl bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="e.g. Coursera, Udemy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Date</label>
              <input
                ref={DateField}
                type="text"
                className="w-full px-4 py-2 rounded-xl bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="e.g. May 2025"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
              <textarea
                ref={Description}
                className="w-full px-4 py-2 rounded-xl bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
                rows="3"
                placeholder="e.g. Learned to build modern web apps using React, Hooks, and JSX."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "🏆 Add Certification"}
              </button>
            </div>

            {status && (
              <div className="mt-4 text-center text-sm text-gray-300 bg-slate-700/50 p-2 rounded-xl">
                {status}
              </div>
            )}
          </form>
        </div>
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
          Keep adding certifications to showcase your growth!
        </p>
      </motion.div>
    </div>
  );
};

export default AddCertification;