import {
  useState,
  useContext,
  createContext,
  useEffect,
  FC,
  ReactNode,
} from "react";

type ToggleThemeType = (isDarkMode: boolean) => void;

interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: ToggleThemeType;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("mode") === "dark" ? true : false
  );
  const toggleTheme: ToggleThemeType = (isDarkMode) => {
    setIsDarkTheme(isDarkMode);
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

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { useTheme, ThemeProvider };
