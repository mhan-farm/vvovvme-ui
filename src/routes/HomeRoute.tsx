import Posts from "../components/Posts";
import DefaultLayout from "../layouts/DefaultLayout";

const HomeRoute = () => {
  return (
    <DefaultLayout>
      <div className="flex-1 flex flex-col mx-32">
        <Posts />
      </div>
    </DefaultLayout>
  );
};

export default HomeRoute;
