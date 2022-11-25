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

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// SLICK
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";



import Footer from "./Extends/Footer";
import Emirates from "./Views/Emirates/index"
// AOS.init({
//     offset: 200,
//     duration: 600,
//     easing: 'ease-in-sine',
//     delay: 200,
// });
{
  /* <MySlider first={clock} second={screen} third={calender} fourth={clock} fifth={screen}  sixth={calender}/> */
}

class App extends React.Component {
  render() {
    return (
      <div>
      <Emirates/>
      </div>
    );
  }
}

export default App;
