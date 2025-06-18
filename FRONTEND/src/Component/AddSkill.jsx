import React, { useRef, useState } from "react";
import axios from "axios";

const AddSkill = () => {
  const SkillName = useRef();
  const ProficiencyLevel = useRef();

  const [skillData, setSkillData] = useState({});
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submittedData = {
      SkillName: SkillName.current.value,
      ProficiencyLevel: ProficiencyLevel.current.value,
    };

    setSkillData(submittedData);

    try {
      const response = await axios.post(
        "http://localhost:8000/admin/add-skill", // <-- change as needed
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
        <h3 className="text-center mb-4 text-primary fw-bold">Add Skill</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Skill Name</label>
            <input
              ref={SkillName}
              type="text"
              className="form-control"
              placeholder="e.g. React, Python, MySQL"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Proficiency Level</label>
            <select ref={ProficiencyLevel} className="form-select">
              <option value="">Select level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary px-4">
              💡 Add Skill
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

export default AddSkill;
