import React from "react";
// import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="hero-section">
        <h1>Welcome to SaiSatwik</h1>
      </div>
      <div className="about-us-content">
        <section className="introduction">
          <p>
            Welcome to our company, a leading provider of SAP, SalesForce, and
            PeopleSoft consulting services, as well as business process
            designing services, cloud services, and application development
            services for web, mobile, SAP, and BI tools.
          </p>
        </section>
        <section className="expertise">
          <h2>Our Expertise</h2>
          <p>
            Our team of experts has extensive experience in providing customized
            solutions to our clients, helping them achieve their business goals
            and objectives. We pride ourselves on our ability to offer
            innovative and cutting-edge solutions that are tailored to the
            unique needs of our clients.
          </p>
        </section>
        <section className="services">
          <h2>Consulting Services</h2>
          <p>
            Our consulting services cover a wide range of areas, including SAP,
            SalesForce, and PeopleSoft. We help our clients streamline their
            business processes, improve their operations, and increase their
            efficiency and productivity. Our experts have deep knowledge and
            expertise in these platforms and can provide solutions that are
            specifically designed to meet our clients’ needs.
          </p>
        </section>
        <section className="business-process">
          <h2>Business Process Design</h2>
          <p>
            In addition to our consulting services, we also offer business
            process designing services. We work with our clients to analyze
            their current processes and design new processes that are more
            efficient and effective. We help our clients streamline their
            workflows, reduce waste, and increase productivity.
          </p>
        </section>
        <section className="mission">
          <h2>Our Company Mission</h2>
          <p>
            To provide end-to-end solutions to businesses in order to streamline
            their processes which in turn would help them in reaching their full
            potential.
          </p>
        </section>
        <section className="vision">
          <h2>Our Vision</h2>
          <p>
            To equip businesses worldwide with a process to enhance their
            efficiency and expedite their growth.
          </p>
        </section>
        {/* New Section */}
        <section className="additional-services">
          <div className="service-card">
            <h3>Cloud Services</h3>
            <p>
              Our cloud services are designed to help our clients take advantage
              of the latest cloud technologies. We provide comprehensive cloud
              solutions, including cloud migration, cloud hosting, and cloud
              security. Our experts are knowledgeable in the latest cloud
              technologies and can provide customized solutions that meet the
              unique needs of our clients. We also offer application development
              services for web, mobile, SAP, and BI tools. Our experts are
              proficient in a wide range of programming languages and
              development frameworks. We can help our clients develop customized
              applications that are tailored to their unique business
              requirements. At our company, we are committed to providing
              exceptional service and support to our clients. We work closely
              with our clients to understand their business needs and provide
              solutions that meet their specific requirements. Contact us today
              to learn more about our services and how we can help your business
              succeed.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
