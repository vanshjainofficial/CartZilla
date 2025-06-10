import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../components/firebase";
import "../components/Product.css";

const Register = () => {
  const [registered, setRegistered] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.Name.value;
    const email = e.target.Email.value;
    const password = e.target.Password.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      setRegistered(true);
      setErrorMsg("");
      setTimeout(() => {
        setRegistered(false);
        navigate("/login");
      }, 3000);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setErrorMsg("");
      navigate("/");
    } catch (error) {
      setErrorMsg(error.message);
    }
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

              <div className="form-submit">
                <button
                  type="button"
                  className="btn-submit google-btn"
                  onClick={handleGoogleSignIn}
                >
                  <i className=""></i> Register with Google
                </button>
              </div>

              {registered && (
                <p className="register-success">✅ Registered successfully!</p>
              )}
              {errorMsg && (
                <p className="register-error">❌ {errorMsg}</p>
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
