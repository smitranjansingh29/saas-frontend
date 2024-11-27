import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductPage.css"; // Ensure you have this file

const ProductPage = () => {
  const { productId } = useParams();

  const products = {
    "project-alpha": {
      title: "Pesticides",
      description:
        "An innovative solution to automate tasks and improve efficiency.",
      details:
        "Project Alpha leverages cutting-edge technology to simplify your workflows and boost productivity. With automation at its core, it enables seamless integration across various tools and platforms.",
      image:
        "https://www.shutterstock.com/image-vector/spraying-pesticide-insecticide-farmer-holding-260nw-2092134667.jpg",
    },
    "project-beta": {
      title: "RWA Management",
      description:
        "Simplify your Residential Welfare Association's operations with our robust tools.",
      details: `
        **Tenant Management**: Invite, register, and approve tenants seamlessly with features like KYC integration, move-in/out notifications, and tenant self-registration.
        **Owner Management**: Handle owner approvals, re-KYC, and role-based access securely.
        **Membership Management**: Manage applications, fees, and approvals with document upload capabilities.
        **Committee Management**: Form committees, assign roles, and manage meetings effortlessly.
        **Inventory Management**: Track inventory purchases, payments, and usage logs.
        **Staff Management**: Biometric attendance and revenue-sharing capabilities for freelancers.
        **Facility Management**: Clubhouse bookings, payments, and meter integrations.
        **Parking Management**: Streamline car user and owner ID tracking.
        **Notifications**: Stay informed with alerts for document submissions and move-in approvals.
      `,
      image:
        "https://img.freepik.com/premium-vector/rwa-logo-rwa-letter-rwa-letter-logo-design-initials-rwa-logo-linked-with-circle-uppercase-monogram-logo-rwa-typography-technology-business-real-estate-brand_229120-68640.jpg",
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
          <div className="product-details-text">
            {product.details.split("\n").map((detail, index) => (
              <p key={index}>{detail.trim()}</p>
            ))}
          </div>
        </div>
      </div>
      {productId === "project-beta" && (
        <div className="product-features">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              End-to-End Management: Seamless handling of tenants, owners,
              staff, and inventory.
            </li>
            <li>
              Customizable Solutions: Tailored features for RWA operations.
            </li>
            <li>
              Robust API Integration: Simplify backend operations and workflows.
            </li>
            <li>
              Secure and Transparent: Verified member details with document
              uploads.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
