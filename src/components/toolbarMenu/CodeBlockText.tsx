import { useEffect, useRef, useState } from "react";
import Tooltips from "./tooltips/Tooltips";

interface CodeBlockProps {
  setText: (language: string) => void;
}

const CodeBlock = ({ setText }: CodeBlockProps) => {
  const [select, setSelect] = useState<boolean>(false);
  const selectRef = useRef<HTMLButtonElement>(null);
  const languages = [
    "java",
    "python",
    "c",
    "c++",
    "c#",
    "kotlin",
    "js",
    "ts",
    "sql",
    "html",
    "css",
    "php",
    "xml",
    "json",
  ];

  const [shortcutKey, setShortcutKey] = useState<string>("");

  const onHover = () => {
    setShortcutKey("Ctrl+I");
  };

  const setCodeBlock = (language: string) => {
    setText(language);
    setSelect(false);
  };

  // codeBlock 외부 영역 클릭 시 닫기
  useEffect(() => {
    const handleOutsideClose = (e: { target: any }) => {
      if (selectRef && !selectRef.current?.contains(e.target)) {
        setSelect(false);
      }
    };
    document.addEventListener("click", handleOutsideClose);
    return () => document.removeEventListener("click", handleOutsideClose);
  }, []);

  return (
    <div className="flex flex-col relative w-full">
      <div className="flex relative -left-2.5 -top-9">
        <Tooltips shortcutKey={shortcutKey} />
      </div>
      <button
        ref={selectRef}
        onClick={() => {
          setSelect(true);
        }}
        onMouseOver={onHover}
        onMouseOut={() => {
          setShortcutKey("");
        }}
        className="py-2 px-2 fill-neutral-700 dark:fill-neutral-300 hover:fill-amber-500 dark:hover:fill-amber-500"
        type="button"
      >
        <svg
          className="w-6 h-6 2xl:w-9 2xl:h-9"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z" />
        </svg>
      </button>
      {select ? (
        <div className="flex absolute z-10 mt-[2.6rem] rounded-sm bg-neutral-50 dark:bg-neutral-900 shadow-lg overflow-auto h-28">
          <div className="flex flex-col">
            {languages.map((language, index) => (
              <div
                key={index}
                className="py-1 px-4 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 cursor-pointer"
                onClick={() => {
                  setCodeBlock(language);
                }}
              >
                {language}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CodeBlock;
