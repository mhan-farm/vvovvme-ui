import DefaultLayout from "../layouts/DefaultLayout";

const HomeRoute = () => {
  return (
    <DefaultLayout>
      <div className="flex-1 flex flex-col">
        <div className="flex justify-center mx-10">
          <div className="flex w-full h-10 bg-lime-200"></div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomeRoute;
