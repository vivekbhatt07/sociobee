import axios from "axios";

const getPostDetailService = () => {
  return axios.get("/api/users/:userId");
};

export default getPostDetailService;
