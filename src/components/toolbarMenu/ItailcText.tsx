import { useState } from "react";
import Tooltips from "./tooltips/Tooltips";

interface ItailcTextProps {
  setText: () => void;
}

const ItailcText = ({ setText }: ItailcTextProps) => {
  const [shortcutKey, setShortcutKey] = useState<string>("");

  const onHover = () => {
    setShortcutKey("Ctrl+D");
  };

  const onClick = () => {
    setText();
  };

  return (
    <div className="flex flex-col relative w-full">
      <div className="flex relative -left-3 -top-[2.55rem]">
        <Tooltips shortcutKey={shortcutKey} />
      </div>
      <button
        onMouseOver={onHover}
        onMouseOut={() => {
          setShortcutKey("");
        }}
        onClick={onClick}
        className="py-2 px-2 rounded-sm stroke-neutral-700 fill-neutral-700 hover:stroke-amber-500 hover:fill-amber-500 dark:stroke-neutral-300 dark:fill-neutral-300 dark:hover:stroke-amber-500 dark:hover:fill-amber-500"
      >
        <svg
          className="w-[1.1rem] h-[1.1rem] 2xl:w-[1.6rem] 2xl:h-[1.6rem]"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 1h9v2H8V1zm3 2h3L8 17H5l6-14zM2 17h9v2H2v-2z" />
        </svg>
      </button>
    </div>
  );
};

export default ItailcText;
