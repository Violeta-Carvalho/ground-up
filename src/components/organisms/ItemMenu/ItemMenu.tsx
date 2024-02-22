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
  const [materialItems, setMaterialItems] = useState<IItem[]>([]);

  const [fundOpen, setFundOpen] = useState(true);
  const [atomOpen, setAtomOpen] = useState(true);
  const [subAtomOpen, setSubAtomOpen] = useState(true);
  const [molOpen, setMolOpen] = useState(true);
  const [matOpen, setMatOpen] = useState(true);

  const [curItems, setCurItems] = useState(3);

  const totalItems = itemsJson.length;

  const refreshItemMenu = () => {
    let tempCurrentItems = getMenuItems();
    const tempFundamentalItems: IItem[] = [];
    const tempSubAtomicItems: IItem[] = [];
    const tempAtomItems: IItem[] = [];
    const tempMoleculeItems: IItem[] = [];
    const tempMaterialItems: IItem[] = [];

    setCurItems(tempCurrentItems.length);

    tempCurrentItems.forEach((itemName: string) => {
      const currentItem = itemsJson.find(
        (item) => item.name === itemName
      ) as IItem;

      if (!currentItem) return;

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

        case "Material":
          tempMaterialItems.push({ ...currentItem });
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
    setMaterialItems(tempMaterialItems.sort(compare));
  };

  useEffect(refreshItemMenu, []);

  // eslint-disable-next-line no-restricted-globals
  addEventListener("menu-items-change", refreshItemMenu);

  return (
    <div>
      <div className="item-menu-header">
        <h1>Particles</h1>
        <span>
          {curItems}/{totalItems}
        </span>
      </div>

      <div className="item-menu">
        <div className="body">
          <Accordion
            title="Fundamental"
            items={fundamentalItems}
            isOpen={fundOpen}
            onClick={() => setFundOpen(!fundOpen)}
          />
          {subAtomicItems.length > 0 && (
            <Accordion
              title="Sub Atomic"
              items={subAtomicItems}
              isOpen={subAtomOpen}
              onClick={() => setSubAtomOpen(!subAtomOpen)}
            />
          )}
          {atomItems.length > 0 && (
            <Accordion
              title="Atomic"
              items={atomItems}
              isOpen={atomOpen}
              onClick={() => setAtomOpen(!atomOpen)}
            />
          )}
          {moleculeItems.length > 0 && (
            <Accordion
              title="Molecular"
              items={moleculeItems}
              isOpen={molOpen}
              onClick={() => setMolOpen(!molOpen)}
            />
          )}
          {materialItems.length > 0 && (
            <Accordion
              title="Material"
              items={materialItems}
              isOpen={matOpen}
              onClick={() => setMatOpen(!matOpen)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemMenu;
