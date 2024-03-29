import React, { createContext, useContext } from "react";
import { followUserService, unfollowUserService } from "../../Utility";
import { usePost } from "../PostContext";
import { useAuth } from "../AuthContext";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { state } = usePost();
  const { setActiveUser } = useAuth();
  const { dispatch } = usePost();
  const handleFollowUser = async (followUserId, encodedToken) => {
    try {
      const followUserResponse = await followUserService(
        followUserId,
        encodedToken
      );

      if (followUserResponse.status == 200) {
        setActiveUser(followUserResponse.data.user);
        dispatch({
          type: "FOLLOW_USER",
          payload: {
            user: followUserResponse.data.user,
            followUser: followUserResponse.data.followUser,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnfollowUser = async (followUserId, encodedToken) => {
    try {
      const unfollowUserResponse = await unfollowUserService(
        followUserId,
        encodedToken
      );
      if (unfollowUserResponse.status == 200) {
        setActiveUser(unfollowUserResponse.data.user);
        dispatch({
          type: "FOLLOW_USER",
          payload: {
            user: unfollowUserResponse.data.user,
            followUser: unfollowUserResponse.data.followUser,
          },
        });
      }
    } catch (error) {
      console.log(error);
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
