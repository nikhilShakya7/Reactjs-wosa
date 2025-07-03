import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../backend/validation";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import "../../style/contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = (data) => {
    emailjs
      .send("service_6yofzip", "template_fk5h9f7", data, "OUct0zR11leVWOEH-")
      .then(
        () => {
          setSubmitStatus("success");
          reset();
        },
        () => {
          setSubmitStatus("error");
        }
      );
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <motion.section
        className="contact-hero"
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            We'd love to hear from you
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info */}
      <div className="contact-container">
        <motion.div
          className="contact"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Get in Touch</h2>
          <p>
            Have questions about our products or need assistance? Reach out
            through any of these channels:
          </p>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Our Location</h3>
              <p>
                123 Fashion Street
                <br />
                Style District, SC 12345
              </p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <h3>Phone</h3>
              <p>
                +1 (123) 456-7890
                <br />
                Mon-Fri: 9am-6pm
              </p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>
                info@vasah.com
                <br />
                support@vasah.com
              </p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <FaClock />
              </div>
              <h3>Hours</h3>
              <p>
                Monday-Friday: 9am-6pm
                <br />
                Saturday: 10am-4pm
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="contact-form-container"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                {...register("name")}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email")}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="What's this about?"
                {...register("subject")}
              />
              {errors.subject && (
                <p className="error">{errors.subject.message}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Type your message here..."
                {...register("message")}
              ></textarea>
              {errors.message && (
                <p className="error">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
            {submitStatus === "error" && (
              <motion.div
                className="error-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Oops! Something went wrong. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>

      {/* Map */}
      <div className="map-container">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132345!2d-73.98784492452578!3d40.74844097138989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTkuNiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
