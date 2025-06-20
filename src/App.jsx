import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./assets/pages/home";
import Footer from "./components/footer";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
