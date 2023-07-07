export const postReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA": {
      return { ...state, postList: [...action.payload] };
    }
    case "GET_USERS": {
      return { ...state, userList: [...action.payload] };
    }

    case "FOLLOW_USER": {
      return {
        ...state,
        userList: state.userList.map((currentUser) => {
          return currentUser._id == action.payload.user?._id
            ? action.payload.user
            : currentUser._id == action.payload.followUser?._id
            ? action.payload.followUser
            : currentUser;
        }),
      };
    }

    case "GET_BOOKMARK": {
      return {
        ...state,
        bookmarkList: [...action.payload],
      };
    }
    case "HANDLE_BOOKMARK": {
      return {
        ...state,
        bookmarkList: state.postList.filter((currentPost) => {
          return action.payload.includes(currentPost._id);
        }),
      };
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
    case "SET_SORT": {
      return {
        ...state,
        sortType: action.payload,
      };
    }
  }
};
