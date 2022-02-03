import React from "react";
import logo from "../assets/images/brand-logo.svg";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class Brands extends React.Component {
  render() {
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
      };
      
    return (
      <div className="brands">
        <Carousel
          className="carousel"
          responsive={responsive}
          swipeable={true}
          draggable={false}
          infinite={isMobile ? true : false}
          autoPlay={isMobile ? true : false}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          ssr={true}
        >
          <div>
            <img src={logo} />
          </div>
          <div>
            <img src={logo} />
          </div>
          <div>
            <img src={logo} />
          </div>
          <div>
            <img src={logo} />
          </div>
          <div>
            <img src={logo} />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Brands;