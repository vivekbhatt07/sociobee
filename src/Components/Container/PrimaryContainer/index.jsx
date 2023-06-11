import React from "react";

const PrimaryContainer = (props) => {
  const { className, children } = props;
  const classes = className + " border border-stone-400 px-4 py-4 rounded flex";
  return <div className={classes}>{children}</div>;
};

export default PrimaryContainer;
