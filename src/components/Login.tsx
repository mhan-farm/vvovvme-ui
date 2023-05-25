const Login = () => {
  return (
    <button className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat bg-neutral-200 hover:text-black w-[5.5rem] h-8 p-1 rounded-full">
      <div className="flex justify-center mt-0.5">로그인</div>
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-lime-200 via-yellow-100 to-yellow-200 opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
    </button>
  );
};

export default Login;
