import React, { useState, useEffect } from "react";
// import "../styles/Hero.css";

const slides = [
  {
    id: 1,
    image:
      "https://t3.ftcdn.net/jpg/04/45/36/34/360_F_445363468_R9cL520O5iyHBip1R9h13OkliIaVZIGN.jpg",
    heading: "Empowering Communities, Simplifying Management",
    text: "Our RWA application brings residents and management closer with intuitive tools designed for seamless collaboration and efficient governance.",
  },
  {
    id: 2,
    image:
      "https://distichain.com/wp-content/uploads/2023/09/SaaS-article-image.jpg",
    heading: "Streamline Communication Effortlessly",
    text: "Enable real-time updates and easy communication for all residents using our advanced notification features.",
  },
  {
    id: 3,
    image:
      "https://t3.ftcdn.net/jpg/04/19/19/24/360_F_419192422_hQ87Z2Ub3bj2yA2yiccmdeL3q3KymxXJ.jpg",
    heading: "Secure and Efficient Financial Management",
    text: "Manage your RWA finances with transparency and accuracy using our secure platform.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3500); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="cards-container">
    <div className="hero">
      <div className="hero-slider">
        <div className="hero-slide">
          <div className="hero-image image-wrapper">
            <img src={slides[currentSlide].image} alt="Slide" />
          </div>

        <div className="hcards-container">
          <div className="hero-text hcard ">
            <h1 classname="hcard-heading">{slides[currentSlide].heading}</h1>
            <p classname="hcard-content">{slides[currentSlide].text}</p>
          </div>
        </div>

        </div>
        <div className="hero-navigation">
          <button onClick={handlePrev} className="nav-btn">
            {"<"}
          </button>
          <button onClick={handleNext} className="nav-btn">
            {">"}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
