import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import visacard from "../images/visa-card.png";
import {
  brands,
  solid,
  regular,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

// LOGO
// import sitelogo from '../Assets/Logo.png';

function Footer() {
  return (
    <div className="main-footer">
      <Container>
        <Row>
          <Col lg={3} md={12} sm={12}>
            <div className="logo-sec">
              <h1>
                YOUR <br />
                LOGO HERE
              </h1>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className="mid-sec">
              <div className="heading">
                <p>Subscribe</p>
              </div>
              <div className="text">
                <p>
                  Join the Our community and keep up to date with exclusive
                  offers, blog content, behind the scenes & more.
                </p>
              </div>
              <div className="input-sec">
                <input type="text" placeholder="Enter your Email" />
                <Link to={"/"}>Send</Link>
              </div>
              <div className="footer-links">
                <div className="links">
                  <ul>
                    <li>
                      <Link to={"/"}>
                        <FontAwesomeIcon icon={brands("facebook")} />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <FontAwesomeIcon icon={brands("twitter")} />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <FontAwesomeIcon icon={brands("instagram")} />
                      </Link>
                    </li>{" "}
                    <li>
                      <Link to={"/"}>
                        <FontAwesomeIcon icon={brands("youtube")} />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="cards">
                  <img src={visacard} />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={12} sm={12}>
            <div className="links-sec">
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/"}>About Us</Link>
                </li>
                <li>
                  <Link to={"/"}>Books</Link>
                </li>{" "}
                <li>
                  <Link to={"/"}>Gallery</Link>
                </li>
                <li>
                  <Link to={"/"}>Testimonials</Link>
                </li>
                <li>
                  <Link to={"/"}>Contacts</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;

{
  /* <Col sm={12}>
            <ul className='f-nav'>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/aboutus'}>Link</Link>
              </li>
              
            </ul>
            <ul className='f-social'>
              <li>
                <Link to={'/'}><FontAwesomeIcon icon={brands('discord')} /></Link>
              </li>
              <li>
                <Link to={'/'}><FontAwesomeIcon icon={brands('twitter')} /></Link>
              </li>
              <li>
                <Link to={'/'}><FontAwesomeIcon icon={solid('envelope')} /></Link>
              </li>
            </ul>
          </Col> */
}
