import React, { useEffect, useState } from "react";

import "./feedPosts.scss";
import FeedPost from "../FeedPost/FeedPost";
import SkeletonFeedPost from "../FeedPost/SkeletonFeedPost";

const nums = [
  1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4,
];

const FeedPosts = () => {
  const [isLodaing, setIsLoading] = useState(true);

  console.log("isloading: ", isLodaing);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="feed-posts">
      {isLodaing && nums.map((index) => <SkeletonFeedPost key={Math.random()} />)}
      {!isLodaing &&
        nums.map((num, index) => (
          <FeedPost
            postUrl={`img${num}.png`}
            userName={"rauchRodsz"}
            avatarUrl={`img${num}.png`}
            key={index}
          />
        ))}
    </div>
  );
};

export default FeedPosts;
