import { useEffect, useRef, useState } from "react";
import ColorPicker from "./ColorPicker";

interface ColorProps {
  setItem: (item: string) => void;
  selectedText: string;
}

const Color = ({ setItem, selectedText }: ColorProps) => {
  const [colorPicker, setColorPicker] = useState<boolean>(false);
  const colorRef = useRef<HTMLButtonElement>(null);

  const setColor = (color: string) => {
    if (selectedText) {
      setItem(`<span style="color: ` + color + `">` + selectedText + `</span>`);
    } else {
      setItem(`<span style="color: ` + color + `"></span>`);
    }
  };

  // colorPicker 외부 영역 클릭 시 닫기
  useEffect(() => {
    const handleOutsideClose = (e: { target: any }) => {
      if (colorRef && !colorRef.current?.contains(e.target)) {
        setColorPicker(false);
      }
    };
    document.addEventListener("click", handleOutsideClose);
    return () => document.removeEventListener("click", handleOutsideClose);
  }, []);

  return (
    <div>
      <button
        ref={colorRef}
        onClick={() => {
          setColorPicker(true);
        }}
        className="py-2 px-2 rounded-sm stroke-neutral-700 fill-neutral-700 hover:stroke-amber-500 hover:fill-amber-500"
      >
        <svg
          className="w-[1.2rem] h-[1.2rem] 2xl:w-[1.8rem] 2xl:h-[1.8rem]"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="stroke-white"
            d="M9 20v-1.7l.01-.24L15.07 12h2.94c1.1 0 1.99.89 1.99 2v4a2 2 0 0 1-2 2H9zm0-3.34V5.34l2.08-2.07a1.99 1.99 0 0 1 2.82 0l2.83 2.83a2 2 0 0 1 0 2.82L9 16.66zM0 1.99C0 .9.89 0 2 0h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zM4 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
          />
        </svg>
      </button>

      {colorPicker ? <ColorPicker getColor={setColor} /> : null}
    </div>
  );
};

export default Color;