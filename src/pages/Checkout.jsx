import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Layout.css";

const Checkout = () => {
  const cartItems = useSelector((state) => state.handleCart);

  const EmptyCart = () => (
    <div className="checkout-container">
      <div className="empty-cart">
        <h4>No item in Cart</h4>
        <Link to="/" className="submit-btn" style={{ width: "auto", marginTop: "1rem" }}>
          <i className="fa fa-arrow-left"></i> Continue Shopping
        </Link>
      </div>
    </div>
  );

  const handleCheckoutClick = (e) => {
    e.preventDefault();
    alert("Your order will be delivered soon!");
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    cartItems.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <div className="checkout-container">
        <h1 className="checkout-title">Checkout</h1>
        <div className="checkout-section">
          <div className="checkout-summary">
            <div className="summary-header">Order Summary</div>
            <ul className="summary-list">
              <li>
                Products ({totalItems}) <span>${Math.round(subtotal)}</span>
              </li>
              <li>
                Shipping <span>${shipping}</span>
              </li>
              <li className="summary-total">
                Total amount <span>${Math.round(subtotal + shipping)}</span>
              </li>
            </ul>
          </div>

          <div className="checkout-form">
            <h4>Billing address</h4>
            <form className="form" noValidate>
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input type="text" id="firstName" className="form-control" required />
                <div className="invalid-feedback">Valid first name is required.</div>
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" id="lastName" className="form-control" required />
                <div className="invalid-feedback">Valid last name is required.</div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" placeholder="you@example.com" required />
                <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
              </div>
              <div className="form-group">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" id="address" className="form-control" placeholder="1234 Main St" required />
                <div className="invalid-feedback">Please enter your shipping address.</div>
              </div>
              <div className="form-group">
                <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                <input type="text" id="address2" className="form-control" placeholder="Apartment or suite" />
              </div>
              <div className="form-group">
                <label htmlFor="country" className="form-label">Country</label>
                <select id="country" className="form-select" required>
                  <option value="">Choose...</option>
                  <option>India</option>

                </select>
                <div className="invalid-feedback">Please select a valid country.</div>
              </div>
              <div className="form-group">
                <label htmlFor="state" className="form-label">State</label>
                <select id="state" className="form-select" required>
                  <option value="">Choose...</option>
                  <option>Andhra Pradesh</option>
<option>Arunachal Pradesh</option>
<option>Assam</option>
<option>Bihar</option>
<option>Chhattisgarh</option>
<option>Goa</option>
<option>Gujarat</option>
<option>Haryana</option>
<option>Himachal Pradesh</option>
<option>Jharkhand</option>
<option>Karnataka</option>
<option>Kerala</option>
<option>Madhya Pradesh</option>
<option>Maharashtra</option>
<option>Manipur</option>
<option>Meghalaya</option>
<option>Mizoram</option>
<option>Nagaland</option>
<option>Odisha</option>
<option>Punjab</option>
<option>Rajasthan</option>
<option>Sikkim</option>
<option>Tamil Nadu</option>
<option>Telangana</option>
<option>Tripura</option>
<option>Uttar Pradesh</option>
<option>Uttarakhand</option>
<option>West Bengal</option>
<option>Andaman and Nicobar Islands</option>
<option>Chandigarh</option>
<option>Dadra and Nagar Haveli and Daman and Diu</option>
<option>Delhi</option>
<option>Jammu and Kashmir</option>
<option>Ladakh</option>
<option>Lakshadweep</option>
<option>Puducherry</option>
                </select>
                <div className="invalid-feedback">Please provide a valid state.</div>
              </div>
              <div className="form-group">
                <label htmlFor="zip" className="form-label">Zip</label>
                <input type="text" id="zip" className="form-control" required />
                <div className="invalid-feedback">Zip code required.</div>
              </div>

              <hr className="my-4" />
              <h4 className="mb-3">Payment</h4>
              <div className="form-group">
                <label htmlFor="cc-name" className="form-label">Name on card</label>
                <input type="text" id="cc-name" className="form-control" required />
                <small className="text-muted">Full name as displayed on card</small>
                <div className="invalid-feedback">Name on card is required</div>
              </div>
              <div className="form-group">
                <label htmlFor="cc-number" className="form-label">Credit card number</label>
                <input type="text" id="cc-number" className="form-control" required />
                <div className="invalid-feedback">Credit card number is required</div>
              </div>
              <div className="form-group">
                <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                <input type="text" id="cc-expiration" className="form-control" required />
                <div className="invalid-feedback">Expiration date required</div>
              </div>
              <div className="form-group">
                <label htmlFor="cc-cvv" className="form-label">CVV</label>
                <input type="text" id="cc-cvv" className="form-control" required />
                <div className="invalid-feedback">Security code required</div>
              </div>
              <hr className="my-4" />
              <button
                className="submit-btn"
                type="submit"
                onClick={handleCheckoutClick}
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      {cartItems.length ? <ShowCheckout /> : <EmptyCart />}
      <Footer />
    </>
  );
};

export default Checkout;