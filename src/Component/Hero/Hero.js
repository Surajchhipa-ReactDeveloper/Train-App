import React from "react";
import "./Hero.css";
import { Images } from "../../Utility/AssetsPath/Images";
import Navbar from "../Navbar/Navbar";
const Hero = () => {
  return (
    <>
      <div className="Hero_Container">
        <Navbar />
        <div className="Hero_Container_Cover "></div>
      </div>
      <div className="Hero_Container_Small_Screen">
        <Navbar />
        <div className="Hero_Container_Cover "></div>
      </div>
    </>
  );
};

export default Hero;
