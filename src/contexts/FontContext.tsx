import React, { createContext, useState, useEffect, ReactNode } from "react";

interface FontContextProps {
  font: string;
  changeFont: (newFont: string) => void;
}

const defaultContext: FontContextProps = {
  font: "Inter",
  changeFont: () => {},
};

export const FontContext = createContext<FontContextProps>(defaultContext);

interface FontProviderProps {
  children: ReactNode;
}

export const FontProvider: React.FC<FontProviderProps> = ({ children }) => {
  const [font, setFont] = useState<string>("Inter");

  useEffect(() => {
    document.documentElement.style.setProperty("--font-family", font);
  }, [font]);

  const changeFont = (newFont: string) => {
    setFont(newFont);
  };

  return (
    <FontContext.Provider value={{ font, changeFont }}>
      {children}
    </FontContext.Provider>
  );
};
