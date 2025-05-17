import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import Navbar from "./Navbar.jsx";
import "./styles.css";

const MensClothingPage = () => {
  const [products, setProducts] = useState([]);
  const { cart, addToCart, removeFromCart } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [timers, setTimers] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
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
      setTimers((prevTimers) => {
        const updatedTimers = { ...prevTimers };
        Object.keys(updatedTimers).forEach((id) => {
          if (updatedTimers[id] > 0) {
            updatedTimers[id] -= 1;
          }
        });
        return updatedTimers;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secondsRemaining).padStart(2, "0")}`;
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="container">
      <Navbar toggleCart={setShowCart} cartItemCount={cart.length} />
      <h1>Men's Clothing Collection</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title.slice(0, 30)}...</h2>
            <p className="price">${product.price}</p>

            {/* Display timer */}
            <p className="timer">
              Time Left: {formatTime(timers[product.id] || 0)}
            </p>

            <button
              onClick={() => addToCart(product)} 
              disabled={timers[product.id] <= 0}
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

export default MensClothingPage;