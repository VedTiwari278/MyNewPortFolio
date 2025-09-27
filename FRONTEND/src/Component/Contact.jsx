import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
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
const Contact = () => {
  const name = useRef();
  const email = useRef();
  const subject = useRef();
  const msg = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submittedData = {
      name: name.current.value,
      email: email.current.value,
      subject: subject.current.value,
      message: msg.current.value,
    };
    try {
      const response = await axios.post(
        "https://my-new-port-folio-tau.vercel.app/contact",
        submittedData
      );
      setStatus(response.data.message);
      toast.success("Thanks, We'll Contact You Soon...");
      name.current.value = "";
      email.current.value = "";
      subject.current.value = "";
      msg.current.value = "";
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message.");
      toast.error("❌ Failed to send message.");
    }
  };

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
            Get in Touch
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
          Feel free to reach out for collaborations, projects, or just a
          friendly chat!
        </motion.p>
      </motion.div>
      {/* Contact Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="w-full max-w-lg bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-white font-medium mb-1 block">
              Your Name
            </label>
            <input
              ref={name}
              type="text"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 rounded-lg border border-slate-600 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="text-white font-medium mb-1 block">
              Email Address
            </label>
            <input
              ref={email}
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 rounded-lg border border-slate-600 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="text-white font-medium mb-1 block">Subject</label>
            <input
              ref={subject}
              type="text"
              placeholder="Subject"
              required
              className="w-full px-4 py-2 rounded-lg border border-slate-600 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="text-white font-medium mb-1 block">Message</label>
            <textarea
              ref={msg}
              rows={5}
              placeholder="Type your message..."
              required
              className="w-full px-4 py-2 rounded-lg border border-slate-600 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 rounded-lg mt-2 hover:scale-105 transition-transform duration-200"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </motion.div>
  );
};

export default Contact;
