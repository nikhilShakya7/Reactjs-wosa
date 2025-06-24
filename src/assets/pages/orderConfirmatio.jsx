import React from "react";
import "../../style/orderConfirmation.css";
import { Link } from "react-router-dom";
import { useCart } from "../../components/cartContext";
const OrderConfirmation = () => {
  const { checkoutData } = useCart();

  if (!checkoutData) {
    return (
      <div className="confirmation-container">
        <h2>No order found</h2>
        <Link to="/products" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <h1>Thank you for your order!</h1>
        <p className="order-number">
          Order #: {checkoutData.date.slice(0, 10).replace(/-/g, "")}-
          {Math.floor(Math.random() * 10000)}
        </p>

        <div className="order-summary">
          <h3>Order Summary</h3>
          {checkoutData.items.map((item) => (
            <div key={item.id} className="order-item">
              <img src={item.images} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>
                  Rs {item.price} × {item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="order-total">
          <h3>Total: Rs {checkoutData.total.toFixed(2)}</h3>
        </div>

        <div className="shipping-info">
          <h3>Shipping To</h3>
          <p>
            <b>Customer Name:</b> {checkoutData.customer.name}
          </p>
          <p>
            <b>Adress: </b>
            {checkoutData.customer.address}
          </p>
          <p>
            <b>Phone Number: </b>
            {checkoutData.customer.number}
          </p>
          <p>
            <b>Email: </b>
            {checkoutData.customer.email}
          </p>
        </div>

        <Link to="/product" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
