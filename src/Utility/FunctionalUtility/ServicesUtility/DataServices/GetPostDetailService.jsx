import axios from "axios";

const getPostDetailService = (_id) => {
  return axios.get(`/api/users/${_id}`);
};

export default getPostDetailService;
