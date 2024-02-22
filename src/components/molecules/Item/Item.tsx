import React, { useState } from "react";
import Button from "../../atoms/Button/Button";
import IItem from "../../../types/IItem";
import DescriptionBox from "../../atoms/DescriptionBox/DescriptionBox";
import "./Item.scss";
import { getCanvaItems } from "../../../utils/utils";

type ItemProps = {
  item: IItem;
  isCanvaItem?: boolean;
};

function Item(props: ItemProps) {
  const [isHovering, setIsHovering] = useState(false);

  const addItem = (name: string) => {
    const canvaItems = getCanvaItems();
    canvaItems.push(name);

    localStorage.setItem("canva-items", JSON.stringify(canvaItems));
    dispatchEvent(new Event("canva-items-change"));
  };

  const removeItem = (name: string) => {
    const canvaItems = getCanvaItems();

    const index = canvaItems.indexOf(name, 0);
    if (index > -1) {
      canvaItems.splice(index, 1);
    }

    localStorage.setItem("canva-items", JSON.stringify(canvaItems));
    dispatchEvent(new Event("canva-items-change"));
  };

  const handleClick = (name: string) => {
    props.isCanvaItem ? removeItem(name) : addItem(name);
  };

  return (
    <div className="item">
      <Button
        title={props.item.name}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => handleClick(props.item.name)}
        removal={props.isCanvaItem}
      />
      {!props.isCanvaItem && isHovering && (
        <DescriptionBox
          title={props.item.name}
          text={props.item.description}
          protons={props.item.protons}
          neutrons={props.item.neutrons}
        />
      )}
    </div>
  );
}

export default Item;
