import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  var name = "hamza ali";
   return (
    <div className="banner-inner-sec">
      <div className="main-heading">
        <p>The One with Nature</p>
      </div>
      <div className="buy-btn input-flds-right-btn">
        <Link to={"/"}>Buy Now</Link>
      </div>
    </div>
  );
};

export default Banner;





