import React, { useState } from "react";
import "./feedPost.scss";
import Avatar from "../../UI/Avatar/Avatar";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import TextButton from "../../UI/TextButton/TextButton";

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
        <img src={postUrl} alt={`${userName}-altPic`} onDoubleClick={likeHandler} />
      </div>
      <div className="post-footer">
        <div className="footer-row">
          <FaRegHeart
            style={{ color: isLiked ? "#D22B2B" : "white" }}
            onClick={likeHandler}
          />
          <FaRegComment />
        </div>
        <div className="footer-row">
          {`${likes} ${likes > 1 ? "likes" : "like"}`}
        </div>
        <div className="footer-row">
          <span>{userName}</span>
          <span>{"_Feeling good"}</span>
        </div>
        <div className="footer-row">
          <span>{`View all ${likes} comments`}</span>
        </div>
        <div className="footer-row">
          <input type="text" name="" id="" placeholder="Add a comment.." />
          <TextButton className="comment-btn">Post</TextButton>
        </div>
      </div>
    </div>
  );
};

export default FeedPost;
