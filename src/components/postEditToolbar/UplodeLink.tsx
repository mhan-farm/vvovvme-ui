import { useEffect, useState } from "react";

interface LinkProps {
  setItem: (item: string) => void;
}

const UplodeLink = ({ setItem }: LinkProps) => {
  const [link, setLink] = useState<string>("");

  const saveLink = () => {
    setItem("[링크이름](" + link + ")");
    setLink("");
  };

  const onChangeLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    const link = event.target.value;
    setLink(link);
  };
  return (
    <div>
      <button
        data-te-toggle="modal"
        data-te-target="#exampleModalCenter"
        data-te-ripple-init
        data-te-ripple-color="light"
        className="py-2 px-2 rounded-sm fill-neutral-700 hover:fill-amber-500"
      >
        <svg
          className="w-6 h-6 2xl:w-9 2xl:h-9"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.26 13a2 2 0 0 1 .01-2.01A3 3 0 0 0 9 5H5a3 3 0 0 0 0 6h.08a6.06 6.06 0 0 0 0 2H5A5 5 0 0 1 5 3h4a5 5 0 0 1 .26 10zm1.48-6a2 2 0 0 1-.01 2.01A3 3 0 0 0 11 15h4a3 3 0 0 0 0-6h-.08a6.06 6.06 0 0 0 0-2H15a5 5 0 0 1 0 10h-4a5 5 0 0 1-.26-10z" />
        </svg>
      </button>

      {/* Modal */}
      <div
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModalCenter"
        tabIndex={-1}
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog"
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
        >
          <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 pt-3 px-4 pb-2 dark:border-opacity-50">
              {/* Modal title */}
              <div
                className="font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalScrollableLabel"
              >
                링크 등록
              </div>

              {/* Modal Close button */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close"
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
              </button>
            </div>

            {/* Modal body */}
            <div className="flex justify-center relative p-4 space-x-5">
              <input
                value={link}
                onChange={onChangeLink}
                type="text"
                placeholder="URL을 입력하세요."
                className="outline-none p-2 w-[80%] placeholder:px-1"
              />

              <button
                type="button"
                className="ml-1 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out bg-amber-400 hover:bg-amber-500 active:bg-amber-500 focus:bg-amber-500 focus:outline-none focus:ring-0"
                data-te-ripple-init
                data-te-ripple-color="light"
                data-te-modal-dismiss
                onClick={saveLink}
              >
                등록
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* */}
    </div>
  );
};

export default UplodeLink;
