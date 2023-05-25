import { Link } from "react-router-dom";
import HandleTheme from "../components/HandleTheme";
import SearchPost from "../components/SearchPost";

const Header = () => {
  return (
    <>
      <header className="flex bg-transparent w-full h-20">
        <div className="flex w-full h-full items-center">
          <div className="flex w-full h-full justify-between items-center px-5">
            <div>
              <Link
                to={"/"}
                className="text-2xl font-extrabold text-neutral-600 hover:text-neutral-800 active:text-neutral-600 dark:text-neutral-300 dark:hover:text-neutral-50 dark:active:text-neutral-300"
              >
                vvovv me
              </Link>
            </div>
            <div className="flex items-center w-1/2">
              <div className="flex w-full justify-end space-x-2 items-center">
                <SearchPost />
                <HandleTheme />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
