import { useEffect, useRef, useState } from "react";
import Tooltips from "./tooltips/Tooltips";

interface ImageTextProps {
  setText: (filePath: string) => void;
  openImage: boolean;
  setOpenImage: (openImage: boolean) => void;
}

const ImageText = ({ setText, openImage, setOpenImage }: ImageTextProps) => {
  const imageRef = useRef<HTMLInputElement>(null);
  const [imageText, setImageText] = useState<File>();
  const [shortcutKey, setShortcutKey] = useState<string>("");

  const onHover = () => {
    setShortcutKey("Ctrl+X");
  };

  const setImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const file = (target.files as FileList)[0];
    console.log(file);
    const exampleUrl = "http://localhost:8080";
    setText(exampleUrl);
    setImageText(file);
  };

  useEffect(() => {
    if (imageText === undefined) {
      setOpenImage(false);
    }
    if (openImage) {
      imageRef.current?.click();
    }
  }, [openImage]);

  return (
    <div className="flex flex-col relative w-full">
      <div className="flex relative -left-2.5 -top-9">
        <Tooltips shortcutKey={shortcutKey} />
      </div>
      <label
        onMouseOver={onHover}
        onMouseOut={() => {
          setShortcutKey("");
        }}
        htmlFor="image"
        className="flex p-2 rounded-sm fill-neutral-700 dark:fill-neutral-300 hover:fill-amber-500 dark:hover:fill-amber-500 cursor-pointer"
      >
        <svg
          className="w-6 h-6 2xl:w-9 2xl:h-9"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11 9l-3-3-6 6h16l-5-5-2 2zm4-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </svg>
      </label>

      <input
        className="hidden"
        ref={imageRef}
        id="image"
        type="file"
        onChange={setImage}
      />
    </div>
  );
};

export default ImageText;
