import axios from "axios";

const signUpService = async (
  username: string,
  password: string,
  email: string,
  firstName: string,
  lastName: string,
  bio: string,
  website: string,
  profileAvatar: string,
  backgroundImage: string,
  join: string
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
