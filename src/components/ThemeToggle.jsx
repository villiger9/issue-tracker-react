import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div onClick={toggleTheme} className="theme-icon" aria-label="Toggle Theme">
      {theme === "light" ? (
        <MoonIcon style={{ width: "24px", height: "24px" }} />
      ) : (
        <SunIcon style={{ width: "24px", height: "24px" }} />
      )}
    </div>
  );
};

export default ThemeToggle;
