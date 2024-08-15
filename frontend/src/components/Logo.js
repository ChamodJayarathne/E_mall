import React from "react";
import logo from "../assest/logo.jpg";

const Logo = ({ w, h }) => {
  return (
    <img
      alt="Logo"
      src={logo}
      style={{
        width: `${w}px`,
        height: `${h}px`,
      }}
    />
  );
};

export default Logo;
