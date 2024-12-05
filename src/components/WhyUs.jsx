import React, { useEffect, useState } from "react";
import "../styles/WhyUs.css";



const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      percentage: "96%",
      description: "of customers say they have a better brand experience",
    },
    {
      percentage: "95%",
      description: "of customers say they gather more data, more easily",
    },
    {
      percentage: "87%",
      description: "of customers say they reveal deeper insights from data",
    },
  ];

  useEffect(() => {
    const onScroll = () => {
      const section = document.querySelector(".why-us");
      if (
        section &&
        window.scrollY + window.innerHeight > section.offsetTop + 100
      ) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={`why-us ${isVisible ? "visible" : ""}`}>
      <h2>Why Us?</h2>
      <p className="why-us-subtitle">Because after switching to us...</p>
      <div className="why-us-stats">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <div className="stat-circle">
              <h3>{stat.percentage}</h3>
            </div>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>




     



    </div>
  );
};

export default WhyUs;
