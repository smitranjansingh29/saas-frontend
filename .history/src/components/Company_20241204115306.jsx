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
        <h1>Trusted by Leading Companies</h1>
        <p className="company-description">
          Empowering over <strong>20,000 businesses</strong> worldwide with
          advanced tools for growth and collaboration.
        </p>
        <div className="company-logos">
          <img
            src="https://static.cdnlogo.com/logos/s/12/slack.png"
            alt="Slack"
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2021/02/Zoom-Logo.png"
            alt="Zoom"
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2020/12/HubSpot-Logo.png"
            alt="HubSpot"
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2020/12/Stripe-Logo.png"
            alt="Stripe"
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png"
            alt="Shopify"
          />
        </div>
        <div className="company-stats">
          <h2>20,000+ SaaS Businesses</h2>
          <p>trust us to streamline their operations and drive results.</p>
        </div>
        <button className="cta-button">Get Started for Free</button>
      </div>
    </div>
  );
};

export default Company;
