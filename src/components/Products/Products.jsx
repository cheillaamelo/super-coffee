import styles from "./Products.module.scss";
import Product from "./Product";

export default function Products() {
  return (
    <section id="products" className={styles.products}>
      <Product
        product={1}
        title="Café Blend"
        roast="Torra Escura"
        stars="3"
        reviews="(16)"
        price="29,90"
      />
      <Product
        product={2}
        title="Café Branco"
        roast="Torra Clara"
        stars="5"
        reviews="(12)"
        price="28,50"
      />
      <Product
        product={3}
        title="Café Premium"
        roast="Torra Média"
        stars="1"
        reviews="(8)"
        price="32,90"
      />
      <Product
        product={4}
        title="Café Late"
        roast="Torra Clara"
        stars="4"
        reviews="(7)"
        price="25,00"
      />
    </section>
  );
}
