import {createContext} from "react";
import {colorsPalette} from "@/core/Provider/colors";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface TinyContextTypes {
  theme?: Theme
  colors?: any,
  setTheme?: any;
}

export const TinyContext = createContext<TinyContextTypes>({});
