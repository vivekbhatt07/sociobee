import axios from "axios";

const getPostService = async () => {
  return axios.get("/api/posts");
};

export default getPostService;
