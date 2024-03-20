import React from "react";
import "./Service.css";
import ServiceType from "../../Common/ServiceRype/ServiceType";
import { Icon } from "../../Utility/AssetsPath/Icon";

const Service = () => {
  return (
    <>
      <div className="Service_Component ">
        <div className="Service_Angle_BackGround"></div>
        <div className="Service_Provider_Container">
          <p>our other popular service</p>
          <div className="Service_Provider_Type_Container">
            <ServiceType IMG={Icon.Hill_Logo} Type="Train" />
            <ServiceType IMG={Icon.Hill_Logo} Type="Bus" />
            <ServiceType IMG={Icon.Hill_Logo} Type="Hotel" />
            <ServiceType IMG={Icon.Hill_Logo} Type="Hill" />
            <ServiceType IMG={Icon.Hill_Logo} Type="Hill" />
            <ServiceType IMG={Icon.Hill_Logo} Type="Hill" />
            <ServiceType IMG={Icon.Hill_Logo} Type="Hill" />
            <ServiceType IMG={Icon.Hill_Logo} Type="Hill" />
            <ServiceType IMG={Icon.Hill_Logo} Type="Hill" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
