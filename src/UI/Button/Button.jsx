import React from "react";
import "./button.scss";

const Button = ({ children, style = {}, onClick = () => {} }) => {
  return (
    <button onClick={onClick} style={style} className="my-button">
      {children}
    </button>
  );
};

export default Button;
