import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import '../components/Product.css';

const ContactPage = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <hr />
        <div className="contact-row">
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="input-field"
                  id="Name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="input-field"
                  id="Email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Message">Message</label>
                <textarea
                  rows={5}
                  className="textarea-field"
                  id="Message"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="button-wrapper">
                <button className="btn-dark" type="submit">
                  Send
                </button>
              </div>
              {sent && (
                <p className="success-msg">✅ Message sent successfully!</p>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
