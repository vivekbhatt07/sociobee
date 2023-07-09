import axios from "axios";

const addCommentService = async (postId, commentData, encodedToken) => {
  return await axios.post(
    `/api/comments/add/${postId}`,
    { commentData: commentData },
    { headers: { authorization: encodedToken } }
  );
};

export default addCommentService;
