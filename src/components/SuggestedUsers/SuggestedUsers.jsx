import React from "react";
import "./suggestedUsers.scss";
import TextButton from "../../UI/TextButton/TextButton";
import Avatar from "../../UI/Avatar/Avatar";
import { useNavigate } from "react-router-dom";
import SuggestedUser from "../SuggestedUser/SuggestedUser";

const SuggestedUsers = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <div className="left-sec">
          <Avatar src={"img1.png"} size="medium" />
          <p>rauchRodrigues</p>
        </div>

        <TextButton onClick={() => navigate("./auth")}>Log out</TextButton>
      </div>
      <div className="body">
        <div className="top-sec">
          <p>Suggested for you</p>
          <TextButton className="see-all">SeeAll</TextButton>
        </div>

        <SuggestedUser
          userName={"rauchRodszz"}
          avatarUrl={"img1.png"}
          followers={699}
        />
        <SuggestedUser
          userName={"rauchRodszz"}
          avatarUrl={"img1.png"}
          followers={699}
        />
        <SuggestedUser
          userName={"rauchRodszz"}
          avatarUrl={"img1.png"}
          followers={699}
        />
      </div>

      <div className="bottom-sec">
        <p>© 2024 built by Rauch Rodrigues</p>
      </div>
    </>
  );
};

export default SuggestedUsers;
