import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, usePost, useTheme } from "../../../Context";
import SocialBeeDarkLogo from "../../../Assets/Logo/SocioBeeDark.svg";
import SocialBeeLightLogo from "../../../Assets/Logo/SocioBeeLight.svg";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import "./Header.css";
import {
  AvatarActionLink,
  IconActionBtn,
  TextInput,
  ModalProvider,
  OutlinedActionBtn,
} from "../../../Components";

const Header = (props) => {
  const navigate = useNavigate();
  const { state } = usePost();
  const { activeUser } = useAuth();
  const { isDarkTheme, toggleTheme } = useTheme();
  const { className } = props;
  const classes =
    className +
    " flex py-2 px-6 justify-between items-center bg-stone-50 border-b dark:bg-stone-950 gap-4";

  // SEARCH USER MODAL:

  const [isSearchUserOpen, setIsSearchUserOpen] = useState(false);

  const searchUserModalOpen = () => setIsSearchUserOpen(true);
  const searchUserModalClose = () => setIsSearchUserOpen(false);

  const [userSearchText, setUserSearchText] = useState("");

  const simpleString = (str) => {
    return str.trim().split(" ").join("").toLowerCase();
  };

  const sortedList = [...state.userList].sort((a, b) => {
    const operandOne = a.firstName;
    const operandTwo = b.firstName;
    if (operandOne > operandTwo) {
      return 1;
    } else if (operandOne < operandTwo) {
      return -1;
    }
    return 0;
  });

  const filteredSearchList = sortedList.filter((currentUser) => {
    if (activeUser.username !== currentUser.username) {
      return (
        simpleString(currentUser.username).includes(
          simpleString(userSearchText)
        ) ||
        simpleString(currentUser.firstName).includes(
          simpleString(userSearchText)
        ) ||
        simpleString(currentUser.lastName).includes(
          simpleString(userSearchText)
        )
      );
    }
  });

  return (
    <header className={classes}>
      <Link to="/home">
        <img
          src={isDarkTheme ? SocialBeeDarkLogo : SocialBeeLightLogo}
          className="w-32"
        />
      </Link>

      <ModalProvider
        isOpen={isSearchUserOpen}
        closeModal={searchUserModalClose}
        modalTitle="Search Users"
        modalBtnVariant={
          <button
            className="text-stone-50 bg-stone-700 w-12 h-12 rounded-full transition-all duration-200 hover:bg-stone-950 active:scale-95 dark:bg-stone-600 dark:hover:bg-stone-800"
            onClick={searchUserModalOpen}
          >
            <SearchIcon />
          </button>
        }
      >
        <div className="p-4 flex flex-col gap-4">
          <div className="relative">
            <TextInput
              inputType="text"
              className="pr-4 md:pr-10"
              inputPlaceholder="Search User..."
              inputHandle={(event) => setUserSearchText(event.target.value)}
              inputValue={userSearchText}
            />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
              {userSearchText ? (
                <IconActionBtn
                  iconBtnType="button"
                  handleClick={() => setUserSearchText("")}
                >
                  <ClearIcon />
                </IconActionBtn>
              ) : (
                <IconActionBtn>
                  <SearchIcon />
                </IconActionBtn>
              )}
            </div>
          </div>
          <div className="h-[320px] overflow-y-scroll flex flex-col pr-2">
            {filteredSearchList.length !== 0 ? (
              filteredSearchList.map((current) => {
                return (
                  <article
                    onClick={() => navigate(`/${current.username}`)}
                    key={current._id}
                    className="flex cursor-pointer transition-all duration-200 rounded-md p-2 lg:flex-col lg:items-start lg:gap-2 xl:flex-row xl:justify-between xl:items-center hover:bg-stone-300 dark:hover:bg-stone-700"
                  >
                    <div className="flex gap-3 lg:justify-start lg:w-full xl:justify-start xl:gap-3">
                      <AvatarActionLink avatar={current.profileAvatar} />
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {current.firstName} {current.lastName}
                        </span>
                        <span className="text-xs">{current.username}</span>
                      </div>
                    </div>
                  </article>
                );
              })
            ) : (
              <div>No user found</div>
            )}
          </div>
        </div>
      </ModalProvider>

      <div className="flex items-center gap-4">
        <button
          className={`mode ${props.headerMode}-mode`}
          variant="contained"
          onClick={() => toggleTheme(!isDarkTheme)}
        >
          <span
            className={`circle ${isDarkTheme ? "dark" : "light"}-circle`}
          ></span>
        </button>
        <AvatarActionLink
          avatar={activeUser.profileAvatar}
          className="hidden md:block"
          reach="/profile"
        />
      </div>
    </header>
  );
};

export default Header;
