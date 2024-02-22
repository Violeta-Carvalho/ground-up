import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import "./Canva.scss";
import recipeJson from "../../../utils/recipes.json";
import { getCanvaItems, getMenuItems, isEqual } from "../../../utils/utils";
import CanvaItem from "../../molecules/CanvaItem/CanvaItem";

function Canva() {
  const [canvaItems, setCanvaItems] = useState<string[]>([]);

  const getItems = () => {
    const tempCanvaItems = getCanvaItems();
    setCanvaItems(tempCanvaItems);
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

    if (!recipe) return;

    recipe.result.forEach((result) => {
      if (!currentItems.includes(result)) currentItems.push(result);
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
      <h1>Particle Accelerator</h1>
      <Button title="Accelerate particles" onClick={checkRecipes} secondary />
      <h2>Particles</h2>
      <div>
        {canvaItems.map((itemName, index) => {
          return <CanvaItem title={itemName} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Canva;