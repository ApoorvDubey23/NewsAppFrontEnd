import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LOGO from "../LOGO.png";
import { Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
function NavScrollExample() {
  const [fullURL, setfullURL] = useState("");
  useEffect(() => {
    const fullURL1 = window.location.href.split("/");

    setfullURL(
      fullURL1[3]
        ? fullURL1[3][0].toUpperCase() + fullURL1[3].slice(1)
        : "General"
    );
  }, [window.location.href]);

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary fixed-top"
    >
      <Container fluid>
        <Navbar.Brand className="flex text-2xl font-bold" href="/">
          <img src={LOGO} alt="TT" style={{ height: "40px" }} />
          NewsX
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title={fullURL} id="basic-nav-dropdown">
              
              <NavDropdown.Item href="/">General</NavDropdown.Item>
              <NavDropdown.Item href="/entertainment">Entertainment</NavDropdown.Item>
              <NavDropdown.Item href="/sports">Sports</NavDropdown.Item>
              <NavDropdown.Item href="/business">Business</NavDropdown.Item>
              <NavDropdown.Item href="/health">Health</NavDropdown.Item>
              <NavDropdown.Item href="/science">Science</NavDropdown.Item>
              <NavDropdown.Item href="/technology">Technology</NavDropdown.Item>
            </NavDropdown>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
