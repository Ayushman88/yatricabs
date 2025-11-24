import Image from "next/image";
import styles from "./WhyChoose.module.css";

const WhyChoose = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Why choose AC Bus or AC Train<br />
          for your <span className={styles.highlight}>One-way Journey?</span>
        </h2>
        <p className={styles.description}>
          Our Oneway Car Rental Service Is Cheaper Than AC Bus And 2-Tier AC Train Ticket Fares. It Reduces Your Travel Time, And You Travel In Your Own Private Space, Allowing You To Fully Enjoy Your Journey. Our One Way Taxi Will Come To Your Doorstep And Take You To Your Desired Destination. So, Book Your Cheapest One Way Cab From Lucknow To Gorakhpur Or Varanasi To Ayodhya With Our Reliable Oneway Car Rental Service With Driver. Experience The Convenience Of Our Taxi Service, Where You Can Rent A Car Effortlessly And Enjoy Seamless Cab Booking. Choose Our Car Hire Option For A Hassle-Free And Comfortable Travel Experience. We Offer Outstation Cab And Intercity Travel Services, Ensuring A Smooth And Enjoyable Luxury Ride Wherever You Need To Go.
        </p>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src="/image_processing20200705-14536-p3d6n5 1.png"
          alt="Why Choose Yatri"
          width={500}
          height={400}
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default WhyChoose;
