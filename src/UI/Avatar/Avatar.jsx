import React from "react";

import "./avatar.scss";

const Avatar = ({ src, size = "small" }) => {
  return <img src={src} alt={"avatar"} className={`user-avatar ${size}`} />;
};

export default Avatar;
