import React from "react";
import Button from "../atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import initialItems from "../../utils/initialItems.json";

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
        <Button title="Start game" onClick={() => newGame()} />
      </header>
    </div>
  );
}

export default MainMenu;
