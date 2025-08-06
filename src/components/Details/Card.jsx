import styles from "./Details.module.scss";
import { InfoBlock } from "./InfoBlock";

export const Card = () => {
  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles.card}>
        <h2>Super Coffee</h2>
        <InfoBlock
          title="Endereço"
          content="Rua Carlos Marques, 185 - Jardim São José - Elias Fausto - SP"
        />
        <InfoBlock
          title="Funcionamento"
          content={
            <>
              <span>Segunda a sexta: 09:00 às 18:00</span>
              <span>Sábados: 09:00 às 14:00</span>
            </>
          }
        />
      </div>
    </div>
  );
};
