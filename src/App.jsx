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
import Products from "./assets/pages/Products";
import Footer from "./components/footer";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
