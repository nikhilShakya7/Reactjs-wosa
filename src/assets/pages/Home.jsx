import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Product from "./product";
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
      name: "Classic White T-Shirt",
      price: 1800,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      category: "T-Shirts",
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      price: 3000,
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      category: "Jeans",
    },
    {
      id: 3,
      name: "Summer Dress",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      category: "Dresses",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const testimonialRef = useRef(null);

  const scrollTestimonials = (direction) => {
    if (testimonialRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      testimonialRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const [isPaused, setIsPaused] = useState(false);

  const originalTestimonials = [
    {
      id: 1,
      quote:
        "The quality exceeded my expectations! The dress fits perfectly and the fabric is so comfortable.",
      author: "Sarah Johnson",
      role: "Frequent Shopper",
      image: testimonial1,
    },
    {
      id: 2,
      quote:
        "I've never received so many compliments on a t-shirt before. Will definitely be ordering more!",
      author: "Michael Chen",
      role: "First-time Customer",
      image: testimonial2,
    },
    {
      id: 3,
      quote:
        "Their customer service is outstanding. Helped me exchange sizes quickly when I needed a different fit.",
      author: "Emma Rodriguez",
      role: "Loyal Customer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 4,
      quote:
        "Fast shipping and perfect packaging. The jeans fit exactly as described on the size chart.",
      author: "David Wilson",
      role: "Verified Buyer",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: 5,
      quote:
        "The summer collection is amazing! Lightweight fabrics perfect for hot weather.",
      author: "Priya Patel",
      role: "Seasonal Shopper",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      id: 6,
      quote:
        "Great value for money. I've purchased multiple items and they've all held up well after many washes.",
      author: "James Taylor",
      role: "Repeat Customer",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
    },
  ];
  const testimonials = [...originalTestimonials, ...originalTestimonials];

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
            <Link to="/product" className="cta-button pulse-animate">
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
                to="/commingSoon"
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
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Curated selections of our most popular items
          </motion.p>

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
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <motion.button
                    className="quick-view-btn"
                    whileHover={{ backgroundColor: "#e94560" }}
                  >
                    Quick View
                  </motion.button>
                  {product.isNew && <div className="new-badge">New</div>}
                  {product.discount && (
                    <div className="discount-badge">-{product.discount}%</div>
                  )}
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="price-container">
                    {product.originalPrice && (
                      <span className="original-price">
                        {product.originalPrice.toFixed(0)}
                      </span>
                    )}
                    <span className="current-price">
                      NRP. {product.price.toFixed(0)}
                    </span>
                  </div>
                  <motion.button
                    className="add-to-carts-btn"
                    whileHover={{
                      backgroundColor: "#e94560",
                      boxShadow: "0 5px 15px rgba(233, 69, 96, 0.4)",
                    }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="view-all-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/product" className="view-all-link">
              View All Products <span className="arrow">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

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
            Summer Vibes Collections
          </motion.h2>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Fresh styles for sunny days.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/products/summer" className="cta-button summer-cta">
              Explore Collection
              <motion.span
                className="arrow"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
        <div className="summer-image">
          <img
            src={summerCollection}
            alt="Summer Collection"
            className="summer-img"
          />
          <div className="summer-overlay"></div>
        </div>
      </motion.section>
      <motion.section
        className="testimonial-carousel"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="testimonial-header">
          <motion.h2
            className="testimonial-title"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Customer Love
          </motion.h2>
          <motion.p
            className="testimonial-subtitle"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hear what our happy customers say about us
          </motion.p>
        </div>

        <div
          className="testimonial-track-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="testimonial-track"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="testimonial-card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="testimonial-image"
                />
                <p className="testimonial-content">"{testimonial.quote}"</p>
                <h4 className="testimonial-author">{testimonial.author}</h4>
                <p className="testimonial-role">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
