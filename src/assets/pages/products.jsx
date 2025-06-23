import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../style/Products.css";
import products from "../../data/products";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "all";

  const [category, setCategory] = useState(initialCategory);
  const [sortOption, setSortOption] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const filteredProducts = products
    .filter(
      (product) =>
        category === "all" || product.category.toLowerCase() === category
    )
    .filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    )

    .filter(
      (product) =>
        selectedSizes.length === 0 ||
        selectedSizes.some((size) => product.sizes.includes(size))
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return b.isNew ? 1 : -1;
        default:
          return a.id - b.id;
      }
    });

  // Available filters
  const categories = ["all", ...new Set(products.map((p) => p.category))];
  // const colors = [...new Set(products.flatMap((p) => p.colors))];
  const sizes = [...new Set(products.flatMap((p) => p.sizes))];

  return (
    <div className="products-page">
      {/* Hero Banner */}
      <motion.section
        className="products-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Collection
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Premium quality for every style
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="products-container">
        {/* Filters Sidebar */}
        <aside className="filters-sidebar">
          <div className="filter-section">
            <h3>Categories</h3>
            <ul>
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    className={category === cat.toLowerCase() ? "active" : ""}
                    onClick={() => setCategory(cat.toLowerCase())}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-section">
            <h3>Price Range</h3>
            <div className="price-range">
              <span>{priceRange[0]}</span>
              <input
                type="range"
                min="0"
                max="10000"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([parseInt(e.target.value), priceRange[1]])
                }
              />
              <input
                type="range"
                min="0"
                max="10000"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
              />
              <span>${priceRange[1]}</span>
            </div>
          </div>

          <div className="filter-section">
            <h3>Sizes</h3>
            <div className="size-filters">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size-option ${
                    selectedSizes.includes(size) ? "selected" : ""
                  }`}
                  onClick={() =>
                    setSelectedSizes((prev) =>
                      prev.includes(size)
                        ? prev.filter((s) => s !== size)
                        : [...prev, size]
                    )
                  }
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            className="clear-filters"
            onClick={() => {
              setCategory("all");
              setPriceRange([0, 10000]);
              setSelectedColors([]);
              setSelectedSizes([]);
            }}
          >
            Clear All Filters
          </button>
        </aside>

        {/* Products Grid */}
        <main className="products-grid-container">
          <div className="sort-options">
            <span>Sort by:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
              <option value="newest">Newest Arrivals</option>
            </select>
            <span>{filteredProducts.length} products</span>
          </div>

          {filteredProducts.length > 0 ? (
            <motion.div
              className="products-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                />
              ))}
            </motion.div>
          ) : (
            <div className="no-results">
              <h3>No products match your filters</h3>
              <button
                className="cta-button"
                onClick={() => {
                  setCategory("all");
                  setPriceRange([0, 10000]);
                  setSelectedColors([]);
                  setSelectedSizes([]);
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
