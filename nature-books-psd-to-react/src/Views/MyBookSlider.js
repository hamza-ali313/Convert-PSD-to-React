import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const MyBookSlider = (props) => {
  return (
    <>
      <div className="book-slider-sec">
        <Container>
          <div className="heading-sec">
            <div className="upper-heading">
              <p>author Alex</p>
            </div>
            <div className="main-heading">
              <p>Other Books</p>
            </div>
            <div className="subtitle">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
          <div className="mybookslider">
            <Slider
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
              arrows={true}
            >
              <div className="img-sec">
                <div>
                  <img src={props.first} />
                </div>
                <div className="heading">
                  <p>your heading here</p>
                </div>
                <div className="order-btn">
                  <Link to={"/"}>ORDER NOW</Link>
                </div>
              </div>
              <div className="img-sec">
                <div>
                  <img src={props.second} />
                </div>
                <div className="heading">
                  <p>your heading here</p>
                </div>
                <div className="order-btn">
                  <Link to={"/"}>ORDER NOW</Link>
                </div>
              </div>
              <div className="img-sec">
                <div>
                  <img src={props.third} />
                </div>
                <div className="heading">
                  <p>your heading here</p>
                </div>
                <div className="order-btn">
                  <Link to={"/"}>ORDER NOW</Link>
                </div>
              </div>
              <div className="img-sec">
                <div>
                  <img src={props.fourth} />
                </div>
                <div className="heading">
                  <p>your heading here</p>
                </div>
                <div className="order-btn">
                  <Link to={"/"}>ORDER NOW</Link>
                </div>
              </div>
              <div className="img-sec">
                <div>
                  <img src={props.fifth} />
                </div>
                <div className="heading">
                  <p>your heading here</p>
                </div>
                <div className="order-btn">
                  <Link to={"/"}>ORDER NOW</Link>
                </div>
              </div>
              <div className="img-sec">
                <div>
                  <img src={props.sixth} />
                </div>
                <div className="heading">
                  <p>your heading here</p>
                </div>
                <div className="order-btn">
                  <Link to={"/"}>ORDER NOW</Link>
                </div>
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};
export default MyBookSlider;
