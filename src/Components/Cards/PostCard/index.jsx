import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CloseIcon from "@mui/icons-material/Close";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  AvatarActionLink,
  IconActionBtn,
  ModalProvider,
  AddPostCard,
  PostComment,
} from "../../../Components";
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
  deletePostService,
  editPostService,
  ToastHandler,
  truncateUtility,
  deleteCommentService,
} from "../../../Utility";
import { useAuth, usePost, useTheme, useUser } from "../../../Context";

const PostCard = (props) => {
  const navigate = useNavigate();
  const { token, activeUser } = useAuth();
  const { state, dispatch } = usePost();
  const { handleFollowUser, handleUnfollowUser } = useUser();
  const { isDarkTheme } = useTheme();

  // EDIT MODAL:

  const [isEditPostModalOpen, setIsEditPostModalOpen] = useState(false);

  const editPostModalOpen = () => setIsEditPostModalOpen(true);
  const editPostModalClose = () => setIsEditPostModalOpen(false);

  // COMMENT MODAL:
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

  const openCommentModal = () => setIsCommentModalOpen(true);
  const closeCommentModal = () => setIsCommentModalOpen(false);

  // FULL COMMENT MODAL:

  const [isCommentFullModalOpen, setIsCommentFullModalOpen] = useState(false);
  const [commentFullName, setCommentFullName] = useState("");
  const openCommentFullModal = () => setIsCommentFullModalOpen(true);
  const closeCommentFullModal = () => setIsCommentFullModalOpen(false);
  //  IS COMMENT EDIT:

  const [isCommentEdit, setIsCommentEdit] = useState(false);

  // **************************************************

  const [postMenu, setPostMenu] = useState(null);
  const isPostMenuOpen = Boolean(postMenu);
  const handlePostMenuOpen = (event) => {
    setPostMenu(event.currentTarget);
  };
  const handlePostMenuClose = () => {
    setPostMenu(null);
  };

  const currentUser = state.userList.find((current) => {
    return current._id == activeUser._id;
  });

  const followingList = currentUser?.following.map((current) => {
    return current.username;
  });

  const isFollowing = followingList?.includes(props?.username);

  const currentPost = state.postList.find((currentPost) => {
    return currentPost._id == props._id;
  });

  const isLiked = currentPost.likes.likedBy.find((currentLikedPost) => {
    return currentLikedPost.username.includes(activeUser.username);
  });

  const isBookmarked = state.bookmarkList.find((currentBookmarkPost) => {
    return currentBookmarkPost._id.includes(currentPost._id);
  });

  // HANDLE POST LIKE:

  const handlePostLike = async (postId, encodedToken) => {
    const postLikeResponse = await likePostService(postId, encodedToken);
    if (postLikeResponse.status == 201) {
      dispatch({ type: "GET_DATA", payload: postLikeResponse.data.posts });
    }
  };

  // HANDLE POST DISLIKE:

  const handlePostDislike = async (postId, encodedToken) => {
    const postDislikeResponse = await disLikePostService(postId, encodedToken);
    if (postDislikeResponse.status == 201) {
      dispatch({ type: "GET_DATA", payload: postDislikeResponse.data.posts });
    }
  };

  // HANDLE ADD BOOKMARK:

  const handleAddBookmark = async (postId, encodedToken) => {
    const addBookmarkResponse = await addBookmarkService(postId, encodedToken);
    if (addBookmarkResponse.status == 200) {
      dispatch({
        type: "HANDLE_BOOKMARK",
        payload: addBookmarkResponse.data.bookmarks,
      });
    }
  };

  // HANDLE REMOVE BOOKMARK:

  const handleRemoveBookmark = async (postId, encodedToken) => {
    const removeBookmarkResponse = await removeBookmarkService(
      postId,
      encodedToken
    );

    if (removeBookmarkResponse.status == 200) {
      dispatch({
        type: "HANDLE_BOOKMARK",
        payload: removeBookmarkResponse.data.bookmarks,
      });
    }
  };

  // HANDLE DELETE POST:

  const handleDeletePost = async (postId, encodedToken) => {
    const deletePostResponse = await deletePostService(postId, encodedToken);
    if (deletePostResponse.status == 201) {
      dispatch({ type: "GET_DATA", payload: deletePostResponse.data.posts });
    }
  };

  const getUser = state.userList.find((currentUser) => {
    return currentUser?.username == props?.username;
  });

  // HANDLE COMMENT DELETE:

  const handleDeleteComment = async (postId, commentId, encodedToken) => {
    try {
      const deleteCommentResponse = await deleteCommentService(
        postId,
        commentId,
        encodedToken
      );
      if (deleteCommentResponse.status == 201) {
        dispatch({
          type: "GET_DATA",
          payload: deleteCommentResponse.data.posts,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const date = new Date(props?.createdAt);
  const validPostDate = date.toLocaleDateString("en-us", {
    day: "numeric",
    year: "numeric",
    month: "short",
  });

  return (
    <article className="postCard border-b p-3 flex flex-col gap-4">
      <div className="postCard_head flex justify-between items-center">
        <div className="flex gap-4">
          {getUser?.username == activeUser?.username ? (
            <AvatarActionLink
              avatar={getUser?.profileAvatar}
              reach={`/profile`}
            />
          ) : (
            <AvatarActionLink
              avatar={getUser?.profileAvatar}
              reach={`/${getUser?.username}`}
            />
          )}

          <div
            className="flex flex-col gap-1 cursor-pointer"
            onClick={() => {
              navigate(
                `/${
                  getUser?.username == activeUser?.username
                    ? "profile"
                    : getUser?.username
                }`
              );
            }}
          >
            <div className="flex gap-2 items-center">
              <span className="font-semibold">
                {getUser?.firstName} {getUser?.lastName}
              </span>
              <span className="text-sm text-stone-400">{validPostDate}</span>
            </div>
            <div className="text-xs">{props?.username}</div>
          </div>
        </div>

        {!props.isBook && !props.isLike && (
          <div>
            <IconActionBtn handleClick={handlePostMenuOpen}>
              <MoreHorizOutlined className="text-stone-950 dark:text-stone-50" />
            </IconActionBtn>
            <Menu
              id="basic-menu"
              anchorEl={postMenu}
              open={isPostMenuOpen}
              onClose={handlePostMenuClose}
              sx={{
                background: "transparent",
              }}
              MenuListProps={{
                "aria-labelledby": "basic-button",
                style: {
                  background: "transparent",
                },
              }}
            >
              {props?.username == currentUser?.username ? (
                <div>
                  <ModalProvider
                    isOpen={isEditPostModalOpen}
                    closeModal={() => {
                      editPostModalClose();
                      handlePostMenuClose();
                    }}
                    modalTitle="Add Post"
                    modalBtnVariant={
                      <MenuItem
                        onClick={() => {
                          editPostModalOpen();
                        }}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <EditOutlinedIcon />
                        <span>Edit</span>
                      </MenuItem>
                    }
                  >
                    <AddPostCard
                      {...props}
                      isEdit
                      closePostModal={editPostModalClose}
                    />
                  </ModalProvider>
                  <MenuItem
                    onClick={() => {
                      if (isBookmarked) {
                        handleRemoveBookmark(props?._id, token);
                      }
                      handleDeletePost(props?._id, token);
                      handlePostMenuClose();
                    }}
                    sx={{ display: "flex", alignItems: "center", gap: "12px" }}
                  >
                    <DeleteOutlinedIcon />
                    <span>Delete</span>
                  </MenuItem>
                </div>
              ) : isFollowing ? (
                <div>
                  <MenuItem
                    onClick={() => {
                      handleUnfollowUser(getUser._id, token);
                      handlePostMenuClose();
                    }}
                  >
                    Unfollow
                  </MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem
                    onClick={() => {
                      handleFollowUser(getUser._id, token);
                      handlePostMenuClose();
                    }}
                  >
                    Follow
                  </MenuItem>
                </div>
              )}
            </Menu>
          </div>
        )}
        {props.isBook && (
          <IconActionBtn
            iconTitle="Remove"
            handleClick={() => {
              handleRemoveBookmark(props?._id, token);
              ToastHandler("warn", "Removed from Bookmark");
            }}
          >
            <BookmarkRemoveIcon />
          </IconActionBtn>
        )}
        {props.isLike && (
          <IconActionBtn
            iconTitle="Remove"
            handleClick={() => {
              handlePostDislike(props?._id, token);
            }}
          >
            <CloseIcon />
          </IconActionBtn>
        )}
      </div>
      <div className="postCard_body flex flex-col gap-2">
        <p>{props?.content}</p>
        {props?.mediaURL && (
          <div className="rounded-lg overflow-hidden border border-stone-400">
            {props?.mediaAlt?.includes("mp4") ? (
              <video controls>
                <source src={props?.mediaURL} type="video/mp4" />
              </video>
            ) : (
              <img
                src={props?.mediaURL}
                alt={props?.mediaAlt}
                className="object-cover w-full"
              />
            )}
          </div>
        )}
      </div>
      <div className="postCard_footer flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1 items-center">
            {isLiked ? (
              <IconActionBtn
                handleClick={() => {
                  handlePostDislike(props?._id, token);
                }}
              >
                <Favorite />
              </IconActionBtn>
            ) : (
              <IconActionBtn
                handleClick={() => {
                  handlePostLike(props?._id, token);
                }}
              >
                <FavoriteBorder />
              </IconActionBtn>
            )}
            <span>{props?.likes?.likeCount}</span>
          </div>
          <div className="flex gap-1 items-center">
            {isBookmarked ? (
              <IconActionBtn
                handleClick={() => {
                  handleRemoveBookmark(props?._id, token);
                  ToastHandler("warn", "Removed from Bookmark");
                }}
              >
                <Bookmark />
              </IconActionBtn>
            ) : (
              <IconActionBtn
                handleClick={() => {
                  handleAddBookmark(props?._id, token);
                  ToastHandler("success", "Added to Bookmark");
                }}
              >
                <BookmarkBorder />
              </IconActionBtn>
            )}
          </div>
          <div className="flex gap-1 items-center">
            <ModalProvider
              isOpen={isCommentModalOpen}
              closeModal={closeCommentModal}
              modalTitle="Comments"
              modalBtnVariant={
                <IconActionBtn handleClick={openCommentModal}>
                  <Comment />
                </IconActionBtn>
              }
            >
              <div>
                <PostComment
                  {...props}
                  isCommentEdit={isCommentEdit}
                  editCommentHandler={setIsCommentEdit}
                />
                <div className="p-2 flex flex-col gap-2 h-[200px] overflow-y-scroll">
                  {props.comments.length == 0 ? (
                    isDarkTheme ? (
                      <div className="flex flex-col mx-auto gap-3 items-center">
                        <img
                          className="w-16 h-16"
                          src="https://res.cloudinary.com/duqsyuriy/image/upload/v1689340192/darkComment_wq01v4.svg"
                        />
                        <span>No Comments</span>
                      </div>
                    ) : (
                      <div className="flex flex-col mx-auto gap-3 items-center">
                        <img
                          className="w-16 h-16"
                          src="https://res.cloudinary.com/duqsyuriy/image/upload/v1689340191/lightComment_g2dqyj.svg"
                        />
                        <span>No Comments</span>
                      </div>
                    )
                  ) : (
                    props.comments.map((currentComment) => {
                      return (
                        <article
                          key={currentComment._id}
                          className="flex p-2 lg:flex-col lg:items-start lg:gap-2 xl:flex-row xl:justify-between xl:items-center bg-stone-200 h-[100px] rounded-sm"
                        >
                          <div className="flex gap-3 lg:justify-start lg:w-full xl:justify-start xl:gap-3">
                            <AvatarActionLink
                              avatar={currentComment.profileAvatar}
                            />
                            <div className="flex flex-col flex-1">
                              <div className="flex justify-between">
                                <div className="flex flex-col">
                                  <span className="font-medium">
                                    {currentComment.firstName}{" "}
                                    {currentComment.lastName}
                                  </span>
                                  <span className="text-xs">
                                    {currentComment.username}
                                  </span>
                                </div>
                                <div>
                                  {activeUser.username ==
                                  currentComment.username ? (
                                    <div className="flex gap-2">
                                      <IconActionBtn
                                        handleClick={() =>
                                          setIsCommentEdit(currentComment)
                                        }
                                      >
                                        <EditIcon />
                                      </IconActionBtn>
                                      <IconActionBtn
                                        handleClick={() => {
                                          handleDeleteComment(
                                            props._id,
                                            currentComment._id,
                                            token
                                          );
                                          ToastHandler(
                                            "warn",
                                            "Comment Deleted"
                                          );
                                        }}
                                      >
                                        <DeleteIcon />
                                      </IconActionBtn>
                                    </div>
                                  ) : activeUser.following.findIndex(
                                      (currentFollowing) => {
                                        return (
                                          currentFollowing.username ==
                                          currentComment.username
                                        );
                                      }
                                    ) == -1 ? (
                                    <IconActionBtn
                                      handleClick={() =>
                                        handleFollowUser(
                                          currentComment._id,
                                          token
                                        )
                                      }
                                    >
                                      <PersonAddIcon />
                                    </IconActionBtn>
                                  ) : (
                                    <IconActionBtn
                                      handleClick={() =>
                                        handleUnfollowUser(
                                          currentComment._id,
                                          token
                                        )
                                      }
                                    >
                                      <PersonRemoveIcon />
                                    </IconActionBtn>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center mt-3 justify-between">
                                <p className="text-sm">
                                  {truncateUtility(
                                    currentComment.commentData,
                                    20
                                  )}
                                </p>
                                {!(
                                  truncateUtility(
                                    currentComment.commentData,
                                    20
                                  ).length < 20
                                ) && (
                                  <ModalProvider
                                    modalTitle="Read Comment"
                                    isOpen={
                                      currentComment.username ==
                                        commentFullName &&
                                      isCommentFullModalOpen
                                    }
                                    closeModal={closeCommentFullModal}
                                    modalBtnVariant={
                                      <button
                                        className="text-sm"
                                        onClick={() => {
                                          setCommentFullName(
                                            currentComment.username
                                          );
                                          openCommentFullModal();
                                        }}
                                      >
                                        Read More
                                      </button>
                                    }
                                  >
                                    <div className="p-3">
                                      <p className="text-sm">
                                        {currentComment.commentData}
                                      </p>
                                    </div>
                                  </ModalProvider>
                                )}
                              </div>
                            </div>
                          </div>
                        </article>
                      );
                    })
                  )}
                </div>
              </div>
            </ModalProvider>
            <span>
              {props?.comments.length !== 0 && props?.comments.length}
            </span>
          </div>
        </div>
        <IconActionBtn>
          <Share />
        </IconActionBtn>
      </div>
    </article>
  );
};

export default PostCard;
