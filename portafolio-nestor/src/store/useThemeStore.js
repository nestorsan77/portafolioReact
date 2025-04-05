// src/store/useThemeStore.js
import { create } from "zustand";
import { colorThemes } from "../theme/colorThemes";

export const useThemeStore = create((set) => ({
  theme: "lime",
  setThemeByName: (themeName) => {
    if (!colorThemes[themeName]) return;

    document.documentElement.setAttribute("data-theme", themeName);
    set({ theme: themeName });
  },
}));
