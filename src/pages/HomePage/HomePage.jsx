import React from "react";

import "./homePage.scss";
import FeedPosts from "../../components/FeedPosts/FeedPosts";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="feed-posts-container">
        <FeedPosts/>
      </div>
      <div className="suggested-users">Suggested Users</div>
    </div>
  );
};

export default HomePage;
