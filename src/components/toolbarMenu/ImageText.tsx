interface ImageTextProps {
  setText: (filePath: string) => void;
}

const ImageText = ({ setText }: ImageTextProps) => {
  const setImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const file = (target.files as FileList)[0];
    console.log(file);
    const exampleUrl = "http://localhost:8080";
    setText(exampleUrl);
  };

  return (
    <div>
      <label
        htmlFor="image"
        className="flex p-2 rounded-sm fill-neutral-700 hover:fill-amber-500"
      >
        <svg
          className="w-6 h-6 2xl:w-9 2xl:h-9"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11 9l-3-3-6 6h16l-5-5-2 2zm4-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </svg>
      </label>

      <input className="hidden" id="image" type="file" onChange={setImage} />
    </div>
  );
};

export default ImageText;
