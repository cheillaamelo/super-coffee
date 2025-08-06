import Image from "next/image";
import styles from "./Product.module.scss";
import { Stars } from "@/UI/Stars";

export default function Product({
  product,
  title,
  roast,
  stars,
  reviews,
  price,
}) {
  return (
    <section className={styles.product}>
      <Image
        src={`/images/pictures/product${product}.png`}
        alt={`produto ${product}`}
        width={200}
        height={300}
      />
      <h2>{title}</h2>
      <h3>{roast}</h3>
      <Stars stars={stars} reviews={reviews} />
      <h4>{price}</h4>
    </section>
  );
}
