import { useEffect } from "react";
import { themeStore } from "@/store/store";

export const useTheme = () => {
  const { theme, setTheme } = themeStore();

  // Verificamos el esquema preferido y establecemos el estado inicial
  useEffect(() => {
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    
    // Solo actualizamos si el tema no está definido aún
    if (theme === "light" || theme === "dark") return;

    setTheme(preferredTheme);
  }, [theme, setTheme]);

  // Efecto para cambiar el tema en el HTML
  useEffect(() => {
    const html = document.querySelector("html");
    if (!html) return;

    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return { theme, toggleTheme };
};
