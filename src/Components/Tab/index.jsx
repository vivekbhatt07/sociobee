import React, { useState } from "react";

import "./Tab.css";
import { Link } from "react-router-dom";

import { useAuth } from "../../Context/AuthContext";

function Tab(props) {
  const [activeTab, setActiveTab] = useState(0);
  const { tabList } = props;
  const {} = useAuth();

  return (
    <div className="tab">
      <ul className="tab_nav">
        {tabList.map((currentTab, i) => {
          const { name } = currentTab;
          return (
            <li className="tab_nav_item" key={i}>
              <Link
                className="tab_btn"
                onClick={() => setActiveTab(i)}
                to={currentTab.reach}
                style={{
                  backgroundColor: activeTab == i ? "#fcaf17" : "transparent",
                  color: activeTab == i ? "#000" : "#fff",
                }}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="tab_outlet">{tabList[activeTab].component}</div>
    </div>
  );
}

export default Tab;
