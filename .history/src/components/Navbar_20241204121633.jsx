import React from "react";
import { Link } from "react-router-dom";
// import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://media.licdn.com/dms/image/v2/C560BAQHOmtGCUajJQA/company-logo_200_200/company-logo_200_200/0/1676983920074/saisatwik_technologies_logo?e=2147483647&v=beta&t=NVUbQISHx6qillfiWFFHvs60Wy_h69voHTLd3kZjhCI"
          alt="Saisatwik Co. Logo"
          className="logo-image"
        />
        <Link className="company-name" to="/">
          <span>SAISATWIK</span>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link className="NavbarOption" to="/">
            About
          </Link>
        </li>
        <li>
          <Link className="NavbarOption" to="/productList">
            Products
          </Link>
        </li>
        <li>
          <Link className="NavbarOption" to="/help">
            Help
          </Link>
        </li>
        <li>
          <Link className="NavbarOption" to="/AboutUs">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
