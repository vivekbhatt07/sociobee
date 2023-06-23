import axios from "axios";

const signUpService = async (
  username,
  password,
  email,
  firstName,
  lastName,
  bio,
  website,
  profileAvatar,
  backgroundImage,
  join
) => {
  return axios.post("/api/auth/signup", {
    username,
    password,
    email,
    firstName,
    lastName,
    bio,
    website,
    profileAvatar,
    backgroundImage,
    join,
  });
};

export default signUpService;
