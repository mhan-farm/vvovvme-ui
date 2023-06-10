import { useState } from "react";

const SearchPost = () => {
  const [searchBtn, setSearchBtn] = useState<boolean>(false);
  const [searchWord, setSearchWord] = useState<string>("");

  const searchPostBtn = () => {
    setSearchBtn(false);
  };

  const searchPost = () => {
    console.log("searching..");
  };

  const writeSearchWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value;
    if (searchWord !== "") {
      setSearchWord(searchWord);
    }
  };

  return (
    <>
      <div className="flex justify-end w-full space-x-4">
        <label
          htmlFor="searchWord"
          className="flex w-[10%] md:w-[40%] 2xl:w-[50%] h-10 text-2xl ml-12 bg-transparent border-2 rounded border-neutral-300 dark:border-neutral-500 outline-none px-3 py-2 leading-[1.6] focus:z-[3] text-neutral-700 dark:text-neutral-200"
        >
          <input
            id="searchWord"
            onChange={writeSearchWord}
            placeholder="검색어를 입력하세요"
            className="ml-1 w-full bg-transparent outline-none placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
          />
          {searchWord ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 mt-1.5 cursor-pointer text-neutral-600 dark:text-neutral-300 hover:text-amber-400 hover:active:text-amber-400 active:scale-90"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : null}
        </label>

        <span className="cursor-pointer active:scale-95 input-group-text flex items-center whitespace-nowrap rounded text-center text-neutral-500 dark:text-neutral-300 hover:text-amber-400 hover:active:text-amber-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-8 w-8"
          >
            <path d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" />
          </svg>
        </span>
      </div>
    </>
  );
};
export default SearchPost;
