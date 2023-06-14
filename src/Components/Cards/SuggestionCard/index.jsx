import React from "react";
import { AvatarActionLink, ContainedActionBtn } from "../../Actions";
import { Add } from "@mui/icons-material";

const SuggestionCard = () => {
  return (
    <article className="flex p-2 lg:flex-col lg:items-start lg:gap-2 xl:flex-row xl:justify-between xl:items-center">
      <div className="flex gap-3 lg:justify-start lg:w-full xl:justify-start xl:gap-3">
        <AvatarActionLink avatar="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp" />
        <div className="flex flex-col">
          <span>John Doe</span>
          <span className="text-xs">@johndoe</span>
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
