import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import gall1 from "../images/gall-1.png";
import gall2 from "../images/gall-2.png";
import gall3 from "../images/gall-3.png";
const Gallery = () => {
  return (
    <div className="gallery-sec">
      <Container>
        <div className="heading-sec">
          <div className="upper-heading">
            <p>author Alex</p>
          </div>
          <div className="main-heading">
            <p>Our Gallery</p>
          </div>
          <div className="text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </Container>

      <div className="mygalleryslider">
        <Slider
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          dots={false}
          arrows={false}
        >
          <div className="Gallery-img">
            <img src={gall1} />
          </div>
          <div className="Gallery-img">
            <img src={gall2} />
          </div>
          <div className="Gallery-img">
            <img src={gall3} />
          </div>
          <div className="Gallery-img">
            <img src={gall1} />
          </div>
          <div className="Gallery-img">
            <img src={gall2} />
          </div>
          <div className="Gallery-img">
            <img src={gall3} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
