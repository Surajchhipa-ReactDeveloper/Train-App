import React from "react";
import "./ServiceType.css";
const ServiceType = ({ Type, IMG }) => {
  return (
    <div className="Service_Type_Container">
      <div className="Service_IMG">
        <img src={IMG} alt="" />
      </div>
      <p>{Type}</p>
    </div>
  );
};

export default ServiceType;
