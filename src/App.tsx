import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";
import { FontProvider } from "./contexts/FontContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "🌚" : "🌝"}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <FontProvider>
        <ThemeSwitcher />
      </FontProvider>
    </ThemeProvider>
  );
}

export default App;
