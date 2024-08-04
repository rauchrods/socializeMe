import React from "react";
import "./profilePage.scss";
import { IoMdGrid } from "react-icons/io";
import { CiSaveDown2 } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import ProfilePosts from "../../components/Profile/ProfilePosts";
import useGetUserProfileByUsername from "../../hooks/useGetUserProfileByUsername";
import { useParams } from "react-router-dom";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileHeaderSkeleton from "../../components/Profile/ProfileHeaderSkeleton";

const ProfilePage = () => {
  const { userName } = useParams();

  const { isLoading, userProfile } = useGetUserProfileByUsername(userName);

  return (
    <div className="profile-page">
      {isLoading || !userProfile ? (
        <ProfileHeaderSkeleton />
      ) : (
        <ProfileHeader />
      )}

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

        <ProfilePosts />
      </div>
    </div>
  );
};

export default ProfilePage;
