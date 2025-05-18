import React from "react";
import { Link } from "react-router-dom";
import './Product.css';

const Footer = () => {
  return (
    <footer className="footer-bg footer mt-5">
  <div className="footer-container">
    
    <nav className="footer-nav">
      <ul className="footer-list">
        <li><Link to="/about" className="footer-link">About Us</Link></li>
        <li><Link to="/product" className="footer-link">Products</Link></li>
        <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
        <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
      </ul>
    </nav>

    <div className="footer-contact">
      <p className="mb-1">📞 <a href="tel:+1234567890" className="footer-link">+1 (234) 567-890</a></p>
      <p className="mb-1">✉️ <a href="mailto:info@yourcompany.com" className="footer-link">info@Cartzilla.com</a></p>
      <p><a href="/contact" className="footer-link-underline">Contact Form</a></p>
    </div>

    <div className="footer-social">
      <a href="#" rel="noreferrer" aria-label="Facebook" className="social-icon">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#" rel="noreferrer" aria-label="Twitter" className="social-icon">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="#" rel="noreferrer" aria-label="Instagram" className="social-icon">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  </div>
</footer>
  );
};

export default Footer;
