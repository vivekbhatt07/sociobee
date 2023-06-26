import React from "react";

import {
  PostCard,
  Header,
  Tab,
  SuggestionCard,
  OutlinedActionBtn,
} from "../../../../Components";
import { Whatshot, SwapVert } from "@mui/icons-material";
import { useAuth, usePost, useTheme } from "../../../../Context";

const Like = () => {
  const { state } = usePost();
  const { activeUser } = useAuth();
  const { isDarkTheme } = useTheme();

  const likedList = state.postList.reduce((list, currentPost) => {
    return currentPost.likes.likedBy.findIndex((currentLike) => {
      return currentLike.username == activeUser.username;
    }) == -1
      ? [...list]
      : [...list, currentPost];
  }, []);

  return (
    <div className="tab min-h-screen">
      <Header className="tab_header" />
      <Tab />
      <div className="tab_outlet border-l bg-[#fff] dark:bg-stone-950">
        <div className="overflow-y-scroll h-[70dvh] md:h-[80dvh] lg:h-[90vh] scroll-smooth pt-8">
          {likedList.length !== 0 ? (
            likedList.map((currentLikedPost) => {
              return (
                <PostCard key={currentLikedPost._id} {...currentLikedPost} />
              );
            })
          ) : (
            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <span className="text-2xl font-bold">No Liked Post</span>
              </div>
              {isDarkTheme ? (
                <img
                  src={
                    "https://res.cloudinary.com/duqsyuriy/image/upload/v1687705617/NoLikeDark_vvmyw5.svg"
                  }
                  className="mx-auto"
                />
              ) : (
                <img
                  src={
                    "https://res.cloudinary.com/duqsyuriy/image/upload/v1687700986/NoLikeLight_v7ncyh.svg"
                  }
                  className="mx-auto"
                />
              )}
            </div>
          )}
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

export default Like;
