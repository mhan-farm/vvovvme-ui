interface UplodeVideoProps {
  setItem: (item: string) => void;
}

const UplodeVideo = ({ setItem }: UplodeVideoProps) => {
  const setVideo = () => {
    setItem(
      "$$youtube\n" + "유튜브 영상 url 끝자리(ex: HUO1bI1X_dA )" + "\n$$"
    );
  };

  return (
    <button
      onClick={setVideo}
      className="py-2 px-2 rounded-sm fill-neutral-700 hover:fill-red-600"
    >
      <svg
        height="35px"
        version="1.1"
        viewBox="0 0 512 512"
        width="30px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="M501.299,132.766c-5.888,-22.03 -23.234,-39.377 -45.264,-45.264c-39.932,-10.701 -200.037,-10.701 -200.037,-10.701c0,0 -160.105,0 -200.038,10.701c-22.025,5.887 -39.376,23.234 -45.264,45.264c-10.696,39.928 -10.696,123.236 -10.696,123.236c0,0 0,83.308 10.696,123.232c5.888,22.03 23.239,39.381 45.264,45.268c39.933,10.697 200.038,10.697 200.038,10.697c0,0 160.105,0 200.037,-10.697c22.03,-5.887 39.376,-23.238 45.264,-45.268c10.701,-39.924 10.701,-123.232 10.701,-123.232c0,0 0,-83.308 -10.701,-123.236Z" />
          <path
            d="M204.796,332.803l133.018,-76.801l-133.018,-76.801l0,153.602Z"
            className="fill-white"
          />
        </g>
      </svg>
    </button>
  );
};

export default UplodeVideo;
