import Image from "next/image";
import styles from "./WhyChooseOneway.module.css";

const WhyChooseOneway = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>WHY CHOOSE ONE WAY CAB?</h2>

      <div className={styles.content}>
        <div className={styles.leftPanel}>
          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}>Instant Booking & Confirmation</li>
            <li className={styles.bulletItem}>Confirmed Booking Immediately</li>
            <li className={styles.bulletItem}>No Return Fare For One-Way Trip</li>
            <li className={styles.bulletItem}>Clean & Professional Cab Services</li>
            <li className={styles.bulletItem}>Transparent Billing With GPS Based Billing System</li>
          </ul>
        </div>

        <div className={styles.centerImage}>
          <Image
            src="/carride.png"
            alt="Car Ride"
            width={400}
            height={300}
            className={styles.carImage}
          />
        </div>

        <div className={styles.rightPanel}>
          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}>Pick-Up From Your House</li>
            <li className={styles.bulletItem}>Dedicated Cab Just For You</li>
            <li className={styles.bulletItem}>Drop To Your Desired Destination</li>
            <li className={styles.bulletItem}>Completed More Than 20,000+ Oneway Trips</li>
            <li className={styles.bulletItem}>Multiple Payment Option Including Credit Card.</li>
          </ul>
        </div>
      </div>

      <p className={styles.footer}>
        DISCOVER AFFORDABLE TRAVEL WITH OUR SEAMLESS <span className={styles.highlight}>INTERCITY CAR RENTAL</span> IN<br />
        INDIA – WHERE EXCELLENCE MEETS AFFORDABILITY WITH STANDARDIZED RATES IN<br />
        EVERY CITY. UNLEASH YOUR JOURNEY!
      </p>
    </section>
  );
};

export default WhyChooseOneway;
