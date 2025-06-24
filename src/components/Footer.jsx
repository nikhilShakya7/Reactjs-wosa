import React from "react";
import "../style/footer.css";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
      >
        {/* About Section */}
        <motion.div className="footer-section" variants={itemVariants}>
          <h3 className="footer-heading">वसः</h3>
          <p className="footer-text">
            Bringing you the latest trends and timeless classics since 2015.
            We're committed to sustainable fashion and exceptional quality.
          </p>
          <div className="social-icons">
            <motion.a
              href="#"
              className="social-icon"
              whileHover={{ y: -5, color: "#e94560" }}
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="#"
              className="social-icon"
              whileHover={{ y: -5, color: "#e94560" }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="#"
              className="social-icon"
              whileHover={{ y: -5, color: "#e94560" }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="#"
              className="social-icon"
              whileHover={{ y: -5, color: "#e94560" }}
            >
              <FaPinterest />
            </motion.a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="footer-section" variants={itemVariants}>
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <motion.li whileHover={{ x: 5 }}>
              <a href="/">Home</a>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <a href="product">Shop</a>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <a href="about">About Us</a>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <a href="#">Collections</a>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <a href="blog">Blog</a>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <a href="contact">Contact</a>
            </motion.li>
          </ul>
        </motion.div>

        {/* Customer Service */}
        <motion.div className="footer-section" variants={itemVariants}>
          <h3 className="footer-heading">Customer Service</h3>
          <ul className="footer-links">
            <motion.li whileHover={{ x: 5 }}>
              <a href="faq">FAQs</a>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <a href="#">Shipping Policy</a>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <a href="#">Returns & Exchanges</a>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <a href="#">Size Guide</a>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <a href="#">Payment Methods</a>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <a href="privacy">Privacy Policy</a>
            </motion.li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div className="footer-section" variants={itemVariants}>
          <h3 className="footer-heading">Contact Us</h3>
          <div className="contact-info">
            <motion.div className="contact-item" whileHover={{ x: 5 }}>
              <MdLocationOn className="contact-icon" />
              <span>123, Patan Dhoka, Lalitpur</span>
            </motion.div>
            <motion.div className="contact-item" whileHover={{ x: 5 }}>
              <MdPhone className="contact-icon" />
              <span>5543625</span>
            </motion.div>
            <motion.div className="contact-item" whileHover={{ x: 5 }}>
              <MdEmail className="contact-icon" />
              <span>info@wosha.com</span>
            </motion.div>
          </div>

          <div className="newsletter">
            <h4>Subscribe to Newsletter</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <motion.button
                type="submit"
                className="subscribe-btn"
                whileHover={{ backgroundColor: "#d13354" }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} वसः All rights reserved.</p>
          <div className="payment-methods">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-paypal"></i>
            <i className="fab fa-cc-apple-pay"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
