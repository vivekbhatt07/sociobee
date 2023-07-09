import React, { useState, useRef } from "react";
import Menu from "@mui/material/Menu";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { v4 as uuid } from "uuid";
import { formatDate } from "../../../backend/utils/authUtils";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import { editPostService } from "../../../Utility";
import {
  AvatarActionLink,
  ContainedActionBtn,
  IconActionBtn,
} from "../../Actions";

import {
  ImageOutlined,
  SentimentSatisfiedAltOutlined as SmileIcon,
  Close as CloseIcon,
  Visibility,
  DeleteOutline,
} from "@mui/icons-material";
import { useAuth, usePost, useTheme } from "../../../Context";

import { sendPostService } from "../../../Utility";
import { TextField } from "@mui/material";

const AddPostCard = (props) => {
  const { token, activeUser } = useAuth();
  const { isDarkTheme } = useTheme();
  const { dispatch } = usePost();

  // EMOJI MENU:
  const [emojiMenu, setEmojiMenu] = useState(null);
  const isEmojiMenuOpen = Boolean(emojiMenu);
  const handleAddEmojiOpen = (event) => {
    setEmojiMenu(event.currentTarget);
  };
  const handleAddEmojiClose = () => {
    setEmojiMenu(null);
  };

  // IMAGE MENU:
  const [imageMenu, setImageMenu] = useState(null);
  const isImageMenuOpen = Boolean(imageMenu);
  const handleImageMenuOpen = (event) => {
    setImageMenu(event.currentTarget);
  };
  const handleImageMenuClose = () => {
    setImageMenu(null);
  };

  const [postData, setPostData] = useState({
    postText: props.isEdit ? props?.content : "",
    postImage: props.isEdit ? props?.mediaURL : "",
    postImageName: props.isEdit ? props?.mediaAlt : "",
  });

  const handleSendPostService = async (token, post) => {
    const sendPostServiceResponse = await sendPostService(token, post);
    if (sendPostServiceResponse.status == 201) {
      dispatch({
        type: "GET_DATA",
        payload: sendPostServiceResponse.data.posts,
      });
    }
  };

  // USER POST DATA HANDLE:
  const handlePostData = (event) => {
    const { name, value, files, type } = event.target;

    setPostData((prevPostData) => {
      return {
        ...prevPostData,
        [name]:
          type == "file" && files.length !== 0
            ? URL.createObjectURL(files[0])
            : value,
        postImageName:
          type == "file" && files.length !== 0 ? files[0].name : "",
      };
    });
  };

  // HANDLE EDIT POST:

  const handleEditPost = async (postId, postData, encodedToken) => {
    const editPostResponse = await editPostService(
      postId,
      postData,
      encodedToken
    );
    if (editPostResponse.status === 201) {
      dispatch({ type: "GET_DATA", payload: editPostResponse.data.posts });
    }
  };

  // SUBMIT USER POST DATA:

  const submitPostData = (event) => {
    event.preventDefault();
    if (props.isEdit) {
      handleEditPost(
        props._id,
        {
          ...props,
          content: postData.postText,
          mediaURL: postData.postImage,
          mediaAlt: postData.postImageName,
        },
        token
      );
    }
    if (!props.isEdit) {
      handleSendPostService(token, {
        _id: uuid(),
        content: postData.postText,
        mediaURL: postData.postImage,
        mediaAlt: postData.postImageName,
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: [],
        },
        username: activeUser.username,
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [],
      });
    }

    setPostData({
      postText: "",
      postImage: "",
      postImageName: "",
    });

    if (props.isModal || props.isEdit) {
      props.closePostModal();
    }
  };

  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#f6f8fa",
    100: "#eaeef2",
    200: "#d0d7de",
    300: "#afb8c1",
    400: "#8c959f",
    500: "#6e7781",
    600: "#57606a",
    700: "#424a53",
    800: "#32383f",
    900: "#24292f",
  };

  return (
    <article className="addPostCard flex gap-4 px-3 py-2 bg-[#fff] dark:bg-stone-950">
      <div className="addPostCard_user">
        <AvatarActionLink avatar={activeUser.profileAvatar} reach="/profile" />
      </div>
      <form
        onSubmit={submitPostData}
        className="addPostCard_actions flex-1 flex flex-col gap-2.5"
      >
        <TextField
          variant="standard"
          multiline
          minRows={3}
          placeholder="What is happening?!"
          name="postText"
          onChange={handlePostData}
          value={postData?.postText}
          inputProps={{
            style: {
              color: isDarkTheme ? "#fafaf990" : "#0c0a09",
              fontWeight: "300",
              fontFamily: "inherit",
            },
          }}
          InputProps={{ disableUnderline: true }}
        />

        <div className="addPostCard_meta_actions flex justify-between items-center">
          <div className="addPostCard_meta_primary flex gap-1">
            <label>
              <div
                className="w-8 h-8 text-stone-950 cursor-pointer rounded-full flex justify-center items-center transition-all duration-300 hover:bg-stone-300 dark:text-stone-50 dark:hover:bg-stone-700"
                title="Upload Image"
              >
                <ImageOutlined />
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                name="postImage"
                onChange={(event) => {
                  handlePostData(event);
                }}
              />
            </label>
            <label>
              <div
                className="w-8 h-8 text-stone-950 cursor-pointer rounded-full flex justify-center items-center transition-all duration-300 hover:bg-stone-300 dark:text-stone-50 dark:hover:bg-stone-700"
                title="Upload Video"
              >
                <VideoCameraFrontOutlinedIcon />
              </div>
              <input
                id="video-uploader"
                type="file"
                accept="video/*"
                className="hidden"
                name="postImage"
                onChange={(event) => {
                  handlePostData(event);
                }}
              />
            </label>
            <IconActionBtn
              handleClick={handleAddEmojiOpen}
              iconBtnType="button"
              iconTitle="Emojis"
            >
              <SmileIcon />
            </IconActionBtn>

            <Menu
              id="basic-menu"
              anchorEl={emojiMenu}
              open={isEmojiMenuOpen}
              onClose={handleAddEmojiClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
                style: {
                  padding: "0",
                  backgroundColor: "#000",
                  borderRadius: "4px",
                },
              }}
            >
              <div className="text-stone-800 bg-stone-200 p-4 flex flex-col gap-4 rounded dark:text-stone-50 dark:bg-stone-800">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Select Emoji</span>
                  <IconActionBtn
                    handleClick={handleAddEmojiClose}
                    className="text-stone-950 dark:text-stone-50 hover:text-stone-950 hover:dark:text-stone-950"
                  >
                    <CloseIcon className="dark:text-stone-50" />
                  </IconActionBtn>
                </div>
                <div className="bg-stone-50 rounded-md dark:bg-stone-900 overflow-hidden">
                  <Picker
                    data={data}
                    emojiSize={20}
                    emojiButtonSize={28}
                    maxFrequentRows={0}
                    navPosition="bottom"
                    previewPosition="none"
                    perLine={8}
                    theme={isDarkTheme ? "dark" : "light"}
                    onEmojiSelect={(emoji) => {
                      setPostData((prevPostData) => {
                        return {
                          ...prevPostData,
                          postText: prevPostData.postText + emoji.native,
                        };
                      });
                    }}
                  />
                </div>
              </div>
            </Menu>

            {postData.postImage && (
              <IconActionBtn
                iconBtnType="button"
                handleClick={handleImageMenuOpen}
                iconTitle="Media Preview"
              >
                <Visibility />
              </IconActionBtn>
            )}
            <Menu
              id="basic-menu"
              anchorEl={imageMenu}
              open={isImageMenuOpen}
              onClose={handleImageMenuClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
                style: {
                  padding: "0",
                  backgroundColor: isDarkTheme ? "#000" : "#fff",
                  borderRadius: "4px",
                },
              }}
            >
              <div className="text-stone-800 bg-stone-200 p-4 flex flex-col gap-4 rounded dark:text-stone-50 dark:bg-stone-800">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Media Preview</span>
                  <IconActionBtn
                    handleClick={handleImageMenuClose}
                    className="text-stone-950 dark:text-stone-50 hover:text-stone-950 hover:dark:text-stone-950"
                  >
                    <CloseIcon />
                  </IconActionBtn>
                </div>

                <div className="">
                  {postData.postImageName?.includes("mp4") ? (
                    <video controls>
                      <source src={postData.postImage} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={postData.postImage}
                      className="object-cover w-full"
                    />
                  )}
                </div>
              </div>
            </Menu>

            {postData.postImage && (
              <IconActionBtn
                iconBtnType="button"
                handleClick={() => {
                  setPostData((prevPostData) => {
                    return {
                      ...prevPostData,
                      postImage: "",
                      postImageName: "",
                    };
                  });
                  let uploader = document.getElementById("video-uploader");
                  uploader.value = null;
                }}
                iconTitle="Remove Media"
              >
                <DeleteOutline />
              </IconActionBtn>
            )}
          </div>
          {props.isEdit ? (
            <ContainedActionBtn
              containBtnType="submit"
              isDisabled={postData.postText || postData.postImage}
              btnStyle={{
                cursor:
                  postData.postText || postData.postImage
                    ? "pointer"
                    : "not-allowed",
                opacity: postData.postText || postData.postImage ? "1" : "0.5",
              }}
              className="px-3 py-1 text-xs"
            >
              Save
            </ContainedActionBtn>
          ) : (
            <ContainedActionBtn
              containBtnType="submit"
              isDisabled={postData.postText || postData.postImage}
              btnStyle={{
                cursor:
                  postData.postText || postData.postImage
                    ? "pointer"
                    : "not-allowed",
                opacity: postData.postText || postData.postImage ? "1" : "0.5",
              }}
              className="px-3 py-1 text-xs"
            >
              Post
            </ContainedActionBtn>
          )}
        </div>
      </form>
    </article>
  );
};

export default AddPostCard;
