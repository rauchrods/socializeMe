import React from "react";
import "./profilePage.scss";
import Avatar from "../../UI/Avatar/Avatar";
import Button from "../../UI/Button/Button";
import { IoMdGrid } from "react-icons/io";
import { CiSaveDown2 } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import ProfilePosts from "../../components/Profile/ProfilePosts";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="left-sec">
          <Avatar src={"/img4.png"} size="extra-large" />
        </div>
        <div className="right-sec">
          <div>
            <p className="user-name">Rauch_Rodrigues</p>
            <Button className="profile-btn">Edit Profile</Button>
          </div>
          <div className="info-cont">
            <p>
              <span>4</span> Posts
            </p>
            <p>
              <span>149</span> Followers
            </p>
            <p>
              <span>175</span> Following
            </p>
          </div>
          <div>your Username</div>
          <div>the description of the current user will be displayed here</div>
        </div>
      </div>
      <div className="profile-body">
        <div className="profile-tabs">
          <div className="profile-options">
            <IoMdGrid />
            <p>Posts</p>
          </div>
          <div className="profile-options">
            <CiSaveDown2 />
            <p>Saved</p>
          </div>
          <div className="profile-options">
            <FaHeart />
            <p>Likes</p>
          </div>
        </div>

        <ProfilePosts/>
      </div>
    </div>
  );
};

export default ProfilePage;
