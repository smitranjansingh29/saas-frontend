// src/components/ProductPage.jsx

import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductPage.css"; // Import the external CSS file

const ProductPage = () => {
  const { productId } = useParams();

  const products = {
    "project-alpha": {
      title: "Project Alpha",
      description:
        "An innovative solution to automate tasks and improve efficiency.",
      details:
        "Project Alpha leverages cutting-edge technology to simplify your workflows and boost productivity. With automation at its core, it enables seamless integration across various tools and platforms.",
      image: "https://via.placeholder.com/400x250?text=Project+Alpha",
    },
    "project-beta": {
      title: "Project Beta",
      description:
        "A platform for seamless team collaboration and communication.",
      details:
        "Enhance your team's efficiency with Project Beta—a comprehensive tool designed for real-time communication, task management, and file sharing.",
      image: "https://via.placeholder.com/400x250?text=Project+Beta",
    },
    "project-gamma": {
      title: "Project Gamma",
      description:
        "A data-driven approach to predict trends and analyze markets.",
      details:
        "Project Gamma empowers businesses with analytics and AI-driven insights, helping you make informed decisions and stay ahead of market trends.",
      image: "https://via.placeholder.com/400x250?text=Project+Gamma",
    },
    "project-delta": {
      title: "Project Delta",
      description:
        "Revolutionizing the e-commerce space with AI recommendations.",
      details:
        "Transform your e-commerce business with Project Delta. Harness the power of AI to deliver personalized recommendations and enhance the customer experience.",
      image: "https://via.placeholder.com/400x250?text=Project+Delta",
    },
  };

  const product = products[productId];

  if (!product) {
    return <h1>Product not found!</h1>;
  }

  return (
    <div className="product-page">
      <div className="product-header">
        <h1 className="product-title">{product.title}</h1>
      </div>
      <div className="product-content">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <div className="product-details">
          <p className="product-description">{product.description}</p>
          <p className="product-details-text">{product.details}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
