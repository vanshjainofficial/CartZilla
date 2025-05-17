import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import Navbar from "./Navbar.jsx";
import "./styles.css";

const FlashSaleApp = () => {
  const [products, setProducts] = useState([]);
  const [timers, setTimers] = useState({});
  const [showCart, setShowCart] = useState(false);
  const { cart, addToCart, removeFromCart } = useCart();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showCart && !event.target.closest(".cart") && !event.target.closest(".cart-button")) {
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
    `${m}:${s}`;
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="container">
      <Navbar toggleCart={setShowCart} cartItemCount={cart.length} />
      <div className="hero-section">
        <img
          src="https://media-hosting.imagekit.io/a0c7a587f3d947b2/ChatGPT%20Image%20May%205,%202025,%2012_26_55%20PM.png?Expires=1841036582&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=K~NjV8w9sVz8TmQsdHKE1h2UQkaA06XHY7BfZfUHM0fvF1Kdd3ZSsSIwPWI~cDBdH-NSbyUglkuxzey5gshvstzmh1e5Qi8petOC99Z0EprWegojOooT6QOTvxT5CQwFsdYs7rtmyVHTf91aMD9smnP60ieiw~XSN11g2qASGFTM6FWAtfKBbGhwvDYuVeExOWdwmNomrCX9TC5nkU9ySBTbr0XdYj9CV1SMVS9FQzMwWSBh4pxCtmTeI6aKCew4YWlaPZ~hmBR-rquvUiO10dmw7PkB9BsOIn-BVp6SfYRyAXCflxMrxOFNnjkMO1dS7mda5ZEPtQqc5H5cj95s7A__"
          alt="Flash Sale Hero"
          className="hero-image"
        />
              <h1>Grab these amazing deals before they expire!</h1>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title.slice(0, 30)}...</h2>
            <p className="price">${product.price}</p>
            <p className="timer">Time Left: {formatTime(timers[product.id] || 0)}</p>
            <button
              disabled={timers[product.id] <= 0}
              onClick={() => addToCart(product)} // Use addToCart from context
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

export default FlashSaleApp;