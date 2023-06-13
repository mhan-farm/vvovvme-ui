import { useEffect, useState } from "react";
import SortBtn from "../components/SortBtn";
import PostService from "../services/PostService";
import { Post } from "../interface/response/Post";
import { Link, useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import SearchPost from "./SearchPost";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const size = 12;
  const [page, setPage] = useState<number>(0);
  const [sort, setSort] = useState<string>("created,DESC");
  const [ref, inView] = useInView();
  const navigate = useNavigate();

  const getPosts = () => {
    PostService.getOrderBySortPosts(page, size, sort)
      .then((response) => {
        console.log(response.data);
        const content = response.data.content;
        setPosts([...posts, ...content]);
        setPage((before) => before + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (inView) {
      console.log("inview만 변경");
      getPosts();
    }
  }, [inView]);

  const getSort = (sort: string) => {
    if (sort === "created") {
      setSort("created,DESC");
    } else {
      setSort(sort);
    }
  };

  useEffect(() => {
    setPosts([]);
    setPage(0);
    getPosts();
    console.log("sort만 변경");
  }, [sort]);

  const postDetail = (post_id: number) => {
    navigate(`/${post_id}`);
  };

  return (
    <div className="container my-32 mx-auto">
      <section className="text-gray-800">
        <div className="flex flex-col w-full mb-3">
          <SearchPost />
          <SortBtn setSort={getSort} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-x-12">
          {posts ? (
            posts.map((post, index) => (
              <div
                key={index}
                onClick={() => postDetail(post.post_id)}
                className="hvr-float hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-xl"
              >
                <div className="mb-6 lg:mb-0 hover:shadow-2xl dark:hover:shadow-black rounded-xl p-4">
                  <div className="space-y-1">
                    <div
                      className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/new/standard/city/018.jpg"
                        className="w-full"
                        alt="Louvre"
                      />
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-0 hover:opacity-30 transition duration-300 ease-in-out"></div>
                    </div>

                    <div className="flex space-x-2 text-neutral-600 dark:text-neutral-300 text-sm">
                      <div className="flex space-x-1">
                        <div>{post.created.substring(0, 4)}년</div>
                        <div>{post.created.substring(6, 7)}월</div>
                        <div>{post.created.substring(8, 10)}일</div>
                      </div>

                      <div className="flex items-center space-x-0.5">
                        <div>by</div>
                        <Link
                          to={"/userPage"}
                          className="transition duration-150 ease-in-out hover:text-neutral-800 active:text-neutral-500 focus:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-50 dark:active:text-neutral-300 dark:focus:text-neutral-50"
                        >
                          {post.author.username}
                        </Link>
                      </div>
                    </div>

                    <div className="w-24 font-bold text-3xl transition duration-150 ease-in-out text-neutral-800 hover:text-amber-500 active:text-amber-600 focus:text-amber-500 dark:text-neutral-50 dark:hover:text-amber-400 dark:active:text-amber-500 dark:focus:text-amber-400">
                      {post.title}
                    </div>

                    <div className="text-neutral-600 dark:text-neutral-300">
                      {post.content}
                      ...
                    </div>

                    <div className="flex justify-between text-neutral-600 dark:text-neutral-300">
                      <div className="flex space-x-2">
                        <div className="flex space-x-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                          </svg>

                          <div>{post.like_count}</div>
                        </div>
                        <div className="flex space-x-0.5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>

                          <div>{post.views}</div>
                        </div>
                      </div>
                      <div>{post.comment_count}개의 댓글</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>null</>
          )}
          <div ref={ref}></div>
        </div>
      </section>
    </div>
  );
};

export default Posts;
