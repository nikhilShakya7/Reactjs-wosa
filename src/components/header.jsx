import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Navigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../style/header.css";
import { FaShoppingCart } from "react-icons/fa";
import Product from "../assets/pages/product";
import { useCart } from "./cartContext";
const Header = () => {
  const { totalItems = 0 } = useCart() || {};
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">वसः</div>
        <Link to="/cart" className="cart-link">
          <FaShoppingCart className="cart-icon" />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link
            to="/product"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>

        <div className="header-actions">
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
