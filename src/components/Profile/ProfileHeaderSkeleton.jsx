import React from "react";
import "./profileHeader.scss";
import { Skeleton } from "@mui/material";
import Button from "../../UI/Button/Button";

const constant = { backgroundColor: "rgb(150, 150, 150)" };

const ProfileHeaderSkeleton = () => {
  return (
    <div className="profile-header">
      <div className="left-sec">
        <Skeleton variant="circular" width={80} height={80} sx={constant} />
      </div>
      <div className="right-sec">
        <div>
          <Skeleton variant="text" width={150} height={32} sx={constant} />
          <Skeleton
            variant="rectangular"
            width={100}
            height={22}
            sx={constant}
          />
        </div>
        <div className="info-cont">
          <p>
            <span>
              <Skeleton variant="text" width={32} height={24} sx={constant} />
            </span>
            <Skeleton variant="text" width={50} height={24} sx={constant} />
          </p>
          <p>
            <span>
              <Skeleton variant="text" width={32} height={24} sx={constant} />
            </span>
            <Skeleton variant="text" width={50} height={24} sx={constant} />
          </p>
          <p>
            <span>
              <Skeleton variant="text" width={32} height={24} sx={constant} />
            </span>
            <Skeleton variant="text" width={50} height={24} sx={constant} />
          </p>
        </div>
        <div>
          <Skeleton variant="text" width={120} height={24} sx={constant} />
        </div>
        <div>
          <Skeleton variant="text" width={120} height={20} sx={constant} />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeaderSkeleton;
