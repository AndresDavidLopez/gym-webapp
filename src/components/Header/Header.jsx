import menuIcon from "../../images/menu.svg";
import close from "../../images/close.svg"

import "./Header.css";
import { useState } from "react";

const Header = ()=> {
  const [mobileMenu, setMobileMenu] = useState(false);

  const openOrCloseMenu = () => {
    !mobileMenu ? setMobileMenu(1) : setMobileMenu(0);
  }

  return(
    <header className="Header">
      <div className="Header-left">
        <div className="Header-logo">
          FITNESS <span>club</span>
        </div>
      </div>
      <div className="Header-right">
        <ul className="Header-ul">
          <li className="Header-li">
            <a href="#Inicio">Inicio</a>
          </li>
          <li className="Header-li">
            <a href="#Programas">Programas</a>
          </li>
          <li className="Header-li">
            <a href="#Planes">Planes</a>
          </li>
          <li className="Header-li">
            <a href="#Testimonios">Testimonios</a>
          </li>
        </ul>
        <a href="#Planes">
          <button className="Header-button">
            Comienza ya
          </button>
        </a>
        <button 
          onClick={openOrCloseMenu}
          className="Header-menuButton">
          <img src={menuIcon} alt="" />
        </button>
      </div>
      <div 
        className={
          !mobileMenu ? "HeaderMobile" : "HeaderMobile isActive"
        }>
        <button 
          className="HeaderMobile-close"
          onClick={openOrCloseMenu} >
          <img src={close} alt="" />
        </button>
        <ul className="HeaderMobile-ul">
          <li className="HeaderMobile-li" onClick={openOrCloseMenu}>
            <a href="#Inicio">Inicio</a>
          </li>
          <li className="HeaderMobile-li" onClick={openOrCloseMenu}>
            <a href="#Programas">Programas</a>
          </li>
          <li className="HeaderMobile-li" onClick={openOrCloseMenu}>
            <a href="#Planes">Planes</a>
          </li>
          <li className="HeaderMobile-li" onClick={openOrCloseMenu}>
            <a href="#Testimonios">Testimonios</a>
          </li>
        </ul>
        <a href="#Planes">
          <button 
            className="HeaderMobile-button"
            onClick={openOrCloseMenu}>
            Comienza ya
          </button>
        </a>
      </div>
    </header>
  );
}

export default Header;