import React from "react";
// import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Office</h3>
          <p>
            Galaxy blue sapphire plaza, 1415, <br />
            Greater Noida West Link Rd, Sector 4, <br />
            Ghaziabad, Greater Noida, Uttar Pradesh (201009)
          </p>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#team">Our Team</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#sap">SAP Consulting</a>
            </li>
            <li>
              <a href="#salesforce">Salesforce</a>
            </li>
            <li>
              <a href="#consulting">Consulting</a>
            </li>
            <li>
              <a href="#peoplesoft">Peoplesoft Consulting</a>
            </li>
            <li>
              <a href="#webdev">Web App Development</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Quick Query?</h3>
          <form className="query-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="4" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
