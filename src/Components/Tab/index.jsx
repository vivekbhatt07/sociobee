import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useTheme } from "../../Context";

function Tab(props) {
  const [activeTab, setActiveTab] = useState(0);
  const { tabList } = props;
  const { isDarkTheme } = useTheme();
  console.log(window.location, "Tab");

  return (
    <>
      <div className="tab_nav flex justify-center">
        <ul className="flex flex-row w-60 justify-center p-3 lg:flex-col list-none bg-[#fff] dark:bg-stone-950 md:flex-col md:h-[80dvh] md:justify-start lg:p-0 xl:w-full">
          {tabList.map((currentTab, i) => {
            const { name, logo, reach } = currentTab;
            return (
              <li className="tab_nav_item flex" key={i}>
                <Link
                  className="tab_btn text-base flex w-14 h-14 justify-center items-center gap-4 no-underline font-sans text-stone-950 font-semibold transition-colors duration-300 dark:text-stone-50 bg-stone-50 border-0 dark:bg-stone-950 hover:bg-stone-400 hover:text-stone-950 md:w-full lg:justify-start"
                  onClick={() => setActiveTab(i)}
                  to={reach}
                  style={{
                    backgroundColor:
                      activeTab == i && (isDarkTheme ? "#fff" : "#000"),
                    color: activeTab == i && (isDarkTheme ? "#000" : "#fff"),
                  }}
                >
                  {activeTab === i ? logo.filled : logo.outlined}{" "}
                  <span className="tab_btn_label hidden lg:block">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="tab_outlet border-l bg-[#fff] dark:bg-stone-950">
        {tabList[activeTab].component}
      </div>
    </>
  );
}

export default Tab;
