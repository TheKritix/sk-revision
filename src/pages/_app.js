import "../styles/globals.css";
import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";
import Transition from "../components/page-ani";
import Router from "next/router";
import { useEffect } from 'react';

export const OPACITY_EXIT_DURATION = 1;

const routeChange = () => {
  const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]');
      allStyleElems.forEach((elem) => {
          elem.removeAttribute('media');
      });
  };
  tempFix();
};

export const useTransitionFix = () => {
  useEffect(() => {
      Router.events.on('routeChangeComplete', routeChange);
      Router.events.on('routeChangeStart', routeChange);

      return () => {
          Router.events.off('routeChangeComplete', routeChange);
          Router.events.off('routeChangeStart', routeChange);
      };
  }, []);

  useEffect(() => {
      Router.router?.push(Router.router?.pathname);
  }, []);
};

const handleRouteChange = () => {
	const elements = document.querySelectorAll('style[media="x"]');
	elements.forEach((elem) => elem.removeAttribute("media"));
	setTimeout(() => {
		elements.forEach((elem) => elem.remove());
	}, OPACITY_EXIT_DURATION * 1000);
};

Router.events.on("routeChangeStart", handleRouteChange);
Router.events.on("routeChangeComplete", handleRouteChange);

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
