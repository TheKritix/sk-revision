import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/404.module.css";

const FourOhFour = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SK-Revision</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Error 404: Page not found</h1>
        <h2 className={styles.titlemin}>
          Denne side kender vi ikke til. <br />
          Tryk <Link href="/">her</Link> for at komme tilbage!
        </h2>
      </main>

    </div>
  );
};

export default FourOhFour;
