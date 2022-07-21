import "../styles/globals.css";
import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";
import Transition from "../components/page-ani";
import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
