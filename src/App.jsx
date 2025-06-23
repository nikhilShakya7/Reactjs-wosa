import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/header";
import Contact from "./assets/pages/contact";
import Home from "./assets/pages/home";
import ReactDOM from "react-dom/client";
import About from "./assets/pages/about";
import Blog from "./assets/pages/blog";
import Products from "./assets/pages/Products";
import Footer from "./components/footer";
import FAQ from "./assets/pages/faq";
import Cart from "./assets/pages/cart";
import { CartProvider } from "./components/cartContext";
import CheckoutPage from "./assets/pages/checkoutPage";
const App = () => {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
