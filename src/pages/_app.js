import "../styles/globals.css";
import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";
import Transition from "../components/page-ani";
import { useRouter } from "next/router";




function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Header />
      <Transition>
        <Component {...pageProps} key={router.pathname} />
      </Transition>
      <Footer />
    </>
  );
}

export default MyApp;
