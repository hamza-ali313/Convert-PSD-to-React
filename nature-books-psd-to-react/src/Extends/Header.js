import React, { Component, useState } from "react";
import ReactDOM, { render } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Form,
  Button,
  NavDropdown 
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  brands,
  solid,
  regular,
} from "@fortawesome/fontawesome-svg-core/import.macro";

// LOGO
// import sitelogo from '../Assets/Logo.png';
import ScrollToTop from "../Views/ScrollToTop/Index";

function Header() {
  const [expanded, setExpanded] = useState(false);

  const setExpand = () => {
    setExpanded(false);
    // window.scrollTo(0, 0);
  };

  return (
    <>
      <div>
        <Container>
          <div className="upper-header">
            <div className="nav-social-links">
              <a href="/">
                <FontAwesomeIcon icon={brands("facebook-f")} />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={brands("instagram")} />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={brands("twitter")} />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={brands("google")} />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={brands("youtube")} />
              </a>
            </div>
            <div className="cart">
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("cart-shopping")} />
                $0.00
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("circle-user")} />
              </Link>
            </div>
          </div>
          <div  className="main-header">
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">LOGO HERE</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggl-btn "/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink exact="true" as={Link} to={"/"} onClick={setExpand}>
                    HOME
                  </NavLink>
                  <NavLink
                    exact="true"
                    as={Link}
                    to={"/Aboutus"}
                    onClick={setExpand}
                  >
                    ABOUTUS
                  </NavLink>
                  <NavLink
                    exact="true"
                    as={Link}
                    to={"/Aboutus"}
                    onClick={setExpand}
                  >
                    BOOKS
                  </NavLink>
                  <NavLink
                    exact="true"
                    as={Link}
                    to={"/Gallery"}
                    onClick={setExpand}
                  >
                    GALLERY
                  </NavLink>
                  <NavLink
                    exact="true"
                    as={Link}
                    to={"/Testimonials"}
                    onClick={setExpand}
                  >
                    TESTIMONIALS
                  </NavLink>
                  <NavLink
                    exact="true"
                    as={Link}
                    to={"/Contactus"}
                    onClick={setExpand}
                  >
                    CONTACT
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
