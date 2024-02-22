import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainMenu from "./components/pages/MainMenu";
import Game from "./components/pages/Game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
