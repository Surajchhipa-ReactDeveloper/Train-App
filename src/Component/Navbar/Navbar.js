import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Icon } from "../../Utility/AssetsPath/Icon";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(true);
  const HandleClose = () => {
    setOpenNavbar(true);
  };
  useEffect(() => {
    if (!openNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [openNavbar]);
  return (
    <>
      <div className="Navbar_Container">
        <div className="Navbar_Right_Container">
          <img src={Icon.MainLogo} alt="" className="Main_Logo" />
        </div>
        <div className="Navbar_Left_Container">
          <div className={openNavbar ? "NavBar_links" : "Mobile_Navbar"}>
            <ul className="ul">
              <li className="li">Train</li>
              <li className="li">Food</li>
              <li className="li">Ask Disha</li>
              <li className="li">Rooms</li>
              <li className="li">Other Service</li>
              <li className="li">Contact Us</li>
              <li className="li">More</li>
            </ul>
            <div className="Navbar_Right_Left_Container">
              <div className="Register">Register</div>
              <div className="Login">Login</div>
            </div>
          </div>
          <div className="Menu_button_container">
            <div
              className={`Open_Bar ${openNavbar ? "CloseBar" : ""}`}
              onClick={() => {
                setOpenNavbar(!openNavbar);
              }}
            >
              {openNavbar ? (
                <img
                  src={Icon.OpenMenu_Logo}
                  alt=""
                  className=" Hamburger_Menu"
                />
              ) : (
                <img
                  src={Icon.CloseMenu_Logo}
                  alt=""
                  className="Hamburger_Menu close_Menu"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
