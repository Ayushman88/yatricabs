import Image from "next/image";
import styles from "./GetAppNow.module.css";

const GetAppNow = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.phoneImages}>
            <Image
              src="/mobiledownlaod.png"
              alt="Yatri Cabs App"
              width={200}
              height={400}
              className={styles.phoneImage}
            />
          </div>

          <div className={styles.appInfo}>
            <h2 className={styles.title}>
              GET YOUR<br />
              <span className={styles.yatriCabs}>YATRI CABS</span><br />
              APP NOW!
            </h2>
            <p className={styles.promoCode}>
              Use code <span className={styles.code}>WELCOME YATRI</span> and<br />
              get <span className={styles.code}>FLAT 05% OFF*</span> on your first<br />
              intercity RIDE
            </p>
            <p className={styles.downloadText}>Download Now!</p>
            <div className={styles.storeButtons}>
              <Image
                src="/getitongoogleplay.png"
                alt="Get it on Google Play"
                width={140}
                height={50}
                className={styles.storeButton}
              />
              <Image
                src="/getitonappstore.png"
                alt="Get it on App Store"
                width={140}
                height={50}
                className={styles.storeButton}
              />
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.rightSection}>
          <h2 className={styles.driverTitle}>
            BECOME A <span className={styles.driver}>DRIVER</span> PARTNER
          </h2>
          <p className={styles.driverDescription}>
            Join <span className={styles.yatriRental}>Yatri Car Rental</span> and attach your car to our platform. Earn more by serving our passengers and benefit from our extensive customer base.
          </p>
          <button className={styles.driverButton}>DOWNLOAD THE APP</button>
        </div>
      </div>
    </section>
  );
};

export default GetAppNow;
