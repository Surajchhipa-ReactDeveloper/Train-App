import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Information from "./Component/Information/RailInformation/Information";
import Service from "./Component/Service/Service";
import Help from "./Help/Help";

const App = () => {
  return (
    <>
      <Hero />
      <Information />
      <Service />
      <Help/>
    </>
  );
};

export default App;
