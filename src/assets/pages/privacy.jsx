import React from "react";
import { Link } from "react-router-dom";
import "../../style/privacy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1>Privacy Policy</h1>
        <p className="last-updated">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="privacy-content">
        <section className="policy-section">
          <h2 className="section-title">
            <span className="title-decoration"></span>
            Introduction
          </h2>
          <p>
            At वसः, we are committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website or make a purchase from us.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="section-title">
            <span className="title-decoration"></span>
            Information We Collect
          </h2>
          <p>
            We may collect personal information including but not limited to:
          </p>
          <ul className="policy-list">
            <li>Contact information (name, email, phone number)</li>
            <li>Shipping and billing addresses</li>
            <li>
              Payment details (processed securely through our payment gateway)
            </li>
            <li>Purchase history and preferences</li>
            <li>Device and usage data</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="section-title">
            <span className="title-decoration"></span>
            How We Use Your Information
          </h2>
          <p>Your information helps us to:</p>
          <ul className="policy-list">
            <li>Process transactions and deliver products</li>
            <li>Improve our website and services</li>
            <li>Communicate with you about orders and promotions</li>
            <li>Prevent fraud and enhance security</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="section-title">
            <span className="title-decoration"></span>
            Data Security
          </h2>
          <p>
            We implement industry-standard security measures including
            encryption, secure servers, and restricted access to protect your
            personal information.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="section-title">
            <span className="title-decoration"></span>
            Your Rights
          </h2>
          <p>
            You have the right to access, correct, or delete your personal data.
            To exercise these rights or for any privacy-related inquiries,
            please contact us at:
          </p>
          <div className="contactInfo">
            <p>Email: privacy@vasah.com</p>
            <p>Phone: +977-1-5543625</p>
            <p>Address: Patan Dhoka, Lalitpur</p>
          </div>
        </section>

        <div className="policy-footer">
          <Link to="/" className="home-link">
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
