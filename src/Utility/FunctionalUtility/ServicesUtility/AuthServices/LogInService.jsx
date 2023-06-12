import axios from "axios";

const logInService = async (email, password) => {
  return axios.post("/api/auth/login", { email, password });
};

export default logInService;
