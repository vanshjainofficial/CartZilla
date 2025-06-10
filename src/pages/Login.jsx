import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../components/firebase";
import '../components/Product.css';

const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.loginEmail.value;
    const password = e.target.loginPassword.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoginSuccess(true);
      setErrorMsg("");
      setTimeout(() => {
        setLoginSuccess(false);
        navigate("/"); // redirect if needed
      }, 3000);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setLoginSuccess(true);
      setErrorMsg("");
      setTimeout(() => {
        setLoginSuccess(false);
        navigate("/");
      }, 3000);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="login-page">
      <Navbar />

      <main className="login-main">
        <div className="login-container">
          <h1 className="login-title">Login</h1>
          <hr className="divider" />

          <div className="form-wrapper">
            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <label htmlFor="loginEmail">Email address</label>
                <input
                  type="email"
                  id="loginEmail"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="loginPassword">Password</label>
                <input
                  type="password"
                  id="loginPassword"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="form-note">
                <p>
                  New here?{" "}
                  <Link to="/register" className="register-link">
                    Register
                  </Link>
                </p>
              </div>

              <div className="form-submit">
                <button type="submit" className="btn-submit">
                  Login
                </button>
              </div>

              <div className="form-submit" style={{ marginTop: '10px' }}>
                <button type="button" onClick={handleGoogleLogin} className="btn-submit">
                  Sign in with Google
                </button>
              </div>

              {loginSuccess && (
                <p className="login-success">✅ Login successful!</p>
              )}
              {errorMsg && (
                <p className="login-error">❌ {errorMsg}</p>
              )}
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;