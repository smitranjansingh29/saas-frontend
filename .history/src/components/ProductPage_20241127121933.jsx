import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductPage.css";

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
        "Our RWA application brings residents and management closer with intuitive tools designed for seamless collaboration and efficient governance.",
      details: `
        <h3>RWA Management Features</h3>
        <ul>
          <li><strong>Tenant Management:</strong> Tenant Invite, Registration & Approval, Tenant Details Update, Move-in/Move-out Notifications, KYC Integration.</li>
          <li><strong>Owner Management:</strong> Owner Invite, Role-based Access, Re-KYC for Older Data.</li>
          <li><strong>Membership Management:</strong> Membership Applications, Fee Management, Document Uploads.</li>
          <li><strong>Committee Management:</strong> Committee Formation, Meeting Management.</li>
          <li><strong>Inventory Management:</strong> Product Details, Online Payments, Purchase Logs.</li>
          <li><strong>Staff & Freelancer Management:</strong> Staff KYC, Biometric Attendance, Revenue Sharing for Freelancers.</li>
          <li><strong>Facility Management:</strong> Clubhouse Booking, Record Keeping, Prepaid Meter Integration.</li>
          <li><strong>Parking Management:</strong> Car User and Owner ID Tracking.</li>
          <li><strong>User Notifications:</strong> Alerts for Document Submission, Approvals.</li>
        </ul>
        <h3>Why Choose Us?</h3>
        <ul>
          <li>End-to-End Management: Seamless handling of tenants, owners, staff, and inventory.</li>
          <li>Customizable Solutions: Tailored features for RWA operations.</li>
          <li>Robust API Integration: Simplify backend operations and workflows.</li>
          <li>Secure and Transparent: Verified member details with document uploads.</li>
        </ul>
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
      </div>

      <div className="product-content">
        <div className="product-details">
          <p className="product-description">{product.description}</p>
          <div
            className="product-details-text"
            dangerouslySetInnerHTML={{ __html: product.details }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

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
