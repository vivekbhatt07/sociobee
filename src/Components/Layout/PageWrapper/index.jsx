import React from "react";

const PageWrapper = (props) => {
  const { children, className } = props;
  const classes =
    className +
    " max-w-7xl m-auto flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-14 mx-3 my-4 sm:mx-8 sm:my-6 md:mx-12 md:my-8 lg:mx-14 lg:my-8";
  return <main className={classes}>{children}</main>;
};

export default PageWrapper;
