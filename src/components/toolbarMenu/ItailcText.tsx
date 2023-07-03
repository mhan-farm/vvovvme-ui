interface ItailcTextProps {
  setText: () => void;
}

const ItailcText = ({ setText }: ItailcTextProps) => {
  const onClick = () => {
    setText();
  };

  return (
    <button
      onClick={onClick}
      className="py-2 px-2 rounded-sm stroke-neutral-700 fill-neutral-700 hover:stroke-amber-500 hover:fill-amber-500"
    >
      <svg
        className="w-[1.1rem] h-[1.1rem] 2xl:w-[1.6rem] 2xl:h-[1.6rem]"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 1h9v2H8V1zm3 2h3L8 17H5l6-14zM2 17h9v2H2v-2z" />
      </svg>
    </button>
  );
};

export default ItailcText;
