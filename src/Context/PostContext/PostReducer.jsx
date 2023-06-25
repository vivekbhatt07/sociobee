export const postReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA": {
      return { ...state, postList: [...action.payload] };
    }
    case "GET_USERS": {
      return { ...state, userList: [...action.payload] };
    }

    case "GET_BOOKMARK": {
      return { ...state, bookmarkList: [...action.payload] };
    }
    case "EDIT_USER": {
      return {
        ...state,
        userList: state.userList.map((currentUser) => {
          return currentUser._id == action.payload._id
            ? { ...action.payload }
            : currentUser;
        }),
      };
    }
  }
};
