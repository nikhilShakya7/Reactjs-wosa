import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [checkoutData, setCheckoutData] = useState(null);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Memoized cart values
  const cartValues = useMemo(() => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    return {
      cart,
      totalItems,
      subtotal,
      checkoutData,
      addToCart: (product) => {
        setCart((prev) => {
          const existing = prev.find((item) => item.id === product.id);
          return existing
            ? prev.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            : [...prev, { ...product, quantity: 1 }];
        });
      },
      removeFromCart: (productId) => {
        setCart((prev) => prev.filter((item) => item.id !== productId));
      },
      updateQuantity: (productId, newQuantity) => {
        if (newQuantity < 1) return;
        setCart((prev) =>
          prev.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
          )
        );
      },
      clearCart: () => setCart([]),
      checkout: async (customerData) => {
        try {
          const orderData = {
            customer: customerData,
            items: cart,
            total: cart.reduce(
              (sum, item) => sum + item.price * item.quantity,
              0
            ),
            date: new Date().toISOString(),
            status: "pending",
          };

          await new Promise((resolve) => setTimeout(resolve, 1000));
          setCheckoutData(orderData);
          setCart([]);
          return { success: true, order: orderData };
        } catch (error) {
          return { success: false, error: error.message };
        }
      },
    };
  }, [cart, checkoutData]);

  return (
    <CartContext.Provider value={cartValues}>{children}</CartContext.Provider>
  );
}

// Named export for useCart
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
