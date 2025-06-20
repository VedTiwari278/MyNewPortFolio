import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  return (
    <div className="container my-4">
      <h4>New Notifications</h4>
      {contacts.length === 0 ? (
        <p>No notifications found.</p>
      ) : (
        <ul className="list-group">
          {contacts.map((contact, index) => (
            <li key={index} className="list-group-item">
              <strong>Name:</strong> {contact.name} <br />
              <strong>Subject:</strong> {contact.subject} <br />
              <strong>Email:</strong> {contact.email} <br />
              <strong>Message:</strong> {contact.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewNotification;
