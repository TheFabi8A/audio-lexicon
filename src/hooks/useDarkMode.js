import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(() => {
    const userTheme = localStorage.getItem("theme");

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    return userTheme || systemTheme;
  });
  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const systemThemeMedia = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
    };

    systemThemeMedia.addEventListener("change", handleSystemThemeChange);

    return () => {
      systemThemeMedia.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);
  return [theme, themeToggler];
};

export default useDarkMode;
