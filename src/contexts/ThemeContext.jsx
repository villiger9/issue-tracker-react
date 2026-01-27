import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const theme = {
    background: isDark ? "#333" : "#FFF",
    color: isDark ? "#FFF" : "#333",
    toggle: () => setIsDark(!isDark),
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
