import React from "react";
import "./commentCard.scss";
import Avatar from "../../UI/Avatar/Avatar";

const CommentCard = ({ createdAt, userName, profilePic, text }) => {
  return (
    <div className="comment-card">
      <Avatar src={profilePic} />
      <div className="content">
        <p className="username">{userName}</p>
        <p className="comment">{text}</p>
        <p className="date">{createdAt}</p>
      </div>
    </div>
  );
};

export default CommentCard;
