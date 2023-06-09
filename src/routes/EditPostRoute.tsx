import EditPost from "../components/EditPost";
import SideVar from "../components/SideVar";
import DefaultLayout from "../layouts/DefaultLayout";

const EditPostRoute = () => {
  return (
    <DefaultLayout>
      <div className="flex-1 flex">
        <SideVar />
        <EditPost />
      </div>
    </DefaultLayout>
  );
};

export default EditPostRoute;
