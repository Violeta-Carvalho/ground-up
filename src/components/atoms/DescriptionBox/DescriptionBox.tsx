import React from "react";
import "./DescriptionBox.scss";

type DescriptionBoxProps = {
  title?: string;
  protons?: number;
  neutrons?: number;
  text: string;
};

function DescriptionBox(props: DescriptionBoxProps) {
  return (
    <div className="description-box">
      <h2>{props.title}</h2>
      {props.protons && (
        <span>
          <b>Protons:</b> {props.protons}
          <br />
        </span>
      )}
      {(props.neutrons || props.neutrons === 0) && (
        <span>
          <b>Neutrons:</b> {props.neutrons}
          <br />
        </span>
      )}
      <span>{props.text}</span>
    </div>
  );
}

export default DescriptionBox;
