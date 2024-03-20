import React, { useState } from "react";
import "./Information.css";
import { Icon } from "../../../Utility/AssetsPath/Icon";
import Input from "../../../Common/Input/Input";
import DropDown from "../../../Common/DropDownData/DropDown";
const Information = () => {
  const [startStation, setStartStation] = useState();
  const [fromStation, setFromStation] = useState();
  const [Date, setDate] = useState();
  const [quota, setQuota] = useState();
  const [Class, setClass] = useState();
  return (
    <>
      <div className="Information ">
        <div className="Welcome_Heading">
          Welcome to
          <img src={Icon.IndiaLogo} className="IndiaLogo" />
          Indian Railways
        </div>
        <div className="Information_Box ">
          <div className="information_Heading">Search For Train!</div>
          <div className="Information_Center_Container">
            <div className="Information_Data">
              <div className="Information_Top_row ">
                <div className="Input_from_Field Input_Field">
                  <Input
                    LabelText="From"
                    endIcon={Icon.Arrow2}
                    onChange={(e) => setStartStation(e.target.value)}
                    placeholderText="Yeshwantpur Jn"
                  />
                </div>
                <div className="Cross_Image">
                  <img src={Icon.RevArse} alt="" className="RevArse" />
                </div>
                <div className="Input_To_Field Input_Field">
                  <Input
                    LabelText="To"
                    endIcon={Icon.Arrow2}
                    onChange={(e) => setFromStation(e.target.value)}
                    placeholderText="Bhilwara"
                  />
                </div>
              </div>
            </div>
            <div className="Information_User_Option_Container ">
              <div className="Option_User">
                <DropDown
                  Label="Date"
                  value={Date}
                  calender
                  type="Date"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="Option_User">
                <DropDown
                  Label="Quota"
                  value="General"
                  Quota
                  onChange={(e) => setQuota(e.target.value)}
                />
              </div>
              <div className="Option_User">
                <DropDown
                  Label="Class"
                  value="All Class"
                  Class
                  onChange={(e) => setClass(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
