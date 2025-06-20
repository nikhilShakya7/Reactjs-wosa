import React from "react";
import "../style/header.css";
<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Inter:wght@400;500;600&display=swap"
  rel="stylesheet"
></link>;
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">वसः</div>
        <nav className="nav">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Collections
          </a>
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
        </nav>
        <div className="header-actions">
          <button className="search-btn">🔍</button>
          <button className="cart-btn">🛍️</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
