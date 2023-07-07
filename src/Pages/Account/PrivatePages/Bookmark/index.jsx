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

import { useAuth, usePost, useTheme } from "../../../../Context";
import GlossyHeader from "../../../../Components/GlossyHeader";

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
        <div className="overflow-y-auto h-[80dvh] md:h-[90dvh] lg:h-[90vh] scroll-smooth relative">
          <GlossyHeader title="Bookmark" isArrow={false} />
          <div className="pt-3">
            {state.bookmarkList.length !== 0 ? (
              state.bookmarkList.map((currentBookmark) => {
                return (
                  <PostCard
                    key={currentBookmark._id}
                    {...currentBookmark}
                    isBook
                  />
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
