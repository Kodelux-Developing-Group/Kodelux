import { create } from "zustand";

type ThemeStoreProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const themeStore = create<ThemeStoreProps>((set) => ({
  theme: "dark",
  setTheme: (theme) => set({ theme }),
}));
