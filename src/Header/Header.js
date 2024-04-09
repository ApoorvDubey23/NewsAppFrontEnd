import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LOGO from "../LOGO.png";
import { Dropdown } from "react-bootstrap";
import { useState,useEffect } from "react";
function NavScrollExample() {
  const [fullURL, setfullURL] = useState("");
  useEffect(() => {
  const fullURL1=window.location.href.split('/')

    setfullURL(fullURL1[3]?fullURL1[3][0].toUpperCase()+fullURL1[3].slice(1):"General")
  
   
  }, [window.location.href])
  
  
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
            <Dropdown>
              <Dropdown.Toggle
                variant="dark"
                bg="dark"
                className=" bg-none border-[0.5px] border-white "
                style={{
                  borderRadius: "20px",
                  paddingRight: "2rem",
                  paddingLeft: "2rem",
                }}
                id="dropdown-basic"
              >
               {fullURL}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Nav.Link href="/">General</Nav.Link>
                <Nav.Link href="/entertainment">Entertainment</Nav.Link>
                <Nav.Link href="/sports">Sports</Nav.Link>
                <Nav.Link href="/business">Business</Nav.Link>
                <Nav.Link href="/health">Health</Nav.Link>
                <Nav.Link href="/science">Science</Nav.Link>
                <Nav.Link href="/technology">Technology</Nav.Link>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
