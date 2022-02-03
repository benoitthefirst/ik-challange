import React from "react";
import logo from "../assets/images/56256.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="row">
        <div className="col-sm-12 col-lg-5 text">
          <h1>Start new... Today!</h1>
          <p>
            vivamus vestibulum elit efficitur, elementum sapien a, aliquet ipsum
          </p>
        </div>
        <div className="logo col-sm-12 col-lg-5">
          <img src={logo} />
        </div>
      </div>
    </div>
  );
}
