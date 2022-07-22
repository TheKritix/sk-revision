import styles from "../../styles/ContactInfo.module.css";
import emailIcon from "../../images/email.png";
import phoneIcon from "../../images/phone.png";
import addressIcon from "../../images/address.png";
import Image from "next/image";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfoContainer}>
      <h2 className={styles.title}>Kontakt</h2>
      <p className={styles.kontakt}>
        Er du interesseret i at hyre SK-Revision eller har du bare generelle
        spørgsmål? Så tag endelig kontakt!
      </p>

      <div className={styles.contactLine}>
        <div className={styles.image}>
          <Image src={phoneIcon} />
        </div>
        <p className={styles.contactText}>
          <a href="tel: +4556274242">56 27 42 42</a>
        </p>
      </div>

      <div className={styles.contactLine}>
        <div className={styles.image}>
          <Image src={emailIcon} />
        </div>
        <p className={styles.contactText}>
          <a href="mailto: sanne@sk-revision.dk">sanne@sk-revision.dk</a>
        </p>
      </div>

      <div className={styles.contactLine}>
        <div className={styles.image}>
          <Image src={addressIcon} />
        </div>
        <p className={styles.contactText}>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Syvstien 8+Svansbjerg+4861+Herfølge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Syvstien 8, Svansbjerg, 4861 Herfølge
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
