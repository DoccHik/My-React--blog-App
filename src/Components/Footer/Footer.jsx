import React from "react";
import "../Footer/Footer.css";
import MenuApp from "./MenuApp/MenuApp";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <MenuApp />
        </div>
      </footer>
    </>
  );
};

export default Footer;
