import React from "react";
import "./Home.css";

import {
  AddPostCard,
  PostCard,
  Header,
  Tab,
  SuggestionCard,
  OutlinedActionBtn,
  SuggestionSidebar,
  ContainedActionBtn,
} from "../../../../Components";
import { usePost, useAuth, useTheme } from "../../../../Context";

import { Whatshot, SwapVert } from "@mui/icons-material";

const Home = () => {
  const { state, dispatch } = usePost();
  const { activeUser } = useAuth();
  const { isDarkTheme } = useTheme();

  let sortedList = state.postList;

  if (state.sortType === "isTrending") {
    sortedList = [...sortedList].sort((a, b) => {
      return b.likes.likeCount - a.likes.likeCount;
    });
  } else if (state.sortType === "isLatest") {
    sortedList = [...sortedList].sort((a, b) => {
      let dateA = new Date(a.createdAt);
      let dateB = new Date(b.createdAt);
      return dateB - dateA;
    });
  }

  console.log(sortedList);

  const homeList = sortedList.reduce((list, currentPost) => {
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
      <div className="tab_sidebar dark:bg-stone-950 lg:overflow-y-scroll scroll-smooth">
        <div className="flex flex-col gap-4 p-3">
          {isDarkTheme ? (
            <div className="flex w-full gap-2">
              {" "}
              {state.sortType === "isTrending" ? (
                <OutlinedActionBtn
                  outlineBtnType="button"
                  className="basis-3/6 flex items-center justify-center"
                >
                  <Whatshot /> <span>Trending</span>
                </OutlinedActionBtn>
              ) : (
                <ContainedActionBtn
                  containBtnType="button"
                  className="basis-3/6 flex items-center justify-center"
                  handleClick={() => {
                    dispatch({ type: "SET_SORT", payload: "isTrending" });
                  }}
                >
                  <Whatshot /> <span>Trending</span>
                </ContainedActionBtn>
              )}
              {state.sortType == "isLatest" ? (
                <OutlinedActionBtn
                  outlineBtnType="button"
                  className="basis-3/6 flex items-center justify-center"
                >
                  <SwapVert />
                  <span>Latest</span>
                </OutlinedActionBtn>
              ) : (
                <ContainedActionBtn
                  containBtnType="button"
                  className="basis-3/6 flex items-center justify-center"
                  handleClick={() =>
                    dispatch({ type: "SET_SORT", payload: "isLatest" })
                  }
                >
                  <SwapVert />
                  <span>Latest</span>
                </ContainedActionBtn>
              )}
            </div>
          ) : (
            <div className="flex w-full gap-2">
              {state.sortType === "isTrending" ? (
                <ContainedActionBtn
                  containBtnType="button"
                  className="basis-3/6 flex items-center justify-center"
                >
                  <Whatshot /> <span>Trending</span>
                </ContainedActionBtn>
              ) : (
                <OutlinedActionBtn
                  outlineBtnType="button"
                  className="basis-3/6 flex items-center justify-center"
                  handleClick={() => {
                    dispatch({ type: "SET_SORT", payload: "isTrending" });
                  }}
                >
                  <Whatshot /> <span>Trending</span>
                </OutlinedActionBtn>
              )}
              {state.sortType == "isLatest" ? (
                <ContainedActionBtn
                  containBtnType="button"
                  className="basis-3/6 flex items-center justify-center"
                >
                  <SwapVert />
                  <span>Latest</span>
                </ContainedActionBtn>
              ) : (
                <OutlinedActionBtn
                  outlineBtnType="button"
                  className="basis-3/6 flex items-center justify-center"
                  handleClick={() =>
                    dispatch({ type: "SET_SORT", payload: "isLatest" })
                  }
                >
                  <SwapVert />
                  <span>Latest</span>
                </OutlinedActionBtn>
              )}
            </div>
          )}
          <SuggestionSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
