import React from "react";
import "./PageWrapper.css";

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
        className={`mode ${props.headerMode}-mode absolute left-1/2 -translate-x-1/2 lg:top-4 lg:left-full lg:-translate-x-24`}
        variant="contained"
        onClick={() => toggleTheme(!isDarkTheme)}
      >
        <span
          className={`circle ${isDarkTheme ? "dark" : "light"}-circle`}
        ></span>
      </button>
    </main>
  );
};

export default PageWrapper;
