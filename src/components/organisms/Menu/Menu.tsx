import React from "react";
import Button from "../../atoms/Button/Button";
import initialItems from "../../../utils/initialItems.json";
import "./Menu.scss";

function Menu() {
  const download = () => {
    const content = localStorage.getItem("menu-items");
    const element = document.createElement("a");
    const textFile = new Blob([content || JSON.stringify(initialItems)], {
      type: "text/json",
    });
    element.href = URL.createObjectURL(textFile);
    element.download = "savedGame.json";
    document.body.appendChild(element);
    element.click();
  };

  const upload = async (files: FileList | null) => {
    if (!files || !files[0]) return;

    const fileText = await files[0].text();
    let validFile = false;

    try {
      const file = JSON.parse(fileText);
      if (file.length > 0) validFile = true;
    } catch {
      console.error("Error continuing game");
    }

    localStorage.setItem(
      "menu-items",
      validFile ? fileText : JSON.stringify(initialItems)
    );
    dispatchEvent(new Event("menu-items-change"));
  };

  return (
    <div className="menu">
      <Button title="Save game" onClick={() => download()} />
      <div>
        <label htmlFor="continue-game">Continue Game</label>
        <input
          type="file"
          name="continue-game"
          onChange={(e) => upload(e.target.files)}
        />
      </div>
    </div>
  );
}

export default Menu;
