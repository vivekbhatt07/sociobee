import React from "react";
import { CircularProgress } from "@mui/material";
import { calculatePercentageUtility } from "../../Utility/FunctionalUtility";

const CircularProgressDonut = (props) => {
  const getPercentage = { value: calculatePercentageUtility(props.value, 300) };

  let barColor;

  if (props.value <= 250) {
    barColor = "primary";
  } else if (props.value < 300) {
    barColor = "warning";
  } else {
    barColor = "error";
  }

  return (
    <div className="relative flex items-center w-8 h-8">
      <CircularProgress
        variant="determinate"
        color={barColor}
        {...getPercentage}
        size={32}
      />
      <span className="absolute inset-0 flex justify-center items-center text-[10px]">
        {props.value}
      </span>
    </div>
  );
};

export default CircularProgressDonut;
