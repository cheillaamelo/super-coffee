import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Super Coffee</h1>

        <div className={styles.line}></div>
        <p className="dark-bg">
          Se você busca um momento de tranquilidade em meio à agitação do dia a
          dia, venha conhecer a Super Coffe. Nosso espaço foi cuidadosamente
          projetado para proporcionar uma experiência única, em sintonia com a
          natureza.
        </p>
        <a href="#products" className="btn btn-primary">
          Conheça
        </a>
      </div>
      <Image
        src="/images/pictures/leaf1.png"
        width={320}
        height={460}
        alt="folha"
        className={styles.leaf1}
      />

      <Image
        src="/images/pictures/coffee.png"
        width={260}
        height={260}
        alt="sementes de café"
        className={styles.coffee}
      />
      <Image
        src="/images/pictures/leaf2.png"
        width={400}
        height={520}
        alt="folha"
        className={styles.leaf2}
      />
      <Image
        src="/images/pictures/flower.png"
        width={260}
        height={260}
        alt="flor"
        className={styles.flower}
      />
    </header>
  );
}
