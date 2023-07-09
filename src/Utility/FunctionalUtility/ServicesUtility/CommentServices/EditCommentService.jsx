import axios from "axios";
const editCommentService = async (
  postId,
  commentId,
  commentData,
  encodedToken
) =>
  await axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { commentData: commentData },
    { headers: { authorization: encodedToken } }
  );

export default editCommentService;
