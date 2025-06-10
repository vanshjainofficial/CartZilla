import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
import './layout.css';
const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => (
    <div className="cart-container">
      <div className="empty-cart">
        <h4>Your Cart is Empty</h4>
        <Link to="/" className="btn-custom">
          ← Continue Shopping
        </Link>
      </div>
    </div>
  );

  const addItem = (product) => dispatch(addCart(product));
  const removeItem = (product) => dispatch(delCart(product));

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <section className="cart-main">
        <div className="cart-wrapper">
          <div className="cart-left">
            <div className="cart-card">
              <h5 className="card-title">Item List</h5>
              {state.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-img" />
                  <div className="cart-details">
                    <p className="item-title">{item.title}</p>
                    <div className="cart-qty">
                      <button onClick={() => removeItem(item)} className="custom-btn">-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => addItem(item)} className="custom-btn">+</button>
                    </div>
                    <p className="item-price">
                      {item.qty} x ${item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cart-right">
            <div className="cart-summary">
              <h5 className="card-title">Order Summary</h5>
              <ul className="summary-list">
                <li>Products ({totalItems}) <span>${Math.round(subtotal)}</span></li>
                <li>Shipping <span>${shipping}</span></li>
                <li className="summary-total">Total <span>${Math.round(subtotal + shipping)}</span></li>
              </ul>
              <Link to="/checkout" className="btn-custom">Go to Checkout</Link>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <h1 className="section-title">Cart</h1>
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;