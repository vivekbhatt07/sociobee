import React from "react";
import { AvatarActionLink, IconActionBtn } from "../../Actions";
import { MoreHorizOutlined } from "@mui/icons-material";

const PostCard = () => {
  return (
    <article className="postCard border-b p-3 flex flex-col gap-4">
      <div className="postCard_head flex justify-between items-center">
        <div className="flex gap-4">
          <AvatarActionLink avatar="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp" />
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <span className="font-semibold">Vivek Bhatt</span>
              <span className="text-sm text-stone-400">May 05 2022</span>
            </div>
            <div className="text-xs">@vivekbhatt07</div>
          </div>
        </div>
        <IconActionBtn>
          <MoreHorizOutlined />
        </IconActionBtn>
      </div>
      <div className="postCard_body">
        <p>
          Life has got all those twists and turns. You've got to hold on tight
          and off you go.
        </p>
        {/* <Video /> */}
        {/* <img /> */}
      </div>
      <div className="postCard_footer"></div>
    </article>
  );
};

export default PostCard;
