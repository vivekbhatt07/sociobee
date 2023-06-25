import React from "react";
import "./Home.css";

import {
  AddPostCard,
  PostCard,
  Header,
  Tab,
  SuggestionCard,
  OutlinedActionBtn,
} from "../../../../Components";
import { usePost, useAuth, useTheme } from "../../../../Context";

import { Whatshot, SwapVert } from "@mui/icons-material";

const Home = () => {
  const { state } = usePost();
  const { activeUser } = useAuth();
  const { isDarkTheme } = useTheme();

  const homeList = state.postList.reduce((list, currentPost) => {
    return currentPost.username == activeUser.username ||
      activeUser.following.findIndex((currentFollowing) => {
        return currentFollowing.username == currentPost.username;
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
          <AddPostCard />
          {homeList.map((currentPost) => {
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
          <div className="hidden flex-col gap-2 lg:block">
            <span className="text-lg">Suggestions for you</span>
            <div className="flex flex-col gap-2">
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
