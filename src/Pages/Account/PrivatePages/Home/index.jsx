import React from "react";
import { AddPostCard, PostCard } from "../../../../Components";

const Home = () => {
  return (
    <div className="overflow-y-scroll h-[70dvh] lg:h-[90vh] scroll-smooth">
      <AddPostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default Home;
