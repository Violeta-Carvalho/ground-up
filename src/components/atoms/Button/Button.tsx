import React from "react";
import "./Button.scss";

type ButtonProps = {
  title?: string;
  disabled?: boolean;
  link?: string;
  secondary?: boolean;
  removal?: boolean;
  inner?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

function Button(props: ButtonProps) {
  let className = "button";
  if (props.secondary) className += " secondary";
  if (props.inner) className += " inner";

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
