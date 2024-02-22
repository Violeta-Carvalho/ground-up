import React, { useEffect, useState } from "react";
import IItem from "../../../types/IItem";
import itemsJson from "../../../utils/items.json";
import initialItems from "../../../utils/initialItems.json";
import Item from "../../molecules/Item/Item";
import "./ItemMenu.scss";
import { getMenuItems } from "../../../utils/utils";

type ItemsProps = {
  items?: IItem[];
};

function ItemMenu(props: ItemsProps) {
  const [items, setItems] = useState<IItem[]>(props.items || []);

  const refreshItemMenu = () => {
    let tempCurrentItems = getMenuItems();
    const mappedItems = tempCurrentItems.map((itemName: string) => {
      const currentItem = itemsJson.find(
        (item) => (item.name = itemName)
      ) as IItem;
      return { ...currentItem };
    });

    setItems(mappedItems);
  };

  useEffect(refreshItemMenu, []);

  // eslint-disable-next-line no-restricted-globals
  addEventListener("menu-items-change", refreshItemMenu);

  return (
    <div className="item-menu">
      <h1>Items</h1>
      {items.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </div>
  );
}

export default ItemMenu;
