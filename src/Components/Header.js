import React from "react";
import Image from "../Images/Profile.png";

const Header = () => {
  return (
    <div className="head">
      <img className="image" src={Image} />

      <h1>Tell us about yourself.</h1>
    </div>
  );
};

export default Header;
