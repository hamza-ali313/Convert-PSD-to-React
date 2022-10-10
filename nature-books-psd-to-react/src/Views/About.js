import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import aboutusImg1 from "../images/about-img1.png";
import aboutusImg2 from "../images/about-img2.png";

const About = () => {
  return (
    <div className="aboutus">
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <div className="img-sec">
              <img src={aboutusImg2} className="about_img2"></img>
              <img src={aboutusImg1}  className="about_img1"></img>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className="text-sec">
              <div className="heading">
                <div className="upper-heading">
                  <p>author Alex</p>
                </div>
                <div className="main-heading">
                  <p>About Us</p>
                </div>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse. cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="btn">
                  <Link to={"/"}>Read More</Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
