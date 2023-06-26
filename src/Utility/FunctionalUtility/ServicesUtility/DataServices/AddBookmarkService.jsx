import axios from "axios";

const addBookmarkService = async (postId, encodedToken) => {
  return axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );
};

export default addBookmarkService;
