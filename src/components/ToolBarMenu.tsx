import { useState } from "react";
import Header1 from "./postEditToolbar/Header1";
import Header4 from "./postEditToolbar/Header4";
import Header3 from "./postEditToolbar/Header3";
import Header2 from "./postEditToolbar/Header2";
import Bold from "./postEditToolbar/Bold";
import Itailc from "./postEditToolbar/Itailc";
import Strikethrough from "./postEditToolbar/Strikethrough";
import Color from "./postEditToolbar/Color";
import UplodeImage from "./postEditToolbar/UplodeImage";
import UplodeLink from "./postEditToolbar/UplodeLink";
import UplodeVideo from "./postEditToolbar/UplodeVideo";
import CodeBlock from "./postEditToolbar/CodeBlock";
import Quote from "./postEditToolbar/Quote";

interface ToolBarMeuProps {
  setItem: (item: string) => void;
  selectedText: string;
}

const ToolBarMenu = ({ setItem, selectedText }: ToolBarMeuProps) => {
  const [hoverId, setHoverId] = useState<string>("");

  const hoverSVG = (id: string) => {
    setHoverId(id);
  };

  const leaveSVG = () => {
    setHoverId("");
  };

  return (
    <div className="flex justify-center items-center w-full mt-20 space-x-2 2xl:space-x-5">
      <Header1 setItem={setItem} selectedText={selectedText} />
      <Header2 setItem={setItem} selectedText={selectedText} />
      <Header3 setItem={setItem} selectedText={selectedText} />
      <Header4 setItem={setItem} selectedText={selectedText} />

      <div className="px-3 text-neutral-300">|</div>

      <div className="flex mb-1 items-center space-x-2 2xl:space-x-5">
        <Color />
        <Bold setItem={setItem} selectedText={selectedText} />
        <Itailc setItem={setItem} selectedText={selectedText} />
        <Strikethrough
          setItem={setItem}
          selectedText={selectedText}
          hoverId={hoverId}
          hoverSVG={hoverSVG}
          leaveSVG={leaveSVG}
        />

        <div className="px-3 text-neutral-300">|</div>

        <UplodeLink setItem={setItem} />
        <UplodeImage />
        <UplodeVideo />
        <CodeBlock setItem={setItem} selectedText={selectedText} />
        <Quote
          setItem={setItem}
          selectedText={selectedText}
          hoverId={hoverId}
          hoverSVG={hoverSVG}
          leaveSVG={leaveSVG}
        />
      </div>
    </div>
  );
};

export default ToolBarMenu;
