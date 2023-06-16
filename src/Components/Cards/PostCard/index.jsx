import React from "react";
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

const PostCard = (props) => {
  // const {
  //   _id,
  //   content,
  //   mediaURL,
  //   mediaAlt,
  //   likes,
  //   username,
  //   createdAt,
  //   updatedAt,
  //   comments,
  // } = props;
  console.log(props?._id);
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
            <IconActionBtn>
              <FavoriteBorder />
            </IconActionBtn>
            <span>{props?.likes?.likeCount}</span>
          </div>
          <div className="flex gap-1 items-center">
            <IconActionBtn>
              <BookmarkBorder />
            </IconActionBtn>
            <span>3</span>
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
    </article>
  );
};

export default PostCard;
