import "../styles/globals.css";
import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";
import Transition from "../components/page-ani";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Transition>
        <Component {...pageProps} />
      </Transition>
      <Footer />
    </>
  );
}

export default MyApp;
