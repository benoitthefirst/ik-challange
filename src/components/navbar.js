import React,{useState,useEffect} from "react";
import logo from "../assets/images/logo.svg";
import { isMobile } from "react-device-detect";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
    
  // }, [isOpen]);

  const OpenMenu = () => {
    setIsOpen(true);
  }
  const CloseMenu = () => {
    if (isMobile) 
      setIsOpen(false);
  }

  const NavigateTo = (name) => {
    if (isMobile) 
      CloseMenu();
    //To-do: add navigation
  }
  return (
    <div className="nav">
      <div className="nav-btn" onClick={isOpen ? CloseMenu : OpenMenu}>
        {isOpen ? (
          <span className="close-text">x</span>
        ) : (
          <label>
            <span></span>
            <span></span>
            <span></span>
          </label>
        )}
      </div>
      <div className="logo_area">
        <a href="">
          <img src={logo} alt="" />
        </a>
      </div>
      {console.log(isOpen)}
      <div className={"nav-links " + (!isOpen ? "close" : "open")}>
        <ul id="menu">
          <li>
            <a href="#" onClick={CloseMenu}>
              Home
            </a>
            <div className="active" />
          </li>
          <li>
            <a href="#" onClick={CloseMenu}>
              Products
            </a>
            <div className="active active-hidden" />
          </li>
          <li>
            <a href="#" onClick={CloseMenu}>
              Blog
            </a>
            <div className="active active-hidden" />
          </li>
          <li>
            <a href="#" onClick={CloseMenu}>
              Contact
            </a>
            <div className="active active-hidden" />
          </li>
        </ul>
      </div>
    </div>
  );
}
