import React from "react";
import { TransitionGroup } from "react-transition-group";
import { Collapse } from "@mui/material";
import { usePost, useAuth, useTheme } from "../../Context";
import { SuggestionCard, Loader, DarkLoader } from "../../Components";

const SuggestionSidebar = () => {
  const { state } = usePost();
  const { activeUser } = useAuth();
  const { isDarkTheme } = useTheme();

  const followingList = activeUser.following.map((currentFollowing) => {
    return currentFollowing.username;
  });

  const suggestionList = state.userList.filter((currentUser) => {
    return (
      activeUser.username !== currentUser.username &&
      !followingList.includes(currentUser.username)
    );
  });

  return (
    <div className="hidden flex-col gap-3 lg:flex bg-stone-200 p-4 rounded-md dark:bg-stone-900">
      <span className="text-lg font-medium ml-2">Suggestions for you</span>
      <div className="flex flex-col gap-2">
        {suggestionList.length === 0 ? (
          isDarkTheme ? (
            <DarkLoader />
          ) : (
            <Loader />
          )
        ) : (
          <TransitionGroup>
            {suggestionList.map((currentUser) => {
              return (
                <Collapse key={currentUser._id}>
                  <SuggestionCard key={currentUser._id} {...currentUser} />
                </Collapse>
              );
            })}
          </TransitionGroup>
        )}
      </div>
    </div>
  );
};

export default SuggestionSidebar;
