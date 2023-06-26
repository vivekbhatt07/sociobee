import axios from "axios";

const likePostService = async (postId, authorization) => {
  return axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: { authorization },
    }
  );
};

export default likePostService;
