import { useState, useLayoutEffect, useEffect } from "react";
import "animate.css";

const LOCAL_STORAGE_KEY = {
  THEME: "theme",
} as const;

const THEME = {
  LIGHT: "light",
  DARK: "dark",
} as const;

interface ThemeButtonProps {}

const ThemeButton = ({}: ThemeButtonProps) => {
  useLayoutEffect(() => {
    const theme = localStorage.getItem(LOCAL_STORAGE_KEY.THEME);
    if (theme === THEME.DARK) {
      document.querySelector("html")?.classList.add(THEME.DARK);
    }
  }, []);

  const toggleTheme = () => {
    const htmlEl = document.querySelector("html");
    if (!htmlEl) return;

    const enabledDarkMode = htmlEl.classList.contains("dark");

    const cmEditorEl = document.getElementsByClassName("cm-editor");

    if (enabledDarkMode) {
      htmlEl.classList.remove("dark");
      localStorage.removeItem(LOCAL_STORAGE_KEY.THEME);

      for (let i = 0; i < cmEditorEl.length; i++) {
        cmEditorEl[i].classList.remove("cm-dark");
      }
    } else {
      htmlEl.classList.add("dark");
      localStorage.setItem(LOCAL_STORAGE_KEY.THEME, THEME.DARK);

      for (let i = 0; i < cmEditorEl.length; i++) {
        cmEditorEl[i].classList.add("cm-dark");
      }
    }
  };

  // useEffect(() => {
  //   const htmlEl = document.querySelector("html");
  //   const enabledDarkMode = htmlEl.classList.contains("dark");
  //   if (htmlEl?.className === "dark") {
  //     console.log(htmlEl.className);
  //   }
  //   const cmEditorEl = document.getElementsByClassName("cm-editor");
  //   console.log("cmEl : ", cmEditorEl);
  //   for (let i = 0; i < cmEditorEl.length; i++) {
  //     cmEditorEl[i].classList.add("cm-dark");
  //   }
  // }, [toggleTheme]);

  return (
    <>
      <div>
        <label className="swap swap-rotate mt-1.5 transition duration-150 ease-in-out hover:text-neutral-800 active:text-neutral-500 focus:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-50 dark:active:text-neutral-300 dark:focus:text-neutral-50">
          <input onClick={toggleTheme} type="checkbox" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="swap-on fill-current w-6 h-6"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="swap-off fill-current ml-0.5 mt-0.5 w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
    </>
  );
};
export default ThemeButton;
