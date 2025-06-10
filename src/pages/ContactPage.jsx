import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import '../components/Product.css';

const ContactPage = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const res = await fetch("https://formspree.io/f/mkgbjlyg", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(form),
      });

      if (res.ok) {
        form.reset();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
      } else {
        alert("❌ Submission failed. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Error sending message.");
    }
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
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" className="input-field" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="input-field" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="5" className="textarea-field" required></textarea>
              </div>

              <div className="button-wrapper">
                <button className="btn-dark" type="submit">
                  Send
                </button>
              </div>

              {sent && <p className="success-msg">✅ Message sent successfully!</p>}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;