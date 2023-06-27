import React from "react";
import { AvatarActionLink, ContainedActionBtn } from "../../Actions";
import { Add } from "@mui/icons-material";
import { useUser } from "../../../Context/UserContext";
import { useAuth } from "../../../Context/AuthContext";

const SuggestionCard = (props) => {
  const { handleFollowUser } = useUser();
  const { token } = useAuth();
  const { _id, firstName, lastName, profileAvatar, username } = props;
  return (
    <article className="flex p-2 lg:flex-col lg:items-start lg:gap-2 xl:flex-row xl:justify-between xl:items-center">
      <div className="flex gap-3 lg:justify-start lg:w-full xl:justify-start xl:gap-3">
        <AvatarActionLink avatar={profileAvatar} />
        <div className="flex flex-col">
          <span className="font-medium">
            {firstName} {lastName}
          </span>
          <span className="text-xs">{username}</span>
        </div>
      </div>
      <ContainedActionBtn
        className="follow_btn flex items-center gap-2 text-sm"
        containBtnType="button"
        handleClick={() => {
          handleFollowUser(_id, token);
        }}
      >
        <span>Follow</span>
      </ContainedActionBtn>
    </article>
  );
};

export default SuggestionCard;
