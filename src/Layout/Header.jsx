import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      className="bg-body-tertiary"
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Group 1
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="Group 2">
          Group 2
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
