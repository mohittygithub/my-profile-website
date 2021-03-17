import React from "react";
import About from "./components/About/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Skills from "./components/skills/Skills";
import Youtube from "./components/youtube/Youtube";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Youtube />
    </div>
  );
};
export default App;
