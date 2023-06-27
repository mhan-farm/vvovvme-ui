interface BoldProps {
  setItem: (item: string) => void;
  selectedText: string;
}

const Bold = ({ setItem, selectedText }: BoldProps) => {
  const setBold = () => {
    if (selectedText) {
      setItem("**" + selectedText + "**");
    } else {
      setItem("**텍스트**");
    }
  };

  return (
    <button
      onClick={setBold}
      className="mt-2 px-2 rounded-sm text-neutral-700 hover:text-amber-500"
    >
      <div className="text-2xl 2xl:text-4xl font-extrabold">B</div>
    </button>
  );
};

export default Bold;
