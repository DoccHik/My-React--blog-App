import React from "react";
import "../MenuApp/MenuApp.css";

import HomeIcon from "../../../assets/icons/home.svg";
import UserIcon from "../../../assets/icons/user.svg";
import SettingsIcon from "../../../assets/icons/settings.svg";

const MenuApp = () => {
  return (
    <>
      <section className="menu-app">
        <div className="menu-app-row">
          <ul className="menu-app-nav">
            <li className="menu-app-nav__item">
              <a href={"/"} className="menu-app__link">
                <img className="menu-app__icon" src={HomeIcon} alt="HomeIcon" />
                <span>Home</span>
              </a>
            </li>
            <li className="menu-app-nav__item">
              <a href={"/"} className="menu-app__link">
                <img className="menu-app__icon" src={UserIcon} alt="HomeIcon" />
                <span>Login</span>
              </a>
            </li>
            <li className="menu-app-nav__item">
              <a href={"/"} className="menu-app__link">
                <img
                  className="menu-app__icon"
                  src={SettingsIcon}
                  alt="HomeIcon"
                />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default MenuApp;
