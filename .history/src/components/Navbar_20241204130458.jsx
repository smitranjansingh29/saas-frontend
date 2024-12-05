import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://media.licdn.com/dms/image/v2/C560BAQHOmtGCUajJQA/company-logo_200_200/company-logo_200_200/0/1676983920074/saisatwik_technologies_logo?e=2147483647&v=beta&t=NVUbQISHx6qillfiWFFHvs60Wy_h69voHTLd3kZjhCI"
          alt="Saisatwik Co. Logo"
          className="logo-image"
        />
        <Link className="company-name" to="/">
          SAISATWIK
        </Link>
      </div>

      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link className="NavbarOption" to="/">
          About
        </Link>
        <Link className="NavbarOption" to="/productList">
          Products
        </Link>
        <Link className="NavbarOption" to="/help">
          Help
        </Link>
        <Link className="NavbarOption" to="/AboutUs">
          About Us
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
