import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import "./Canva.scss";
import Item from "../../molecules/Item/Item";
import recipeJson from "../../../utils/recipes.json";
import { getCanvaItems, getMenuItems, isEqual } from "../../../utils/utils";

function Canva() {
  const [canvaItems, setCanvaItems] = useState<string[]>([]);

  const getItemFromJson = (itemName: string) => {
    return { name: itemName, description: "", category: "" };
  };

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
          const item = getItemFromJson(itemName);
          return item && <Item item={item} key={index} isCanvaItem />;
        })}
      </div>
    </div>
  );
}

export default Canva;
