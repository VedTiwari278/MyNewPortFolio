import "react-toastify/dist/ReactToastify.css";
import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

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
        "https://my-new-port-folio-rie1jel8o-vedtiwari278s-projects.vercel.app/contact",
        submittedData
      );
      // console.log("Response:", response.data.message);
      setStatus(response.data.message);
      toast.success(status);
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
    <div
      className="min-vh-100 px-4 py-5"
      style={{ backgroundColor: "#1e293b", fontFamily: "'Inter', sans-serif" }}
    >
      <Container className="my-5" style={{ maxWidth: "600px" }}>
        {/* Heading */}
        <h2
          className="display-4 fw-bold text-center mb-5 text-white"
          style={{
            textShadow: "0 0 10px rgba(59,130,246,0.8)",
          }}
        >
          📬 Contact Me
        </h2>

        {/* Form Card */}
        <div className="card p-4 bg-dark bg-opacity-75 border-0 shadow">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-white">Your Name</label>
              <input
                ref={name}
                className="form-control bg-dark text-white border-secondary"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-white">Email address</label>
              <input
                ref={email}
                type="email"
                placeholder="Enter email"
                required
                className="form-control bg-dark text-white border-secondary"
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-white">Subject</label>
              <input
                ref={subject}
                className="form-control bg-dark text-white border-secondary"
                type="text"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-white">Your Message</label>
              <textarea
                ref={msg}
                rows={4}
                placeholder="Type your message..."
                required
                className="form-control bg-dark text-white border-secondary"
              />
            </div>
            <button
              className="btn btn-primary w-100 mt-3 fw-bold"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>

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
    </div>
  );
};

export default Contact;
