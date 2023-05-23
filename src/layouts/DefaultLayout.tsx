import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const DefaultLayout = (props: Props) => {
  return (
    <>
      <div className="flex flex-col h-screen bg-white">
        <Header />
        <main className="flex-1 flex">{props.children}</main>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
