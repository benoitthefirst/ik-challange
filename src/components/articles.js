import React from 'react';
import { isMobile } from "react-device-detect";
import ArticleCard from './ArticleCard';

export default function Articles() {
  return (
    <div className="articles">
      <div className="row col">
        {Array.from(new Array(isMobile ? 2 : 4)).map((item) => (
          <ArticleCard className="col-sm-6 col-md-6 col-lg-3" />
        ))}
      </div>
      <div className="btn-more">
        <a href="#">Read more</a>
      </div>
    </div>
  );
}
