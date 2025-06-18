import React, { useRef, useState } from "react";
import axios from "axios";

const AddExperience = () => {
  const JobTitle = useRef();
  const Company = useRef();
  const Duration = useRef();

  const [experienceData, setExperienceData] = useState({});
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submittedData = {
      JobTitle: JobTitle.current.value,
      Company: Company.current.value,
      Duration: Duration.current.value,
    };

    setExperienceData(submittedData);

    try {
      const response = await axios.post(
        "http://localhost:8000/admin/add-experience", // <-- change as needed
        submittedData
      );
      // console.log("Response:", response.data);
      setStatus("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message.");
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
          Add Experience
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Job Title</label>
            <input
              ref={JobTitle}
              type="text"
              className="form-control"
              placeholder="e.g. Software Engineer"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Company</label>
            <input
              ref={Company}
              type="text"
              className="form-control"
              placeholder="e.g. Google"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Duration</label>
            <input
              ref={Duration}
              type="text"
              className="form-control"
              placeholder="e.g. Jan 2022 - May 2024"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary px-4">
              ➕ Add Experience
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

export default AddExperience;
