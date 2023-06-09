import React from "react";

const PageWrapper = (props) => {
  const { children, className } = props;
  const classes =
    className +
    " max-w-7xl min-h-screen m-auto flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-14 px-3 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 lg:px-14 lg:py-8";
  return <main className={classes}>{children}</main>;
};

export default PageWrapper;
