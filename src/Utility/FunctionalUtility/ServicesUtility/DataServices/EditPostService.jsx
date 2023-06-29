import axios from "axios";

const editPostService = async (postId, postData, encodedToken) => {
  return axios.post(
    `/api/posts/edit/${postId}`,
    {
      postData,
    },
    { headers: { authorization: encodedToken } }
  );
};

export default editPostService;
