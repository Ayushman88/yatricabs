import styles from "./Tariff.module.css";

const Tariff = () => {
  return (
    <section className={styles.section}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            <th className={styles.headerCell}>CAR TYPE</th>
            <th className={styles.headerCell}>MODEL INCLUDES</th>
            <th className={styles.headerCell}>PASSENGERS</th>
            <th className={styles.headerCell}>IDEAL FOR</th>
            <th className={styles.headerCell}>FARE</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.row}>
            <td className={styles.cell}>AC Sedans</td>
            <td className={styles.cell}>Etios, Amaze, Dzire etc.</td>
            <td className={styles.cell}>4 Pax</td>
            <td className={styles.cell}>Comfortable trips with small families</td>
            <td className={styles.cell}>Rs.11/KM</td>
          </tr>
          <tr className={styles.row}>
            <td className={styles.cell}>AC Hatchbacks</td>
            <td className={styles.cell}>Wagon R, Celerio, Micra etc.</td>
            <td className={styles.cell}>4 Pax</td>
            <td className={styles.cell}>Budget trips over short distances</td>
            <td className={styles.cell}>Rs.11/KM</td>
          </tr>
          <tr className={styles.row}>
            <td className={styles.cell}>AC SUV</td>
            <td className={styles.cell}>Ertiga, Xylo etc.</td>
            <td className={styles.cell}>6-7 Pax</td>
            <td className={styles.cell}>Premium trips with large families</td>
            <td className={styles.cell}>Rs.13/KM</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Tariff;
