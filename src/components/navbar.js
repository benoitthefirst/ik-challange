import React from "react";
import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/menu.svg";

export default function NavBar() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="logo_area">
        <a href="">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="nav-links">
        <ul id="menu">
          <li>
            <a href="#">Home</a>
            <div className="active" />
          </li>
          <li>
            <a href="#">Products</a>
            <div className="active active-hidden" />
          </li>
          <li>
            <a href="#">Blog</a>
            <div className="active active-hidden" />
          </li>
          <li>
            <a href="#">Contact</a>
            <div className="active active-hidden" />
          </li>
        </ul>
      </div>
    </div>
  );
}
