import styles from "./Stars.module.scss";
import Image from "next/image";

export const Stars = ({ stars, reviews }) => {
  const renderStars = Array.from({ length: stars }, (_, index) => (
    <Image
      key={index}
      src="/images/icons/star.svg"
      alt="estrela"
      width={14}
      height={14}
      className={styles.star}
    />
  ));
  return (
    <div className={styles.stars}>
      {renderStars}
      {reviews && <span>{reviews}</span>}
    </div>
  );
};
