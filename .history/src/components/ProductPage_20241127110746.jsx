// // src/components/ProductPage.jsx

// import React from "react";
// import { useParams } from "react-router-dom";
// //import "../styles/ProductPage.css"; // Import the external CSS file

// const ProductPage = () => {
//   const { productId } = useParams();

//   const products = {
//     "project-alpha": {
//       title: "Pesticides",
//       description:
//         "An innovative solution to automate tasks and improve efficiency.",
//       details:
//         "Project Alpha leverages cutting-edge technology to simplify your workflows and boost productivity. With automation at its core, it enables seamless integration across various tools and platforms.",
//       image:
//         "https://www.shutterstock.com/image-vector/spraying-pesticide-insecticide-farmer-holding-260nw-2092134667.jpg",
//     },
//     "project-beta": {
//       title: "RWA",
//       description:
//         "Our RWA application brings residents and management closer with intuitive tools designed for seamless collaboration and efficient governance.",
//       details:
//         "Enhance your team's efficiency with Project Beta—a comprehensive tool designed for real-time communication, task management, and file sharing.",
//       image:
//         "https://img.freepik.com/premium-vector/rwa-logo-rwa-letter-rwa-letter-logo-design-initials-rwa-logo-linked-with-circle-uppercase-monogram-logo-rwa-typography-technology-business-real-estate-brand_229120-68640.jpg?text=Project+Beta",
//     },
//     "project-gamma": {
//       title: "Project Gamma",
//       description:
//         "A data-driven approach to predict trends and analyze markets.",
//       details:
//         "Project Gamma empowers businesses with analytics and AI-driven insights, helping you make informed decisions and stay ahead of market trends.",
//       image: "https://via.placeholder.com/400x250?text=Project+Gamma",
//     },
//     "project-delta": {
//       title: "Project Delta",
//       description:
//         "Revolutionizing the e-commerce space with AI recommendations.",
//       details:
//         "Transform your e-commerce business with Project Delta. Harness the power of AI to deliver personalized recommendations and enhance the customer experience.",
//       image: "https://via.placeholder.com/400x250?text=Project+Delta",
//     },
//   };

//   const product = products[productId];

//   if (!product) {
//     return <h1>Product not found!</h1>;
//   }

//   return (
//     <div className="product-page">
//       <div className="product-header">
//         <h1 className="product-title">{product.title}</h1>
//       </div>
//       <div className="product-content">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="product-image"
//         />
//         <div className="product-details">
//           <p className="product-description">{product.description}</p>
//           <p className="product-details-text">{product.details}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

// src/components/ProductPage.jsx

import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductPage.css"; // Import the CSS file

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
      features: [
        "Automates repetitive tasks effortlessly",
        "Seamless integration with existing tools",
        "Boosts team productivity",
      ],
      reviews: [
        { user: "Alice", rating: 5, comment: "A game-changer for our team!" },
        {
          user: "Bob",
          rating: 4,
          comment: "Improved our efficiency significantly.",
        },
      ],
      faqs: [
        {
          question: "Is Project Alpha suitable for small businesses?",
          answer:
            "Yes, Project Alpha is designed to scale for businesses of all sizes.",
        },
        {
          question: "Does it support multi-user collaboration?",
          answer: "Absolutely! It's built with team collaboration in mind.",
        },
      ],
    },
    "project-beta": {
      title: "Project Beta",
      description:
        "A platform for seamless team collaboration and communication.",
      details:
        "Enhance your team's efficiency with Project Beta—a comprehensive tool designed for real-time communication, task management, and file sharing.",
      image: "https://via.placeholder.com/400x250?text=Project+Beta",
      features: [
        "Real-time messaging",
        "Task tracking and management",
        "Easy file sharing",
      ],
      reviews: [
        { user: "Chris", rating: 5, comment: "Perfect for remote work!" },
        { user: "Dana", rating: 4, comment: "Made collaboration much easier." },
      ],
      faqs: [
        {
          question: "Can Project Beta integrate with other tools?",
          answer:
            "Yes, it supports integration with popular project management tools.",
        },
        {
          question: "Does it have a mobile app?",
          answer: "Yes, Project Beta is available on iOS and Android.",
        },
      ],
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
      <div className="product-features">
        <h2>Key Features</h2>
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="product-reviews">
        <h2>Customer Reviews</h2>
        {product.reviews.map((review, index) => (
          <div key={index} className="review">
            <p className="review-user">👤 {review.user}</p>
            <p className="review-rating">⭐ {review.rating} / 5</p>
            <p className="review-comment">"{review.comment}"</p>
          </div>
        ))}
      </div>
      <div className="product-faqs">
        <h2>FAQs</h2>
        {product.faqs.map((faq, index) => (
          <div key={index} className="faq">
            <p className="faq-question">❓ {faq.question}</p>
            <p className="faq-answer">💡 {faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="product-cta">
        <button className="cta-button">Contact Us</button>
        <button className="cta-button">Purchase Now</button>
      </div>
    </div>
  );
};

export default ProductPage;
