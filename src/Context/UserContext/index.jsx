import React, { createContext, useContext } from "react";
import { followUserService, unfollowUserService } from "../../Utility";
import { usePost } from "../PostContext";
import { useAuth } from "../AuthContext";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { setActiveUser } = useAuth();
  const { dispatch } = usePost();

  const handleFollowUser = async (followUserId, encodedToken) => {
    const followUserResponse = await followUserService(
      followUserId,
      encodedToken
    );
    if (followUserResponse.status == 200) {
      setActiveUser(followUserResponse.data.user);
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
    if (unfollowUserResponse.status == 200) {
      setActiveUser(unfollowUserResponse.data.user);
      dispatch({
        type: "FOLLOW_USER",
        payload: {
          id: unfollowUserResponse.data.user._id,
          user: unfollowUserResponse.data.user,
        },
      });
    }
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
