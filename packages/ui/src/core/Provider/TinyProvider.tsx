import {Theme, TinyContext} from "@/core/Provider/tiny-context";
import {ReactNode, useEffect, useState} from "react";
import {colorsPalette} from "@/core/Provider/colors";

interface TinyProviderProps {
  children: ReactNode;
}

export const TinyProvider = ({children} : TinyProviderProps) => {
  // const {theme, toggleTheme} = useTheme();
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  useEffect(() => {
    const root = document.documentElement;
    const color = colorsPalette[theme];

    const cssVars: Record<string, string> = {}

    Object.entries(color).forEach(([key, value]) => {
      cssVars[`--color-${key}`] = value;
    })

    Object.entries(cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    })
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  const defaultValues = {
    theme: theme,
    setTheme: toggleTheme,
    colors: colorsPalette[theme],
  }

  return (
    <TinyContext.Provider value={defaultValues}>{children}</TinyContext.Provider>
  );
}
