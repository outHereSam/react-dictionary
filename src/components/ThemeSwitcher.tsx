import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="themeSwitcher">
      <label htmlFor="toggle" className="switch">
        <input
          checked={theme === "dark" ? true : false}
          type="checkbox"
          name="toggle"
          id="toggle"
          onChange={toggleTheme}
        />
        <span className="slider"></span>
      </label>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
      >
        <path
          fill="none"
          stroke={theme === "dark" ? "#a445ed" : "#838383"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
    </div>
  );
}
