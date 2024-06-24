import React from "react";

import "./homePage.scss";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="feed-posts-container">
        <FeedPosts />
      </div>
      <div className="suggested-users">
        <SuggestedUsers />
      </div>
    </div>
  );
};

export default HomePage;
