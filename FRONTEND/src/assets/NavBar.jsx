import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  const location = useLocation();

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="shadow"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-3 text-info border-bottom border-3 border-info pb-1"
        >
          Ved Tiwari
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/about"
              className={`mx-2 ${
                location.pathname === "/about"
                  ? "text-warning fw-bold border-bottom border-2 border-warning"
                  : ""
              }`}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/project"
              className={`mx-2 ${
                location.pathname === "/project"
                  ? "text-warning fw-bold border-bottom border-2 border-warning"
                  : ""
              }`}
            >
              Project
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/skills"
              className={`mx-2 ${
                location.pathname === "/skills"
                  ? "text-warning fw-bold border-bottom border-2 border-warning"
                  : ""
              }`}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={`mx-2 ${
                location.pathname === "/contact"
                  ? "text-warning fw-bold border-bottom border-2 border-warning"
                  : ""
              }`}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/certification"
              className={`mx-2 ${
                location.pathname === "/certification"
                  ? "text-warning fw-bold border-bottom border-2 border-warning"
                  : ""
              }`}
            >
              Certificates
            </Nav.Link>

            {/* ✅ Resume Link */}
            <Nav.Link
              href="https://drive.google.com/file/d/1Rl6luQc-xhTxhfU4zPs1VY6sgENNG6Jk/view?usp=drive_link" // <-- Replace this with your actual link
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-info fw-bold border border-info px-3 rounded"
            >
              Resume
            </Nav.Link>

            <Nav.Link as={Link} to="/admin/dashboard" className="text-dark">
              DashBoard
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
