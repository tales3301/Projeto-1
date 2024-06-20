import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import Logo from "../../assets/img/Logo.png";


const Header = ({ title, icon }) => { 
  return (
    <>
      <header className="header">
        <div className="containerLogo">
          <Link to="/Info">
            <img
              src={Logo}
              alt="Imagem Logo"
            />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
