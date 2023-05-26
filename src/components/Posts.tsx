import { useEffect, useState } from "react";
import PostService from "../services/PostService";
import { Post } from "../interface/response/Post";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    PostService.getPosts()
      .then((response) => {
        console.log(response.data);
        const posts = response.data.content;
        setPosts(posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container my-28">
      <section className="text-gray-800">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Latest articles
        </h2>

        <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
          {posts ? (
            posts.map((post) => (
              <div key={post.postId}>
                <div className="mb-5">
                  <div>
                    <div
                      className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/new/standard/city/059.jpg"
                        className="w-full"
                        alt="Louvre"
                      />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
                      </a>
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
                          to={"#"}
                          className="transition duration-150 ease-in-out hover:text-neutral-800 active:text-neutral-500 focus:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-50 dark:active:text-neutral-300 dark:focus:text-neutral-50"
                        >
                          {post.author.username}
                        </Link>
                      </div>
                    </div>

                    <Link
                      to={"#"}
                      className="hvr-sweep-to-right font-bold text-3xl transition duration-150 ease-in-out text-neutral-800 hover:text-amber-500 active:text-amber-600 focus:text-amber-500 dark:text-neutral-50 dark:hover:text-amber-400 dark:active:text-amber-500 dark:focus:text-amber-400"
                    >
                      {post.title}
                    </Link>

                    <div className="text-neutral-600 dark:text-neutral-300">
                      {post.content}
                      Curabitur tristique, mi a mollis sagittis, metus felis
                      mattis arcu, non vehicula nisl dui quis diam. Mauris ut
                      risus eget massa volutpat feugiat. Donec...
                    </div>

                    <div className="flex justify-between">
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
                      <div>{post.comment_count}개의 댓글</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>null</>
          )}
        </div>
      </section>
    </div>
  );
};

export default Posts;