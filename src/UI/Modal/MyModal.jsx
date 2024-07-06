import React from "react";
import "./myModal.scss";
import { createPortal } from "react-dom";

const MyModal = ({
  children,
  style = {},
  className = "",
  onClick = () => {},
}) => {
  return createPortal(
    <div className="myModal-wrapper">
      <div
        className={`modal-container${className ? ` ${className}` : ""}`}
        style={style}
        onClick={onClick}
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default MyModal;
