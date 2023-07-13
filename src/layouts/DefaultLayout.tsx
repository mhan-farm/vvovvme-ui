import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const DefaultLayout = (props: Props) => {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full bg-white dark:bg-neutral-800">
        <Header />
        <main className="flex flex-1">{props.children}</main>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
