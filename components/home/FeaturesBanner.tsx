import Image from "next/image";
import styles from "./FeaturesBanner.module.css";

const FeaturesBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.feature}>
        <h3 className={styles.featureTitle}>Transparent Billing</h3>
        <p className={styles.featureSubtext}>GPS Based Billing | No Km Tampering</p>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.downloadSection}>
        <span className={styles.downloadText}>Download Now!</span>
        <div className={styles.storeButtons}>
          <Image
            src="/getitongoogleplay.png"
            alt="Google Play"
            width={205}
            height={79}
            className={styles.storeImage}
          />
          <Image
            src="/getitonappstore.png"
            alt="App Store"
            width={205}
            height={79}
            className={styles.storeImage}
          />
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.feature}>
        <h3 className={styles.featureTitle}>No return fare</h3>
        <p className={styles.featureSubtext}>Oneway Cab Fare | No Hidden Charges</p>
      </div>
    </div>
  );
};

export default FeaturesBanner;
