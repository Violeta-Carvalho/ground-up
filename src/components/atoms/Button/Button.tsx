import React from "react";
import "./Button.scss";

type ButtonProps = {
  title?: string;
  icon?: any;
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
  if (props.icon) className += " icon";

  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      className={className}
    >
      {props.icon && <props.icon />}
      {props.title && <span>{props.title}</span>}
      {props.removal && <span>x</span>}
    </button>
  );
}

export default Button;
