import React from "react";
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

import {
  Home,
  Explore,
  Bookmark,
  Like,
  Profile,
} from "../../Pages/Account/PrivatePages";

import "./PrivateContainer.css";
import {
  SuggestionCard,
  Header,
  OutlinedActionBtn,
  Tab,
} from "../../Components";

const PrivateContainer = () => {
  return (
    <div className="tab min-h-screen">
      <Header className="tab_header" />
      <Tab
        tabList={[
          {
            name: "Home",
            component: <Home />,
            reach: "/home",
            logo: { filled: <HomeLogo />, outlined: <HomeOutlinedLogo /> },
          },
          {
            name: "Explore",
            component: <Explore />,
            reach: "/explore",
            logo: {
              filled: <ExploreLogo />,
              outlined: <ExploreOutlinedLogo />,
            },
          },
          {
            name: "Bookmark",
            component: <Bookmark />,
            reach: "/bookmark",
            logo: {
              filled: <BookmarkLogo />,
              outlined: <BookmarkOutlinedLogo />,
            },
          },
          {
            name: "Like",
            component: <Like />,
            reach: "/like",
            logo: {
              filled: <FavoriteLogo />,
              outlined: <FavoriteOutlinedLogo />,
            },
          },
          {
            name: "Profile",
            component: <Profile />,
            reach: "/profile",
            logo: {
              filled: <PersonLogo />,
              outlined: <PersonOutlinedLogo />,
            },
          },
        ]}
      />
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

export default PrivateContainer;
