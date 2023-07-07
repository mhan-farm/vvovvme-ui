interface HeaderTooltipProps {
  shortcutKey: string;
}

const Tooltips = ({ shortcutKey }: HeaderTooltipProps) => {
  return (
    <div>
      {shortcutKey ? (
        <div className="flex absolute z-50 justify-center items-center px-1 pt-1 pb-0.5 bg-black bg-opacity-40 rounded-sm">
          <div className="text-white dark:text-neutral-300 text-opacity-100 tracking-widest">
            <div>{shortcutKey}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Tooltips;
