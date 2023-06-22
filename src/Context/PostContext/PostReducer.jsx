export const postReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA": {
      return { ...state, postList: [...action.payload] };
    }
    case "GET_USERS": {
      return { ...state, userList: [...action.payload] };
    }
  }
};
