import React from "react";
import { Link } from "react-router-dom";
// import "../styles/ProductListPage.css"; // Import the external CSS file

const ProductListPage = () => {
  const products = [
    {
      id: "project-alpha",
      title: "Pesticides",
      description:
        "An innovative solution to automate tasks and improve efficiency.",
      image:
        "https://www.shutterstock.com/image-vector/spraying-pesticide-insecticide-farmer-holding-260nw-2092134667.jpg",
    },
    {
      id: "project-beta",
      title: "RWA Management",
      description: "Seamless collaboration and efficient governance.",
      image:
        "https://img.freepik.com/premium-vector/rwa-logo-rwa-letter-rwa-letter-logo-design-initials-rwa-logo-linked-with-circle-uppercase-monogram-logo-rwa-typography-technology-business-real-estate-brand_229120-68640.jpg",
    },
    // Add more products here
  ];

  return (
    <div className="product-list-page">
      <h1 className="page-title">Our Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <Link to={`/product/${product.id}`} className="view-details-link">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
