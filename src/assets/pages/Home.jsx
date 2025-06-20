import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../style/home.css";
const heroImage =
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const menCategory =
  "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
const womenCategory =
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
const accessoriesCategory =
  "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
const summerCollection =
  "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
const testimonial1 = "https://randomuser.me/api/portraits/women/44.jpg";
const testimonial2 = "https://randomuser.me/api/portraits/men/32.jpg";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Classic White Tee",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      category: "T-Shirts",
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      category: "Jeans",
    },
    {
      id: 3,
      name: "Summer Dress",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      category: "Dresses",
    },
  ];

  const newArrivals = [
    // Add more products for the new arrivals section
  ];

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container">
      {/* Animated Hero Section */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover Your Signature Style
          </motion.h1>
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Premium fashion for every occasion
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Link to="/products" className="cta-button pulse-animate">
              Shop Now
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Animated Categories Section */}
      <section className="categories-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Shop by Category
        </motion.h2>
        <div className="categories-grid">
          {[
            { name: "Men", image: menCategory, bg: "#2a3a5e" },
            { name: "Women", image: womenCategory, bg: "#4e3a5e" },
            { name: "Accessories", image: accessoriesCategory, bg: "#3a5e5a" },
          ].map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Link
                to={`/products/${category.name.toLowerCase()}`}
                className="category-card"
                style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundColor: category.bg,
                }}
              >
                <div className="category-overlay"></div>
                <h3>{category.name}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products with Parallax Background */}
      <section className="featured-section parallax-bg">
        <div className="parallax-overlay"></div>
        <div className="section-content">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Featured Collection
          </motion.h2>
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="product-card"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                {/* ... product card content ... */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="new-arrivals">
        {/* ... similar structure with animations ... */}
      </section>

      {/* Summer Collection Banner */}
      <motion.section
        className="summer-collection"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="summer-content">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Summer Vibes Collection
          </motion.h2>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Fresh styles for sunny days
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/products/summer" className="cta-button">
              Explore Collection
            </Link>
          </motion.div>
        </div>
        <div className="summer-image">
          <img src={summerCollection} alt="Summer Collection" />
        </div>
      </motion.section>

      {/* Testimonials */}
      <section className="testimonials">
        {/* ... testimonial cards with animations ... */}
      </section>

      {/* Newsletter with Gradient Background */}
      <motion.section
        className="newsletter-section gradient-bg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      {/* ... newsletter form ... */}
    </div>
  );
};

export default Home;
