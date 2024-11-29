import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductPage.css";

const ProductPage = () => {
  const { productId } = useParams();
  const [isFullScreen, setIsFullScreen] = useState(false);

  const products = {
    "project-alpha": {
      title: "Pesticides",
      description:
        "An innovative solution to automate tasks and improve efficiency.",
      features: [
        {
          title: "Tenant Management",
          description:
            "Tenant Invite, Registration & Approval, Tenant Details Update, Move-in/Move-out Notifications, KYC Integration.",
          image:
            "https://img.freepik.com/free-photo/farmer-spraying-vegetables-garden-with-herbicides-man-black-apron_1157-39707.jpg",
        },
        {
          title: "Owner Management",
          description:
            "Owner Invite, Role-based Access, Re-KYC for Older Data.",
          image:
            "https://cdn.pixabay.com/photo/2015/01/03/16/49/herbicide-587589_1280.jpg",
        },
        {
          title: "Membership Management",
          description:
            "Membership Applications, Fee Management, Document Uploads.",
          image:
            "https://static.vecteezy.com/system/resources/thumbnails/002/923/715/small/farmer-spraying-pesticide-in-the-rice-field-protection-pest-free-photo.jpg",
        },
        {
          title: "Facility Management",
          description:
            "Clubhouse Booking and Payment Handling Record Keeping and Prepaid Meter Integration",
          image: "https://kj1bcdn.b-cdn.net/media/73864/fed.jpg",
        },
      ],
      whyChooseUs: [
        {
          title: "End-to-End Management",
          description:
            "Seamless handling of tenants, owners, staff, and inventory.",
        },
        {
          title: "Customizable Solutions",
          description: "Tailored features for RWA operations.",
        },
        {
          title: "Robust API Integration",
          description: "Simplify backend operations and workflows.",
        },
        {
          title: "Secure and Transparent",
          description: "Verified member details with document uploads.",
        },
      ],
      image:
        "https://www.shutterstock.com/image-vector/spraying-pesticide-insecticide-farmer-holding-260nw-2092134667.jpg",
    },
    "project-beta": {
      title: "RWA Management",
      video: "/assets/RWAV.mp4",
      description:
        "Our RWA application brings residents and management closer with intuitive tools designed for seamless collaboration and efficient governance.",
      features: [
        {
          title: "Tenant Management",
          description:
            "Tenant Invite, Registration & Approval, Tenant Details Update, Move-in/Move-out Notifications, KYC Integration.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_vH6hNPOE38NeWBKNOnhynFCtDAJ8d2j1g&s",
        },
        {
          title: "Owner Management",
          description:
            "Owner Invite, Role-based Access, Re-KYC for Older Data.",
          image:
            "https://www.pioneerproperty.in/backend/img/Blog/1680250658-Blog1.jpg",
        },
        {
          title: "Membership Management",
          description:
            "Membership Applications, Fee Management, Document Uploads.",
          image:
            "https://t4.ftcdn.net/jpg/04/92/46/19/360_F_492461951_3mGuqTE1xbEL8ISyj6oCaKliAqaMWFAP.jpg",
        },
        {
          title: "Facility Management",
          description:
            "Clubhouse Booking and Payment Handling Record Keeping and Prepaid Meter Integration",
          image:
            "https://t4.ftcdn.net/jpg/04/92/46/19/360_F_492461951_3mGuqTE1xbEL8ISyj6oCaKliAqaMWFAP.jpg",
        },
      ],
      whyChooseUs: [
        {
          title: "End-to-End Management",
          description:
            "Seamless handling of tenants, owners, staff, and inventory.",
        },
        {
          title: "Customizable Solutions",
          description: "Tailored features for RWA operations.",
        },
        {
          title: "Robust API Integration",
          description: "Simplify backend operations and workflows.",
        },
        {
          title: "Secure and Transparent",
          description: "Verified member details with document uploads.",
        },
      ],
      image:
        "https://img.freepik.com/premium-vector/rwa-logo-rwa-letter-rwa-letter-logo-design-initials-rwa-logo-linked-with-circle-uppercase-monogram-logo-rwa-typography-technology-business-real-estate-brand_229120-68640.jpg",
    },
  };

  const product = products[productId];

  if (!product) {
    return <h1>Product not found!</h1>;
  }
  const handleVideoClick = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <>
      <div className={`products-page ${isFullScreen ? "full-screen" : ""}`}>
        {/* Video Background */}

        <div className="projectvideocontainer">
          <video
            className="background-video"
            src={product.video}
            autoPlay
            loop
            muted
            onClick={handleVideoClick}
          />
        </div>

        <div className="projecttextcontainer">
          {/* Card for Title and Subtitle */}
          <div className="products-card">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </div>
        </div>
      </div>

      <div className="product-page">
        <h2 className="section-title">Features</h2>
        {product.features && (
          <div className="features-section">
            {product.features.map((feature, index) => (
              <div
                className={`feature-item ${
                  index % 2 === 0 ? "zigzag-left" : "zigzag-right"
                }`}
                key={index}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="feature-image"
                />
                <div className="feature-details">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {product.whyChooseUs && (
          <div className="why-choose-us">
            <h2 className="section-title">Why Choose Us?</h2>
            <div className="why-choose-us-content">
              {product.whyChooseUs.map((item, index) => (
                <div className="why-choose-item" key={index}>
                  <h3 className="why-choose-title">{item.title}</h3>
                  <p className="why-choose-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductPage;
