import React from "react";
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
        <span className="company-name">SAISATWIK </span>
      </div>
      <ul className="nav-links">
        <li>About</li>
        <li>Products</li>
        <li>Help</li>
        <li>About Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
