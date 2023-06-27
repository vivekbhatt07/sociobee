import axios from "axios";

const unfollowUserService = async (followUserId, encodedToken) => {
  return axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );
};

export default unfollowUserService;
