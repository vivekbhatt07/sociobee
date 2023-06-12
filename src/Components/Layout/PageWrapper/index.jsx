import React from "react";

import { useTheme } from "../../../Context";

const PageWrapper = (props) => {
  const { isDarkTheme, toggleTheme } = useTheme();

  const { children, className } = props;
  const classes =
    className +
    " max-w-7xl m-auto flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-14 px-3 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 lg:px-14 lg:py-8";
  return (
    <main className={classes}>
      {children}
      <button
        className="absolute top-0 left-0"
        onClick={() => toggleTheme(!isDarkTheme)}
      >
        Mode
      </button>
    </main>
  );
};

export default PageWrapper;
