import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background: "linear-gradient(135deg, #e0f7fa, #e3f2fd)",
      }}
    >
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary">
          Admin Dashboard
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
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
