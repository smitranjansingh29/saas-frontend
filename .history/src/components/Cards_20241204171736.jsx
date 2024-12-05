import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Cards.css";

const Cards = () => {
  const cardData = [
    {
      id: "Pesticides",
      title: "Pesticides",
      description:
        "An innovative solution to automate tasks and improve efficiency in agriculture Management.",
    },
    {
      id: "RWA",
      title: "RWA",
      description:
        "Our RWA application brings residents and management closer with intuitive tools designed for seamless collaboration and efficient governance.",
    },
    {
      id: "SchoolERP",
      title: "School ERP",
      description:
        "A data-driven approach to predict trends and analyze markets.",
    },
    {
      id: "project-delta",
      title: "Ayush Project",
      description:
        "Revolutionizing the e-commerce space with AI recommendations.",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const cardsSection = document.querySelector(".cards-container");
      if (
        cardsSection &&
        window.scrollY + window.innerHeight > cardsSection.offsetTop + 100
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
    <div className={`cards-container ${isVisible ? "animate" : ""}`}>
      {cardData.map((card, index) => (
        <div
          className="card"
          key={card.id}
          style={{ "--delay": `${index * 0.2}s` }}
        >
          <h3 className="card-heading">{card.title}</h3>
          <div className="card-content">
            <p>{card.description}</p>
            <Link to={`/product/${card.id}`} className="read-more">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
