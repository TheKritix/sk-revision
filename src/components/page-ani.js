import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

//https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs
//https://www.framer.com/docs/introduction/
const Transition = ({ children }) => {
  const { asPath } = useRouter();
  return (
    <div>
      <AnimatePresence
        initial={false}
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
