import React, { useState } from "react";

import "./Tab.css";
import { Link } from "react-router-dom";

import { useAuth } from "../../Context/AuthContext";
import { Header } from "../Layout";

function Tab(props) {
  const [activeTab, setActiveTab] = useState(0);
  const { tabList } = props;
  const {} = useAuth();

  return (
    <div className="tab">
      <Header className="tab_header" />
      <ul className="tab_nav flex flex-col list-none bg-stone-400">
        {tabList.map((currentTab, i) => {
          const { name, logo, reach } = currentTab;
          return (
            <li className="tab_nav_item" key={i}>
              <Link
                className="tab_btn"
                onClick={() => setActiveTab(i)}
                to={reach}
                style={{
                  backgroundColor: activeTab == i ? "#000" : "transparent",
                  color: activeTab == i ? "#fff" : "#000",
                }}
              >
                {activeTab === i ? logo.filled : logo.outlined} {name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="tab_outlet">{tabList[activeTab].component}</div>
      <div className="tab_sidebar"></div>
    </div>
  );
}

export default Tab;
