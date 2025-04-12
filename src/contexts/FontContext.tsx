import React, { createContext, useState, useEffect, ReactNode } from "react";

type FontCategory = "sans-serif" | "serif" | "monospace";

const fontMap: Record<FontCategory, string> = {
  "sans-serif": '"Inter", sans-serif',
  serif: '"Lora", serif',
  monospace: '"Inconsolata", monospace',
};

interface FontContextProps {
  font: string;
  setFont: (newFont: FontCategory) => void;
}

export const FontContext = createContext<FontContextProps>({
  font: "sans-serif",
  setFont: () => {},
});

interface FontProviderProps {
  children: ReactNode;
}

export const FontProvider: React.FC<FontProviderProps> = ({ children }) => {
  const [font, setFontState] = useState<FontCategory>(() => {
    const storedFont = localStorage.getItem("font") as FontCategory;
    if (
      storedFont === "serif" ||
      storedFont === "monospace" ||
      storedFont === "sans-serif"
    )
      return storedFont;
    return "sans-serif";
  });

  const setFont = (f: FontCategory) => {
    setFontState(f);
    localStorage.setItem("font", f);
  };

  useEffect(() => {
    document.body.style.fontFamily = fontMap[font];
  }, [font]);

  return (
    <FontContext.Provider value={{ font, setFont }}>
      {children}
    </FontContext.Provider>
  );
};
