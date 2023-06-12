import axios from "axios";

const signUpService = async (
  username,
  password,
  email,
  firstName,
  lastName
) => {
  return axios.post("/api/auth/signup", {
    username,
    password,
    email,
    firstName,
    lastName,
  });
};

export default signUpService;
