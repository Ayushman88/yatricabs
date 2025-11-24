import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const testimonials = [
    {
      stars: 5,
      review: "I have been using for my one way trip since 2019 on Lucknow Gorakhpur route. I must request they look off tax from us, also their drivers are Very nice, patient, they keep the state. The car was clean, and the driver was professional. Highly recommended!",
      name: "Shiran Kulkarni"
    },
    {
      stars: 5,
      review: "The GPS based billing system is a game-changer for transparency. No more disputes about drivers tampering with meters or taking longer routes. Such with transparency. We got the most hassle free travelling routes. I experienced a GPS based billing system for the first time in my trip to Ayodhya!",
      name: "Ranjan Kushwaha"
    },
    {
      stars: 5,
      review: "Traveling with my family from Gorakhpur to Prayagraj was so convenient and affordable with Yatri. We chose an SUV, and it was really well-maintained. The driver was professional and knowledgeable about the route. It made our pilgrimage hassle-free and comfortable!",
      name: "Anjali Mishra"
    },
    {
      stars: 5,
      review: "As a frequent business traveler, finding a reliable one-way cab service has always been a frustration for my intercity journeys. One of the driver was really helpful and made my journey a cruise. Yatri Cabs was a savior for me. Their 24/7 expert service is commendable. Though the app make the my so much simpler. They're my go-to for all travel.",
      name: "Sudarshan Yadav"
    }
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Customer Testimonials</h2>
      <div className={styles.testimonialsContainer}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <div className={styles.stars}>
              {"★".repeat(testimonial.stars)}
            </div>
            <p className={styles.review}>{testimonial.review}</p>
            <p className={styles.customerName}>{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
