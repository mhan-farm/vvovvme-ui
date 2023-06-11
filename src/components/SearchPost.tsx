import { useEffect, useRef, useState } from "react";

const SearchPost = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [searchState, setSearchState] = useState<boolean>(false);

  const searchPost = () => {
    console.log("searching..");
  };

  const deleteSeacrhWord = () => {
    setSearchWord("");
    setSearchState(false);
    console.log("지움");
  };

  const writeSearchWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value;
    console.log(searchWord);
    if (searchWord) {
      setSearchWord(searchWord);
      setSearchState(true);
    } else {
      setSearchWord("");
      setSearchState(false);
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        inputRef.current.blur();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center items-center space-x-2 w-full">
        <label
          htmlFor="searchWord"
          className="flex w-[70%] h-12 text-lg bg-transparent border-2 rounded-full border-neutral-300 dark:border-neutral-500 outline-none px-3 py-2 leading-[1.6] focus:z-[3] text-neutral-700 dark:text-neutral-200"
        >
          <input
            value={searchWord}
            ref={inputRef}
            id="searchWord"
            onChange={writeSearchWord}
            placeholder="검색어를 입력하세요"
            className="ml-1 w-full bg-transparent outline-none placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
          />
          {searchState ? (
            <button onClick={deleteSeacrhWord}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 mt-0.5 text-neutral-600 dark:text-neutral-300 hover:text-amber-400 hover:active:text-amber-400 active:scale-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : null}
        </label>

        <button
          onClick={searchPost}
          type="button"
          className="flex rounded-full w-10 h-10 px-2 py-1
            transition duration-150 ease-in-out hover:bg-neutral-600 hover:bg-opacity-10 focus:outline-none focus:ring-0
          text-amber-500 hover:text-amber-600 active:text-amber-700 focus:text-amber-600
           dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:text-amber-300 dark:hover:text-amber-400 dark:active:text-amber-300 dark:focus:text-amber-300"
          data-te-ripple-init
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-8 w-8"
          >
            <path d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" />
          </svg>
        </button>
      </div>
    </>
  );
};
export default SearchPost;
