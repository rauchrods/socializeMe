import { Skeleton } from "@mui/material";
import React from "react";

const constant = { backgroundColor: "rgb(150, 150, 150)" };

const ProfilePostSkeleton = () => {
  return (
    <div className="profile-post-skeleton">
      <Skeleton variant="rectangular" width={200} height={200} sx={constant} />
    </div>
  );
};

export default ProfilePostSkeleton;
