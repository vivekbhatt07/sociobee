import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

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

import { getPostDetailService } from "../../../Utility";
import { usePost } from "../../../Context";

const PostCard = (props) => {
  const { state } = usePost();
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

  // const handlePostDetail = async () => {
  //   const postDetailResponse = await getPostDetailService(props?._id);
  //   console.log(postDetailResponse);
  // };
  // const location = useLocation();

  const getUser = state.userList.find((currentUser) => {
    return currentUser.username == props.username;
  });

  return (
    <Link
      className="postCard border-b p-3 flex flex-col gap-4"
      // to={`${location.pathname}/post/${props?._id}`}
    >
      <div className="postCard_head flex justify-between items-center">
        <div className="flex gap-4">
          <AvatarActionLink avatar={getUser?.profileAvatar} />
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <span className="font-semibold">
                {getUser?.firstName} {getUser?.lastName}
              </span>
              <span className="text-sm text-stone-400">May 05 2022</span>
            </div>
            <div className="text-xs">{props?.username}</div>
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
    </Link>
  );
};

export default PostCard;
