import React from "react";
import { useLocation } from "react-router-dom";

import {
  PostCard,
  Header,
  Tab,
  SuggestionCard,
  OutlinedActionBtn,
  SuggestionSidebar,
} from "../../../../Components";
import { Whatshot, SwapVert } from "@mui/icons-material";
import { useAuth, usePost, useTheme } from "../../../../Context";

const Like = () => {
  const { state } = usePost();
  const { activeUser } = useAuth();
  const { isDarkTheme } = useTheme();
  const location = useLocation();

  const likedList = state.postList.reduce((list, currentPost) => {
    return currentPost.likes.likedBy.findIndex((currentLike) => {
      return currentLike.username == activeUser.username;
    }) == -1
      ? [...list]
      : [...list, currentPost];
  }, []);

  return (
    <div
      className={`${
        location.pathname == "/home" ? "tab" : "tab_mob"
      } min-h-screen`}
    >
      <Header className="tab_header" />
      <Tab />
      <div className="tab_outlet border-l bg-[#fff] dark:bg-stone-950">
        <div className="overflow-y-auto h-[80dvh] md:h-[90dvh] lg:h-[90vh] scroll-smooth pt-8">
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
      <div className="tab_sidebar bg-[#fff] dark:bg-stone-950 lg:overflow-y-scroll scroll-smooth border-l">
        <div className="p-3  w-full">
          <SuggestionSidebar />
        </div>
      </div>
    </div>
  );
};

export default Like;
