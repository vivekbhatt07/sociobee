import axios from "axios";

const editUserService = (encodedToken, userData) => {
  return axios.post(
    "/api/users/edit",
    {
      userData,
    },
    {
      headers: { authorization: encodedToken },
    }
  );
};

export default editUserService;
