import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Navbar = ({ toggleCart, cartItemCount = 0 }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-brand">Cartzilla🔥 - Flash Sale</h1>
        <div className="navbar-links">
          <button className="navbar-link" onClick={() => navigate("/")}>
            Home
          </button>
          <button className="navbar-link" onClick={() => navigate("/jewelery")}>
            Jewellery
          </button>
          <button className="navbar-link" onClick={() => navigate("/men")}>
            Men's Clothing
          </button>
          <button className="navbar-link" onClick={() => navigate("/WomensClothingPage")}>
            Women's Clothing
          </button>
          <button className="navbar-link" onClick={() => navigate("/electronics")}>
            Electronics
          </button>
          <button className="navbar-link" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>
      <div className="navbar-right">
        <button className="cart-button" onClick={() => toggleCart(true)}>
          🛒 ({cartItemCount})
        </button>
      </div>
    </nav>
  );
};

export default Navbar;