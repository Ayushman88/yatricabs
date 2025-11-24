import styles from './DownloadApp.module.css';
import Image from 'next/image';

const DownloadApp = () => {
  return (
    <section className={styles.downloadApp}>
      <div className={`container ${styles.container}`}>
        <div className={styles.leftSection}>
          <div className={styles.phonesWrapper}>
             <Image src="/phones.png" alt="Yatri Cabs App" width={200} height={350} className={styles.phoneImage} />
          </div>
          <div className={styles.appText}>
            <h2>GET YOUR<br /><span className={styles.greenText}>YATRI CABS</span><br />APP NOW!</h2>
            <p className={styles.offerText}>USE CODE <strong>WELCOMEYATRI</strong> AND GET <strong>FLAT 5% OFF*</strong> ON YOUR FIRST INTERCITY RIDE.</p>
            <p className={styles.downloadNow}>Download Now!</p>
            <div className={styles.storeButtons}>
              <Image src="/play-store.png" alt="Google Play" width={120} height={40} />
              <Image src="/app-store.png" alt="App Store" width={120} height={40} />
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.rightSection}>
          <h2>BECOME A <span className={styles.greenText}>DRIVER PARTNER</span></h2>
          <p className={styles.partnerDesc}>
            Join <span className={styles.greenLink}>Yatri Car Rental</span> And Attach Your Car To Our Platform. Earn More By Serving Our Passengers And Benefit From Our Extensive Customer Base.
          </p>
          <button className={styles.downloadBtn}>DOWNLOAD THE APP</button>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
