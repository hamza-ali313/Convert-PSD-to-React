import {
  Container,
  Row,
  Col,
  Carousel,
  Nav,
  Tab,
  Sonnet,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import React, { useState } from "react";
import "./index.css";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// SLICK
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

import ScrollToTop from "./Views/ScrollToTop/Index";
import MyBookSlider from "./Views/MyBookSlider";
import bookslideimg from "./images/order-img.png"
import f from "./images/2nd-book.png"
import Header from "./Extends/Header"
import Footer from "./Extends/Footer"
import Banner from "./Views/Banner";
import Books from "./Views/Books"
import About from "./Views/About";
import VideoSec from "./Views/VideoSec";
import Testimonials from "./Views/Testimonials";
import Gallery from "./Views/Gallery";

// AOS.init({
//     offset: 200,
//     duration: 600,
//     easing: 'ease-in-sine',
//     delay: 200,
// });

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="banner-sec">
          <Header />
          <Banner />
        </header>
        <Books/>
        <About/>
        <MyBookSlider first={bookslideimg} second={bookslideimg} third={bookslideimg} fourth={bookslideimg} fifth={bookslideimg}  sixth={bookslideimg}/> 
        <VideoSec/>
        <Testimonials/>
        <Gallery/>
        <footer>
        <Footer />
      </footer>
      </div>
    );
  }
}

export default App;

{

}
