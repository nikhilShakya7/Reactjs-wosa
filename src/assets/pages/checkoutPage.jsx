import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../components/cartContext";
import "../../style/checkout.css";
const CheckoutPage = () => {
  const { cart, subtotal, checkout } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    payment: "credit-card",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError(null);

    try {
      const result = await checkout(formData);

      if (result.success) {
        navigate("/orderConfirmation");
      } else {
        setError(result.error || "Checkout failed. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate("/products")}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="checkout-grid">
        <form onSubmit={handleSubmit} className="checkout-form">
          <h2>Shipping Information</h2>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Shipping Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <h2>Payment Method</h2>

          <div className="payment-methods">
            <label>
              <input
                type="radio"
                name="payment"
                value="credit-card"
                checked={formData.payment === "credit-card"}
                onChange={handleChange}
              />
              Credit Card
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={formData.payment === "paypal"}
                onChange={handleChange}
              />
              PayPal
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={formData.payment === "cod"}
                onChange={handleChange}
              />
              Cash on Delivery
            </label>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button
            type="submit"
            disabled={isProcessing}
            className="checkout-button"
          >
            {isProcessing ? "Processing..." : "Complete Order"}
          </button>
        </form>

        <div className="order-summary">
          <h2>Order Summary</h2>

          <div className="order-items">
            {cart.map((item) => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>
                    Rs {item.price} × {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="order-totals">
            <div className="total-row">
              <span>Subtotal</span>
              <span>Rs {subtotal.toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="total-row grand-total">
              <span>Total</span>
              <span>Rs {subtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
