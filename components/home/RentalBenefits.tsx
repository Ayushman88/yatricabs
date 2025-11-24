import Image from "next/image";
import styles from "./RentalBenefits.module.css";

const RentalBenefits = () => {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        CAR RENTAL IN INDIA - BOOK RELIABLE VEHICLES FOR ALL YOUR NEEDS
      </div>

      <div className={styles.content}>
        <p className={styles.intro}>
          Choosing a chauffeur-driven car rental over a self-drive Car Hire option in India offers several benefits with Yatri Car Rental:
        </p>

        <div className={styles.benefitsList}>
          <div className={styles.benefitItem}>
            <h3 className={styles.benefitTitle}>1. Skilled Chauffeurs:</h3>
            <p className={styles.benefitDescription}>
              Our experienced and courteous drivers ensure a safe, comfortable, and stress-free ride. Whether you need a taxi service, outstation car rental, or oneway cab, they are adept at navigating India's roads for a seamless travel experience.
            </p>
          </div>

          <div className={styles.benefitItem}>
            <h3 className={styles.benefitTitle}>2. Dedicated Oneway Cab Service:</h3>
            <p className={styles.benefitDescription}>
              We offer specialized oneway car rental services across India, allowing you to pay only for the distance you travel. This makes intercity trips with Yatri Car Rental both cost-effective and convenient.
            </p>
          </div>

          <div className={styles.benefitItem}>
            <h3 className={styles.benefitTitle}>3. Well-Maintained Car Rental Fleet:</h3>
            <p className={styles.benefitDescription}>
              Our fleet of rental cars in India is kept in top condition, ensuring you enjoy a comfortable and secure ride, whether you opt for a car hire, taxi service, or outstation car rental.
            </p>
          </div>

          <div className={styles.benefitItem}>
            <h3 className={styles.benefitTitle}>4. Transparent Pricing for Car Hire:</h3>
            <p className={styles.benefitDescription}>
              Our GPS-based billing system ensures fair pricing by eliminating any chances of kilometer tampering by the driver. With real-time distance measurement and live location tracking, you get transparency and peace of mind when using our car rental services.
            </p>
          </div>

          <div className={styles.benefitItem}>
            <h3 className={styles.benefitTitle}>5. 24/7 Customer Support for Car Rentals:</h3>
            <p className={styles.benefitDescription}>
              Our customer care team is available round the clock to assist with any inquiries or concerns regarding your car hire, taxi service, or outstation car rental, ensuring a smooth and enjoyable experience throughout your journey in India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalBenefits;
