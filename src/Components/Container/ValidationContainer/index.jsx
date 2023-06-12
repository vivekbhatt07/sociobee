import React from "react";

const ValidationContainer = (props) => {
  const { className, children } = props;
  const classes =
    className +
    " rounded text-xs bg-stone-950 text-stone-50 px-2 py-2 text-center dark:bg-stone-500";
  return <div className={classes}>{children}</div>;
};

export default ValidationContainer;
