import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./assets/pages/home";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Home />
      </div>
    </Router>
  );
};

export default App;
