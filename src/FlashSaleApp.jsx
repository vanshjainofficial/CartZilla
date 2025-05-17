import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import Navbar from "./Navbar.jsx";
import "./styles.css";
import TypingSparkle from "./TypingSparkle";
import Footer from "./Footer";

const FlashSaleApp = () => {
  const [products, setProducts] = useState([]);
  const [timers, setTimers] = useState({});
  const [showCart, setShowCart] = useState(false);
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showCart &&
        !event.target.closest(".cart") &&
        !event.target.closest(".cart-button")
      ) {
        setShowCart(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showCart]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=9")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const initialTimers = {};
        data.forEach((product) => {
          initialTimers[product.id] = 120;
        });
        setTimers(initialTimers);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prev) => {
        const updated = { ...prev };
        for (let id in updated) {
          if (updated[id] > 0) updated[id] -= 1;
        }
        return updated;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="page-wrapper">
      <Navbar toggleCart={setShowCart} cartItemCount={cart.length} />

      <div className="content-wrapper">
        <div className="hero-section">
          <TypingSparkle />
          <img
            src="https://vanshjain.rf.gd/img/heroimg2.png"
            alt="Flash Sale Hero"
            className="hero-image"
          />
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h2>{product.title.slice(0, 30)}...</h2>
              <p className="price">${product.price}</p>
              <p className="timer">
                Time Left: {formatTime(timers[product.id] || 0)}
              </p>
              <button
                disabled={timers[product.id] <= 0}
                onClick={() => addToCart(product)}
                className={timers[product.id] <= 0 ? "disabled" : ""}
              >
                {timers[product.id] <= 0 ? "Expired" : "Buy Now"}
              </button>
            </div>
          ))}
        </div>

        <section className="landing-section">
          <div className="landing-content">
            <h2>Why Cartzilla?</h2>
            <p className="subtext">
              Thousands trust us for top-tier flash deals, lightning-fast
              delivery, and unmatched shopping experiences.
            </p>
            <div className="features-grid">
              <div className="feature-item">
                <img
                  src="https://vanshjain.rf.gd/img/fast-delivery.png"
                  alt="Fast Shipping"
                />
                <div>
                  <h4>Fast Shipping</h4>
                  <p>We dispatch within 24 hours — no waiting!</p>
                </div>
              </div>
              <div className="feature-item">
                <img
                  src="https://img.icons8.com/ios-filled/50/6366f1/discount.png"
                  alt="Best Prices"
                />
                <div>
                  <h4>Massive Discounts</h4>
                  <p>Deals up to 70% off daily — while stock lasts!</p>
                </div>
              </div>
              <div className="feature-item">
                <img
                  src="https://img.icons8.com/ios-filled/50/6366f1/lock--v1.png"
                  alt="Secure Checkout"
                />
                <div>
                  <h4>Safe & Secure</h4>
                  <p>100% encrypted payments and privacy protection.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      {showCart && (
        <div className="cart">
          {cart.length > 0 ? (
            <>
              <h2>Your Cart 🛒</h2>
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    {item.title.slice(0, 40)} — ${item.price.toFixed(2)}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                      title="Remove item"
                    >
                      ❌
                    </button>
                  </li>
                ))}
              </ul>
              <p className="total">Total: ${totalAmount}</p>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FlashSaleApp;