import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Cartzilla 🔥. All rights reserved.</p>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/men">Men's Clothing</a>
          <a href="/WomensClothingPage">Women's Clothing</a>
          <a href="/electronics">Electronics</a>
          <a href="/jewelery">Jewellery</a>
          <a href="/contact">Contact</a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
