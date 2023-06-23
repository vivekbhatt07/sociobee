import React from "react";

const ContainedActionBtn = (props) => {
  const {
    className,
    children,
    containBtnType,
    handleClick,
    isDisabled,
    btnStyle,
  } = props;
  const classes =
    className +
    " bg-stone-900 border-2 border-stone-900 text-stone-50 py-2 px-3.5 rounded hover:bg-stone-950 hover:border-stone-950 transition-all duration-500 transform active:scale-[0.99] active:duration-200";
  return (
    <button
      className={classes}
      type={containBtnType}
      onClick={handleClick}
      disabled={!isDisabled}
      style={{ ...btnStyle }}
    >
      {children}
    </button>
  );
};

export default ContainedActionBtn;
