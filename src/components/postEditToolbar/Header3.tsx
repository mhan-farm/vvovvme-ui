interface Header3Props {
  setItem: (item: string) => void;
  selectedText: string;
}

const Header3 = ({ setItem, selectedText }: Header3Props) => {
  const setH3 = () => {
    if (selectedText) {
      setItem("### " + selectedText);
    } else {
      setItem("### 텍스트");
    }
  };

  return (
    <button
      onClick={setH3}
      className="py-2 px-2 rounded-sm text-neutral-700 hover:text-amber-500"
    >
      <div className="text-2xl 2xl:text-3xl font-extrabold">H3</div>
    </button>
  );
};

export default Header3;
