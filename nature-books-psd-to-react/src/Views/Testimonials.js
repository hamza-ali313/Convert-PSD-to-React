import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import reviewerImg from "../images/reviewerImg.png"
import quote from "../images/quote-img.png"
import { faSlack } from "@fortawesome/free-brands-svg-icons";

const Testimonials = () => {
  return (
    <div className="testimonials-sec">
      <Container>
        <div className="heading-sec">
          <div className="upper-heading">
            <p>author Alex</p>
          </div>
          <div className="main-heading">
            <p>Testimonials</p>
          </div>
        </div>
        <div className="myslider">
          <Slider
            slidesToShow={2}
            swipeToSlide={true}
            focusOnSelect={true}
            dots={true}
            arrows={false}
        
          >
            <div className="testimonial">
              <div className="comment-sec">
                <img src={quote} className="quote-img" />
                <div className="comment">
                  Hiram Garbuncle is not just any ordinary witness. He’s a
                  veteran defense attorney who stumbles into the beating of
                  black man Alec Monceau during a routine. traffic stop. It’s
                  obvious that the police are racist. 
                </div>
                <div className="reviewer">
                    <div className="img">
                        <img src={reviewerImg}/>
                    </div>
                    <div className="intro">
                        <p>D. Donovan, Senior Reviewer</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="testimonial">
            <div className="testimonial">
              <div className="comment-sec">
                <img src={quote} className="quote-img" />
                <div className="comment">
                Hiram Garbuncle is not just any ordinary witness. He’s a
                  veteran defense attorney who stumbles into the beating of
                  black man Alec Monceau during a routine. traffic stop. It’s
                  obvious that the police are racist. 
                </div>
                <div className="reviewer">
                    <div className="img">
                        <img src={reviewerImg}/>
                    </div>
                    <div className="intro">
                        <p>D. Donovan, Senior Reviewer</p>
                    </div>
                </div>
              </div>
            </div>
            </div>
            <div className="testimonial">
            <div className="testimonial">
              <div className="comment-sec">
                <img src={quote} className="quote-img" />
                <div className="comment">
                Hiram Garbuncle is not just any ordinary witness. He’s a
                  veteran defense attorney who stumbles into the beating of
                  black man Alec Monceau during a routine. traffic stop. It’s
                  obvious that the police are racist. 
                </div>
                <div className="reviewer">
                    <div className="img">
                        <img src={reviewerImg}/>
                    </div>
                    <div className="intro">
                        <p>D. Donovan, Senior Reviewer</p>
                    </div>
                </div>
              </div>
            </div>
            </div>
            <div className="testimonial">
            <div className="testimonial">
              <div className="comment-sec">
                <img src={quote} className="quote-img" />
                <div className="comment">
                Hiram Garbuncle is not just any ordinary witness. He’s a
                  veteran defense attorney who stumbles into the beating of
                  black man Alec Monceau during a routine. traffic stop. It’s
                  obvious that the police are racist. 
                </div>
                <div className="reviewer">
                    <div className="img">
                        <img src={reviewerImg}/>
                    </div>
                    <div className="intro">
                        <p>D. Donovan, Senior Reviewer</p>
                    </div>
                </div>
              </div>
            </div>
            </div>
            <div className="testimonial">
            <div className="testimonial">
              <div className="comment-sec">
                <img src={quote} className="quote-img" />
                <div className="comment">
                Hiram Garbuncle is not just any ordinary witness. He’s a
                  veteran defense attorney who stumbles into the beating of
                  black man Alec Monceau during a routine. traffic stop. It’s
                  obvious that the police are racist. 
                </div>
                <div className="reviewer">
                    <div className="img">
                        <img src={reviewerImg}/>
                    </div>
                    <div className="intro">
                        <p>D. Donovan, Senior Reviewer</p>
                    </div>
                </div>
              </div>
            </div>
            </div>
            <div className="testimonial">
            <div className="testimonial">
              <div className="comment-sec">
                <img src={quote} className="quote-img" />
                <div className="comment">
                Hiram Garbuncle is not just any ordinary witness. He’s a
                  veteran defense attorney who stumbles into the beating of
                  black man Alec Monceau during a routine. traffic stop. It’s
                  obvious that the police are racist. 
                </div>
                <div className="reviewer">
                    <div className="img">
                        <img src={reviewerImg}/>
                    </div>
                    <div className="intro">
                        <p>D. Donovan, Senior Reviewer</p>
                    </div>
                </div>
              </div>
            </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
