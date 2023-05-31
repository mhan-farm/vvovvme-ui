import { useState } from "react";

interface sortProps {
  setSort: (sort: string) => void;
}

const SortBtn = ({ setSort }: sortProps) => {
  const [sortData, setSortData] = useState<string>("created"); //created, likes, views

  const handleSort = (sortData: string) => {
    setSort(sortData + ",DESC");
    setSortData(sortData);
  };

  return (
    <div className="flex justify-center space-x-2 mb-7">
      <div>
        <input
          id="created"
          type="radio"
          defaultChecked={sortData === "created"}
          className="hidden"
          onClick={() => handleSort("created")}
        />
        <label
          htmlFor="created"
          className={
            sortData === "created"
              ? `flex justify-center items-center p-1.5 rounded-full shadow-xl shadow-neutral-400 dark:bg-neutral-800 dark:shadow-black`
              : `flex justify-center items-center p-1.5 rounded-full dark:bg-neutral-800 active:scale-95 hover:shadow-xl shadow-neutral-400 dark:hover:shadow-black`
          }
        >
          <svg
            className="w-7 h-7"
            id="Icons"
            enableBackground="new 0 0 32 32"
            version="1.1"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <style type="text/css"></style>
            <polyline
              d="M50 10L10 90H90L50 10z"
              fill="none"
              className="stroke-neutral-800 dark:stroke-neutral-200"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              points="19,3 19,9 25,9 19,3 7,3 7,29 22,29 "
            />
            <circle
              d="M50 10L10 90H90L50 10z"
              fill="none"
              className="stroke-neutral-800 dark:stroke-neutral-200"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              cx="22"
              cy="22"
              r="7"
            />
            <polyline
              d="M50 10L10 90H90L50 10z"
              fill="none"
              className="stroke-neutral-800 dark:stroke-neutral-200"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              points="22,15 22,22 29,22 "
            />
            <line
              d="M50 10L10 90H90L50 10z"
              fill="none"
              className="stroke-neutral-800 dark:stroke-neutral-200"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              x1="25"
              x2="25"
              y1="9"
              y2="15.7"
            />
          </svg>
        </label>
      </div>

      <div>
        <input
          id="likes"
          type="radio"
          defaultChecked={sortData === "likes"}
          className="hidden"
          onClick={() => handleSort("likes")}
        />
        <label
          htmlFor="likes"
          className={
            sortData === "likes"
              ? `flex justify-center items-center p-1.5 rounded-full shadow-xl shadow-neutral-400 dark:bg-neutral-800 dark:shadow-black`
              : `flex justify-center items-center p-1.5 rounded-full dark:bg-neutral-800 active:scale-95 hover:shadow-xl shadow-neutral-400 dark:hover:shadow-black`
          }
        >
          <svg
            id="Icons"
            className="w-7 h-7"
            enableBackground="new 0 0 32 32"
            version="1.1"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <style type="text/css"></style>
            <polyline
              d="M50 10L10 90H90L50 10z"
              fill="none"
              className="stroke-neutral-800 dark:stroke-neutral-200"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              points="19,3 19,9 25,9 19,3 7,3 7,29 25,29 25,22 "
            />
            <path
              fill="none"
              className="stroke-neutral-800 dark:stroke-neutral-200"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="M28.2,13.9c-1.1-1.2-2.9-1.2-4,0l-1.7,1.7l-1.7-1.7c-1.1-1.2-2.9-1.2-4,0s-1.1,3,0,4.2l1.7,1.7l4,4.2l4-4.2  l1.7-1.7C29.3,16.9,29.3,15,28.2,13.9z"
            />
            <line
              fill="none"
              className="stroke-neutral-800 dark:stroke-neutral-200"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              x1="25"
              x2="25"
              y1="9"
              y2="13"
            />
          </svg>
        </label>
      </div>

      <div>
        <input
          id="views"
          type="radio"
          defaultChecked={sortData === "views"}
          className="hidden"
          onClick={() => handleSort("views")}
        />
        <label
          htmlFor="views"
          className={
            sortData === "views"
              ? `flex justify-center items-center p-1.5 rounded-full shadow-xl shadow-neutral-400 dark:bg-neutral-800 dark:shadow-black`
              : `flex justify-center items-center p-1.5 rounded-full dark:bg-neutral-800 active:scale-95 hover:shadow-xl shadow-neutral-400 dark:hover:shadow-black`
          }
        >
          <svg
            id="Icons"
            className="w-7 h-7"
            enableBackground="new 0 0 32 32"
            version="1.1"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <style type="text/css"></style>
            <polyline
              fill="none"
              className="stroke-neutral-800 dark:stroke-neutral-200"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              points="18,3 18,9 24,9 18,3 6,3 6,29 24,29 24,24.9 "
            />
            <g>
              <path
                fill="none"
                className="stroke-neutral-800 dark:stroke-neutral-200"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M27.2,17.7c-0.5,0.9-1.3,1.4-2.4,1.5c-0.6,0.1-1-0.3-1-0.8c-0.1-1.1-0.1-2.2-0.3-3.3c-0.2-1.2-0.8-2.2-1.6-3.1   c0,0-0.1,0-0.1,0.1c-0.5,1.3-1.4,2.4-2.2,3.6c-1.1,1.4-1.6,3-1.6,4.8c0.1,2.4,2.4,4.6,5,4.5c2.4,0,4.5-1.7,4.9-3.9   c0.3-1.2,0.1-2.7-0.4-3.8C27.4,17.5,27.3,17.6,27.2,17.7z"
              />
            </g>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default SortBtn;
