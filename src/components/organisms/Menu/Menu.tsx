import React, { useRef } from "react";
import Button from "../../atoms/Button/Button";
import initialItems from "../../../utils/initialItems.json";
import "./Menu.scss";
import { toast } from "react-toastify";

function Menu() {
  const hiddenFileInput = useRef<any>(null);
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

  const handleClick = () => {
    if (hiddenFileInput && hiddenFileInput.current)
      hiddenFileInput.current.click();
  };

  const upload = async (files: FileList | null) => {
    if (!files || !files[0]) return;

    const fileText = await files[0].text();
    let validFile = false;

    try {
      const file = JSON.parse(fileText);
      if (file.length > 0) validFile = true;
    } catch {
      toast("❌ Invalid game file.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error("Error continuing game");
      return;
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
        <Button title="Continue Game" onClick={handleClick} />
        <input
          type="file"
          name="continue-game"
          onChange={(e) => upload(e.target.files)}
          style={{ display: "none" }}
          ref={hiddenFileInput}
        />
      </div>
    </div>
  );
}

export default Menu;
