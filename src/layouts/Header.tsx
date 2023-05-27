import { Link } from "react-router-dom";
import HandleTheme from "../components/HandleTheme";
import SearchPost from "../components/SearchPost";
import LoginBtn from "../components/LoginBtn";

const Header = () => {
  return (
    <>
      <header className="flex z-50 fixed top-0 left-0 right-0 py-5 mx-10 md:mx-20 bg-white dark:bg-slate-800">
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
            <div className="hidden sm:flex items-center w-1/2">
              <div className="flex w-full justify-end space-x-4 items-center">
                <SearchPost />
                <HandleTheme />
                <LoginBtn />
              </div>
            </div>

            <div className="flex sm:hidden items-center bg-white">
              <div className="flex w-full justify-end space-x-4 items-center">
                {/* <SearchPost />
                <HandleTheme />
                <LoginBtn /> */}
                <div className="relative" data-te-dropdown-ref>
                  <button
                    className="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    id="dropdownMenuButton1"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Dropdown button
                  </button>
                  <ul
                    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                    aria-labelledby="dropdownMenuButton1"
                    data-te-dropdown-menu-ref
                  >
                    <li>
                      <div>
                        <LoginBtn />
                      </div>
                    </li>
                    <li>
                      <div>
                        <SearchPost />
                      </div>
                    </li>
                    <li>
                      <div>
                        <HandleTheme />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
