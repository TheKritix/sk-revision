import styles from "../../styles/Footer.module.css";
import Image from "next/image";
import LogoImage from "../../images/logo-small.png";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.address}>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Syvstien 8+Svansbjerg+4861+Herfølge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Syvstien 8, Svansbjerg, 4861 Herfølge
          </a>
        </div>
        <div className={styles.image}>
          <a
            href="https://www.sk-revision.dk"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span className={styles.logo}>
              <Image src={LogoImage} alt="SK-Revision Logo" />
            </span>
          </a>
        </div>
        <div className={styles.cvr}>
          <a
            href="https://datacvr.virk.dk/enhed/virksomhed/19126587"
            target="_blank"
            rel="noopener noreferrer"
          >
            CVR 19126587
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
