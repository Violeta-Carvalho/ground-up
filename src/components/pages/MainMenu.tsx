import React from "react";
import Button from "../atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import initialItems from "../../utils/initialItems.json";
import logo from "./logo.svg";

function MainMenu() {
  const navigator = useNavigate();

  const newGame = () => {
    localStorage.setItem("canva-items", "[]");
    localStorage.setItem("menu-items", JSON.stringify(initialItems));

    navigator("/game");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ground Up</h1>
        <h2>Make everything!</h2>
        <Button title="Start game" onClick={() => newGame()} />
      </header>
    </div>
  );
}

export default MainMenu;
