import Post from "../components/Post";
import DefaultLayout from "../layouts/DefaultLayout";

const PostRoute = () => {
  return (
    <DefaultLayout>
      <div className="flex-1 flex flex-col mx-10 md:mx-20">
        <Post />
      </div>
    </DefaultLayout>
  );
};

export default PostRoute;
