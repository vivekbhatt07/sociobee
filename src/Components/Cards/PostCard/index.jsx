import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AvatarActionLink, IconActionBtn } from "../../Actions";
import {
  MoreHorizOutlined,
  FavoriteBorder,
  Favorite,
  Bookmark,
  BookmarkBorder,
  Comment,
  Share,
} from "@mui/icons-material";

import {
  getPostDetailService,
  likePostService,
  disLikePostService,
  addBookmarkService,
  removeBookmarkService,
} from "../../../Utility";
import { useAuth, usePost } from "../../../Context";

const PostCard = (props) => {
  const { token } = useAuth();
  const { state, dispatch } = usePost();
  const [isLike, setIsLike] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);

  const handlePostLike = async (postId, encodedToken) => {
    const postLikeResponse = await likePostService(postId, encodedToken);
    if (postLikeResponse.status == 201) {
      dispatch({ type: "GET_DATA", payload: postLikeResponse.data.posts });
    }
  };

  const handlePostDislike = async (postId, encodedToken) => {
    const postDislikeResponse = await disLikePostService(postId, encodedToken);
    if (postDislikeResponse.status == 201) {
      dispatch({ type: "GET_DATA", payload: postDislikeResponse.data.posts });
    }
  };

  const handleAddBookmark = async (postId, encodedToken) => {
    const addBookmarkResponse = await addBookmarkService(postId, encodedToken);
    if (addBookmarkResponse.status == 200) {
      dispatch({
        type: "GET_BOOKMARK",
        payload: addBookmarkResponse.data.bookmarks,
      });
    }
  };

  const handleRemoveBookmark = async (postId, encodedToken) => {
    const removeBookmarkResponse = await removeBookmarkService(
      postId,
      encodedToken
    );

    if (removeBookmarkResponse.status == 200) {
      dispatch({
        type: "GET_BOOKMARK",
        payload: removeBookmarkResponse.data.bookmarks,
      });
    }
  };

  const getUser = state.userList.find((currentUser) => {
    return currentUser.username == props.username;
  });

  return (
    <Link
      className="postCard border-b p-3 flex flex-col gap-4"
      // to={`${location.pathname}/post/${props?._id}`}
    >
      <div className="postCard_head flex justify-between items-center">
        <div className="flex gap-4">
          <AvatarActionLink avatar={getUser?.profileAvatar} />
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <span className="font-semibold">
                {getUser?.firstName} {getUser?.lastName}
              </span>
              <span className="text-sm text-stone-400">May 05 2022</span>
            </div>
            <div className="text-xs">{props?.username}</div>
          </div>
        </div>
        <IconActionBtn>
          <MoreHorizOutlined />
        </IconActionBtn>
      </div>
      <div className="postCard_body flex flex-col gap-2">
        <p>{props?.content}</p>
        {props?.mediaURL && (
          <div>
            {props?.mediaURL?.includes("mp4") ? (
              <video controls>
                <source src={props?.mediaURL} type="video/mp4"></source>
              </video>
            ) : (
              <img
                src={props?.mediaURL}
                alt={props?.mediaAlt}
                className="object-cover w-full h-full"
              />
            )}
          </div>
        )}
      </div>
      <div className="postCard_footer flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1 items-center">
            {isLike ? (
              <IconActionBtn
                handleClick={() => {
                  setIsLike(false);
                  handlePostDislike(props?._id, token);
                }}
              >
                <Favorite sx={{ color: "red" }} />
              </IconActionBtn>
            ) : (
              <IconActionBtn
                handleClick={() => {
                  setIsLike(true);
                  handlePostLike(props?._id, token);
                }}
              >
                <FavoriteBorder />
              </IconActionBtn>
            )}
            <span>{props?.likes?.likeCount}</span>
          </div>
          <div className="flex gap-1 items-center">
            {isBookmark ? (
              <IconActionBtn
                handleClick={() => {
                  setIsBookmark(false);
                  handleRemoveBookmark(props?._id, token);
                }}
              >
                <Bookmark sx={{ color: "orange" }} />
              </IconActionBtn>
            ) : (
              <IconActionBtn
                handleClick={() => {
                  setIsBookmark(true);
                  handleAddBookmark(props?._id, token);
                }}
              >
                <BookmarkBorder />
              </IconActionBtn>
            )}
          </div>
          <div className="flex gap-1 items-center">
            <IconActionBtn>
              <Comment />
            </IconActionBtn>
            <span>{props?.comments}</span>
          </div>
        </div>
        <IconActionBtn>
          <Share />
        </IconActionBtn>
      </div>
    </Link>
  );
};

export default PostCard;
