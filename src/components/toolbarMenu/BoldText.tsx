import { useState } from "react";
import Tooltips from "./tooltips/Tooltips";

interface BoldTextProps {
  setText: () => void;
  name: string;
}

const BoldText = ({ setText, name }: BoldTextProps) => {
  const [shortcutKey, setShortcutKey] = useState<string>("");

  const onClick = () => {
    setText();
  };

  const onHover = () => {
    setShortcutKey("Ctrl+W");
  };

  return (
    <div className="flex flex-col relative w-full">
      <div className="flex relative -left-3.5 -top-[2.34rem]">
        <Tooltips shortcutKey={shortcutKey} />
      </div>

      <button
        onMouseOver={onHover}
        onMouseOut={() => {
          setShortcutKey("");
        }}
        onClick={onClick}
        className="mt-2 px-2 rounded-sm text-neutral-700 dark:text-neutral-300 hover:text-amber-500 dark:hover:text-amber-500"
      >
        <div className="text-2xl 2xl:text-4xl font-extrabold">{name}</div>
      </button>
    </div>
  );
};

export default BoldText;
