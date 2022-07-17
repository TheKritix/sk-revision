import styles from "../../styles/Header.module.css";
import Image from "next/image";
import LogoImage from "../../images/logo-small.png";
import Link from "next/Link";

const Header = () => {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image src={LogoImage} alt="SK-Revision" />
            </a>
          </Link>
        </div>

        <div className={styles.nav}>
          <Link href="/services">
            <a className={styles.linkbutton}>Ydelser</a>
          </Link>
          <Link href="/about">
            <a className={styles.linkbutton}>Om SK-Revision</a>
          </Link>
          <Link href="/contact">
            <a className={styles.linkbutton}>Kontakt</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
