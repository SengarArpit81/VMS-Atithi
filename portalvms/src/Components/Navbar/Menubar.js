import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./navbar.css";

const Menubar = () => {
  
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        style={{ color: "black" }}
      >
        <Container fluid>
          {/* <Navbar.Brand href="#home"> */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <div>
              <h4 className="menubar-tag-h4">
                <span>A</span>thithi {" "}
                <span>B</span>ook
              </h4>
            </div>
          </Link>
          {/* VMS ATHITHI */}
          {/* </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav-tag">
            <Nav.Link href="#features" className="menu-list-div mt-0 p-0">
              {/* <div className="menu-list-div"> */}
                <Link to="/" className="menu-Link">Home</Link>
              {/* </div> */}
              </Nav.Link>
              <Nav.Link href="#features" className="menu-list-div mt-0 p-0" >
                <Link to="/companydetail" className="menu-Link ">Company Detail</Link>
                </Nav.Link>
              <Nav.Link href="#features" className="menu-list-div mt-0 p-0" >
                <Link to="/benefits" className="menu-Link ">Benefits</Link>
                </Nav.Link>

              {/* <Nav.Link href="#features" style={{fontWeight:"500",color:"black"}}>Home</Nav.Link> */}
              {/* <Nav.Link href="#pricing" style={{fontWeight:"500",color:"black"}}>Benefits</Nav.Link> */}
             <Nav.Link href="#features" className="menu-list-div mt-0 p-0" >
                <Link to="/fourbox" className="menu-Link">VMS Admin</Link>
              </Nav.Link>
             <Nav.Link href="#features" className="menu-list-div mt-0 p-0" >
                <Link to="/aboutus" className="menu-Link">About us</Link>
              </Nav.Link>
             <Nav.Link href="#features" className="menu-list-div mt-0 p-0" >
                <Link to="/contactus" className="menu-Link">Contact us</Link>
              </Nav.Link>
              {/* <Nav.Link href="#pricing" style={{fontWeight:"500",color:"black"}}>About us</Nav.Link>
              <Nav.Link href="#pricing" style={{fontWeight:"500",color:"black"}}>Contact us</Nav.Link> */}

              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav >
              <Nav.Link href="#deets"></Nav.Link>

              <div className="d-flex justify-content-center align-items-center m-0 p-2 login-signup-main-div">
              <Nav.Link href="#features" className="link-div mt-0 p-0" >
                <div >
                  <Link
                    to="/signin"
                    style={{
                      textDecoration: "none",
                      color: "rgba(0,0,0,.70)",

                    }}
                  >
                    <h6 className="m-0 p-0 me-2 login-h6-tag">LOGIN</h6>
                  </Link>
                </div>
                </Nav.Link>
                <div>
                  <h6 className="m-0 p-0 login-h6-tag">/</h6>
                </div>
                <Nav.Link href="#features" className="link-div mt-0 p-0" >
                <div className="">
                  <Link
                    to="/signup"
                    style={{
                      textDecoration: "none",
                      color: "rgba(0,0,0,.70)",
                    }}
                  >
                    <h6 className="mx-2 m-0 p-0 login-h6-tag">SIGNUP</h6>
                  </Link>
                </div>
                </Nav.Link>
              </div>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
        <Navbar key={expand} bg="dark"  expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} */}
    </div>
  );
};

export default Menubar;
