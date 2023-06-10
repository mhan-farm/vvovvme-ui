import SideVar from "../components/SideVar";
import DefaultLayout from "../layouts/DefaultLayout";
import EditPost from "../components/EditPost";

const EditHomeRoute = () => {
  return (
    <DefaultLayout>
      <div className="flex-1 flex flex-col">
        <SideVar />
        <EditPost />
      </div>
    </DefaultLayout>
  );
};

export default EditHomeRoute;
