import React, { useState } from "react";
import "./profileHeader.scss";
import Avatar from "../../UI/Avatar/Avatar";
import Button from "../../UI/Button/Button";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const ProfileHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userProfile = useSelector(
    (state) => state.userProfileStore.userProfile
  );

  const loggedUser = useSelector((state) => state.auth.user);

  const isVisitingOwnProfile = userProfile.userName === loggedUser.userName;

  return (
    <div className="profile-header">
      <div className="left-sec">
        <Avatar
          src={
            userProfile.profilePicUrl
              ? userProfile.profilePicUrl
              : "/avatarImg.png"
          }
          size="extra-large"
        />
      </div>
      <div className="right-sec">
        <div>
          <p className="user-name">{userProfile.fullName}</p>
          {isVisitingOwnProfile ? (
            <Button
              className="profile-btn"
              onClick={() => setIsModalOpen(true)}
            >
              Edit Profile
            </Button>
          ) : (
            <Button className="profile-btn">Follow</Button>
          )}
        </div>
        <div className="info-cont">
          <p>
            <span>{userProfile.posts.length}</span> Posts
          </p>
          <p>
            <span>{userProfile.followers.length}</span> Followers
          </p>
          <p>
            <span>{userProfile.following.length}</span> Following
          </p>
        </div>
        <div>{userProfile.userName}</div>
        <div>{userProfile.bio ? userProfile.bio : "No Bio"}</div>
      </div>
      {isModalOpen && <EditProfile />}
    </div>
  );
};

export default ProfileHeader;
