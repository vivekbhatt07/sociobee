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
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { Skeleton } from "@mui/material";
import "./PostCard.css";
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
    <article className="postCard border-b p-3 flex flex-col gap-6">
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
            {getUser ? (
              <div className="flex gap-2 items-center">
                <span className="font-semibold">
                  {getUser?.firstName} {getUser?.lastName}
                </span>
                <span className="text-sm text-stone-600 dark:text-stone-400">
                  {validPostDate}
                </span>
              </div>
            ) : (
              <Skeleton
                animation="pulse"
                variant="text"
                width={300}
                height={24}
              />
            )}
            {getUser ? (
              <div className="text-xs">{props?.username}</div>
            ) : (
              <Skeleton
                animation="pulse"
                variant="text"
                width={150}
                height={16}
              />
            )}
          </div>
        </div>

        {!props.isBook && !props.isLike && (
          <div>
            {getUser ? (
              <IconActionBtn
                className="post_menu_btn"
                handleClick={handlePostMenuOpen}
                iconBtnLabel="Post Menu Button"
              >
                <MoreHorizOutlined className="post_menu_btn text-stone-950 dark:text-stone-50" />
              </IconActionBtn>
            ) : (
              <Skeleton
                animation="pulse"
                variant="circular"
                width={32}
                height={32}
              />
            )}
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
                    modalTitle="Edit Post"
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
        {props.isBook &&
          (getUser ? (
            <IconActionBtn
              iconTitle="Remove"
              handleClick={() => {
                handleRemoveBookmark(props?._id, token);
                ToastHandler("warn", "Removed from Bookmark");
              }}
            >
              <BookmarkRemoveIcon />
            </IconActionBtn>
          ) : (
            <Skeleton
              animation="pulse"
              variant="circular"
              width={32}
              height={32}
            />
          ))}
        {props.isLike &&
          (getUser ? (
            <IconActionBtn
              iconTitle="Remove"
              handleClick={() => {
                handlePostDislike(props?._id, token);
              }}
            >
              <CloseIcon />
            </IconActionBtn>
          ) : (
            <Skeleton
              animation="pulse"
              variant="circular"
              width={32}
              height={32}
            />
          ))}
      </div>
      <div className="postCard_body flex flex-col gap-2">
        {getUser ? (
          <p className="text-base">{props?.content}</p>
        ) : (
          <div>
            <Skeleton
              animation="pulse"
              variant="text"
              width="100%"
              height={24}
            />
            <Skeleton
              animation="pulse"
              variant="text"
              width="50%"
              height={24}
            />
          </div>
        )}
        {props?.mediaURL &&
          (getUser ? (
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
          ) : (
            <Skeleton
              animation="pulse"
              variant="rectangular"
              width="100%"
              height={280}
            />
          ))}
      </div>
      <div className="postCard_footer flex items-center gap-2 justify-between mt-4">
        <div className="flex items-center gap-4">
          {getUser ? (
            <div className="relative flex gap-1 items-center">
              {isLiked ? (
                <IconActionBtn
                  iconTitle="Remove Like"
                  className="unlike_btn"
                  iconBtnLabel="Unlike Button"
                  handleClick={() => {
                    handlePostDislike(props?._id, token);
                  }}
                >
                  <Favorite />
                </IconActionBtn>
              ) : (
                <IconActionBtn
                  iconTitle="Like"
                  className="like_btn"
                  iconBtnLabel="Like Button"
                  handleClick={() => {
                    handlePostLike(props?._id, token);
                  }}
                >
                  <FavoriteBorder />
                </IconActionBtn>
              )}
              {props?.comments.length !== 0 && (
                <span className="absolute bg-stone-800 text-stone-100 text-[10px] rounded-full w-5 h-5 p-2 flex justify-center items-center right-0 top-0 -translate-y-1/2 translate-x-1/2 dark:bg-stone-500">
                  {props?.likes?.likeCount}
                </span>
              )}
            </div>
          ) : (
            <Skeleton
              animation="pulse"
              variant="circular"
              width={32}
              height={32}
            />
          )}
          {getUser ? (
            <div className="flex gap-1 items-center">
              {isBookmarked ? (
                <IconActionBtn
                  iconTitle="Remove Bookmark"
                  className="remove_bookmark_btn"
                  iconBtnLabel="Remove Bookmark Button"
                  handleClick={() => {
                    handleRemoveBookmark(props?._id, token);
                    ToastHandler("warn", "Removed from Bookmark");
                  }}
                >
                  <Bookmark />
                </IconActionBtn>
              ) : (
                <IconActionBtn
                  iconTitle="Add Bookmark"
                  className="add_bookmark_button"
                  iconBtnLabel="Add Bookmark Button"
                  handleClick={() => {
                    handleAddBookmark(props?._id, token);
                    ToastHandler("success", "Added to Bookmark");
                  }}
                >
                  <BookmarkBorder />
                </IconActionBtn>
              )}
            </div>
          ) : (
            <Skeleton
              animation="pulse"
              variant="circular"
              width={32}
              height={32}
            />
          )}
          {getUser ? (
            <div className="relative flex gap-1 items-center mt-1">
              <ModalProvider
                isOpen={isCommentModalOpen}
                closeModal={closeCommentModal}
                modalTitle="Comments"
                modalBtnVariant={
                  <IconActionBtn
                    iconTitle="Comment"
                    iconBtnLabel="Comment Button"
                    handleClick={openCommentModal}
                    className="comment_btn"
                  >
                    <ModeCommentOutlinedIcon />
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
                      props.comments
                        .map((currentComment) => {
                          return (
                            <article
                              key={currentComment._id}
                              className="flex p-2 lg:flex-col lg:items-start lg:gap-2 xl:flex-row xl:justify-between xl:items-center bg-stone-200 h-[100px] rounded-sm dark:bg-stone-600"
                            >
                              <div className="flex gap-3 lg:justify-start lg:w-full xl:justify-start xl:gap-3">
                                <AvatarActionLink
                                  avatar={currentComment.profileAvatar}
                                />
                                <div className="flex flex-col flex-1">
                                  <div className="flex justify-between">
                                    <div className="flex flex-col">
                                      <span className="font-medium text-sm">
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
                                        <div className="flex gap-1">
                                          <IconActionBtn
                                            iconTitle="Edit Comment"
                                            iconBtnLabel="Comment Edit Button"
                                            className="comment_edit_btn"
                                            handleClick={() =>
                                              setIsCommentEdit(currentComment)
                                            }
                                          >
                                            <EditIcon />
                                          </IconActionBtn>
                                          <IconActionBtn
                                            iconTitle="Delete Comment"
                                            iconBtnLabel="Delete Comment"
                                            className="delete_comment"
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
                                          iconTitle="Follow"
                                          className="follow_btn"
                                          iconBtnLabel="Follow User Button"
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
                                          iconTitle="Unfollow"
                                          className="unfollow_btn"
                                          iconBtnLabel="Unfollow User Button"
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
                                    <p className="text-xs">
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
                                            aria-label="Read More Comment Button"
                                            className="read_more_btn text-xs"
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
                        .reverse()
                    )}
                  </div>
                </div>
              </ModalProvider>
              {props?.comments.length !== 0 && (
                <span className="absolute bg-stone-800 text-stone-100 text-[10px] rounded-full w-5 h-5 p-2 flex justify-center items-center right-0 top-0 -translate-y-1/2 translate-x-1/2 dark:bg-stone-500">
                  {props?.comments.length !== 0 && props?.comments.length}
                </span>
              )}
            </div>
          ) : (
            <Skeleton
              animation="pulse"
              variant="circular"
              width={32}
              height={32}
            />
          )}
        </div>
        {getUser ? (
          <IconActionBtn iconBtnLabel="Share Button" className="share_btn">
            <Share />
          </IconActionBtn>
        ) : (
          <Skeleton
            animation="pulse"
            variant="circular"
            width={32}
            height={32}
          />
        )}
      </div>
    </article>
  );
};

export default PostCard;
