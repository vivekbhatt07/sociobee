import axios from "axios";

const followUserService = async (followUserId, encodedToken) => {
  return axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );
};

export default followUserService;
