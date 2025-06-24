import React from "react";
import "../../style/commingSoon.css";
const CommingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1 className="coming-soon-title">Coming Soon!</h1>
        <p className="coming-soon-subtitle">
          We're working hard to bring you something amazing. Stay tuned!
        </p>

        <div className="coming-soon-countdown">
          <div className="countdown-item">
            <div className="countdown-number">14</div>
            <div className="countdown-label">Days</div>
          </div>
        </div>

        <form className="coming-soon-form">
          <input
            type="email"
            placeholder="Enter your email for updates"
            className="coming-soon-input"
            required
          />
          <button type="submit" className="coming-soon-button">
            Notify Me
          </button>
        </form>

        <div className="social-links">
          <a href="#" className="social-link">
            📱
          </a>
          <a href="#" className="social-link">
            💻
          </a>
          <a href="#" className="social-link">
            📧
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
