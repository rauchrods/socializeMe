import React from "react";
import { useLocation } from "react-router-dom";

import "./pagelayout.scss";
import SideBar from "../../components/SideBar/SideBar";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <div className="main-container">
      {/* display sidebar to the left */}
      {pathname !== "/auth" && <SideBar />}
      {/* display the main container */}
      <div className={`display-container${pathname !== "/auth" ? " no-auth": ''}`}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
