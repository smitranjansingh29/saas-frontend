import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import WhyUs from "./components/WhyUs";
import Company from "./components/Company";
import Cards from "./components/Cards";
import ProductPage from "./components/ProductPage";
import ProductListPage from "./components/ProductListPage";
import "./App.css";

function App() {
  return (
    <HashRouter>
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
          <Route path="/productList" element={<ProductListPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
