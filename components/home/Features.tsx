import Image from "next/image";
import styles from "./Features.module.css";

const Features = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featureCard}>
        <Image
          src="/hand.png"
          alt="Return Fare, Not Fair!"
          width={80}
          height={60}
          className={styles.icon}
        />
        <h3 className={styles.title}>RETURN FARE, NOT FAIR!</h3>
        <p className={styles.description}>
          Why Pay For Return Journey When You Are Travelling Oneway? Now Get Discounted AC Taxi At Just Half Of The Round Trip Cost For Your One Way Travel.
        </p>
      </div>

      <div className={styles.featureCard}>
        <Image
          src="/location.png"
          alt="GPS Based Billing System"
          width={60}
          height={60}
          className={styles.icon}
        />
        <h3 className={styles.title}>GPS BASED BILLING SYSTEM</h3>
        <p className={styles.description}>
          Since The GPS Data Captures The Actual Distance And Time Travelled, It Reduce The Chance Of Kilometer Tampering Or Discrepancies In Billing.
        </p>
      </div>

      <div className={styles.featureCard}>
        <Image
          src="/driving.png"
          alt="Now Available Routes Are!"
          width={80}
          height={60}
          className={styles.icon}
        />
        <h3 className={styles.title}>NOW AVAILABLE ROUTES ARE!</h3>
        <p className={styles.description}>
          Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly
        </p>
      </div>
    </section>
  );
};

export default Features;
