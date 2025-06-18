import React from "react";
import axios from "axios";
import { useRef, useState } from "react";

const AddEducation = () => {
  const Degree = useRef();
  const Institute = useRef();
  const Session = useRef();

  const [educationData, setEducationData] = useState();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submittedData = {
      Degree: Degree.current.value,
      Institute: Institute.current.value,
      Session: Session.current.value,
    };

    setEducationData(submittedData);

    try {
      const response = await axios.post(
        "https://my-new-port-folio-jbab.vercel.app/add-education",
        submittedData
      );
      console.log("Response is that :", response.data.message);
      setStatus(response.data.message);
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
        <h3 className="text-center mb-4 text-primary fw-bold">Add Education</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Degree</label>
            <input
              ref={Degree}
              type="text"
              className="form-control"
              placeholder="e.g. B.Tech in Computer Science"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Institute</label>
            <input
              ref={Institute}
              type="text"
              className="form-control"
              placeholder="e.g. IIT Bombay"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Session</label>
            <input
              ref={Session}
              type="text"
              className="form-control"
              placeholder="e.g. 2020 - 2024"
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-4">
              ➕ Add Education
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

export default AddEducation;
