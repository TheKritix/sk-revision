import styles from "../styles/Services.module.css";
import Head from "next/head";

const Services = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ydelser</title>
        <link rel="icon" href="/sk-revision-simple.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Ydelser</h1>
      </main>
    </div>
  );
};

export default Services;
