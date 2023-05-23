import HandleTheme from "../components/HandleTheme";

const Header = () => {
  return (
    <>
      <header className="bg-transparent w-full h-16">
        <div className="flex">
          {/* logo */}
          <div className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:text-red-400">
            vvovv.me
          </div>

          <HandleTheme />

          {/* search */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="cursor-pointer text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
