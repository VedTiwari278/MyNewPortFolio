import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaGithubSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/vedprakash_431/",
      color: "from-pink-500 to-pink-600",
      label: "Instagram",
    },
    {
      icon: <FaGithubSquare />,
      link: "https://github.com/VedTiwari278",
      color: "from-gray-500 to-gray-600",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/ved-prakash-tiwari-b21522280/",
      color: "from-blue-500 to-blue-600",
      label: "LinkedIn",
    },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@Algo_Tap",
      color: "from-red-500 to-red-600",
      label: "YouTube",
    },
  ];

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/project" },
    { name: "Skills", to: "/skills" },
    { name: "Certifications", to: "/certification" },
    { name: "Education", to: "/education" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="w-full px-6 py-12 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800 text-gray-200 font-sans border-t border-purple-900/30 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo/Brand Section */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Ved Tiwari
          </h3>
          <p className="text-sm text-gray-400 max-w-xs">
            Crafting innovative solutions with passion and precision.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center">
          <h4 className="text-lg font-semibold   text-purple-300 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {navLinks.map((nav, index) => (
              <li key={index}>
                <Link
                  to={nav.to}
                  className="text-gray-300  no-underline hover:text-purple-400 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-[-2px] hover:after:w-full after:transition-all after:duration-300"
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Contact */}
        {/* Social & Contact */}
        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold text-purple-300 mb-4">
            Stay Connected
          </h4>
          <div className="flex justify-center md:justify-end gap-6 mb-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                to={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                aria-label={social.label}
              >
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`text-3xl p-3 rounded-full shadow-lg bg-gradient-to-br ${social.color} text-white transition-all duration-300`}
                >
                  {social.icon}
                </motion.div>
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {social.label}
                </span>
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-400">vedprakasht759@gmail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 text-center border-t border-purple-900/30 pt-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Ved Tiwari. All Rights Reserved.
        </p>
        <Link to="/admin/dashboard" className="text-transparent  ">
          Admin Dashboard
        </Link>
      </div>
    </motion.footer>
  );
};

export default Footer;
