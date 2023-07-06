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
import { usePost, useTheme } from "../../../../Context";

const Bookmark = () => {
  const { state } = usePost();
  const { isDarkTheme } = useTheme();
  const location = useLocation();

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
          {state.bookmarkList.length !== 0 ? (
            state.bookmarkList.map((currentBookmark) => {
              return (
                <PostCard key={currentBookmark._id} {...currentBookmark} />
              );
            })
          ) : (
            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <span className="text-2xl font-bold">No Bookmark</span>
              </div>
              {isDarkTheme ? (
                <img
                  src={
                    "https://res.cloudinary.com/duqsyuriy/image/upload/v1687699196/NoBookmarksDark_xjckkj.svg"
                  }
                  className="mx-auto"
                />
              ) : (
                <img
                  src={
                    "https://res.cloudinary.com/duqsyuriy/image/upload/v1687698623/NoBookmarksLight_n1v17q.svg"
                  }
                  className="mx-auto"
                />
              )}
            </div>
          )}
        </div>
      </div>
      <div className="tab_sidebar bg-[#fff] dark:bg-stone-950 lg:overflow-y-scroll scroll-smooth border-l">
        <div className="p-3 w-full">
          <SuggestionSidebar />
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
