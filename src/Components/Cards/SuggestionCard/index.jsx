import React from "react";
import { AvatarActionLink, ContainedActionBtn } from "../../Actions";
import { Add } from "@mui/icons-material";

const SuggestionCard = (props) => {
  const { firstName, lastName, profileAvatar, username } = props;
  return (
    <article className="flex p-2 lg:flex-col lg:items-start lg:gap-2 xl:flex-row xl:justify-between xl:items-center">
      <div className="flex gap-3 lg:justify-start lg:w-full xl:justify-start xl:gap-3">
        <AvatarActionLink avatar={profileAvatar} />
        <div className="flex flex-col">
          <span>
            {firstName} {lastName}
          </span>
          <span className="text-xs">{username}</span>
        </div>
      </div>
      <ContainedActionBtn className="flex items-center gap-2">
        <Add />
        <span>Follow</span>
      </ContainedActionBtn>
    </article>
  );
};

export default SuggestionCard;
