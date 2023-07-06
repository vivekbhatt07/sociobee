import React from "react";

const IconActionBtn = (props) => {
  const { className, children, iconBtnType, handleClick, iconTitle } = props;
  const classes =
    className +
    " w-8 h-8 text-stone-700 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-stone-300 active:bg-stone-400 dark:text-stone-50 dark:hover:bg-stone-700 dark:active:bg-stone-500";
  return (
    <button
      className={classes}
      type={iconBtnType}
      onClick={handleClick}
      title={iconTitle}
    >
      {children}
    </button>
  );
};

export default IconActionBtn;
