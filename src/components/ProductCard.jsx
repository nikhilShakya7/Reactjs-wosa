import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../style/productCard.css";
import { useCart } from "./cartContext";
import { toast } from "react-toastify";

const ProductCard = ({ product, ...motionProps }) => {
  const { addToCart } = useCart();
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <motion.div
      className="product-card"
      whileHover={{ y: -10 }}
      {...motionProps}
    >
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-container">
          <img
            src={product.images}
            alt={product.name}
            className="product-image"
          />
          {product.isNew && <span className="badge new">New</span>}
          {product.isBestSeller && (
            <span className="badge bestseller">Bestseller</span>
          )}
          {product.originalPrice && (
            <span className="discount-badge">
              {Math.round((1 - product.price / product.originalPrice) * 100)}%
              OFF
            </span>
          )}
          <button className="quick-view">Quick View</button>
        </div>

        <div className="product-info">
          <span className="product-category">{product.category}</span>
          <h3 className="product-name">{product.name}</h3>

          <div className="price-rating">
            <div className="prices">
              {product.originalPrice && (
                <span className="original-price">
                  Rs {product.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="current-price">
                Rs {product.price.toFixed(0)}
              </span>
            </div>
            {product.rating && (
              <div className="rating">⭐ {product.rating}</div>
            )}
          </div>
        </div>
      </Link>

      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ProductCard;
