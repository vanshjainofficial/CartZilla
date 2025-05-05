import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlashSaleApp from "./FlashSaleApp";
import JeweleryPage from "./JeweleryPage";
import { CartProvider } from "./CartContext"; 
import MensClothingPage from "./MensClothingPage";
import ContactUsPage from "./ContactUsPage"; 
import WomensClothingPage from "./WomensClothingPage"; 

const App = () => {
  return (
    <CartProvider> {}
      <Router>
        <Routes>
          <Route path="/" element={<FlashSaleApp />} />
          <Route path="/jewelery" element={<JeweleryPage />} />
          <Route path="/men" element={<MensClothingPage />} />
          <Route path="/contact" element={<ContactUsPage />} /> {}
          <Route path="/WomensClothingPage" element={<WomensClothingPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
