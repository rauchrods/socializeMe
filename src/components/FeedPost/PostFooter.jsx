import React, { useState } from "react";
import "./postFooter.scss";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import TextButton from "../../UI/TextButton/TextButton";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";

const PostFooter = ({ userName, isProfilePage }) => {
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
      {!isProfilePage && (
        <>
          <div className="footer-row">
            <span>{userName}</span>
            <span>{"_Feeling good"}</span>
          </div>
          <div className="footer-row">
            <span>{`View all ${likes} comments`}</span>
          </div>
        </>
      )}

      <div className="footer-row">
        <input type="text" name="" id="" placeholder="Add a comment.." />
        <TextButton className="comment-btn">Post</TextButton>
      </div>
    </div>
  );
};

export default PostFooter;
