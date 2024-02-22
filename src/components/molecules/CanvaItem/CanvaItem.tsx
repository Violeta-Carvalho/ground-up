import React from "react";
import Button from "../../atoms/Button/Button";
import { getCanvaItems } from "../../../utils/utils";
import "./CanvaItem.scss";

type CanvaItemProps = {
  title: string;
};

function CanvaItem(props: CanvaItemProps) {
  const removeItem = (name: string) => {
    const canvaItems = getCanvaItems();

    const index = canvaItems.indexOf(name, 0);
    if (index > -1) {
      canvaItems.splice(index, 1);
    }

    localStorage.setItem("canva-items", JSON.stringify(canvaItems));
    dispatchEvent(new Event("canva-items-change"));
  };

  return (
    <div className="canva-item">
      <span>{props.title}</span>
      <Button title="x" onClick={() => removeItem(props.title)} inner />
    </div>
  );
}

export default CanvaItem;
