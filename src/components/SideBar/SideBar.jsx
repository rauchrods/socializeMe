import "./sidebar.scss";
import { MdLogout } from "react-icons/md";

import { sideBarItems } from "../../assets/constants/sideBarItems";
import { Link, useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import MyLoader from "../../UI/Loader/MyLoader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SideBar = () => {
  const navigate = useNavigate();
  const { handleLogout, loading, error } = useLogout();
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
        {!loading ? (
          <div className="item" onClick={handleLogout}>
            <MdLogout />
            <p>{"Log out"}</p>
          </div>
        ) : (
          <MyLoader size={"32px"} />
        )}
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default SideBar;
