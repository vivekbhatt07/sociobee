import React from "react";

const IconActionBtn = (props) => {
  const { className, children, iconBtnType, handleClick } = props;
  const classes =
    className +
    " w-8 h-8 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-stone-300 dark:text-stone-950";
  return (
    <button className={classes} type={iconBtnType} onClick={handleClick}>
      {children}
    </button>
  );
};

export default IconActionBtn;
