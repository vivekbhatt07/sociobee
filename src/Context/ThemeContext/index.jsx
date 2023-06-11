import React, { useState, useContext, createContext, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("mode") === "dark" ? true : false || false
  );
  const toggleTheme = (getMode) => {
    setIsDarkTheme(getMode);
  };

  useEffect(() => {
    localStorage.setItem("mode", `${isDarkTheme ? "dark" : "light"}`);

    const activeMode = localStorage.getItem("mode");
    if (activeMode === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
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
