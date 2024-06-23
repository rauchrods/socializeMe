import React from "react";
import "./textButton.scss";

const TextButton = ({ children, style = {}, onClick = () => {} , className=''}) => {
  return (
    <p className={`text-button ${className}`}style={style} onClick={onClick}>
      {children}
    </p>
  );
};

export default TextButton;
