import React, { useRef, useState } from "react";
import axios from "axios";

const AddProjects = () => {
  const Title = useRef();
  const Description = useRef();
  const TechStack = useRef();
  const ProjectLink = useRef();
  const LivePreview = useRef();

  const [Projects, SetProjects] = useState();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submittedData = {
      Title: Title.current.value,
      Description: Description.current.value,
      TechStack: TechStack.current.value,
      ProjectLink: ProjectLink.current.value,
      LivePreview: LivePreview.current.value,
    };

    SetProjects(submittedData);

    try {
      const response = await axios.post(
        "http://localhost:8000/admin/add-project",
        submittedData
      ); // ✅ Send data to backend
      // console.log("Response:", response.data);
      setStatus("Message sent successfully!"); // Optional
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message."); // Optional
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
        <h3 className="text-center mb-4 text-primary fw-bold">Add Project</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Project Title</label>
            <input
              ref={Title}
              type="text"
              className="form-control"
              placeholder="e.g. Portfolio Website"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              ref={Description}
              className="form-control"
              rows="4"
              placeholder="Brief summary of the project..."
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Tech Stack</label>
            <input
              ref={TechStack}
              type="text"
              className="form-control"
              placeholder="e.g. React, Node.js, MongoDB"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Project Link</label>
            <input
              ref={ProjectLink}
              type="url"
              className="form-control"
              placeholder="e.g. https://github.com/username/project"
            />
            <br />
            <label className="form-label">Live Preview</label>
            <input
              ref={LivePreview}
              type="url"
              className="form-control"
              placeholder="e.g. https://netlify.project"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary px-4">
              🚀 Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjects;
