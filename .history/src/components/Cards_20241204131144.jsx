import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
    const cardData = [{
            id: "Pesticides",
            title: "Pesticides",
            description: "An innovative solution to automate tasks and improve efficiency in agriculture Management.",
        },
        {
            id: "RWA",
            title: "RWA",
            description: "Our RWA application brings residents and management closer with intuitive tools designed for seamless collaboration and efficient governance.",
        },
        {
            id: "SchoolERP",
            title: "School ERP",
            description: "A data-driven approach to predict trends and analyze markets.",
        },
        {
            id: "project-delta",
            title: "Ayush Project",
            description: "Revolutionizing the e-commerce space with AI recommendations.",
        },
    ];

    return ( <
        > { /* <div className="Ctriangle-separator Ctriangle-top"></div> */ } <
        div className = "cards-container maincard" > { /* <div className="triangle-separator triangle-top"></div> */ } {
            cardData.map((card) => ( <
                div className = "card"
                key = { card.id } >
                <
                h3 className = "card-heading" > { card.title } < /h3> <
                div className = "card-content" >
                <
                p > { card.description } < /p> <
                Link to = { `/product/${card.id}` }
                className = "read-more" >
                Read More <
                /Link> <
                /div> <
                /div>
            ))
        } <
        /div> { /* <div className="triangle-separator triangle-bottom"></div> */ } <
        />
    );
};

export default Cards;