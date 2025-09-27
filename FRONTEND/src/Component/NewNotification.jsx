import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NewNotification = ({ count, setCount }) => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          "https://my-new-port-folio-jbab.vercel.app/admin/contacts"
        );
        const data = response.data.ContactData || [];
        setContacts(data);
        setCount(data.length); // ✅ update notification count
      } catch (error) {
        console.error("Error fetching contacts:", error);
        setError(error.message);
      }
    };

    fetchContacts();
  }, [setCount]);

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-12 text-red-400 bg-slate-700/50 p-4 rounded-xl max-w-md mx-auto"
      >
        Error: {error}
      </motion.div>
    );
  }

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
          📬 New Notifications
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          View the latest messages and updates from your contacts.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="w-full max-w-2xl"
      >
        {contacts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50 max-w-md mx-auto">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Notifications Found</h3>
              <p className="text-gray-300">
                No new messages at the moment. Check back later!
              </p>
            </div>
          </motion.div>
        ) : (
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-400/40 transition-all duration-300">
            <ul className="space-y-4">
              {contacts.map((contact, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="p-4 bg-slate-700/50 rounded-xl border border-slate-600"
                >
                  <strong className="text-white">Name:</strong> {contact.name} <br />
                  <strong className="text-white">Subject:</strong> {contact.subject} <br />
                  <strong className="text-white">Email:</strong> {contact.email} <br />
                  <strong className="text-white">Message:</strong> {contact.message}
                </motion.li>
              ))}
            </ul>
          </div>
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
          Stay updated with new notifications and messages!
        </p>
      </motion.div>
    </div>
  );
};

export default NewNotification;