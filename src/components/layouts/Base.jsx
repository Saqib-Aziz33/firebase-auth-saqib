// layout
import Header from "./Header";
import Footer from "./Footer";

const Base = (props) => {
  return (
    <>
      <Header />
      <main role="main">{props.children}</main>
      <Footer />
    </>
  );
};
export default Base;
