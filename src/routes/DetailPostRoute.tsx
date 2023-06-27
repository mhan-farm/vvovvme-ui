import DefaultLayout from "../layouts/DefaultLayout";
import SideVar from "../components/SideVar";
import DetailPost from "../components/DetailPost";

const DetailPostRoute = () => {
  return (
    <DefaultLayout>
      <div className="flex-1 flex">
        <SideVar />
        <DetailPost />
      </div>
    </DefaultLayout>
  );
};

export default DetailPostRoute;
