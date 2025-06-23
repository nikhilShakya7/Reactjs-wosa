import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import Contact from "./assets/pages/contact";
import About from "./assets/pages/about";
import Blog from "./assets/pages/blog";
import FAQ from "./assets/pages/faq";
import Home from "./assets/pages/Home";
import Cart from "./assets/pages/cart";
import { CartProvider } from "./components/cartContext";
import CheckoutPage from "./assets/pages/checkoutPage";
import OrderConfirmation from "./assets/pages/orderConfirmatio";
import PrivacyPolicy from "./assets/pages/privacy";
import Product from "./assets/pages/product";
const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div>
        <CartProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/product" element={<Product />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />

              <Route
                path="/orderConfirmation"
                element={<OrderConfirmation />}
              />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </div>
    </>
  );
};

export default App;
