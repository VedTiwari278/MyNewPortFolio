import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewNotification from "./NewNotification";

const Dashboard = () => {
  const [count, setCount] = useState(0);
  const [showNotifications, setShowNotifications] = useState(true); // ✅ by default true

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background: "linear-gradient(135deg, #e0f7fa, #e3f2fd)",
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-primary">Admin Dashboard</h2>

          <button
            className="btn btn-outline-warning position-relative"
            onClick={toggleNotifications}
          >
            🔔 Notifications
            {count > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {count}
              </span>
            )}
          </button>
        </div>

        {/* ✅ Show Notification Component on Page Load */}
        {showNotifications && (
          <NewNotification count={count} setCount={setCount} />
        )}

        {/* Dashboard Cards */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {/* Add Skill */}
          <div className="col">
            <div className="card h-100 shadow border-0 bg-white">
              <div className="card-body text-center">
                <h5 className="card-title mb-3 fw-semibold text-primary">
                  Add Skill
                </h5>
                <Link
                  to="/admin/add-skill"
                  className="btn btn-outline-primary btn-sm px-4"
                >
                  ➕ Add Skill
                </Link>
              </div>
            </div>
          </div>

          {/* Add Project */}
          <div className="col">
            <div className="card h-100 shadow border-0 bg-white">
              <div className="card-body text-center">
                <h5 className="card-title mb-3 fw-semibold text-success">
                  Add Project
                </h5>
                <Link
                  to="/admin/add-project"
                  className="btn btn-outline-success btn-sm px-4"
                >
                  📁 Add Project
                </Link>
              </div>
            </div>
          </div>

          {/* Add Education */}
          <div className="col">
            <div className="card h-100 shadow border-0 bg-white">
              <div className="card-body text-center">
                <h5 className="card-title mb-3 fw-semibold text-info">
                  Add Education
                </h5>
                <Link
                  to="/admin/add-education"
                  className="btn btn-outline-info btn-sm px-4"
                >
                  🎓 Add Education
                </Link>
              </div>
            </div>
          </div>

          {/* Add Certification */}
          <div className="col">
            <div className="card h-100 shadow border-0 bg-white">
              <div className="card-body text-center">
                <h5 className="card-title mb-3 fw-semibold text-warning">
                  Add Certification
                </h5>
                <Link
                  to="/admin/add-certification"
                  className="btn btn-outline-warning btn-sm px-4 text-dark"
                >
                  🏅 Add Certification
                </Link>
              </div>
            </div>
          </div>

          {/* Add Experience */}
          <div className="col">
            <div className="card h-100 shadow border-0 bg-white">
              <div className="card-body text-center">
                <h5 className="card-title mb-3 fw-semibold text-danger">
                  Add Experience
                </h5>
                <Link
                  to="/admin/add-experience"
                  className="btn btn-outline-danger btn-sm px-4"
                >
                  🧑‍💼 Add Experience
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
