import React from "react";
// import "../styles/Company.css";

const Company = () => {
  return (
    <div className="company-section">
      <div className="company-content">
        <h1>You're in good company</h1>
        <div className="company-logos">
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/214/517/non_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"
            alt="Unicef"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/214/517/non_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"
            alt="Gfk"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/214/517/non_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"
            alt="Adobe"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/214/517/non_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"
            alt="Abbott"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/214/517/non_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"
            alt="United Nations"
          />
        </div>
        <div className="company-stats">
          <h2>10,738 Big & Small Companies</h2>
          <p>already track their brands and competitors</p>
        </div>
        <button className="npackage">Start Free Trial</button>
      </div>
      <div className="triangle-separator"></div>
    </div>
  );
};

export default Company;
