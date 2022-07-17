import styles from "../styles/Contact.module.css";
import Head from "next/head";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kontakt</title>
        <link rel="icon" href="/sk-revision-simple.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Kontakt</h1>
      </main>
    </div>
  );
};

export default Contact;
