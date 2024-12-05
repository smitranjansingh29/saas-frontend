import React, { useEffect, useRef, useState } from "react";
import "../styles/Company.css";

const Company = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`company-section ${isVisible ? "visible" : ""}`}
      ref={sectionRef}
    >
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
    </div>
  );
};

export default Company;
