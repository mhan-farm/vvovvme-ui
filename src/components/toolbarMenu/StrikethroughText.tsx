import { useState } from "react";
import Tooltips from "./tooltips/Tooltips";

interface StrikethroughTextProps {
  setText: () => void;
  hoverId: string;
  hoverSVG: (id: string) => void;
  leaveSVG: () => void;
}

const StrikethroughText = ({
  setText,
  hoverId,
  hoverSVG,
  leaveSVG,
}: StrikethroughTextProps) => {
  const [shortcutKey, setShortcutKey] = useState<string>("");

  const onHover = () => {
    setShortcutKey("Ctrl+T");
  };

  const onClick = () => {
    setText();
  };

  return (
    <div className="flex flex-col relative w-full">
      <div className="flex relative -top-[1.87rem]">
        <Tooltips shortcutKey={shortcutKey} />
      </div>
      <button
        onClick={onClick}
        className={`py-2 px-1 rounded-sm ${
          hoverId === "strikethrough"
            ? `stroke-amber-500`
            : `stroke-neutral-700 dark:stroke-neutral-300`
        }`}
        onMouseOver={() => {
          onHover();
          hoverSVG("strikethrough");
        }}
        onMouseLeave={leaveSVG}
        onMouseOut={() => {
          setShortcutKey("");
        }}
      >
        <svg
          className="w-12 h-10 2xl:w-[4.7rem] 2xl:h-[4rem]"
          enableBackground="new 0 0 100 32"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 100 32"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M100,13H78.889c0.266-1.546,0.756-2.843,1.472-3.89c1.138-1.664,2.723-2.496,4.755-2.496  c1.34,0,2.593,0.188,3.76,0.562c1.167,0.375,2.334,0.836,3.502,1.384l2.614-6.722c-3.111-1.483-6.375-2.226-9.79-2.226  c-3.126,0-5.846,0.666-8.158,1.999c-2.313,1.332-4.085,3.238-5.316,5.716C70.88,9.029,70.332,10.924,70.067,13h-6.887  c0.131-0.168,0.262-0.342,0.397-0.53c0.907-1.253,1.355-2.766,1.355-4.538c0-2.694-1.043-4.711-3.125-5.987S56.537,0,52.243,0H42v13  H31.608l-4.24-13h-11.39l-4.188,13H0v6h9.857L5.67,32h9.38l1.599-6h10.266l1.557,6h9.336l-4.24-13H42v13h11.519  c3.717,0,6.652-0.993,8.807-2.644c2.154-1.649,3.231-3.993,3.231-6.86c0-1.329-0.22-2.496-0.634-3.496h5.13  c0.415,3.756,1.618,6.746,3.641,8.945c2.542,2.766,6.394,4.148,11.163,4.148c3.328,0,6.144-0.584,9.144-1.75v-7.219  c-1,0.549-2.841,1.016-4.151,1.404c-1.311,0.391-2.861,0.584-4.258,0.584c-3.786,0-6.02-2.039-6.707-6.113H100V13z M50,6h2.157  c2.68,0,4.02,1.15,4.02,2.922c0,0.994-0.335,1.78-1.005,2.284C54.502,11.711,53.555,12,52.33,12H50V6z M20.96,8.906  c0.382-1.686,0.638-2.962,0.768-3.697c0.144,0.793,0.443,2.071,0.896,3.901c0.37,1.492,0.692,2.82,0.972,3.89h-3.63  C20.425,11.174,20.759,9.794,20.96,8.906z M55.69,19.061c0.713,0.563,1.07,1.442,1.07,2.494c0,2.248-1.333,3.445-3.999,3.445H50v-6  h5.601C55.629,19.021,55.664,19.039,55.69,19.061z"
            className={
              hoverId === "strikethrough"
                ? `fill-amber-500`
                : `fill-neutral-700 dark:fill-neutral-300`
            }
          />
        </svg>
      </button>
    </div>
  );
};

export default StrikethroughText;
