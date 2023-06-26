import axios from "axios";

const sendPostService = async (encodedToken, post) => {
  return axios.post(
    "/api/posts",
    {
      postData: post,
    },
    {
      headers: { authorization: encodedToken },
    }
  );
};

export default sendPostService;
