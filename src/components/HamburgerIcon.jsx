import React from "react";

const HamburgerIcon = ({ isOpen }) => {
  return (
    <div className={`hamburger ${isOpen ? "open" : ""}`}>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>

      <style jsx>{`
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hamburger-line {
          display: block;
          height: 2px;
          width: 100%;
          background: white;
          transition: all 0.3s ease;
        }

        .hamburger.open .hamburger-line:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open .hamburger-line:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      `}</style>
    </div>
  );
};

export default HamburgerIcon;
