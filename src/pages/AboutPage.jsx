import React from 'react';
import { Footer, Navbar } from "../components";
import Testimonial from "../components/Testimonial";
import '../components/Product.css';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <hr />
        <p className="about-description">
          Welcome to Cartzilla, your ultimate destination for unbeatable flash deals and limited-time offers!
          <br /><br />
          At Cartzilla, we believe that shopping should be fast, fun, and full of surprises. That's why we've built a sleek, lightning-fast platform where top-quality products meet massive discounts — but only for a short time. From trendy fashion to the latest gadgets, our curated flash sales are designed to give you maximum value with minimum wait.
          <br /><br />
          We’re not just another online store — we’re a countdown to excitement. Every product comes with a timer, reminding you that great deals don’t last forever. Our goal is to turn every shopping session into a thrilling race against time — and leave you walking away with a steal.
        </p>

        <h2 className="about-section-title">Our Products</h2>
        <div className="about-products">
          <div className="about-card">
            <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mens's Clothing" />
            <div className="about-card-title">Mens's Clothing</div>
          </div>
          <div className="about-card">
            <img src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Women's Clothing" />
            <div className="about-card-title">Women's Clothing</div>
          </div>
          <div className="about-card">
            <img src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jewelery" />
            <div className="about-card-title">Jewelery</div>
          </div>
          <div className="about-card">
            <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Electronics" />
            <div className="about-card-title">Electronics</div>
          </div>
        </div>
      </div>
      <Testimonial />
      <Footer />
    </>
  );
};

export default AboutPage;