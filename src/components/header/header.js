import styles from "../../styles/Header.module.css";
import Image from "next/image";
import LogoImage from "../../images/logo-small.png";
import Link from "next/Link";

const Header = () => {
  return (
    <div>
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
