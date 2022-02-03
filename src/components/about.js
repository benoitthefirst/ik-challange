import React from 'react';
import logo from "../assets/images/56217.png";

export default function About() {
  return (
    <div className="about">
      <h2>Lorem ipsum something</h2>
      <div className="row">
        <div className="logo col-sm-12 col-md-none col-lg-4">
          <img src={logo} />
        </div>
        <div className="col-sm-12  col-lg-4 text">
          <h1>New Product, new Story</h1>
          <p>
            Vivamus vestibulum elit efficitur, elementum sapien a, aliquet
            ipsum. Fusce placerat dolor id cursus finibus. Aliquam tempus
            facilisis ipsum sit amet molestie. Proin lobortis eros a turpis
            tempor, sed ornare augue aliquam. Donec imperdiet nulla ut placerat
            molestie. In hendrerit blandit ante facilisis ultrices. Mauris
            vulputate metus sit amet ex dignissim, sed hendrerit nunc rhoncus.
          </p>
        </div>
      </div>
    </div>
  );
}
