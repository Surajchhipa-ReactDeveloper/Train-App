import React from "react";
import "./Help.css";
const Help = () => {
  return (
    <div className="Help_Container">
      <div className="Help_Text ">
        <div className="Help_Heading">
          Have a question or need <br />
          assistance? We're here to help.
        </div>
        <div className="Call_Button">Call 14646</div>
        <div className="Help_Disk">
          <li>
            <marquee
              width="100%"
              direction="left"
              height="15px"
              scrollamount="12"
            >
              IRCTC would never offer to install any app in response to a
              customer complaint or request personal financial information from
              you, such as your date of birth, debit or credit card number, OTP,
              PIN, or CV PAN.
            </marquee>
          </li>
        </div>
      </div>
      <div className="Help_Cover"></div>
    </div>
  );
};

export default Help;
