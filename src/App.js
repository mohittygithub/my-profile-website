import React from "react";
import About from "./components/About/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
};
export default App;
