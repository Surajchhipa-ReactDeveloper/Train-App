import React, { useState } from "react";
import "./Input.css";
const Input = ({ LabelText, endIcon, onChange, placeholderText }) => {
  const [focusedInput, setFocusedInput] = useState();

  const handleInputFocus = () => {
    setFocusedInput(!focusedInput);
  };
  return (
    <>
      <div className="User_Input_Tag_Common">
        <label
          className={`Label LabelMargin ${focusedInput ? "ActiveLabel" : ""}
          
          `}
        >
          {LabelText}
        </label>
        <div
          className={`Input_Img_Get_Box ${
            focusedInput ? "Input_Img_Get_Box_focused" : ""
          }  ${"error" ? "ActiveError" : ""}`}
        >
          <input
            className={`Input`}
            type={"Type"}
            name={"Name"}
            placeholder={placeholderText}
            onChange={onChange}
            onFocus={handleInputFocus}
            onBlur={handleInputFocus}
            // value={"Yeshwantpur Jn"}
            // autoComplete="none"
          />
          {/* <p className={`ErrorMassage ${!error ? "ActiveErrorMassage" : ""}`}>
            {error}
          </p> */}

          <div className="Password_Img_Visible">
            {endIcon && (
              <img
                src={endIcon}
                alt=""
                className="InputEndIcon"
                // onClick={endOnClick}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
