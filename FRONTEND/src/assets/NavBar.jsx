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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
