import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://media.licdn.com/dms/image/v2/C560BAQHOmtGCUajJQA/company-logo_200_200/company-logo_200_200/0/1676983920074/saisatwik_technologies_logo?e=2147483647&v=beta&t=NVUbQISHx6qillfiWFFHvs60Wy_h69voHTLd3kZjhCI"
          alt="Saisatwik Co. Logo"
          className="logo-image"
        />
        <span className="company-name">Saisatwik</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link className="NavbarOption" to="/documentation">
            Documentation
          </Link>
        </li>
        <li>
          <Link className="NavbarOption" to="/resources">
            Resources
          </Link>
        </li>
        <li>
          <Link className="NavbarOption" to="/preview">
            Request Preview
          </Link>
        </li>
        <li>
          <Link className="NavbarOption" to="/careers">
            Careers
          </Link>
        </li>
        <li>
          <Link className="NavbarOption" to="/pricing">
            Pricing
          </Link>
        </li>
      </ul>
      <div className="nav-actions">
        <Link className="login-button" to="/login">
          Login
        </Link>
        <Link className="demo-button" to="/get-demo">
          Get a demo
        </Link>
        <Link className="signup-button" to="/signup">
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
