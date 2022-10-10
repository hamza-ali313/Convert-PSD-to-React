import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import barasingha from "../images/barasingha.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  brands,
  solid,
  regular,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const VideoSec = () => {
  return (
    <div className="video-sec">
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <div className="text-sec">
              <div className="upper-heading">
                <p>author Alex</p>
              </div>
              <div className="main-heading">
                <p>Watch Our Youtube Videos</p>
              </div>
              <div className="text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s
                </p>
              </div>
              <div className="btn">
                <Link to={"/"}>VIEW MORE</Link>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className="img-sec">
              <img src={barasingha} />
              <a href="https://www.youtube.com"><FontAwesomeIcon icon={brands("youtube")} /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VideoSec;
