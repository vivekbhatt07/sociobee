import React from "react";

const Chip = (props) => {
  const { chipText, className } = props;
  const classes =
    className +
    " text-xs text-stone-600 bg-stone-200 px-3 py-1 rounded-full dark:text-stone-400 dark:bg-[#44403c90] flex justify-center items-center";
  return (
    <div className={classes}>
      <span>{chipText}</span>
    </div>
  );
};

export default Chip;
