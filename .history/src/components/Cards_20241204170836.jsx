import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Cards.css";

const Cards = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const onScroll = () => {
      const cardsContainer = document.querySelector(".cards-container");
      if (
        cardsContainer &&
        window.scrollY + window.innerHeight > cardsContainer.offsetTop + 100
      ) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`cards-container ${isVisible ? "visible" : ""}`}>
      {cardData.map((card) => (
        <div className="card" key={card.id}>
          <div className="card-inner">
            <div className="card-front">
              <h3 className="card-heading">{card.title}</h3>
            </div>
            <div className="card-back">
              <div className="card-content">
                <p>{card.description}</p>
                <Link to={`/product/${card.id}`} className="read-more">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
