import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
import '../components/Product.css';

const Register = () => {
  const [registered, setRegistered] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setRegistered(true);
    setTimeout(() => setRegistered(false), 3000);
  };

  return (
    <div className="register-page">
      <Navbar />

      <main className="register-main">
        <div className="register-container">
          <h1 className="register-title">Register</h1>
          <hr className="divider" />

          <div className="form-wrapper">
            <form onSubmit={handleRegister} className="register-form">
              <div className="form-group">
                <label htmlFor="Name">Full Name</label>
                <input
                  type="text"
                  id="Name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="Email">Email address</label>
                <input
                  type="email"
                  id="Email"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  id="Password"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="form-note">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="login-link">
                    Login
                  </Link>
                </p>
              </div>

              <div className="form-submit">
                <button type="submit" className="btn-submit">
                  Register
                </button>
              </div>

              {registered && (
                <p className="register-success">✅ Registered successfully!</p>
              )}
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;