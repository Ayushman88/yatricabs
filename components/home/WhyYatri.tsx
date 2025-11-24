import Image from "next/image";
import styles from "./WhyYatri.module.css";

const WhyYatri = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.introText}>INDIA'S PREMIER INTERCITY AND LOCAL TAXI SERVICES</h2>
        <p className={styles.description}>
          At Yatri Cabs, We Pride Ourselves On Being A Top-Tier Online Oneway Cab Booking Service, Delivering Reliable And Premium Intercity And Local Taxi Services. With Over A Decade Of Experience, Instead Of Self-Drive Car Rental, We Have Become The Leading Driver-Driven One Way Car Rental Company In India, Renowned For Our Extensive Coverage Across The Country
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src="/yatricabs.png"
            alt="Yatri Cabs Fleet"
            width={600}
            height={400}
            className={styles.carImage}
          />
        </div>

        <div className={styles.featuresList}>
          <h2 className={styles.sectionTitle}>WHY <span className={styles.highlight}>YATRI</span> ?</h2>

          <div className={styles.featureItem}>
            <Image src="/bolt.png" alt="Fast Response" width={40} height={40} className={styles.icon} />
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>FAST RESPONSE TIME</h3>
              <p className={styles.featureDescription}>
                Experience The Best Car Rental Service With Driver For Local Or Outstation Trips. Enjoy Prompt Response Times And Seamless Car Hire Service, Ensuring You Get On The Road Quickly
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <Image src="/people.png" alt="Vast Fleet" width={40} height={40} className={styles.icon} />
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>VAST FLEET</h3>
              <p className={styles.featureDescription}>
                We Offer A Wide Range Of Rental Cars Including Sedans, SUVs, MUVs, Premium Sedans, And Tempo Travellers To Meet All Your Car Hire Needs.
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <Image src="/order.png" alt="Easy To Order" width={40} height={40} className={styles.icon} />
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>EASY TO ORDER</h3>
              <p className={styles.featureDescription}>
                Easily Book A Cab Online Through Our User-Friendly Website, Mobile Application, Or By Calling Our Customer Support Team.
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <Image src="/paid.png" alt="Great Tariffs" width={40} height={40} className={styles.icon} />
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>GREAT TARIFFS</h3>
              <p className={styles.featureDescription}>
                Rent A Car At The Lowest Rates! Our Car Hire Tariffs Are Highly Competitive Compared To Other Operators. Book Online Cabs At The Best Prices With Yatri Car Rental.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyYatri;
