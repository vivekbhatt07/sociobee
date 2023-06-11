import React, { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};

const useTheme = () => createContext(ThemeContext);

export { useTheme, ThemeProvider };
