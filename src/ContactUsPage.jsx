import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import "./styles.css";
import Footer from "./Footer.jsx";

const ContactUsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setStatus("Your message has been sent!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Please fill in all fields.");
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="contact-header">
        <h1>00</h1>
        <p className="contact-subtext">
        </p>
      </div>
      <form className="contact-form fade-in" onSubmit={handleSubmit} aria-label="Contact form">
      <h1>Contact us Now!</h1>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            aria-required="true"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            aria-required="true"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            aria-required="true"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            rows="6"
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      {status && (
        <p className={`status-message ${status.includes("sent") ? "success" : "error"}`}>
          {status}
        </p>
      )}
      <Footer/>
    </div>
  );
};

export default ContactUsPage;