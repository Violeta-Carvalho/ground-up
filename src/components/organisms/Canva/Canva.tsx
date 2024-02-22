import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import "./Canva.scss";
import recipeJson from "../../../utils/recipes.json";
import { getCanvaItems, getMenuItems, isEqual } from "../../../utils/utils";
import CanvaItem from "../../molecules/CanvaItem/CanvaItem";
import { toast } from "react-toastify";

function Canva() {
  const [canvaItems, setCanvaItems] = useState<string[]>([]);

  const getItems = () => {
    const tempCanvaItems = getCanvaItems();
    setCanvaItems(tempCanvaItems);
  };

  const clearAccelerator = () => {
    setCanvaItems([]);
  };

  const checkRecipes = () => {
    let recipe;
    const currentItems = getMenuItems();

    for (let i = 0; i < recipeJson.length; i++) {
      if (isEqual(recipeJson[i].recipe, canvaItems)) {
        recipe = recipeJson[i];
        break;
      }
    }

    if (!recipe) {
      toast("❌ Nothing happens...", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    let somethingNew = false;
    recipe.result.forEach((result) => {
      if (!currentItems.includes(result)) {
        currentItems.push(result);
        somethingNew = true;
      }
    });

    if (somethingNew)
      toast("🎉 You created a new particle!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

    setCanvaItems(recipe.result);
    localStorage.setItem("menu-items", JSON.stringify(currentItems));
    dispatchEvent(new Event("menu-items-change"));
  };

  useEffect(getItems, []);
  useEffect(
    () => localStorage.setItem("canva-items", JSON.stringify(canvaItems)),
    [canvaItems]
  );

  // eslint-disable-next-line no-restricted-globals
  addEventListener("canva-items-change", getItems);

  return (
    <div className="canva">
      <div className="header">
        <h1>Particle Accelerator</h1>
        <Button title="Clear accelerator" onClick={clearAccelerator} />
      </div>
      <Button title="Accelerate particles" onClick={checkRecipes} secondary />
      <div className="accelerator">
        {canvaItems.map((itemName, index) => {
          return <CanvaItem title={itemName} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Canva;
