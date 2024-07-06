import React, { useState } from "react";
import "./profilePost.scss";
import { FaHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import MyModal from "../../UI/Modal/MyModal";
import Avatar from "../../UI/Avatar/Avatar";
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import CommentCard from "../CommentCard/CommentCard";
import PostFooter from "../FeedPost/PostFooter";

const comments = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];

const ProfilePost = ({ img }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const setModalHandler = () => {
    setIsModalOpen((currState) => !currState);
  };
  return (
    <div className="profile-post">
      <img src={img} alt={`${img}-alt`} />

      <div className="profile-post-overlay" onClick={setModalHandler}>
        <div className="info">
          <FaHeart />
          <p>7</p>
        </div>
        <div className="info">
          <FiMessageCircle />
          <p>7</p>
        </div>
      </div>

      {isModalOpen && (
        <MyModal>
          <div className="profile-post-modal">
            <div className="left-sec">
              <img src={img} alt={`${img}-alt`} />
            </div>
            <div className="right-sec">
              <div className="profile-header">
                <div className="content">
                  <Avatar src={img} size="small" />
                  <p>rauch _rodrigues</p>
                  <MdDelete />
                </div>
                <RxCross2 onClick={setModalHandler} />
              </div>
              <div className="profile-body">
                {comments.map((comment, index) => (
                  <CommentCard
                    key={index}
                    createdAt={"1h ago"}
                    userName={"rauch_rods"}
                    profilePic={`/img${comment}.png`}
                    text={"nice pic keep it up!!!"}
                  />
                ))}
              </div>
              <PostFooter isProfilePage={true} />
            </div>
          </div>
        </MyModal>
      )}
    </div>
  );
};

export default ProfilePost;
