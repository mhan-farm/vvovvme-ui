interface CodeBlockProps {
  setItem: (item: string) => void;
  selectedText: string;
}

const CodeBlock = ({ setItem, selectedText }: CodeBlockProps) => {
  const setCodeBlock = () => {
    if (selectedText) {
      setItem("```" + selectedText + "\n\n```");
    } else {
      setItem("```텍스트\n\n```");
    }
  };

  return (
    <button
      onClick={setCodeBlock}
      className="py-2 px-2 rounded-sm fill-neutral-700 hover:fill-amber-500"
    >
      <svg
        className="w-6 h-6 2xl:w-9 2xl:h-9"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z" />
      </svg>
    </button>
  );
};

export default CodeBlock;
