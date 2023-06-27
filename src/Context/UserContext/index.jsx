import React, { createContext, useContext } from "react";
import { followUserService, unfollowUserService } from "../../Utility";
import { usePost } from "../PostContext";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { dispatch } = usePost();

  const handleFollowUser = async (followUserId, encodedToken) => {
    const followUserResponse = await followUserService(
      followUserId,
      encodedToken
    );
    console.log(followUserResponse);
    if (followUserResponse.status == 200) {
      dispatch({
        type: "FOLLOW_USER",
        payload: {
          id: followUserResponse.data.user._id,
          user: followUserResponse.data.user,
        },
      });
    }
  };

  const handleUnfollowUser = async (followUserId, encodedToken) => {
    const unfollowUserResponse = await unfollowUserService(
      followUserId,
      encodedToken
    );
    console.log(unfollowUserResponse);
  };

  return (
    <UserContext.Provider value={{ handleFollowUser, handleUnfollowUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  return useContext(UserContext);
};

export { useUser, UserProvider };
