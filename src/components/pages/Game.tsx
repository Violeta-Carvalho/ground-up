import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemMenu from "../organisms/ItemMenu/ItemMenu";
import Canva from "../organisms/Canva/Canva";
import "./Game.scss";
import Menu from "../organisms/Menu/Menu";

function Game() {
  return (
    <>
      <section className="game">
        <ItemMenu />
        <Canva />
        <Menu />
      </section>
      <ToastContainer />
    </>
  );
}

export default Game;
