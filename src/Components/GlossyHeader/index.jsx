import React from "react";
import { useNavigate } from "react-router-dom";
import { IconActionBtn } from "../../Components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const GlossyHeader = (props) => {
  const navigate = useNavigate();
  const { title, isArrow } = props;
  return (
    <div className="p-4 sticky top-0 backdrop-blur-md z-10 border-b border-darkGrey dark:border-lightGrey flex items-center justify-start gap-4">
      {isArrow && (
        <IconActionBtn handleClick={() => navigate(-1)}>
          <ArrowBackIcon className="text-stone-700" />
        </IconActionBtn>
      )}
      <span className="text-lg text-stone-400 font-semibold">{title}</span>
    </div>
  );
};

export default GlossyHeader;
