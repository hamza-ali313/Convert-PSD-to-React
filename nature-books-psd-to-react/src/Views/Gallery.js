import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import gall1 from "../images/gall-1.png";
import gall2 from "../images/gall-2.png";
import gall3 from "../images/gall-3.png";
const Gallery = () => {
  const settings =  {
    slidesToShow: 4,
    swipeToSlide:true,
    focusOnSelect:true,
    arrows:false,
    dots:false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows:false,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows:false,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
          dots: false
        }
      }
    ]
}
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
        <Slider {...settings}>
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
