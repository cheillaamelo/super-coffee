import Image from "next/image";
import styles from "./Details.module.scss";
import { Card } from "./Card";

export default function Details() {
  return (
    <section className={styles.details}>
      <div className={styles.roast}>
        <h2>Experimente os diferentes tipos de torra</h2>
        <div className={styles.types}>
          <span className={styles.light} />
          <span className={styles.medium} />
          <span className={styles.dark} />
        </div>
      </div>
      <Image
        src="/images/pictures/coffee2.png"
        alt="café"
        width={340}
        height={225}
      />
      <Card />
    </section>
  );
}
