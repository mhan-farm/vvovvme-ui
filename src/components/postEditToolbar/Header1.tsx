interface Header1Props {
  setItem: (item: string) => void;
  selectedText: string;
}

const Header1 = ({ setItem, selectedText }: Header1Props) => {
  const setH1 = () => {
    if (selectedText) {
      setItem("# " + selectedText);
    } else {
      setItem("# 텍스트");
    }
  };

  return (
    <button
      onClick={setH1}
      className="py-2 px-2 rounded-sm text-neutral-700 hover:text-amber-500"
    >
      <div className="text-2xl 2xl:text-3xl font-extrabold">H1</div>
    </button>
  );
};

export default Header1;
