import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../Header.css';

const Header = () => {
  const { cart } = useContext(CartContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">⚡</span> FlashDeals
        </Link>
        
        <nav className="nav-links">
          <Link to="/" className="nav-item active">Home</Link>
          <Link to="/products" className="nav-item">All Deals</Link>
          <Link to="/categories" className="nav-item">Categories</Link>
          <Link to="/upcoming" className="nav-item">Upcoming</Link>
        </nav>
        
        <div className="action-buttons">
          <Link to="/cart" className="cart-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.5C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="currentColor"/>
            </svg>
            {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
          </Link>
          
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className={`mobile-menu ${mobileMenuOpen ? 'visible' : ''}`}>
        <div className="mobile-menu-header">
          <span className="logo">
            <span className="logo-icon">⚡</span> FlashDeals
          </span>
          <button className="close-button" onClick={toggleMobileMenu}>×</button>
        </div>
        <nav className="mobile-nav-links">
          <Link to="/" className="mobile-nav-item" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/products" className="mobile-nav-item" onClick={toggleMobileMenu}>All Deals</Link>
          <Link to="/categories" className="mobile-nav-item" onClick={toggleMobileMenu}>Categories</Link>
          <Link to="/upcoming" className="mobile-nav-item" onClick={toggleMobileMenu}>Upcoming</Link>
          <Link to="/cart" className="mobile-nav-item" onClick={toggleMobileMenu}>Cart ({cartItemCount})</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;