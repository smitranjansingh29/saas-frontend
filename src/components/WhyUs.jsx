import React from "react";
// import "../styles/WhyUs.css";

const WhyUs = () => {
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

  return (
    <div className="why-us">
      <h2>Why Us?</h2>
      <p className="why-us-subtitle">Because after switching to us...</p>
      <div className="why-us-stats">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <h3>{stat.percentage}</h3>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
