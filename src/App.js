import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";
import WhyUs from "./components/WhyUs";
import Company from "./components/Company";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Company />
      <Cards />
      <WhyUs />
      <Footer />
    </div>
  );
}

export default App;
