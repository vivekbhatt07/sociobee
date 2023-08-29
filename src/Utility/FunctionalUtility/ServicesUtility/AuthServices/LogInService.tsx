import axios from "axios";

const logInService = async (username: string, password: string) => {
  let a = await axios.post("/api/auth/login", { username, password });
  console.log(a);
  return a;
};

export default logInService;
