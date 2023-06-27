import CreatePost from "../components/CreatePost";
import SideVar from "../components/SideVar";
import DefaultLayout from "../layouts/DefaultLayout";

const CreatePostRoute = () => {
  return (
    <DefaultLayout>
      <div className="flex-1 flex">
        <SideVar />
        <CreatePost />
      </div>
    </DefaultLayout>
  );
};

export default CreatePostRoute;
