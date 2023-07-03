import { useEffect, useRef, useState } from "react";

interface LinkTextProps {
  setText: (text: string) => void;
}

const LinkText = ({ setText }: LinkTextProps) => {
  const [link, setLink] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const modalOpen = () => {
    setModal(true);
  };

  const onClick = () => {
    setModal(false);
    setText(link);
    setLink("");
  };

  const onChangeLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    const link = event.target.value;
    setLink(link);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <label
        onClick={modalOpen}
        htmlFor="modal"
        className="flex p-2 rounded-sm fill-neutral-700 hover:fill-amber-500"
      >
        <svg
          className="w-6 h-6 2xl:w-9 2xl:h-9"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.26 13a2 2 0 0 1 .01-2.01A3 3 0 0 0 9 5H5a3 3 0 0 0 0 6h.08a6.06 6.06 0 0 0 0 2H5A5 5 0 0 1 5 3h4a5 5 0 0 1 .26 10zm1.48-6a2 2 0 0 1-.01 2.01A3 3 0 0 0 11 15h4a3 3 0 0 0 0-6h-.08a6.06 6.06 0 0 0 0-2H15a5 5 0 0 1 0 10h-4a5 5 0 0 1-.26-10z" />
        </svg>
      </label>

      {modal ? (
        <>
          <input type="checkbox" id="modal" className="modal-toggle" />
          <div className="modal">
            <div className="flex flex-col modal-box relative p-1 rounded">
              <div className="flex flex-shrink-0 items-center justify-between border-b-2 border-neutral-100 border-opacity-100 pt-3 px-4 pb-2 dark:border-opacity-50">
                {/* Modal title */}
                <div className="font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                  링크 등록
                </div>
                {/* Modal Close button */}
                <label
                  htmlFor="modal"
                  className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  onClick={() => {
                    setLink("");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </label>
              </div>

              {/* Modal body */}
              <div className="flex justify-center relative p-4 space-x-5">
                <input
                  id="linkInput"
                  ref={inputRef}
                  value={link}
                  onKeyDown={onKeyDown}
                  onChange={onChangeLink}
                  type="text"
                  placeholder="URL을 입력하세요."
                  className="outline-none p-2 w-[80%] placeholder:px-1"
                />

                <button
                  type="button"
                  className="ml-1 inline-block rounded-sm px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out bg-amber-400 hover:bg-amber-500 active:bg-amber-500 focus:bg-amber-500 focus:outline-none focus:ring-0"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  data-te-modal-dismiss
                  onClick={onClick}
                >
                  등록
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default LinkText;
