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
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
