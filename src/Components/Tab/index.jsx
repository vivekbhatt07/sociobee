import { NavLink } from "react-router-dom";

import { useTheme } from "../../Context";
import EditNoteIcon from "@mui/icons-material/EditNote";

import {
  Home as HomeLogo,
  Explore as ExploreLogo,
  Bookmark as BookmarkLogo,
  Favorite as FavoriteLogo,
  Person as PersonLogo,
} from "@mui/icons-material";

function Tab() {
  const { isDarkTheme } = useTheme();

  return (
    <>
      <div className="tab_nav flex justify-center">
        <ul className="flex flex-row w-60 justify-center p-3 lg:flex-col list-none bg-[#fff] dark:bg-stone-950 md:flex-col md:h-[80dvh] md:justify-start lg:p-0 xl:w-full">
          <li className="tab_nav_item flex">
            <NavLink
              className="tab_btn text-base flex w-14 h-14 justify-center items-center gap-4 no-underline font-sans text-stone-950 font-semibold transition-colors duration-300 dark:text-stone-50 bg-stone-50 border-0 dark:bg-stone-950 hover:bg-stone-400 hover:text-stone-950 md:w-full lg:justify-start"
              to="/home"
              style={({ isActive }) => ({
                color: isActive && (isDarkTheme ? "#000" : "#fff"),
                backgroundColor: isActive && (isDarkTheme ? "#fff" : "#000"),
              })}
            >
              <HomeLogo />
              <span className="tab_btn_label hidden lg:block">Home</span>
            </NavLink>
          </li>
          <li className="tab_nav_item flex">
            <NavLink
              className="tab_btn text-base flex w-14 h-14 justify-center items-center gap-4 no-underline font-sans text-stone-950 font-semibold transition-colors duration-300 dark:text-stone-50 bg-stone-50 border-0 dark:bg-stone-950 hover:bg-stone-400 hover:text-stone-950 md:w-full lg:justify-start"
              to="/explore"
              style={({ isActive }) => ({
                color: isActive && (isDarkTheme ? "#000" : "#fff"),
                backgroundColor: isActive && (isDarkTheme ? "#fff" : "#000"),
              })}
            >
              <ExploreLogo />
              <span className="tab_btn_label hidden lg:block">Explore</span>
            </NavLink>
          </li>
          <li className="tab_nav_item flex">
            <NavLink
              className="tab_btn text-base flex w-14 h-14 justify-center items-center gap-4 no-underline font-sans text-stone-950 font-semibold transition-colors duration-300 dark:text-stone-50 bg-stone-50 border-0 dark:bg-stone-950 hover:bg-stone-400 hover:text-stone-950 md:w-full lg:justify-start"
              to="/bookmark"
              style={({ isActive }) => ({
                color: isActive && (isDarkTheme ? "#000" : "#fff"),
                backgroundColor: isActive && (isDarkTheme ? "#fff" : "#000"),
              })}
            >
              <BookmarkLogo />
              <span className="tab_btn_label hidden lg:block">Bookmark</span>
            </NavLink>
          </li>
          <li className="tab_nav_item flex">
            <NavLink
              className="tab_btn text-base flex w-14 h-14 justify-center items-center gap-4 no-underline font-sans text-stone-950 font-semibold transition-colors duration-300 dark:text-stone-50 bg-stone-50 border-0 dark:bg-stone-950 hover:bg-stone-400 hover:text-stone-950 md:w-full lg:justify-start"
              to="/like"
              style={({ isActive }) => ({
                color: isActive && (isDarkTheme ? "#000" : "#fff"),
                backgroundColor: isActive && (isDarkTheme ? "#fff" : "#000"),
              })}
            >
              <FavoriteLogo />
              <span className="tab_btn_label hidden lg:block">Like</span>
            </NavLink>
          </li>
          <li className="tab_nav_item flex">
            <NavLink
              className="tab_btn text-base flex w-14 h-14 justify-center items-center gap-4 no-underline font-sans text-stone-950 font-semibold transition-colors duration-300 dark:text-stone-50 bg-stone-50 border-0 dark:bg-stone-950 hover:bg-stone-400 hover:text-stone-950 md:w-full lg:justify-start"
              to="/profile"
              style={({ isActive }) => ({
                color: isActive && (isDarkTheme ? "#000" : "#fff"),
                backgroundColor: isActive && (isDarkTheme ? "#fff" : "#000"),
              })}
            >
              <PersonLogo />
              <span className="tab_btn_label hidden lg:block">Profile</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Tab;
