import React from "react";

const SectionWrapper = (props) => {
  const { children, className } = props;
  const classes = className + " w-full";
  return <section className={classes}>{children}</section>;
};

export default SectionWrapper;
