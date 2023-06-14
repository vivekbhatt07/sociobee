import React, { useEffect, useState } from "react";

import "./Tab.css";
import { Link } from "react-router-dom";

import { Header } from "../Layout";
import { useTheme } from "../../Context";
import { OutlinedActionBtn } from "../Actions";
import { Whatshot, SwapVert, Add } from "@mui/icons-material";
import { SuggestionCard } from "../Cards";

function Tab(props) {
  const [activeTab, setActiveTab] = useState(0);
  const { tabList } = props;
  const { isDarkTheme } = useTheme();

  return (
    <div className="tab min-h-screen">
      <Header className="tab_header" />
      <div className="tab_nav">
        <ul className="flex flex-col list-none bg-[#fff] dark:bg-stone-950">
          {tabList.map((currentTab, i) => {
            const { name, logo, reach } = currentTab;
            return (
              <li className="tab_nav_item flex" key={i}>
                <Link
                  className="tab_btn text-base flex justify-start gap-4 no-underline w-full font-sans text-stone-950 font-semibold transition-colors duration-300 dark:text-stone-50 bg-stone-50 border-0 dark:bg-stone-950 hover:bg-stone-400 hover:text-stone-950"
                  onClick={() => setActiveTab(i)}
                  to={reach}
                  style={{
                    backgroundColor:
                      activeTab == i && (isDarkTheme ? "#fff" : "#000"),
                    color: activeTab == i && (isDarkTheme ? "#000" : "#fff"),
                  }}
                >
                  {activeTab === i ? logo.filled : logo.outlined}{" "}
                  <span>{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="tab_outlet border-l bg-[#fff] dark:bg-stone-950">
        {tabList[activeTab].component}
      </div>
      <div className="tab_sidebar bg-[#fff] dark:bg-stone-950 overflow-y-scroll h-[90vh] scroll-smooth">
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
          <div className="flex flex-col gap-2">
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
}

export default Tab;
