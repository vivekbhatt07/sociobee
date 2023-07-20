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
        <button
          onClick={() => navigate(-1)}
          className="w-8 h-8 text-stone-700 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-stone-300 active:bg-stone-400 dark:text-stone-50 dark:hover:bg-stone-400 dark:active:bg-stone-500"
        >
          <ArrowBackIcon className="text-stone-700" />
        </button>
      )}
      <span className="text-lg text-stone-600 font-semibold dark:text-stone-400">
        {title}
      </span>
    </div>
  );
};

export default GlossyHeader;
