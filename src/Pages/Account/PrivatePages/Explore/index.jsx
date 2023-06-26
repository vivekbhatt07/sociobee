import React from "react";

import {
  PostCard,
  Header,
  Tab,
  SuggestionCard,
  OutlinedActionBtn,
  SuggestionSidebar,
} from "../../../../Components";
import { Whatshot, SwapVert } from "@mui/icons-material";
import { usePost, useAuth, useTheme } from "../../../../Context";

const Explore = () => {
  const { state } = usePost();
  const { activeUser } = useAuth();
  const { isDarkTheme } = useTheme();

  const exploreList = state.postList.reduce((list, currentPost) => {
    return currentPost.username !== activeUser.username &&
      activeUser.followers.findIndex((currentFollowing) => {
        return currentFollowing.username.includes(currentPost.username);
      }) !== -1
      ? [...list, currentPost]
      : [...list];
  }, []);

  return (
    <div className="tab min-h-screen">
      <Header className="tab_header" />
      <Tab />
      <div className="tab_outlet border-l bg-[#fff] dark:bg-stone-950">
        <div className="overflow-y-scroll h-[70dvh] md:h-[80dvh] lg:h-[90vh] scroll-smooth">
          {exploreList.map((currentPost) => {
            return <PostCard {...currentPost} key={currentPost?._id} />;
          })}
        </div>
      </div>
      <div className="tab_sidebar bg-[#fff] dark:bg-stone-950 lg:overflow-y-scroll scroll-smooth">
        <div className="flex flex-col gap-2 p-3">
          <div className="flex w-full gap-2">
            <OutlinedActionBtn
              outlineBtnType="button"
              className="basis-3/6 flex items-center justify-center"
            >
              <Whatshot /> <span>Trending</span>
            </OutlinedActionBtn>
            <OutlinedActionBtn
              outlineBtnType="button"
              className="basis-3/6 flex items-center justify-center"
            >
              <SwapVert />
              <span>Latest</span>
            </OutlinedActionBtn>
          </div>
          <SuggestionSidebar />
        </div>
      </div>
    </div>
  );
};

export default Explore;
