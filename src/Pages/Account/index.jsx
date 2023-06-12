import React from "react";
import { Tab } from "../../Components";
import { Home, Explore, Bookmark, Like } from "./PrivatePages";

const Account = () => {
  return (
    <Tab
      tabList={[
        {
          name: "Home",
          component: <Home />,
          reach: "/home",
        },
        {
          name: "Explore",
          component: <Explore />,
          reach: "/explore",
        },
        {
          name: "Bookmark",
          component: <Bookmark />,
          reach: "/bookmark",
        },
        {
          name: "Like",
          component: <Like />,
          reach: "/like",
        },
      ]}
    />
  );
};

export default Account;
