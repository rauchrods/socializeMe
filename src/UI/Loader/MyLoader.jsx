import React from "react";
import "./myLoader.scss";

const MyLoader = ({ size }) => {
  return (
    <span
      class="loader"
      style={{
        width: size,
        height: size,
      }}
    ></span>
  );
};

export default MyLoader;
