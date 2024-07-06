import React, { useEffect, useState } from "react";
import "./profilePosts.scss";
import ProfilePostSkeleton from "./ProfilePostSkeleton";
import ProfilePost from "./ProfilePost";

const nums = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="profile-posts">
      {isLoading &&
        nums.map((num, index) => <ProfilePostSkeleton key={index} />)}

      {!isLoading &&
        nums.map((num, index) => (
          <ProfilePost img={`/img${num}.png`} key={index} />
        ))}
    </div>
  );
};

export default ProfilePosts;
