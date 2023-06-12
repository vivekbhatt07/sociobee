import axios from "axios";

const signUpService = async (
  email,
  password,
  firstName,
  lastName,
  userName
) => {
  return axios.post("/api/auth/signup", {
    email,
    password,
    firstName,
    lastName,
    userName,
  });
};

export default signUpService;
