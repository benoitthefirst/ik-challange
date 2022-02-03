import React from 'react';
import logo from "../assets/images/logo-white.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="logo_area">
        <a href="">
          <img src={logo} alt="" />
        </a>
      </div>
      <p>All right reserved &copy;</p>
    </div>
  );
}
