import Link from "next/link";
import styles from "./OperationalCities.module.css";

const OperationalCities = () => {
  const cities = [
    "Lucknow",
    "Ayodhya",
    "Gorakhpur",
    "Varanasi",
    "Allahabad (Prayagraj)",
    "Kanpur"
  ];

  return (
    <div className={styles.operationalCities}>
      <div className={styles.container}>
        <span className={styles.citiesTitle}>Operational Cities :</span>
        <div className={styles.citiesList}>
          {cities.map((city) => {
            const citySlug = city.toLowerCase().replace(/\s*\(.*?\)\s*/g, '').replace(/\s+/g, '');
            return (
              <Link 
                key={city} 
                href={`/${citySlug}/car-rental`} 
                className={styles.cityLink}
              >
                {city}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OperationalCities;
