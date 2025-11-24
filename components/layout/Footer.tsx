import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerTop}>
            <div className={styles.logoContainer}>
              <Image
                src="/logo.png"
                alt="Yatri Cabs"
                width={150}
                height={50}
                className={styles.logo}
              />
            </div>
            <div className={styles.footerLinks}>
              <Link href="#" className={styles.footerLink}>Home</Link>
              <Link href="#" className={styles.footerLink}>About</Link>
              <Link href="#" className={styles.footerLink}>Services</Link>
              <Link href="#" className={styles.footerLink}>Cabs</Link>
              <Link href="#" className={styles.footerLink}>Contact</Link>
              <Link href="#" className={styles.footerLink}>Privacy Policy</Link>
              <Link href="#" className={styles.footerLink}>Terms & Conditions</Link>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p className={styles.copyright}>
              All Copyright are reverved by Yatri Cabs
            </p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
