import axios from "axios";

const disLikePostService = async (postId, authorization) => {
  return axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: { authorization },
    }
  );
};

export default disLikePostService;
