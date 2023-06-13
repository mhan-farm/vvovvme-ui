import DefaultLayout from "../layouts/DefaultLayout";
import EditPost from "../components/EditPost";
import SideVar from "../components/SideVar";

const EditHomeRoute = () => {
  return (
    <DefaultLayout>
      <div className="flex-1 flex flex-col">
        <div className="mt-32">
          <SideVar />
        </div>
        <EditPost />
      </div>
    </DefaultLayout>
  );
};

export default EditHomeRoute;
