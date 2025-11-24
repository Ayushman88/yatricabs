import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          src="/logo.png"
          alt="Yatri Cabs"
          width={165}
          height={55}
          className={styles.logo}
          priority
        />
      </div>

      <div className={styles.centerSection}>
        <Image
          src="/headernumber.png"
          alt="24/7 Support"
          width={230}
          height={48}
          className={styles.contactImage}
        />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.navItem}>
          <div className={`${styles.icon} ${styles.downloadIcon}`}>
            <Image
              src="/download.png"
              alt=""
              width={22}
              height={22}
              className={styles.iconImage}
            />
          </div>
          <span>Download App</span>
        </div>
        <div className={styles.navItem}>
          <div className={`${styles.icon} ${styles.accountIcon}`}>
            <Image
              src="/profilecircle.png"
              alt=""
              width={22}
              height={22}
              className={styles.iconImage}
            />
          </div>
          <span>Hi, Ravi</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
