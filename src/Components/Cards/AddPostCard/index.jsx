import React, { useState } from "react";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
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
import { useAuth, usePost } from "../../../Context";

import { sendPostService } from "../../../Utility";
import { TextInput } from "../../Inputs";

import { emojiList } from "./EmojiData";

const AddPostCard = () => {
  const { token, activeUser } = useAuth();
  const { dispatch } = usePost();
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const [emojiSearchText, setEmojiSearchText] = useState("");
  const [anchor, setAnchor] = useState(null);

  const simpleString = (str) => {
    return str.trim().split(" ").join("").toLowerCase();
  };

  const handleEmojiBox = (event) => {
    if (!isEmojiOpen) {
      setAnchor(event.currentTarget);
    }
    setIsEmojiOpen((prevIsEmojiOpen) => !prevIsEmojiOpen);
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
            {/* <IconActionBtn>
              <GifBoxOutlined />
            </IconActionBtn> */}
            <IconActionBtn handleClick={handleEmojiBox} iconBtnType="button">
              <SmileIcon />
            </IconActionBtn>

            <Popper
              open={isEmojiOpen}
              transition
              anchorEl={anchor}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <div className="w-[280px] bg-stone-50 p-4 flex flex-col gap-4 rounded dark:text-stone-50 dark:bg-stone-800 shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Select Emoji</span>
                      <IconActionBtn
                        handleClick={() => {
                          handleEmojiBox();
                          setEmojiSearchText("");
                        }}
                        className="text-stone-950 dark:text-stone-50 hover:text-stone-950 hover:dark:text-stone-950"
                      >
                        <CloseIcon />
                      </IconActionBtn>
                    </div>
                    <div className="flex flex-col gap-2">
                      <TextInput
                        inputType="search"
                        inputPlaceholder="Search emojis"
                        inputHandle={(event) => {
                          setEmojiSearchText(event.target.value);
                        }}
                        inputValue={emojiSearchText}
                      />
                      <div className="relative grid grid-cols-5 h-52 overflow-y-scroll scroll-smooth">
                        {emojiList.filter((current) => {
                          return simpleString(current.description).includes(
                            simpleString(emojiSearchText)
                          );
                        }).length === 0 ? (
                          <div className="bg-stone-500 px-4 py-2 text-xs absolute top-0 translate-x-1/2 left-0 rounded-md text-stone-50">
                            No Emojies Found
                          </div>
                        ) : (
                          emojiList
                            .filter((current) => {
                              return current.description.includes(
                                emojiSearchText
                              );
                            })
                            .map((currentEmoji) => {
                              return (
                                <div
                                  key={currentEmoji.id}
                                  className="justify-self-start"
                                  title={currentEmoji.description}
                                >
                                  <IconActionBtn
                                    iconBtnType="button"
                                    handleClick={() => {
                                      setPostData((prevPostData) => {
                                        return {
                                          ...prevPostData,
                                          postText:
                                            prevPostData.postText +
                                            currentEmoji.emoji,
                                        };
                                      });
                                    }}
                                  >
                                    {currentEmoji.emoji}
                                  </IconActionBtn>
                                </div>
                              );
                            })
                        )}
                      </div>
                    </div>
                  </div>
                </Fade>
              )}
            </Popper>
          </div>
          <ContainedActionBtn containBtnType="submit">Post</ContainedActionBtn>
        </div>
      </form>
    </article>
  );
};

export default AddPostCard;
