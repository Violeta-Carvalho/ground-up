import React from "react";
import "./DescriptionBox.scss";

type DescriptionBoxProps = {
  title?: string;
  text: string;
};

function DescriptionBox(props: DescriptionBoxProps) {
  return (
    <div className="description-box">
      <h2>{props.title}</h2>
      <span>{props.text}</span>
    </div>
  );
}

export default DescriptionBox;
