import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Router from "next/router";
import { useEffect } from "react";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};



//https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs
//https://www.framer.com/docs/introduction/
const Transition = ({ children }) => {

  let copies = [];

useEffect(() => {
  Router.events.on("beforeHistoryChange", onLoad);
  return () => {
    Router.events.off("beforeHistoryChange", onLoad);
  };
}, []);

const onLoad = () => {
  // Create a clone of every <style> and <link> that currently affects the page. It doesn't matter
  // if Next.js is going to remove them or not since we are going to remove the copies ourselves
  // later on when the transition finishes.
  const nodes = document.querySelectorAll(
    "link[rel=stylesheet], style:not([media=x])"
  );
  copies = [...nodes].map((el) => el.cloneNode(true));

  for (let copy of copies) {
    // Remove Next.js' data attributes so the copies are not removed from the DOM in the route
    // change process.
    copy.removeAttribute("data-n-p");
    copy.removeAttribute("data-n-href");

    // Add duplicated nodes to the DOM.
    document.head.appendChild(copy);
  }
};

  const { asPath } = useRouter();
  return (
    <div>
      <AnimatePresence
        initial={true}
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          key={asPath}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: "linear" }}
          className="
                            flex flex-col items-start w-full pt-10
                            px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
                            pt-24 h-full
                        "
        >
          {" "}
          {children}{" "}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
