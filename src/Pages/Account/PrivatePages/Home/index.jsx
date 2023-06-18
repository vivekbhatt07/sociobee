import React from "react";
import { useLocation } from "react-router-dom";

import { AddPostCard, PostCard } from "../../../../Components";
import { usePost } from "../../../../Context";

const Home = () => {
  const { state } = usePost();
  return (
    <div className="overflow-y-scroll h-[70dvh] md:h-[80dvh] lg:h-[90vh] scroll-smooth">
      <AddPostCard />
      {state?.postList.map((currentPost) => {
        return <PostCard {...currentPost} key={currentPost?._id} />;
      })}
    </div>
  );
};

export default Home;
