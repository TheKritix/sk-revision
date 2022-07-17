import Head from "next/head";
import Image from "next/image";
import Link from "next/Link";
import Header from "./header/header.js";
import Footer from "./footer/footer.js";
import styles from "../styles/404.module.css";

const FourOhFour = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SK-Revision</title>
        <link rel="icon" href="/sk-revision-simple.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Error 404: Page not found</h1>
        <h2 className={styles.titlemin}>
          Denne side kender vi ikke til. <br />
          Tryk <Link href="/">her</Link> for at komme tilbage!
        </h2>
      </main>

      <Footer />
    </div>
  );
};

export default FourOhFour;
