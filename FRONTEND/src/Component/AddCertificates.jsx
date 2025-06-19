import React, { useRef, useState } from "react";
import axios from "axios";

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
      setStatus("Failed to add certification.");
    } finally {
      setIsSubmitting(false);
      // Hide status message after 3 sec
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ background: "linear-gradient(135deg, #f3f4f6, #e0f7fa)" }}
    >
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <h3 className="text-center mb-4 text-primary fw-bold">
          Add Certification
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              ref={Title}
              type="text"
              className="form-control"
              placeholder="e.g. React Development"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Issuer</label>
            <input
              ref={Issuer}
              type="text"
              className="form-control"
              placeholder="e.g. Coursera, Udemy"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input
              ref={DateField}
              type="text"
              className="form-control"
              placeholder="e.g. May 2025"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              ref={Description}
              className="form-control"
              rows="3"
              placeholder="e.g. Learned to build modern web apps using React, Hooks, and JSX."
              required
            ></textarea>
          </div>
          <div className="mb-3"></div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary px-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "🏆 Add Certification"}
            </button>
          </div>

          {status && (
            <div className="alert alert-info mt-3 text-center">{status}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddCertification;
