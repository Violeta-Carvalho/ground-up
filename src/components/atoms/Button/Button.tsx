import React from "react";
import "./Button.scss";

type ButtonProps = {
  title?: string;
  disabled?: boolean;
  link?: string;
  secondary?: boolean;
  removal?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

function Button(props: ButtonProps) {
  const className = props.secondary ? "button secondary" : "button";
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      className={className}
    >
      <span>{props.title}</span>
      {props.removal && <span>x</span>}
    </button>
  );
}

export default Button;
