import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import GENRE from "./components/Genre/Genre";
import GOTY from "./components/GOTY/goty";
import ABOUTME from "./components/AboutMe/AboutMe";
import EASTER from "./components/EasterEgg/EasterEgg";
import GAMEPAGE from "./components/GamePage/GamePage";

import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genre" element={<GENRE />} />
          <Route path="/goty" element={<GOTY />} />
          <Route path="/about" element={<ABOUTME />} />
          <Route path="/easteregg" element={<EASTER />} />
          <Route path="/gamerating/:id" element={<GAMEPAGE />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
