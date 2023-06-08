const LoginBtn = () => {
  return (
    <button
      type="button"
      className="flex justify-center w-16 rounded-full px-2 py-1 text-sm font-medium uppercase leading-normal border-2 
      transition duration-150 ease-in-out hover:bg-neutral-600 hover:bg-opacity-10 focus:outline-none focus:ring-0
      border-amber-300 hover:border:amber-400 active:border-amber-500 focus:border-amber-400 text-amber-500 hover:text-amber-600 active:text-amber-700 focus:text-amber-600
      dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:border-amber-400 dark:hover:border-amber-300 dark:active:border-amber-400 dark:focus:border-amber-400 dark:text-amber-300 dark:hover:text-amber-400 dark:active:text-amber-300 dark:focus:text-amber-300"
      data-te-ripple-init
    >
      <div className="">로그인</div>
    </button>
  );
};

export default LoginBtn;
