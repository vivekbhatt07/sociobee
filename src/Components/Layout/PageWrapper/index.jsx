import React from "react";

const PageWrapper = (props) => {
  const { children, className } = props;
  const classes = className + " max-w-7xl m-auto";
  return <div className={classes}>{children}</div>;
};

export default PageWrapper;
