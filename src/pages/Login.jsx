import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginSuccess(true);
    setTimeout(() => setLoginSuccess(false), 3000); // Hide after 3 sec
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleLogin}>
              <div className="my-3">
                <label htmlFor="loginEmail">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="loginEmail"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="my-3">
                <label htmlFor="loginPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="loginPassword"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="my-3">
                <p>
                  New Here?{" "}
                  <Link
                    to="/register"
                    className="text-decoration-underline text-info"
                  >
                    Register
                  </Link>
                </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Login
                </button>
              </div>
              {loginSuccess && (
                <p className="text-success text-center mt-3">
                  ✅ Login successful!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;