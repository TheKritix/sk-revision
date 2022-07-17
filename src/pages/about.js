import styles from "../styles/About.module.css";
import Head from "next/head";
import Image from "next/image";
import aboutImage from "../images/wipImage.PNG";

//Til brug

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Om SK-Revision</title>
        <link rel="icon" href="/sk-revision-simple.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.about}>
          <h1 className={styles.title}>Om SK-Revision</h1>
          <p className={styles.paragraph}>
            SK-Revision er et registreret revisionsvirksomhed som startede anno
            1996 ved Sanne Ibina Kjærgaard.
          </p>
          <p className={styles.paragraph}>
            SK-Revision har igennem mange år specialiseret sig i mindre
            virksomheder indenfor diverse håndværk, kontor, restauration,
            kundeservice, mm.
          </p>
          <p className={styles.paragraph}>
            Virksomheden er registeret hos FDR, Foreningen Danske Revisorer, som
            et godkendt revisionsvirksomhed, og Sanne Kjærgaard er registreret
            revisor.
          </p>

          <a
            className={styles.textLink}
            href="https://fdr.dk/fdr-revisorer/sk-revision/"
            target="_blank"
          >
            {">>"} Se revisionsvirksomhedsregistrering
          </a>
        </div>
        <div className={styles.image}>
          <Image src={aboutImage} alt="SK-Revision about" />
        </div>
      </main>
    </div>
  );
};

export default About;
