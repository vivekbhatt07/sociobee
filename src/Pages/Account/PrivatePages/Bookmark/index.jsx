import React from "react";

import {
  AddPostCard,
  PostCard,
  Header,
  Tab,
  SuggestionCard,
  OutlinedActionBtn,
} from "../../../../Components";
import { usePost } from "../../../../Context";

import {
  Whatshot,
  SwapVert,
  Add,
  AddCircle,
  AddCircleOutline,
  Home as HomeLogo,
  HomeOutlined as HomeOutlinedLogo,
  Explore as ExploreLogo,
  ExploreOutlined as ExploreOutlinedLogo,
  Bookmark as BookmarkLogo,
  BookmarkBorderOutlined as BookmarkOutlinedLogo,
  Favorite as FavoriteLogo,
  FavoriteBorderOutlined as FavoriteOutlinedLogo,
  Person as PersonLogo,
  PersonOutlined as PersonOutlinedLogo,
} from "@mui/icons-material";

const Bookmark = () => {
  const { state } = usePost();
  return (
    <div className="tab min-h-screen">
      <Header className="tab_header" />
      <Tab />
      <div className="tab_outlet border-l bg-[#fff] dark:bg-stone-950">
        <div className="overflow-y-scroll h-[70dvh] md:h-[80dvh] lg:h-[90vh] scroll-smooth">
          Bookmark
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

export default Bookmark;
