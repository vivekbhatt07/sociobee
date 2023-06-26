import React from "react";
import { usePost, useAuth, useTheme } from "../../Context";
import { SuggestionCard } from "../../Components";

const SuggestionSidebar = () => {
  const { state } = usePost();
  const { activeUser } = useAuth();
  const { isDarkTheme } = useTheme();
  const followingList = activeUser.following.map((current) => {
    return current.username;
  });

  const suggestionList = state.userList.reduce((list, currentUser) => {
    if (currentUser.username !== activeUser.username) {
      return followingList.includes(currentUser.username)
        ? [...list]
        : [...list, currentUser];
    } else {
      return [...list];
    }
  }, []);
  return (
    <div className="hidden flex-col gap-2 lg:flex">
      <span className="text-lg">Suggestions for you</span>
      <div className="flex flex-col gap-2">
        {suggestionList.map((currentUser) => {
          return <SuggestionCard key={currentUser._id} {...currentUser} />;
        })}
      </div>
    </div>
  );
};

export default SuggestionSidebar;
