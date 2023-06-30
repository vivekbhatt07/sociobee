import axios from "axios";

const deletePostService = (postId, encodedToken) => {
  return axios.delete(`/api/posts/${postId}`, {
    headers: { authorization: encodedToken },
  });
};

export default deletePostService;
