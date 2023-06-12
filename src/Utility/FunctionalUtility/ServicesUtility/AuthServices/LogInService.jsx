import axios from "axios";

const logInService = async (username, password) => {
  return axios.post("/api/auth/login", { username, password });
};

export default logInService;
