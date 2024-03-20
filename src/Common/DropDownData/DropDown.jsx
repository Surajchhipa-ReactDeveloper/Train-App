import React, { useState } from "react";
import "./DropDown.css";
import { Icon } from "../../Utility/AssetsPath/Icon";
import Calendar from "react-calendar";

const DropDown = ({ calender, Label, value, onChange, Quota, Class, type }) => {
  const [date, setDate] = useState(new Date());
  const [Open, setOpen] = useState(false, Quota, Class);

  const HandleOpen = () => {
    setOpen(!Open);
  };
  return (
    <>
      <div className="Drop_Down_Container">
        <p>{Label}</p>
        <div className="Drop_Down_Selection_Container ">
          <div className="Date">
            <input
              className={`Input`}
              type={type}
              name={"Name"}
              placeholder={"placeholderText"}
              onChange={onChange}
              value={value}
              // autoComplete="none"
            />
          </div>
          <div className="Selector_Img">
            <img
              src={Icon.Arrow2}
              alt=""
              className="DownArrow"
              onClick={HandleOpen}
            />
          </div>
        </div>
        <>
          {Quota && Open ? (
            <div className="option_Data">
              <h1>General </h1>
              <h1>General </h1>
              <h1>General </h1>
              <h1>General </h1>
              <h1>General </h1>
            </div>
          ) : (
            ""
          )}
        </>
        <>
          {Class && Open ? (
            <div className="option_Data">
              <h1>Class </h1>
              <h1>Class </h1>
              <h1>Class </h1>
              <h1>Class </h1>
              <h1>Class </h1>
            </div>
          ) : (
            ""
          )}
        </>
      </div>
    </>
  );
};

export default DropDown;
