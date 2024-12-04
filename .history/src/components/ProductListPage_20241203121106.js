import React from "react";
import { Link } from "react-router-dom";

const ProductListPage = () => {
  const products = [
    { id: "Pesticides", name: "Pesticides" },
    { id: "RWA", name: "RWA Management" },
    { id: "SchoolERP", name: "School ERP" },
    { id: "project-delta", name: "Project Delta" },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <Link to={`/product/${product.id}`}>
              <button>View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListPage;
