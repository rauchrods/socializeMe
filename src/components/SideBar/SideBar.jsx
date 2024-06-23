import React from "react";
import "./sidebar.scss";
import { MdLogout } from "react-icons/md";

import { sideBarItems } from "../../assets/constants/sideBarItems";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="header">
        <h2>socializeME</h2>
        <h2>sME</h2>
      </div>

      <div className="links">
        {sideBarItems.map((sideBarItem, index) => (
          <Link to={sideBarItem.link}  key={index}>
            <div className="item">
              {sideBarItem.icon}
              <p>{sideBarItem.text}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="footer">
        <Link to={"./"}>
          <div className="item">
            <MdLogout />
            <p>{"Log out"}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
