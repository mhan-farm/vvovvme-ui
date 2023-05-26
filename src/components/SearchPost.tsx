import { useState } from "react";

const SearchPost = () => {
  const [searchBtn, setSearchBtn] = useState<boolean>(true);

  const searchPostBtn = () => {
    setSearchBtn(false);
  };

  const searchPost = () => {
    console.log("searching..");
  };

  return (
    <>
      <div className="flex space-x-2 w-full items-center justify-end">
        {/* 기존 검색 btn 사라지고 검색창 보여짐 */}
        <div
          className={
            !searchBtn ? "flex w-full justify-end stretchLeft" : "hidden"
          }
        >
          <label
            htmlFor="search"
            className="flex border rounded-full w-5/6 xl:w-[40%] h-10 px-4 border-neutral-400 dark:text-neutral-300"
          >
            <input
              id="search"
              type="text"
              className="w-full my-1 pt-0.5 text-sm outline-none border-none bg-transparent"
            />
            <button onClick={searchPost}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="cursor-pointer transition duration-150 ease-in-out hover:text-neutral-800 active:text-neutral-500 focus:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-50 dark:active:text-neutral-300 dark:focus:text-neutral-50 w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </label>
        </div>

        {/* 기존 검색 btn */}
        <svg
          onClick={searchPostBtn}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={
            searchBtn
              ? "cursor-pointer text-neutral-600 hover:text-neutral-800 active:text-neutral-600 dark:text-neutral-300 dark:hover:text-neutral-50 dark:active:text-neutral-300 w-5 h-5"
              : "hidden"
          }
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </>
  );
};
export default SearchPost;
