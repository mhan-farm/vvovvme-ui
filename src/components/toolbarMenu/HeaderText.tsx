interface HeaderTextProps {
  setText: () => void;
  name: string;
}

const HeaderText = ({ setText, name }: HeaderTextProps) => {
  const onClick = () => {
    setText();
  };

  return (
    <button
      onClick={onClick}
      className="py-2 px-2 rounded-sm text-neutral-700 dark:text-neutral-300 hover:text-amber-500 dark:hover:text-amber-500"
    >
      <div className="text-2xl 2xl:text-3xl font-extrabold">{name}</div>
    </button>
  );
};

export default HeaderText;
