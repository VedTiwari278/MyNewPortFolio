import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-700/50 shadow-lg h-16">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center h-full">
        <Link
          to="/"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 border-b-4 border-info pb-1 transition-all duration-300 hover:scale-105"
        >
          Ved Tiwari
        </Link>
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-slate-900/90 md:bg-transparent p-4 md:p-0 transition-all duration-300`}
        >
          <Link
            to="/about"
            className={`block no-underline md:inline-block text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2 md:py-0 ${
              location.pathname === "/about"
                ? "text-yellow-400 font-bold border-b-2 border-yellow-400"
                : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/project"
            className={`block no-underline md:inline-block text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2 md:py-0 ${
              location.pathname === "/project"
                ? "text-yellow-400 font-bold border-b-2 border-yellow-400"
                : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Project
          </Link>
          <Link
            to="/skills"
            className={`block no-underline md:inline-block text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2 md:py-0 ${
              location.pathname === "/skills"
                ? "text-yellow-400 font-bold border-b-2 border-yellow-400"
                : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className={`block no-underline md:inline-block text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2 md:py-0 ${
              location.pathname === "/contact"
                ? "text-yellow-400 font-bold border-b-2 border-yellow-400"
                : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/certification"
            className={`block md:inline-block no-underline text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2 md:py-0 ${
              location.pathname === "/certification"
                ? "text-yellow-400 font-bold border-b-2 border-yellow-400"
                : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Certificates
          </Link>
          <a
            href="/Ved's-CV.pdf" // Replace with your actual resume file path or URL (e.g., "/path-to-your-resume.pdf")
            target="_blank"
            rel="noopener noreferrer"
            className="block md:inline-block text-cyan-400 font-bold border border-cyan-400 px-3 py-1 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 py-2 md:py-0 no-underline"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
