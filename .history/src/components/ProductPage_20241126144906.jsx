// src/components/ProductPage.jsx

import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();

  const products = {
    "project-alpha": {
      title: "Project Alpha",
      description:
        "An innovative solution to automate tasks and improve efficiency.",
      details:
        "Here you can add more detailed information about Project Alpha.",
    },
    "project-beta": {
      title: "Project Beta",
      description:
        "A platform for seamless team collaboration and communication.",
      details: "Detailed information about Project Beta goes here.",
    },
    "project-gamma": {
      title: "Project Gamma",
      description:
        "A data-driven approach to predict trends and analyze markets.",
      details: "Detailed insights about Project Gamma can be displayed here.",
    },
    "project-delta": {
      title: "Project Delta",
      description:
        "Revolutionizing the e-commerce space with AI recommendations.",
      details: "Extended details about Project Delta can go here.",
    },
  };

  const product = products[productId];

  if (!product) {
    return <h1>Product not found!</h1>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.details}</p>
    </div>
  );
};

export default ProductPage;
