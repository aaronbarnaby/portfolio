"use client";

import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

type DarkModeContextType = {
  isDarkMode: boolean;
  changeDarkMode: (value: boolean) => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export function DarkModeProvider({ children }: PropsWithChildren) {
  const [isDarkMode, setDarkMode] = useState(false);

  function updateTheme() {
    const currentTheme = localStorage.getItem("isDarkMode") || "false";
    if (currentTheme === "true") {
      document.body.classList.add("dark");
      setDarkMode(true);
    } else {
      document.body.classList.remove("dark");
      setDarkMode(false);
    }
  }

  useEffect(() => {
    updateTheme();
  }, []);

  function changeDarkMode(value: boolean) {
    localStorage.setItem("isDarkMode", value.toString());
    updateTheme();
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, changeDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode can only be used inside DarkModeProvider");
  }
  return context;
};
