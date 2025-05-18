import React from "react";
import './Product.css';

const Footer = () => {
  return (
    <footer className="footer-bg mt-5 pt-4 pb-2 shadow-sm">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        
        <nav className="mb-3 mb-md-0">
          <ul className="list-unstyled d-flex gap-3 mb-0 flex-wrap justify-content-center justify-content-md-start">
            <li><a href="/about" className="text-decoration-none">About Us</a></li>
            <li><a href="/product" className="text-decoration-none">Products</a></li>
            <li><a href="/privacy" className="text-decoration-none">Privacy Policy</a></li>
            <li><a href="/terms" className="text-decoration-none">Terms of Service</a></li>
          </ul>
        </nav>

        <div className="text-center mb-3 mb-md-0">
          <p className="mb-1">📞 <a href="tel:+1234567890" className="text-decoration-none">+1 (234) 567-890</a></p>
          <p className="mb-1">✉️ <a href="mailto:info@yourcompany.com" className="text-decoration-none">info@Cartzilla.com</a></p>
          <p><a href="/contact" className="text-decoration-underline">Contact Form</a></p>
        </div>

        <div>
          <a
            href=""
            rel="noreferrer"
            aria-label="Facebook"
            className="fs-5 mx-2"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href=""
            rel="noreferrer"
            aria-label="Twitter"
            className="fs-5 mx-2"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href=""
            rel="noreferrer"
            aria-label="LinkedIn"
            className="fs-5 mx-2"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href=""
            rel="noreferrer"
            aria-label="Instagram"
            className="fs-5 mx-2"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
