import React from "react";
import {
  AvatarActionLink,
  ContainedActionBtn,
  IconActionBtn,
} from "../../Actions";

import {
  ImageOutlined,
  GifBoxOutlined,
  SentimentSatisfiedAltOutlined as SmileIcon,
} from "@mui/icons-material";

const AddPostCard = () => {
  return (
    <article className="addPostCard flex gap-4 px-3 py-2 border-b">
      <div className="addPostCard_user">
        <AvatarActionLink avatar="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp" />
      </div>
      <div className="addPostCard_actions flex-1 flex flex-col gap-2.5">
        <textarea
          className="addPostCard_action_input h-16 border-0 outline-0"
          placeholder="What is happening?!"
        />
        <div className="addPostCard_meta_actions flex justify-between items-center">
          <div className="addPostCard_meta_primary flex gap-0.5">
            <IconActionBtn>
              <ImageOutlined />
            </IconActionBtn>
            <IconActionBtn>
              <GifBoxOutlined />
            </IconActionBtn>
            <IconActionBtn>
              <SmileIcon />
            </IconActionBtn>
          </div>
          <ContainedActionBtn>Post</ContainedActionBtn>
        </div>
      </div>
    </article>
  );
};

export default AddPostCard;