import React from "react";
import { useLocation } from "react-router-dom";
import {
  PostCard,
  Header,
  Tab,
  SuggestionSidebar,
  Loader,
  DarkLoader,
} from "../../../../Components";
import { usePost, useAuth, useTheme } from "../../../../Context";

const Explore = () => {
  const { state } = usePost();
  const { activeUser } = useAuth();
  const { isDarkTheme } = useTheme();
  const location = useLocation();

  const followingList = activeUser.following.map((currentFollowing) => {
    return currentFollowing.username;
  });

  const exploreList = state.postList.filter((currentPost) => {
    return (
      activeUser.username !== currentPost.username &&
      !followingList.includes(currentPost.username)
    );
  });

  return (
    <div
      className={`${
        location.pathname == "/home" ? "tab" : "tab_mob"
      } min-h-screen`}
    >
      <Header className="tab_header" />
      <Tab />
      <div className="tab_outlet border-l bg-[#fff] dark:bg-stone-950">
        <div className="overflow-y-scroll h-[80dvh] md:h-[90dvh] lg:h-[90vh] scroll-smooth">
          {exploreList.length == 0 ? (
            isDarkTheme ? (
              <DarkLoader />
            ) : (
              <Loader />
            )
          ) : (
            exploreList.map((currentPost) => {
              return <PostCard {...currentPost} key={currentPost?._id} />;
            })
          )}
        </div>
      </div>
      <div className="tab_sidebar bg-[#fff] dark:bg-stone-950 lg:overflow-y-scroll scroll-smooth">
        <div className="p-3">
          <SuggestionSidebar />
        </div>
      </div>
    </div>
  );
};

export default Explore;
