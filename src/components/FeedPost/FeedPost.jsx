import React, { useState } from "react";
import "./feedPost.scss";
import Avatar from "../../UI/Avatar/Avatar";
import TextButton from "../../UI/TextButton/TextButton";
import PostFooter from "./PostFooter";

const FeedPost = ({ postUrl, userName, avatarUrl }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(1560);

  const likeHandler = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikes((currState) => currState - 1);
    } else {
      setIsLiked(true);
      setLikes((currState) => currState + 1);
    }
  };

  return (
    <div className="feed-post">
      <div className="post-header">
        <div className="left-sec">
          <Avatar src={avatarUrl} size="medium" />
          <p className="user-name">{userName}</p>
          <p className="post-creation-Date">·1W</p>
        </div>
        <div className="right-sec">
          <TextButton>Unfollow</TextButton>
        </div>
      </div>
      <div className="post-body">
        <img
          src={postUrl}
          alt={`${userName}-altPic`}
          onDoubleClick={likeHandler}
        />
      </div>
      <PostFooter userName={userName} isProfilePage={false} />
    </div>
  );
};

export default FeedPost;
