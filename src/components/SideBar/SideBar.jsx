import "./sidebar.scss";
import { MdLogout } from "react-icons/md";

import { sideBarItems } from "../../assets/constants/sideBarItems";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="side-bar">
      <div className="header" onClick={() => navigate("/auth")}>
        <h2>socializeME</h2>
        <h2>sME</h2>
      </div>

      <div className="links">
        {sideBarItems.map((sideBarItem, index) => (
          <Link to={sideBarItem.link} key={index}>
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
