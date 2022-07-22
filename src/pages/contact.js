import styles from "../styles/Contact.module.css";
import Head from "next/head";
import ContactInfo from "../components/contact/contactInfo";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kontakt</title>
        <link rel="icon" href="/sk-revision-simple.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Tag fat i SK-Revision</h1>
        <div className={styles.contact}>
          <ContactInfo />
          <ContactInfo />
        </div>
      </main>
    </div>
  );
};

export default Contact;
