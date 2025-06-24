import React from "react";
import { motion } from "framer-motion";
import { FaTruck } from "react-icons/fa";
import "../../style/shipping-policy.css";

const ShippingPolicy = () => {
  const policies = [
    {
      icon: <FaTruck />,
      title: "Shipping Information",
      items: [
        {
          title: "Processing Time",
          content:
            "All orders are processed within 1-2 business days, excluding weekends and holidays. During high-demand periods or special promotions, processing time may be slightly extended. Once your order is processed, you will receive a confirmation email with tracking details.",
        },
        {
          title: "Shipping Options",
          content:
            "We provide multiple shipping options to best suit your needs. Standard shipping typically takes 3-5 business days depending on your location. Express shipping options are also available and usually arrive within 1-2 business days. All shipments include tracking numbers and are insured for the value of the goods.",
        },
        {
          title: "International Shipping",
          content:
            "We proudly offer international shipping to over 50 countries worldwide. Delivery times vary by destination but generally range from 7 to 21 business days. Customs fees, import duties, and taxes are the responsibility of the customer and may be charged upon delivery. We recommend checking with your local customs office for more information.",
        },
        {
          title: "Shipping Confirmation & Tracking",
          content:
            "Once your order has been shipped, you will receive a confirmation email that includes a tracking number and link. You can use this to follow your package’s journey to your doorstep. If you do not receive tracking information within 3 days, please contact our support team.",
        },
        {
          title: "Lost or Delayed Packages",
          content:
            "While we strive to ensure timely delivery, delays can occasionally occur due to weather, customs, or logistical challenges. If your package is significantly delayed or appears to be lost, please reach out to our support team, and we will work with the carrier to resolve the issue as quickly as possible.",
        },
      ],
    },
  ];

  return (
    <motion.div
      className="shipping-policy-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="shipping-policy-header">
        <h1>Shipping & Policies</h1>
        <p>
          Everything you need to know about our shipping timelines,
          international deliveries, and tracking your orders.
        </p>
      </div>

      {policies.map((policy, index) => (
        <motion.div
          className="policy-section"
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <h2>
            {policy.icon}
            {policy.title}
          </h2>
          <div className="policy-items">
            {policy.items.map((item, itemIndex) => (
              <div className="policy-item" key={itemIndex}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ShippingPolicy;
