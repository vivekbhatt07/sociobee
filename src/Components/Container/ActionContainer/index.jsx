import React from "react";

const ActionContainer = (props) => {
  const { className, children } = props;
  const classes = className + " flex gap-2";
  return <div className={classes}>{children}</div>;
};

export default ActionContainer;
