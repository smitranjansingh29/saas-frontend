import React from "react";
import { Link } from "react-router-dom";
// import "./ProductListPage.css";

const ProductListPage = () => {
  const products = [
    {
      id: "Pesticides",
      name: "Pesticides",
      image:
        "https://img.freepik.com/free-photo/farmer-spraying-vegetables-garden-with-herbicides-man-black-apron_1157-39707.jpg",
    },
    {
      id: "RWA",
      name: "RWA Management",
      image:
        "https://img.freepik.com/premium-vector/rwa-logo-rwa-letter-rwa-letter-logo-design-initials-rwa-logo-linked-with-circle-uppercase-monogram-logo-rwa-typography-technology-business-real-estate-brand_229120-68640.jpg",
    },
    {
      id: "SchoolERP",
      name: "School ERP",
      image:
        "https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "project-delta",
      name: "Project Delta",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_vH6hNPOE38NeWBKNOnhynFCtDAJ8d2j1g&s",
    },
  ];

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h1>Product List</h1>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <Link to={`/product/${product.id}`} className="details-button">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
