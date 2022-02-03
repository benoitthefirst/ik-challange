import React from 'react';
import logo from "../assets/images/dustin-lee-19667-unsplash.png";

export default function ArticleCard() {
  return (
    <div className="article">
      <img className="cover" src={logo} />
      <h3 className="title">Blog Title #1</h3>
      <p className="subtitle">
        Blog excerpt - first lines - for approx two lines
      </p>
    </div>
  );
}
