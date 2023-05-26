import { Link } from "react-router-dom";
import HandleTheme from "../components/HandleTheme";
import SearchPost from "../components/SearchPost";
import LoginBtn from "../components/LoginBtn";

const Header = () => {
  return (
    <>
      <header className="flex z-50 fixed top-0 left-0 right-0 py-5 px-32 bg-white dark:bg-slate-800">
        <div className="flex w-full h-full items-center">
          <div className="flex w-full h-full justify-between items-center">
            <div>
              <Link
                to={"/"}
                className="text-2xl font-extrabold transition duration-150 ease-in-out text-neutral-600 hover:text-amber-500 active:text-amber-600 focus:text-amber-500 dark:text-neutral-300 dark:hover:text-amber-400 dark:active:text-amber-500 dark:focus:text-amber-400"
              >
                vvovv me
              </Link>
            </div>
            <div className="flex items-center w-1/2">
              <div className="flex w-full justify-end space-x-4 items-center">
                <SearchPost />
                <HandleTheme />
                <LoginBtn />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
