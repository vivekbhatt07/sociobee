import React, { useState, useContext, createContext, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = (getMode) => {
    setIsDarkTheme(getMode);
  };

  useEffect(() => {
    localStorage.setItem("mode", `${isDarkTheme ? "dark" : "light"}`);

    const activeMode = localStorage.getItem("mode");
    if (activeMode === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
