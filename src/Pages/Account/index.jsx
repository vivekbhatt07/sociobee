import React from "react";
import { Tab } from "../../Components";
import { Home, Explore, Bookmark, Like, Profile } from "./PrivatePages";
import {
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

const Account = () => {
  return (
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
          logo: { filled: <ExploreLogo />, outlined: <ExploreOutlinedLogo /> },
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
  );
};

export default Account;
