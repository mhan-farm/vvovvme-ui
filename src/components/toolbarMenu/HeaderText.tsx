import { useState } from "react";
import Tooltips from "./tooltips/Tooltips";

interface HeaderTextProps {
  setText: () => void;
  name: string;
}

const HeaderText = ({ setText, name }: HeaderTextProps) => {
  const [shortcutKey, setShortcutKey] = useState<string>("");

  const onClick = () => {
    setText();
  };

  const onHover = () => {
    if (name === "H1") {
      setShortcutKey("Ctrl+1");
    } else if (name === "H2") {
      setShortcutKey("Ctrl+2");
    } else if (name === "H3") {
      setShortcutKey("Ctrl+3");
    } else if (name === "H4") {
      setShortcutKey("Ctrl+4");
    }
  };

  return (
    <div className="flex flex-col relative w-full">
      <div className="flex relative -left-2.5 -top-8">
        <Tooltips shortcutKey={shortcutKey} />
      </div>
      <button
        onMouseOver={onHover}
        onMouseOut={() => {
          setShortcutKey("");
        }}
        onClick={onClick}
        className="py-2 px-2 rounded-sm text-neutral-700 dark:text-neutral-300 hover:text-amber-500 dark:hover:text-amber-500 text-2xl 2xl:text-3xl font-extrabold"
      >
        {name}
      </button>
    </div>
  );
};

export default HeaderText;
