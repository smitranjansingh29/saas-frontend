import React, { useEffect, useState } from "react";


const SemiCircleScroll = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = window.innerHeight / 2;
      if (scrollPosition > triggerPosition) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="semi-circle-container">
      <div className={`semi-circle ${scrolled ? "active" : ""}`}></div>
      <div className="content">
        <h1>Semi-Circle Scroll Effect</h1>
        <p>
          As you scroll, a black semi-circle grows from the bottom and eventually
          takes over the background.
        </p>
      </div>
    </div>
  );
};

export default SemiCircleScroll;
