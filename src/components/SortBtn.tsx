import { useState } from "react";

interface sortProps {
  setSort: (sort: string) => void;
}

const SortBtn = ({ setSort }: sortProps) => {
  const [sortData, setSortData] = useState<string>("created"); //created, likes, views
  const [hover, setHover] = useState<boolean>(false);
  const [sortTitle, setSortTitle] = useState<string>("");

  const handleSort = (sortData: string) => {
    setSort(sortData + ",DESC");
    setSortData(sortData);
  };

  const hoverSortBtn = (hoverData: string) => {
    setHover(true);
    setSortTitle(hoverData);
  };

  const leaveSortBtn = () => {
    setHover(false);
  };

  return (
    <div className="flex flex-col items-end justify-end h-20">
      <div className="flex absolute mb-10">
        {hover ? (
          <>
            {sortTitle === "created" ? (
              <div className="flex bg-neutral-100 px-2 pt-1 items-center rounded-sm mr-[6rem]">
                <div className="text-xs">최근 작성</div>
              </div>
            ) : null}

            {sortTitle === "likes" ? (
              <div className="flex bg-neutral-100 px-2 pt-1 items-center rounded-sm mr-[3.7rem]">
                <div className="text-xs">좋아요</div>
              </div>
            ) : null}

            {sortTitle === "views" ? (
              <div className="flex bg-neutral-100 px-2 pt-1 items-center rounded-sm mr-[1rem]">
                <div className="text-xs">조회수</div>
              </div>
            ) : null}
          </>
        ) : null}
      </div>

      <div className="flex space-x-2 mx-5">
        <div
          className="flex"
          onMouseEnter={() => {
            hoverSortBtn("created");
          }}
          onMouseLeave={leaveSortBtn}
        >
          <input
            id="created"
            type="radio"
            defaultChecked={sortData === "created"}
            className="hidden"
            onClick={() => handleSort("created")}
          />
          <label
            htmlFor="created"
            className={`flex justify-center items-center p-1.5 rounded-full cursor-pointer ${
              sortData === "created"
                ? `shadow-xl shadow-neutral-400 dark:bg-neutral-800 dark:shadow-black`
                : `dark:bg-neutral-800 active:scale-95 hover:shadow-xl shadow-neutral-400 dark:hover:shadow-black`
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-neutral-800 dark:fill-neutral-200"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>

        <div
          className="flex"
          onMouseEnter={() => {
            hoverSortBtn("likes");
          }}
          onMouseLeave={leaveSortBtn}
        >
          <input
            id="likes"
            type="radio"
            defaultChecked={sortData === "likes"}
            className="hidden"
            onClick={() => handleSort("likes")}
          />
          <label
            htmlFor="likes"
            className={`flex justify-center items-center p-1.5 rounded-full cursor-pointer ${
              sortData === "likes"
                ? `shadow-xl shadow-neutral-400 dark:bg-neutral-800 dark:shadow-black`
                : `dark:bg-neutral-800 active:scale-95 hover:shadow-xl shadow-neutral-400 dark:hover:shadow-black`
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6 fill-neutral-800 dark:fill-neutral-200"
            >
              <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
            </svg>
          </label>
        </div>

        <div
          className="flex"
          onMouseEnter={() => {
            hoverSortBtn("views");
          }}
          onMouseLeave={leaveSortBtn}
        >
          <input
            id="views"
            type="radio"
            defaultChecked={sortData === "views"}
            className="hidden"
            onClick={() => handleSort("views")}
          />
          <label
            htmlFor="views"
            className={`flex justify-center items-center p-1.5 rounded-full cursor-pointer ${
              sortData === "views"
                ? `shadow-xl shadow-neutral-400 dark:bg-neutral-800 dark:shadow-black`
                : `dark:bg-neutral-800 active:scale-95 hover:shadow-xl shadow-neutral-400 dark:hover:shadow-black`
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-neutral-800 dark:fill-neutral-200"
            >
              <path
                fillRule="evenodd"
                d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SortBtn;
