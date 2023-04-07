import React from "react";
import logo from "../Assets/logo.png";
import { BsMouse } from "react-icons/bs";

const Misc = () => {
  return (
    <>
      <div className="cursor"></div>
      <a href="/" className="logo">
        <img src={logo} alt="Logo" data-cusrsorpointer={true} />
      </a>

      <a href="/franchise" className="franchiseBtn" data-cusrsorpointer={true}>
        GET A FRANCHISE
      </a>

      <BsMouse className="ScrollBtn" data-cusrsorpointer={true} />
    </>
  );
};

export default Misc;
