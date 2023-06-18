import React from "react";

const OutlinedActionBtn = (props) => {
  const { className, children, outlineBtnType, handleClick } = props;
  const classes =
    className +
    " px-3 py-2 rounded border-2 transition-all duration-500 hover:text-stone-50 hover:border-stone-900 hover:bg-stone-900 transform active:scale-[0.99] active:duration-200";
  return (
    <button className={classes} type={outlineBtnType} onClick={handleClick}>
      {children}
    </button>
  );
};

export default OutlinedActionBtn;
