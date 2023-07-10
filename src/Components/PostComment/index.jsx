import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { TextField } from "@mui/material";
import { TextInputLabel } from "../Labels";
import { useAuth, usePost, useUser, useTheme } from "../../Context";
import { ContainedActionBtn } from "../Actions";
import {
  ToastHandler,
  addCommentService,
  editCommentService,
} from "../../Utility";
import { formatDate } from "../../backend/utils/authUtils";

const PostComment = (props) => {
  const { token, activeUser } = useAuth();
  const { isDarkTheme } = useTheme();
  const { dispatch } = usePost();
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    if (props.isCommentEdit) {
      setCommentText(props.isCommentEdit.commentData);
    }
  }, [props.isCommentEdit]);

  const handleAddComment = async (postId, commentData, encodedToken) => {
    try {
      const addCommentResponse = await addCommentService(
        postId,
        commentData,
        encodedToken
      );
      if (addCommentResponse.status == 201) {
        dispatch({ type: "GET_DATA", payload: addCommentResponse.data.posts });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleEditComment = async (
    postId,
    commentId,
    commentData,
    encodedToken
  ) => {
    try {
      const editCommentResponse = await editCommentService(
        postId,
        commentId,
        commentData,
        encodedToken
      );
      if (editCommentResponse.status == 201) {
        dispatch({ type: "GET_DATA", payload: editCommentResponse.data.posts });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (!commentText) {
      return ToastHandler("warn", "Enter Text");
    }

    if (props.isCommentEdit) {
      handleEditComment(
        props._id,
        props.isCommentEdit._id,
        {
          ...props.isCommentEdit,
          commentData: commentText,
        },
        token
      );
      props.editCommentHandler(false);
      setCommentText("");
      return ToastHandler("success", "Comment Updated");
    }
    handleAddComment(
      props._id,
      {
        _id: uuid(),
        firstName: activeUser.firstName,
        lastName: activeUser.lastName,
        username: activeUser.username,
        commentData: commentText,
        profileAvatar: activeUser.profileAvatar,
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      token
    );
    setCommentText("");
    ToastHandler("success", "Comment Added");
  };
  return (
    <div className="p-2">
      <form onSubmit={handleCommentSubmit}>
        <TextInputLabel>
          <TextField
            variant="standard"
            multiline
            minRows={3}
            placeholder="Write comment..."
            name="postText"
            onChange={(event) => setCommentText(event.target.value)}
            value={commentText}
            inputProps={{
              style: {
                color: isDarkTheme ? "#fafaf990" : "#0c0a09",
                fontWeight: "300",
                fontFamily: "inherit",
                border: "1px solid #ddd",
                padding: "12px",
                borderRadius: "4px",
              },
            }}
            InputProps={{ disableUnderline: true }}
          />
        </TextInputLabel>
        {props.isCommentEdit ? (
          <ContainedActionBtn
            containBtnType="submit"
            handleClick={handleCommentSubmit}
          >
            Update
          </ContainedActionBtn>
        ) : (
          <ContainedActionBtn
            containBtnType="submit"
            handleClick={handleCommentSubmit}
          >
            Reply
          </ContainedActionBtn>
        )}
      </form>
    </div>
  );
};

export default PostComment;
