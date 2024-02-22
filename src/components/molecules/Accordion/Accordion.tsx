import React, { useEffect, useState } from "react";
import IItem from "../../../types/IItem";
import Item from "../Item/Item";
import "./Accordion.scss";

type AccordionProps = {
  title: string;
  items: IItem[];
  isOpen: boolean;
  onClick: () => void;
};

function Accordion(props: AccordionProps) {
  const [height, setHeight] = useState<number | string>(0);

  useEffect(() => {
    if (props.isOpen) {
      setHeight("100%");
    } else {
      setHeight(0);
    }
  }, [props.isOpen]);

  return (
    <ul className="accordion">
      <h2 className="accordion-title">
        <button className="accordion-btn" onClick={props.onClick}>
          {props.title}
        </button>
      </h2>
      <li className={`accordion-item ${props.isOpen ? "active" : ""}`}>
        <div className="accordion-item-container" style={{ height }}>
          {props.isOpen && (
            <div className="accordion-item-content">
              {props.items.map((item, index) => {
                return <Item item={item} key={index} />;
              })}
            </div>
          )}
        </div>
      </li>
    </ul>
  );
}

export default Accordion;
