import React from "react";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import "./pagelayout.scss";
import SideBar from "../../components/SideBar/SideBar";
import { auth } from "../../firebase/firebase";
import { ToastContainer } from "react-toastify";

const PageLayout = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const { pathname } = useLocation();

  const canRenderSideBar = pathname !== "/auth" && user;
  
  return (
    <div className="main-container">
      {/* display sidebar to the left */}
      {canRenderSideBar && <SideBar />}
      {/* display the main container */}
      <div
        className={`display-container${pathname !== "/auth" ? " no-auth" : ""}`}
      >
        {children}
      </div>
      <ToastContainer />
    </div>
  );
};

export default PageLayout;
