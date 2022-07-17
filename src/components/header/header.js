import styles from "../../styles/Header.module.css";
import Image from "next/image";
import LogoImage from "../../images/logo-small.png";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" scroll={false}>
            <a>
              <Image src={LogoImage} alt="SK-Revision" />
            </a>
          </Link>
        </div>

        <div className={styles.nav}>
          <Link href="/services" scroll={false}>
            <a className={styles.linkbutton}>Ydelser</a>
          </Link>
          <Link href="/about" scroll={false}>
            <a className={styles.linkbutton}>Om SK-Revision</a>
          </Link>
          <Link href="/contact" scroll={false}>
            <a className={styles.linkbutton}>Kontakt</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
