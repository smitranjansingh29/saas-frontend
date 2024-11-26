import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import WhyUs from "./components/WhyUs";
import Company from "./components/Company";
import Cards from "./components/Cards";
import ProductPage from "./components/ProductPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Company />
                <Cards />
                <WhyUs />
              </>
            }
          />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
