import {useContext} from "react";
import {Theme, TinyContext} from "@/core/Provider/tiny-context";

interface UseThemeReturn {
  theme?: Theme;
  colors?: Record<string, string>;
  setTheme?: () => void;
}

export const useTheme = () : UseThemeReturn => {
  const context = useContext(TinyContext);

  if (!context) {
    throw new Error('useTheme must be used within TinyProvider');
  }

  return context;
}
