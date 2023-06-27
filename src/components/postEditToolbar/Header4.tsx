interface Header4Props {
  setItem: (item: string) => void;
  selectedText: string;
}

const Header4 = ({ setItem, selectedText }: Header4Props) => {
  const setH4 = () => {
    if (selectedText) {
      setItem("#### " + selectedText);
    } else {
      setItem("#### 텍스트");
    }
  };

  return (
    <button
      onClick={setH4}
      className="py-2 px-2 rounded-sm text-neutral-700 hover:text-amber-500"
    >
      <div className="text-2xl 2xl:text-3xl font-extrabold">H4</div>
    </button>
  );
};

export default Header4;
