import React from "react";
// import "../styles/Cards.css";

const Cards = () => {
  const cardData = [
    {
      title: "Project Alpha",
      description:
        "An innovative solution to automate tasks and improve efficiency.",
    },
    {
      title: "Project Beta",
      description:
        "A platform for seamless team collaboration and communication.",
    },
    {
      title: "Project Gamma",
      description:
        "A data-driven approach to predict trends and analyze markets.",
    },
    {
      title: "Project Delta",
      description:
        "Revolutionizing the e-commerce space with AI recommendations.",
    },
    {
      title: "Project Epsilon",
      description:
        "Enhancing security with cutting-edge blockchain technology.",
    },
    {
      title: "Project Zeta",
      description: "A smart tool for managing your finances and investments.",
    },
    {
      title: "Project Eta",
      description: "An educational platform to learn new skills interactively.",
    },
    {
      title: "Project Theta",
      description: "A health monitoring system with advanced analytics.",
    },
  ];

  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <h3 className="card-heading">{card.title}</h3>
          <div className="card-content">
            <p>{card.description}</p>
            <a href="/read-more" className="read-more">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
