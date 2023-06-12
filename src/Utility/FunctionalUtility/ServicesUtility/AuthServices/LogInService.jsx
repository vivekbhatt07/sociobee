import axios from "axios";

const logInService = async (username, password) =>
  await axios.post("/api/auth/login", { username, password });

export default logInService;
