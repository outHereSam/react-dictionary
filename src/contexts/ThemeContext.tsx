import React, { createContext, useState, useEffect, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const defaultContext: ThemeContextProps = {
  theme: "light",
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextProps>(defaultContext);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>((): Theme => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
    const prefersDark = window.matchMedia(
      "(prefers-colors-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log("Toggle theme called.");
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
