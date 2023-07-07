import axios from "axios";

const getBookmarkService = (encodedToken) => {
  return axios.get("/api/users/bookmark/", {
    headers: { authorization: encodedToken },
  });
};

export default getBookmarkService;
