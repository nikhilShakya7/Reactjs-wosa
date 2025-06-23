import React from "react";
import "../../style/cart.css";
import { Link } from "react-router-dom";
import { useCart } from "../../components/cartContext";
const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    totalItems,
  } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart ({totalItems})</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/products" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-category">{item.category}</p>
                  <p className="item-price">Rs {item.price.toFixed(2)}</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal ({totalItems} items)</span>
              <span>Rs {subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>Rs {subtotal.toFixed(2)}</span>
            </div>

            <button className="checkout-btn">Proceed to Checkout</button>
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
            <Link to="/products" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
