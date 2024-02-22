import React, { useEffect, useState } from "react";
import IItem from "../../../types/IItem";
import itemsJson from "../../../utils/items.json";
import Accordion from "../../molecules/Accordion/Accordion";
import "./ItemMenu.scss";
import { compare, getMenuItems } from "../../../utils/utils";

type ItemsProps = {
  items?: IItem[];
};

function ItemMenu(props: ItemsProps) {
  const [fundamentalItems, setFundamentalItems] = useState<IItem[]>([]);
  const [subAtomicItems, setSubAtomicItems] = useState<IItem[]>([]);
  const [atomItems, setAtomItems] = useState<IItem[]>([]);
  const [moleculeItems, setMoleculeItems] = useState<IItem[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  const refreshItemMenu = () => {
    let tempCurrentItems = getMenuItems();
    const tempFundamentalItems: IItem[] = [];
    const tempSubAtomicItems: IItem[] = [];
    const tempAtomItems: IItem[] = [];
    const tempMoleculeItems: IItem[] = [];

    tempCurrentItems.map((itemName: string) => {
      const currentItem = itemsJson.find(
        (item) => item.name === itemName
      ) as IItem;

      console.log(currentItem);
      switch (currentItem.category) {
        case "Fundamental":
          tempFundamentalItems.push({ ...currentItem });
          break;

        case "Subatomic":
          tempSubAtomicItems.push({ ...currentItem });
          break;

        case "Atom":
          tempAtomItems.push({ ...currentItem });
          break;

        case "Molecule":
          tempMoleculeItems.push({ ...currentItem });
          break;

        default:
          break;
      }
      return { ...currentItem };
    });

    setFundamentalItems(tempFundamentalItems.sort(compare));
    setSubAtomicItems(tempSubAtomicItems.sort(compare));
    setAtomItems(tempAtomItems.sort(compare));
    setMoleculeItems(tempMoleculeItems.sort(compare));
  };

  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  useEffect(refreshItemMenu, []);

  // eslint-disable-next-line no-restricted-globals
  addEventListener("menu-items-change", refreshItemMenu);

  return (
    <div className="item-menu">
      <h1>Particles</h1>
      <Accordion
        title="Fundamental"
        items={fundamentalItems}
        isOpen={currentIdx === 0}
        onClick={() => btnOnClick(0)}
      />
      {subAtomicItems.length > 0 && (
        <Accordion
          title="Sub Atomic"
          items={subAtomicItems}
          isOpen={currentIdx === 1}
          onClick={() => btnOnClick(1)}
        />
      )}
      {atomItems.length > 0 && (
        <Accordion
          title="Atomic"
          items={atomItems}
          isOpen={currentIdx === 2}
          onClick={() => btnOnClick(2)}
        />
      )}
      {moleculeItems.length > 0 && (
        <Accordion
          title="Molecular"
          items={moleculeItems}
          isOpen={currentIdx === 3}
          onClick={() => btnOnClick(3)}
        />
      )}
    </div>
  );
}

export default ItemMenu;
