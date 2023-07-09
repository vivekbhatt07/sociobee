import axios from "axios";

const deleteCommentService = async (postId, commentId, encodedToken) =>
  await axios.post(
    `/api/comments/delete/${postId}/${commentId}`,
    {},
    { headers: { authorization: encodedToken } }
  );

export default deleteCommentService;
