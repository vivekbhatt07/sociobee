import React from "react";
import { usePost, useAuth, useTheme } from "../../Context";
import { SuggestionCard, Loader } from "../../Components";

const SuggestionSidebar = () => {
  const { state } = usePost();
  const { activeUser } = useAuth();
  const { isDarkTheme } = useTheme();

  // GET CURRENT USER OBJECT:
  const activeUserProfile = state.userList.find((currentUser) => {
    return currentUser._id == activeUser._id;
  });

  const followingList = activeUserProfile?.following.map((current) => {
    return current.username;
  });

  const suggestionList = state.userList.reduce((list, currentUser) => {
    if (currentUser.username !== activeUserProfile?.username) {
      return followingList.includes(currentUser.username)
        ? [...list]
        : [...list, currentUser];
    } else {
      return [...list];
    }
  }, []);

  return (
    <div className="hidden flex-col gap-3 lg:flex bg-stone-200 p-4 rounded-md dark:bg-stone-900">
      <span className="text-lg font-medium ml-2">Suggestions for you</span>
      <div className="flex flex-col gap-2">
        {suggestionList.length === 0 ? (
          <Loader />
        ) : (
          suggestionList.map((currentUser) => {
            return <SuggestionCard key={currentUser._id} {...currentUser} />;
          })
        )}
      </div>
    </div>
  );
};

export default SuggestionSidebar;
