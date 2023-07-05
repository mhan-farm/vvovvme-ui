import { useCallback, useEffect, useState } from "react";
import CodeBlock from "./toolbarMenu/CodeBlockText";
import HeaderText from "./toolbarMenu/HeaderText";
import LinkText from "./toolbarMenu/LinkText";
import ImageText from "./toolbarMenu/ImageText";
import QuoteText from "./toolbarMenu/QuoteText";
import ColorText from "./toolbarMenu/ColorText";
import BoldText from "./toolbarMenu/BoldText";
import ItailcText from "./toolbarMenu/ItailcText";
import StrikethroughText from "./toolbarMenu/StrikethroughText";

interface ToolBarMeuProps {
  setText: (text: string, position: number) => void;
}

const ToolBarMenu = ({ setText }: ToolBarMeuProps) => {
  const [hoverId, setHoverId] = useState<string>("");
  const [colorPicker, setColorPicker] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openImage, setOpenImage] = useState<boolean>(false);

  const hoverSVG = (id: string) => {
    setHoverId(id);
  };

  const leaveSVG = () => {
    setHoverId("");
  };

  const h1Text = () => {
    const text = "\n# ";
    setText(text, text.length);
  };

  const h2Text = () => {
    const text = "\n## ";
    setText(text, text.length);
  };

  const h3Text = () => {
    const text = "\n### ";
    setText(text, text.length);
  };

  const h4Text = () => {
    const text = "\n#### ";
    setText(text, text.length);
  };

  const linkText = (link: string) => {
    const text = "\n[](" + link + ")";
    setText(text, text.length);
  };

  const quoteText = () => {
    const text = "\n> ";
    setText(text, text.length);
  };

  const imageText = (filePath: string) => {
    const text = `\n![원본이미지](${filePath})`;
    setText(text, text.length);
  };

  const codeblockText = (language: string) => {
    const text = "\n```" + language + "\n\n```";
    setText(text, text.length - 4);
  };

  const colorText = (color: string) => {
    const text = `\n<span style="color: ` + color + `"></span>`;
    setText(text, text.length);
  };

  const boldText = () => {
    const text = "\n**텍스트**";
    setText(text, text.length);
  };

  const itailcText = () => {
    const text = "\n*텍스트*";
    setText(text, text.length);
  };

  const strikethroughText = () => {
    const text = "\n~~텍스트~~";
    setText(text, text.length);
  };

  // 단축키
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.ctrlKey && event.code === "KeyQ") {
        h1Text();
      } else if (event.ctrlKey && event.code === "KeyW") {
        h2Text();
      } else if (event.ctrlKey && event.code === "KeyE") {
        h3Text();
      } else if (event.ctrlKey && event.code === "KeyR") {
        h4Text();
      } else if (event.ctrlKey && event.code === "KeyA") {
        setColorPicker(true);
      } else if (event.ctrlKey && event.code === "KeyS") {
        boldText();
      } else if (event.ctrlKey && event.code === "KeyD") {
        itailcText();
      } else if (event.ctrlKey && event.code === "KeyF") {
        strikethroughText();
      } else if (event.ctrlKey && event.code === "KeyZ") {
        setOpenModal(true);
      } else if (event.ctrlKey && event.code === "KeyX") {
        setOpenImage(true);
      } else if (event.ctrlKey && event.code === "KeyC") {
        // codeblockText();
      } else if (event.ctrlKey && event.code === "KeyV") {
        quoteText();
      }
    },
    [openModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="flex justify-center items-center w-full mt-20 space-x-2 2xl:space-x-5">
      <HeaderText setText={h1Text} name="H1" />
      <HeaderText setText={h2Text} name="H2" />
      <HeaderText setText={h3Text} name="H3" />
      <HeaderText setText={h4Text} name="H4" />

      <div className="px-3 text-neutral-400 dark:text-neutral-600">|</div>

      <div className="flex mb-1 items-center space-x-2 2xl:space-x-5">
        <ColorText
          setText={colorText}
          setColorPicker={setColorPicker}
          colorPicker={colorPicker}
        />
        <BoldText setText={boldText} name="B" />
        <ItailcText setText={itailcText} />
        <StrikethroughText
          setText={strikethroughText}
          hoverId={hoverId}
          hoverSVG={hoverSVG}
          leaveSVG={leaveSVG}
        />

        <div className="px-3 text-neutral-400 dark:text-neutral-600">|</div>

        <LinkText
          setText={linkText}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
        <ImageText
          setText={imageText}
          openImage={openImage}
          setOpenImage={setOpenImage}
        />
        {/* <UplodeVideo setItem={setText} /> */}
        <CodeBlock setText={codeblockText} />
        <QuoteText
          setText={quoteText}
          hoverId={hoverId}
          hoverSVG={hoverSVG}
          leaveSVG={leaveSVG}
        />
      </div>
    </div>
  );
};

export default ToolBarMenu;
