import React from "react";
import "./button.scss";

const Button = ({
  children,
  style = {},
  onClick = () => {},
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`my-button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
