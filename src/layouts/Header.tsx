import { Link } from "react-router-dom";
import HandleTheme from "../components/HandleTheme";
import LoginBtn from "../components/LoginBtn";
import HambergerMenu from "../components/HambergerMenu";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setIsScrolled(isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <header
        className={`flex z-50 fixed top-0 left-0 right-0 py-5 px-10 md:px-20 bg-white dark:bg-neutral-800
        transition-transform duration-300 ease-in-out ${
          isScrolled ? "-translate-y-20" : ""
        }`}
      >
        <div className="flex w-full h-full items-center">
          <div className="flex w-full h-full justify-between items-center">
            <div className="flex space-x-4">
              <Link
                to={"/"}
                className="text-2xl font-extrabold transition duration-150 ease-in-out text-neutral-600 hover:text-amber-500 active:text-amber-600 focus:text-amber-500 dark:text-neutral-300 dark:hover:text-amber-400 dark:active:text-amber-500 dark:focus:text-amber-400"
              >
                vvovv me
              </Link>
              <div>
                <LoginBtn />
              </div>
            </div>

            <div className="hidden sm:flex items-center w-1/2">
              <div className="flex w-full justify-end items-center">
                <HandleTheme />
              </div>
            </div>

            <div className="flex sm:hidden items-center bg-white">
              <div className="flex w-full justify-end space-x-4 items-center">
                <HambergerMenu />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
