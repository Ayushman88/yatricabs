import Image from "next/image";
import styles from "./ExploreIndia.module.css";

const ExploreIndia = () => {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        EXPLORING INDIA'S AMAZING LANDSCAPES, FROM THE MOUNTAINS TO THE BEACHES, ONE MEMORABLE ROAD TRIP AT A TIME
      </div>

      <div className={styles.benefitsList}>
        <div className={styles.bulletItem}>
          Experience The Thrill Of Road Travel With Our Reliable Car Rental And Taxi Service As We Explore The Diverse Landscapes Of India Together. We're Passionate About Making Car Hire Accessible And Enjoyable For Everyone.
        </div>
        <div className={styles.bulletItem}>
          Instead Of Worrying About The Road, Relax In Our Chauffeur-Driven Cabs On Your Next Vacation. With A Presence In Over 2000 Cities Across India, We're Here To Take You Wherever Your Heart Desires To Luxury Car Rental Services.
        </div>
        <div className={styles.bulletItem}>
          We Cherish The Freedom To Stop, Breathe In The Fresh Air, Immerse In Local Cultures, And Savor Regional Cuisines Along The Way. These Moments Of Discovery Enrich Your Travels And Create Lasting Memories Through Our Rent A Car Service.
        </div>
        <div className={styles.bulletItem}>
          No Destination Is Too Far Or Too Close. We Encourage You To Explore The Beauty Around You With Our Car Hire Options. Pack Your Bags, Set Out On Weekend Adventures, And Uncover The Gems In Your Vicinity With Our Taxi Service.
        </div>
        <div className={styles.bulletItem}>
          Planning Your Trip Is A Breeze With Our User-Friendly Website, Or You Can Chat With Our Travel Experts At <span className={styles.boldText}>7860663399</span> For Personalised Guidance On Car Rental. Our Cab Booking Simplifies The Process, Ensuring A Hassle-Free Experience When You Rent A Car.
        </div>
        <div className={styles.bulletItem}>
          Our Experienced Drivers Are Your Companions On The Road, Guiding You Through India's Best Experiences With Our Car Rental And Taxi Service. From Booking To Your Safe Return Home, We're Dedicated To Ensuring You Have An Exceptional Road Trip.
        </div>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <Image
            src="/carc1.png"
            alt="For Any Budget"
            width={120}
            height={120}
            className={styles.cardIcon}
          />
          <h3 className={styles.cardTitle}>For Any Budget</h3>
          <p className={styles.cardDescription}>
            Choose From Hatchbacks, Sedans, Mini SUVs, Prime SUVs, And Mini Buses Like Tempo Travellers 12-Seater To 26-Seater To Find A Ride That Fits Your Budget And All Your Convenience With Our Car Rental And Cab Service Options.
          </p>
        </div>

        <div className={styles.card}>
          <Image
            src="/carc2.png"
            alt="For Any Distance"
            width={120}
            height={120}
            className={styles.cardIcon}
          />
          <h3 className={styles.cardTitle}>For Any Distance</h3>
          <p className={styles.cardDescription}>
            Book Daily Rides With Multiple Stops Within The City Or Travel To Your Favourite Destinations Across The Country With Our Oneway Or Round Trip Outstation Cab Service. Enjoy Seamless Cab Booking For All Your Travel Needs.
          </p>
        </div>

        <div className={styles.card}>
          <Image
            src="/carc3.png"
            alt="For Any Duration"
            width={120}
            height={120}
            className={styles.cardIcon}
          />
          <h3 className={styles.cardTitle}>For Any Duration</h3>
          <p className={styles.cardDescription}>
            Plan A Day Out With Our Hourly-Based Car Rental For Local Trips, Or Multi-Day Car Rental Services With A Driver For Long Or Multiple-Day Trips. Our Taxi Service Ensures Reliable Transportation Tailored To Your Car Hire Needs.
          </p>
        </div>
      </div>

      <div className={styles.whyChooseBanner}>
        WHY CHOOSE YATRI CAR RENTAL?
      </div>

      <div className={styles.whyChooseList}>
        <div className={styles.whyChooseItem}>
          Yatri Car Rental Has Been A Trusted Digital Platform For Booking Local And Outstation Car Rental And Taxi Services Since 2011. A Primary Focus For Providing Reliable Car Hire Services In The Country. And We Are Very Particular And Take Great Pride In Our Commitment To Safety, Reliability, And Experienced Drivers. These Qualities Are Evident Across All Our Car Rental Services, Making Us The Preferred Choice For Those Seeking The Best Taxi Services.
        </div>
        <div className={styles.whyChooseItem}>
          <span className={styles.boldText}>Service You Can Trust</span> - At Yatri Car Rental, We Are Dedicated To Providing Dependable Services In INDIA. We Guarantee That We Won't Cancel Any Bookings Without Advance Notification, And Our Rental Cars Are Meticulously Maintained To Ensure Your Safety And Ease During Your Journey At Cab Rental Services.
        </div>
        <div className={styles.whyChooseItem}>
          <span className={styles.boldText}>Safety Is Our Priority</span> - Safety And Comfort Are Paramount At Yatri Car Rental In INDIA. We Exclusively Hire Experienced And Skilled Drivers Who Possess In-Depth Knowledge Of The City's Roads And Traffic Regulations. Our Drivers Are Committed To Delivering Excellent Customer Service And Ensuring A Comfortable And Stress-Free Travel Experience For Passengers.
        </div>
        <div className={styles.whyChooseItem}>
          <span className={styles.boldText}>Expert Chauffeurs At Your Service</span> - Yatri Car Rental Takes Pride In Selecting Only The Most Skilled, Knowledgeable, And Courteous Drivers To Enhance The Convenience And Satisfaction Of Our Clients.
        </div>
        <div className={styles.whyChooseItem}>
          <span className={styles.boldText}>Extensive Industry Experience</span> - With Over 10 Years Of Industry Expertise, Yatri Car Rental Is Your Go-To Choice For Premium Car Hire Services.
        </div>
        <div className={styles.whyChooseItem}>
          <span className={styles.boldText}>Proven Track Record</span> - We Place A Strong Emphasis On Transparency In Our Billing System And Consistently Strive To Provide A Seamless Rental Experience To Our Customers. Our Commitment To Customer Comfort And Satisfaction Is Evident In Our Outstanding Google Ratings, Where We Consistently Receive Ratings Of 4.8 Stars Or Higher.
        </div>
      </div>
    </section>
  );
};

export default ExploreIndia;
