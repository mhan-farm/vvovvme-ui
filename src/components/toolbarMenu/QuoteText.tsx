import { useState } from "react";
import Tooltips from "./tooltips/Tooltips";

interface QuoteTextProps {
  setText: () => void;
  hoverId: string;
  hoverSVG: (id: string) => void;
  leaveSVG: () => void;
}

const QuoteText = ({
  setText,
  hoverId,
  hoverSVG,
  leaveSVG,
}: QuoteTextProps) => {
  const [shortcutKey, setShortcutKey] = useState<string>("");

  const onHover = () => {
    setShortcutKey("Ctrl+V");
  };

  const setQuote = () => {
    setText();
  };

  return (
    <div className="flex flex-col relative w-full">
      <div className="flex relative -left-3 -top-[2.37rem]">
        <Tooltips shortcutKey={shortcutKey} />
      </div>

      <button
        onMouseOut={() => {
          setShortcutKey("");
        }}
        onClick={setQuote}
        className="py-2 px-2 rounded-sm stroke-neutral-700 dark:stroke-neutral-300 hover:stroke-amber-500 dark:hover:stroke-amber-500"
        onMouseOver={() => {
          hoverSVG("quote");
          onHover();
        }}
        onMouseLeave={leaveSVG}
      >
        <svg
          className="w-5 h-5 2xl:w-7 2xl:h-7"
          enableBackground="new 0 0 33 25"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 33 25"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <path
              className={
                hoverId === "quote"
                  ? `fill-amber-500`
                  : `fill-neutral-700 dark:fill-neutral-300`
              }
              d="M18.006,6.538c0-1.973,0.662-3.554,1.988-4.743c1.326-1.19,2.977-1.785,4.947-1.785   c2.517,0,4.488,0.799,5.916,2.397C32.285,4.004,33,6.13,33,8.782c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.061,4.743c-1.188,1.258-2.43,2.244-3.723,2.958c-1.291,0.714-2.413,1.239-3.365,1.581l-3.265-5.508   c1.36-0.545,2.517-1.412,3.468-2.602c0.953-1.19,1.496-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.724-1.786   C18.566,10.09,18.006,8.509,18.006,6.538z M0.359,6.538c0-1.973,0.663-3.554,1.989-4.743C3.674,0.604,5.324,0.01,7.295,0.01   c2.518,0,4.488,0.799,5.916,2.397c1.429,1.597,2.143,3.723,2.143,6.375c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.06,4.743c-1.188,1.258-2.431,2.244-3.724,2.958C6.004,24.133,4.883,24.658,3.93,25l-3.264-5.508   c1.36-0.545,2.516-1.412,3.467-2.602c0.953-1.19,1.497-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.723-1.786   C0.92,10.09,0.359,8.509,0.359,6.538z"
              fill="#231F20"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default QuoteText;
