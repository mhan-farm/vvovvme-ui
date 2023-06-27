interface Header2Props {
  setItem: (item: string) => void;
  selectedText: string;
}

const Header2 = ({ setItem, selectedText }: Header2Props) => {
  const setH2 = () => {
    if (selectedText) {
      setItem("## " + selectedText);
    } else {
      setItem("## 텍스트");
    }
  };

  return (
    <button
      onClick={setH2}
      className="py-2 px-2 rounded-sm text-neutral-700 hover:text-amber-500"
    >
      <div className="text-2xl 2xl:text-3xl font-extrabold">H2</div>
    </button>
  );
};

export default Header2;
