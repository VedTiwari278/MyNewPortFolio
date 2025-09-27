import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NewNotification from "./NewNotification";

const Dashboard = () => {
  const [count, setCount] = useState(0);
  const [showNotifications, setShowNotifications] = useState(true);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const cards = [
    { title: "Add Skill", link: "/admin/add-skill", icon: "➕", color: "purple" },
    { title: "Add Project", link: "/admin/add-project", icon: "📁", color: "green" },
    { title: "Add Education", link: "/admin/add-education", icon: "🎓", color: "blue" },
    { title: "Add Certification", link: "/admin/add-certification", icon: "🏅", color: "yellow", textDark: true },
    { title: "Add Experience", link: "/admin/add-experience", icon: "🧑‍💼", color: "red" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen px-6 pt-12 pb-12 flex flex-col items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-sans"
    >
      {/* Heading & Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="w-full max-w-6xl flex justify-between items-center mb-12"
      >
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          Admin Dashboard
        </h1>
        <button
          onClick={toggleNotifications}
          className="relative bg-slate-800/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-slate-700/50 hover:border-purple-400 transition-all duration-300"
        >
          🔔 Notifications
          {count > 0 && (
            <span className="absolute top-0 start-100 translate-middle badge rounded-full bg-red-500 px-2 py-1 text-xs">
              {count}
            </span>
          )}
        </button>
      </motion.div>

      {/* Notifications */}
      {showNotifications && <NewNotification count={count} setCount={setCount} />}

      {/* Dashboard Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow hover:border-purple-400/30 transition-all duration-300 text-center"
          >
            <h3 className={`text-2xl font-bold mb-4 text-${card.color}-400`}>
              {card.title}
            </h3>
            <Link
              to={card.link}
              className={`inline-block px-6 py-2 rounded-lg font-semibold border border-${card.color}-400 ${
                card.textDark ? "text-black bg-yellow-400" : `text-${card.color}-400 hover:bg-${card.color}-400 hover:text-white`
              } transition-all duration-300`}
            >
              {card.icon} {card.title.split(" ")[1]}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
