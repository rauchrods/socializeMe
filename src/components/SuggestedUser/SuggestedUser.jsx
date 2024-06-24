import React, { useState } from "react";
import "./suggestedUser.scss";
import Avatar from "../../UI/Avatar/Avatar";
import TextButton from "../../UI/TextButton/TextButton";

const SuggestedUser = ({ userName, followers, avatarUrl }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  const setFollowHandler = () => {
    setIsFollowed((currState) => !currState);
  };
  return (
    <div className="suggested-user-card">
      <div className="left-sec">
        <Avatar src={avatarUrl} size="medium" />
        <div className="info">
          <p>{userName}</p>
          <p>{`${followers} followers`}</p>
        </div>
      </div>

      <TextButton onClick={setFollowHandler}>
        {isFollowed ? "Unfollow" : "Follow"}
      </TextButton>
    </div>
  );
};

export default SuggestedUser;
