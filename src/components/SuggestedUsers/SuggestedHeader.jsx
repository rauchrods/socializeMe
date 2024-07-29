import React from "react";
import TextButton from "../../UI/TextButton/TextButton";
import Avatar from "../../UI/Avatar/Avatar";
import "./suggestedHeader.scss";
import useLogout from "../../hooks/useLogout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SuggestedHeader = () => {
  const { handleLogout, loading, error } = useLogout();
  const currentUser = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  return (
    <div
      className="header"
      onClick={() => navigate(`/user/${currentUser.userName}`)}
    >
      <div className="left-sec">
        <Avatar
          src={
            currentUser.profilePicUrl !== ""
              ? currentUser.profilePicUrl
              : "avatarImg2.png"
          }
          size="medium"
        />
        <p>{currentUser.userName}</p>
      </div>

      <TextButton onClick={handleLogout}>Log out</TextButton>
    </div>
  );
};

export default SuggestedHeader;
