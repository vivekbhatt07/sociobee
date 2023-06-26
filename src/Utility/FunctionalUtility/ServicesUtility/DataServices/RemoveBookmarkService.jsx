import axios from "axios";

const removeBookmarkService = async (postId, encodedToken) => {
  return axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );
};

export default removeBookmarkService;
