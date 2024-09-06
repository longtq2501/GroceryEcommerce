import "./Button.scss";
import React from "react";

const Button = (props) => {
  return (
    <button
      className={`button ${props.className || ""}`}
      type={`${props.type || ""}`}
      value={`${props.value || ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
