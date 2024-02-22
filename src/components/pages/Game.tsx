import React from "react";
import ItemMenu from "../organisms/ItemMenu/ItemMenu";
import Canva from "../organisms/Canva/Canva";
import "./Game.scss";
import Menu from "../organisms/Menu/Menu";

function Game() {
  return (
    <section className="game">
      <ItemMenu />
      <Canva />
      <Menu />
    </section>
  );
}

export default Game;
