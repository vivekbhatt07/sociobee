import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { v4 as uuid } from "uuid";
import { formatDate } from "../../../backend/utils/authUtils";

import {
  AvatarActionLink,
  ContainedActionBtn,
  IconActionBtn,
} from "../../Actions";

import {
  ImageOutlined,
  GifBoxOutlined,
  SentimentSatisfiedAltOutlined as SmileIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { useAuth, usePost, useTheme } from "../../../Context";

import { sendPostService } from "../../../Utility";

const AddPostCard = () => {
  const { token, activeUser } = useAuth();
  const { isDarkTheme } = useTheme();
  const { dispatch } = usePost();

  const [emojiMenu, setEmojiMenu] = useState(null);
  const isEmojiMenuOpen = Boolean(emojiMenu);
  const handleAddEmojiOpen = (event) => {
    setEmojiMenu(event.currentTarget);
  };
  const handleAddEmojiClose = () => {
    setEmojiMenu(null);
  };

  const [postData, setPostData] = useState({ postText: "", postImage: "" });

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
        [name]: type == "file" ? URL.createObjectURL(files[0]) : value,
      };
    });
  };

  // SUBMIT USER POST DATA:

  const submitPostData = (event) => {
    event.preventDefault();
    handleSendPostService(token, {
      _id: uuid(),
      content: postData.postText,
      mediaURL: postData.postImage,
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
  };

  return (
    <article className="addPostCard flex gap-4 px-3 py-2 border-b">
      <div className="addPostCard_user">
        <AvatarActionLink avatar={activeUser.profileAvatar} />
      </div>
      <form
        onSubmit={submitPostData}
        className="addPostCard_actions flex-1 flex flex-col gap-2.5"
      >
        <textarea
          className="addPostCard_action_input h-16 border-0 outline-0 text-stone-950 dark:bg-stone-950 dark:text-stone-50"
          placeholder="What is happening?!"
          name="postText"
          onChange={handlePostData}
          value={postData.postText}
        />
        <div className="addPostCard_meta_actions flex justify-between items-center">
          <div className="addPostCard_meta_primary flex gap-0.5">
            <label>
              <div className="w-8 h-8 text-stone-950 cursor-pointer rounded-full flex justify-center items-center transition-all duration-300 hover:bg-stone-300 dark:text-stone-50 dark:hover:bg-stone-700">
                <ImageOutlined />
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                name="postImage"
                onChange={handlePostData}
              />
            </label>
            <IconActionBtn
              handleClick={handleAddEmojiOpen}
              iconBtnType="button"
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
          </div>
          <ContainedActionBtn containBtnType="submit">Post</ContainedActionBtn>
        </div>
      </form>
    </article>
  );
};

export default AddPostCard;
