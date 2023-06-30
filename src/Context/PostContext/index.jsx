import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";
import { initialState } from "./InitialState";
import { postReducer } from "./PostReducer";
import {
  getPostService,
  getPostDetailService,
  getUserService,
} from "../../Utility";
import { useAuth } from "../AuthContext";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const { token, setActiveUser } = useAuth();
  const [state, dispatch] = useReducer(postReducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const postResponse = await getPostService();
        if (postResponse.status === 200) {
          dispatch({ type: "GET_DATA", payload: postResponse.data.posts });
        }

        const userResponse = await getUserService();
        if (userResponse.status == 200) {
          dispatch({ type: "GET_USERS", payload: userResponse.data.users });
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [token]);
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

const usePost = () => {
  return useContext(PostContext);
};

export { PostProvider, usePost };
