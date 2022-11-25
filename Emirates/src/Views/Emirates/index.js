import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import logo from "../../images/EALogo.png";
import car from "../../images/carsicon2.png";
import property from "../../images/proIcon2.png";
import machine from "../../images/machine.png";
import footerLogo from "../../images/EALogoSmallW.png";
import redBox from "../../images/footerdot.png";
import cardImg from "../../images/footerlogos16.jpg";

const index = () => {
  return (
    <>
      <section className="Emirates-sec">
        <Container>
          <div className="upperMost">
            <Row>
              <Col md={3}>
                <div className="header-logo">
                  <img src={logo} />
                </div>
              </Col>
              <Col md={9}>
                <div className="upperMostright">
                  <div className="top">
                    <Row>
                      <Col md={5}>
                        <div className="date">
                          <p className="localTime">
                            UAE Local Time
                            <br />
                            08:44 pm - Thursday 24
                          </p>
                          <span className="localDate">
                            <span style={{ color: "#df283a" }}>November </span>
                            2022
                          </span>
                        </div>
                      </Col>
                      <Col md={7}>
                        <div className="signInbtn-sec">
                          <Link className="lang-btn" to={"/"}>
                            <span>عربي (AE)</span>
                          </Link>
                          <Link className="singin-btn" to={"/"}>
                            <span>Sign In </span>
                          </Link>
                          <Link className="btn-red-m" to={"/"}>
                            <span>Register New User</span>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="bottom">
                    <Link to={"/"}>
                      <span>About Emirates Auction</span>
                    </Link>
                    <Link to={"/"}>
                      <span>FAQ</span>
                    </Link>
                    <Link to={"/"}>
                      <span>Contact Us</span>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="boxes-sec">
        <Container>
          <Row>
            <Col md={4}>
              <div className="box-outer">
                <div className="box">
                  <div className="circle-text">555</div>
                  <Link to={"/"}>
                    <div className="img-sec">
                      <img src={machine} style={{ filter: "invert(1)" }} />
                    </div>
                    <div className="title">
                      <p className="arabic-text">لوحات أبو ظبي المميزة</p>
                      <p className="eng-text">Abu Dhabi Plates</p>
                    </div>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="box-outer">
                <div className="box">
                  <div className="circle-text">555</div>
                  <Link to={"/"}>
                    <div className="img-sec">
                      <img src={car} style={{ margin: "8px 0 28px 0px" }} />
                    </div>
                    <div className="title">
                      <p className="arabic-text">لوحات أبو ظبي المميزة</p>
                      <p className="eng-text">Abu Dhabi Plates</p>
                    </div>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="box-outer">
                <div className="box">
                  <div className="circle-text">555</div>
                  <Link to={"/"}>
                    <div className="img-sec">
                      <img src={property} />
                    </div>
                    <div className="title">
                      <p className="arabic-text">لوحات أبو ظبي المميزة</p>
                      <p className="eng-text">Abu Dhabi Plates</p>
                    </div>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="lower-sec">
        <Container>
          <div className="upper-child">
            <Row>
              <Col md={5} className="">
                <div className="links-sec">
                  <div className="footer-logo">
                    <img src={footerLogo} />
                  </div>
                  <div className="txt">
                    <p>
                      Emirates Auction L.L.C. is a leading UAE-based auction
                      company in the Middle East. Founded in 2004 by innovative
                      Emirati businessmen, the company specializes in
                      automobiles, vehicle license plates, real estate and
                      properties, asset liquidation, VIP mobile numbers,
                      jewelry, time-sensitive items, and heavy machinery, plant,
                      and construction equipment.
                    </p>
                    <p>
                      Emirates Auction has achieved numerous milestones in a
                      short span of time since its establishment, breaking seven
                      (7) Guinness World Records along the way and giving its
                      clients from the government and private sectors higher
                      returns for their actionable items and unrivaled customer
                      service.
                    </p>
                  </div>
                  <div className="terms-con">
                    <Link to={"/"}>
                      Terms and Conditions{" "}
                      <FontAwesomeIcon icon={solid("arrow-right")} />
                    </Link>
                  </div>
                  <div className="learn-more">
                    <Link to={"/"}>
                      Learn more about Emirates Auction{" "}
                      <FontAwesomeIcon icon={solid("arrow-right")} />
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md={3} className="">
                <div>
                  <div className="heading">
                    <img src={redBox} />
                    Auctions
                  </div>
                  <div className="footer-links">
                    <ul>
                      <li>
                        <Link to={"/"}>Vehicles & Machinery</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Etisalat Mobile Numbers</Link>
                      </li>
                      <li>
                        <Link to={"/"}>General Auction</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Abu Dhabi Properties</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Emirates Properties</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="heading">
                    <img src={redBox} />
                    Emirates Auction
                  </div>
                  <div className="footer-links">
                    <ul>
                      <li>
                        <Link to={"/"}>About Us</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Contact Us</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Property Auction Results</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Registration</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col md={4} className="">
                <div className="links-sec">
                  <div className="heading">
                    <img src={redBox} />
                    Auctions
                  </div>
                  <div className="footer-links">
                    <ul>
                      <li>
                        <Link to={"/"}> Abu Dhabi Number Plates</Link>
                      </li>
                      <li>
                        <Link to={"/"}>RAK Number Plates</Link>
                      </li>
                      <li>
                        <Link to={"/"}>UAQ Number Plates</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Fujairah Number Plates</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Sharjah Number Plates</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="heading">
                    <img src={redBox} />
                    Help
                  </div>
                  <div className="footer-links">
                    <ul>
                      <li>
                        <Link to={"/"}> Forgot Password</Link>
                      </li>
                      <li>
                        <Link to={"/"}>FAQ</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Registration</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Deposit</Link>
                      </li>
                      <li>
                        <Link to={"/"}>How to bid</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="social-media-sec">
              <Row>
                <Col md={8}>
                  <div className="txt">
                    <p className="service">
                      At Your Service<span> 24/7</span>
                    </p>
                    <p>UAE 600 545454</p>
                    <p>INTL +971 600 545454</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="social-icons">
                    <p>Follow us on:</p>
                    <Link to={'/'}>
                      <FontAwesomeIcon
                        icon={brands("twitter")}
                        className="twitter"
                      />
                    </Link>
                    <Link to={'/'}>
                      <FontAwesomeIcon
                        icon={brands("facebook-f")}
                        className="facebook"
                      />
                    </Link>
                    <Link to={'/'}>
                      <FontAwesomeIcon
                        icon={brands("instagram")}
                        className="instagram"
                      />
                    </Link>
                    <Link to={'/'}>
                      <FontAwesomeIcon
                        icon={brands("google-plus-g")}
                        className="google"
                      />
                    </Link>
                    <Link to={'/'}>
                      <FontAwesomeIcon
                        icon={brands("youtube")}
                        className="youtube"
                      />
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div className="lower-child">
            <Row>
              <Col md={4}>
                <div className="text">
                  <p>
                    Copyright © 2004 - 2022 Emirates Auction L.L.C. All rights
                    reserved.
                  </p>
                </div>
              </Col>
              <Col md={8}>
                <img src={cardImg} />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default index;
