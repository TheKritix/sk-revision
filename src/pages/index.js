import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SK-Revision</title>
        <link rel="icon" href="/sk-revision-simple.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Den lille virksomheds revisor.<br/>
          v/ Sanne Kjærgaard, Registeret Revisor
        </h1>
      </main>
    </div>
  );
};

export default Home;
