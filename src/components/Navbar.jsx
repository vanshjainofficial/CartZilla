import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../components/firebase';
import UserInfo from './UserInfo';

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (err) {
      console.error('Logout error:', err.message);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2 d-flex align-items-center" to="/">
          <img
            src="/assets/logo.png"
            alt="Cartzilla Logo"
            style={{ width: '60px', height: '60px', marginRight: '8px' }}
          />
          Cartzilla🔥 - Flash Sale
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">Blog</NavLink>
            </li>
          </ul>

          <div className="buttons text-center">
            

            <NavLink to="/login" className="btn btn-outline-dark m-2">
              <i className="fa fa-sign-in-alt mr-1"></i> Login
            </NavLink>

            <NavLink to="/register" className="btn btn-outline-dark m-2">
              <i className="fa fa-user-plus mr-1"></i> Register
            </NavLink>
            {user && (
              <button onClick={handleLogout} className="btn btn-outline-danger m-2">
                <i className="fa fa-sign-out-alt mr-1"></i> Logout
              </button>
            )}

            <NavLink to="/cart" className="btn btn-outline-dark m-2">
              <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length})
            </NavLink>
            {user && <UserInfo />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;