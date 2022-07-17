import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/Link";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SK-Revision</title>
        <link rel="icon" href="/sk-revision-simple.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Revisoren til den lille virksomhed.<br/>
          v/ Sanne Kjærgaard, Registeret Revisor
        </h1>
      </main>
    </div>
  );
};

export default Home;
