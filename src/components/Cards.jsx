import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const cardData = [
    {
      id: "project-alpha",
      title: "Project Alpha",
      description:
        "An innovative solution to automate tasks and improve efficiency.",
    },
    {
      id: "project-beta",
      title: "Project Beta",
      description:
        "A platform for seamless team collaboration and communication.",
    },
    {
      id: "project-gamma",
      title: "Project Gamma",
      description:
        "A data-driven approach to predict trends and analyze markets.",
    },
    {
      id: "project-delta",
      title: "Project Delta",
      description:
        "Revolutionizing the e-commerce space with AI recommendations.",
    },
  ];

  return (
    <div className="cards-container">
      {cardData.map((card) => (
        <div className="card" key={card.id}>
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


