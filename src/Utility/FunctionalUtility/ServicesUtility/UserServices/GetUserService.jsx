import axios from "axios";

const getUserService = async () => {
  return axios.get("/api/users");
};

export default getUserService;
