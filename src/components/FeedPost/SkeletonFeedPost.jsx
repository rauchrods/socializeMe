import React from "react";
import "./feedPost.scss";
import { Skeleton } from "@mui/material";
import "../../utils/colors.scss";

const constant = { backgroundColor: "rgb(150, 150, 150)" };

const SkeletonFeedPost = () => {
  return (
    <div className="feed-post">
      <div className="post-header">
        <div className="left-sec">
          <Skeleton variant="rounded" width={40} height={40} sx={constant} />
          <Skeleton variant="text" width={80} height={16} sx={constant} />
          <Skeleton variant="text" width={40} height={16} sx={constant} />
        </div>
        <div className="right-sec">
          <Skeleton variant="text" width={30} height={16} sx={constant} />
        </div>
      </div>
      <div className="post-body">
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={350}
          sx={constant}
        />
      </div>
      <div className="post-footer">
        <div className="footer-row">
          <Skeleton
            variant="rectangular"
            width={16}
            height={16}
            sx={constant}
          />
          <Skeleton
            variant="rectangular"
            width={16}
            height={16}
            sx={constant}
          />
        </div>
        <div className="footer-row">
          <Skeleton variant="text" width={100} height={14} sx={constant} />
        </div>
        <div className="footer-row">
          <Skeleton variant="text" width={50} height={14} sx={constant} />
          <Skeleton variant="text" width={50} height={14} sx={constant} />
        </div>

        <div className="footer-row">
          <Skeleton variant="text" width={30} height={14} sx={constant} />
          <Skeleton variant="text" width={30} height={14} sx={constant} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonFeedPost;
