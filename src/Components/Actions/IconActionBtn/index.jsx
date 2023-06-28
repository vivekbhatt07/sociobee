import React from "react";

const IconActionBtn = (props) => {
  const { className, children, iconBtnType, handleClick, iconTitle } = props;
  const classes =
    className +
    " w-8 h-8 text-stone-700 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-stone-300 dark:text-stone-50 dark:hover:bg-stone-700";
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
