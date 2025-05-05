// src/WomensClothingPage.jsx

import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import Navbar from "./Navbar.jsx";
import "./styles.css";

const WomensClothingPage = () => {
  const [products, setProducts] = useState([]);
  const [timers, setTimers] = useState({});
  const { cart, addToCart, removeFromCart } = useCart();
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const initialTimers = {};
        data.forEach((product) => {
          initialTimers[product.id] = 120; // 2-minute timer
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
    <div className="container">
      <Navbar toggleCart={setShowCart} cartItemCount={cart.length} />
      <h1>Women's Clothing Collection</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title.slice(0, 30)}...</h2>
            <p className="price">${product.price}</p>
            <p className="timer">Time Left: {formatTime(timers[product.id] || 0)}</p>
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

export default WomensClothingPage;