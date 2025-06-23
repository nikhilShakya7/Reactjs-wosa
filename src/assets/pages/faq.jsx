import React, { useState } from "react";
import styles from "../../style/faq.module.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What materials do you use in your products?",
      answer:
        "We use high-quality, sustainable materials including organic cotton, bamboo fibers, and recycled polyester. All our materials are ethically sourced and environmentally friendly.",
    },
    {
      question: "How do I care for my वसः clothing?",
      answer:
        "We recommend gentle machine wash with similar colors in cold water. Avoid bleach and tumble dry on low heat. For specific care instructions, please check the label inside your garment.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for unused items with original tags attached. Please contact our customer service for return authorization and instructions.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship worldwide. Shipping costs and delivery times vary depending on your location. You'll see the exact shipping costs during checkout.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a confirmation email with tracking information. You can also track your order by logging into your account on our website.",
    },
  ];

  return (
    <div className={styles.faqContainer}>
      <header className={styles.faqHeader}>
        <h1 className={styles.faqTitle}>FAQs</h1>
        <p className={styles.faqSubtitle}>
          Find answers to common questions about our products and services
        </p>
      </header>

      <div className={styles.faqList}>
        {faqItems.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span
                className={`${styles.faqToggle} ${
                  activeIndex === index ? styles.open : ""
                }`}
              >
                +
              </span>
            </div>
            <div
              className={`${styles.faqAnswer} ${
                activeIndex === index ? styles.show : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
