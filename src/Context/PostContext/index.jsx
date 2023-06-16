import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";
import { initialState } from "./InitialState";
import { postReducer } from "./PostReducer";
import { getPostService, getPostDetailService } from "../../Utility";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const postResponse = await getPostService();
        if (postResponse.status === 200) {
          dispatch({ type: "GET_DATA", payload: postResponse.data.posts });
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
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
