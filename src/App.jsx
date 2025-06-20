import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>
    </Router>
  );
};

export default App;
