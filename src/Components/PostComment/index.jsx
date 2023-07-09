import React, { useState } from "react";
import { TextField } from "@mui/material";
import { TextInputLabel } from "../Labels";
import { useAuth, usePost, useUser, useTheme } from "../../Context";
import { ContainedActionBtn } from "../Actions";

const PostComment = () => {
  const { token, activeUser } = useAuth();
  const { isDarkTheme } = useTheme();
  const { dispatch } = usePost();
  const [commentText, setCommentText] = useState("");
  return (
    <div className="p-2">
      <form>
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
        <ContainedActionBtn>Reply</ContainedActionBtn>
      </form>
    </div>
  );
};

export default PostComment;
